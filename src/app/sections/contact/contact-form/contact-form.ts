import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, inject, isDevMode, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize, of, delay } from 'rxjs';
import { PROFILE } from '../../../core/data/profile';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

type Field = 'name' | 'email' | 'message' | 'privacy';
type Feedback = 'success' | 'error' | null;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, RouterLink, TranslatePipe],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm implements OnDestroy {
  private readonly http = inject(HttpClient);
  private feedbackTimer?: ReturnType<typeof setTimeout>;

  protected readonly profile = PROFILE;
  protected readonly inlineFields = ['name', 'email'] as const;
  protected readonly form = inject(NonNullableFormBuilder).group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, Validators.requiredTrue],
  });

  /** Error keys are only updated on blur/submit, never while typing. */
  protected readonly errors = signal<Record<Field, string | null>>({
    name: null,
    email: null,
    message: null,
    privacy: null,
  });
  protected readonly sending = signal(false);
  protected readonly feedback = signal<Feedback>(null);

  protected validate(field: Field): void {
    const control = this.form.controls[field];
    const firstError = control.errors ? Object.keys(control.errors)[0] : null;
    const key = firstError ? `contact.${field}.${this.errorName(firstError)}` : null;
    this.errors.update((errors) => ({ ...errors, [field]: key }));
  }

  protected clearError(field: Field): void {
    if (this.errors()[field]) this.errors.update((errors) => ({ ...errors, [field]: null }));
  }

  /** Clicking the disabled button reveals what is still missing. */
  protected revealErrors(): void {
    if (this.form.valid) return;
    (['name', 'email', 'message', 'privacy'] as Field[]).forEach((field) => this.validate(field));
  }

  protected submit(): void {
    if (this.form.invalid || this.sending()) return;
    this.sending.set(true);

    const request$ = isDevMode()
      ? of('dev').pipe(delay(800)) // The Angular dev server cannot execute sendMail.php.
      : this.http.post(this.profile.mailEndpoint, this.form.getRawValue(), { responseType: 'text' });

    request$.pipe(finalize(() => this.sending.set(false))).subscribe({
      next: () => {
        this.form.reset();
        this.showFeedback('success');
      },
      error: () => this.showFeedback('error'),
    });
  }

  protected closeFeedback(): void {
    clearTimeout(this.feedbackTimer);
    this.feedback.set(null);
  }

  ngOnDestroy(): void {
    clearTimeout(this.feedbackTimer);
  }

  private showFeedback(type: Exclude<Feedback, null>): void {
    this.feedback.set(type);
    clearTimeout(this.feedbackTimer);
    this.feedbackTimer = setTimeout(() => this.feedback.set(null), 6000);
  }

  private errorName(validator: string): string {
    if (validator === 'pattern') return 'invalid';
    if (validator === 'minlength') return 'minlength';
    return 'required';
  }
}
