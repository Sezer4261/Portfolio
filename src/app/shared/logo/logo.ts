import { Component } from '@angular/core';
import { PROFILE } from '../../core/data/profile';

/** Figma "Logo": orange mark + last name, text color follows `color`. */
@Component({
  selector: 'app-logo',
  template: `
    <img src="assets/icons/logo-mark.svg" alt="" width="22" height="30" />
    <span>{{ lastName }}</span>
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 28px;
      font-weight: 700;
      line-height: 1;
      transition: color var(--transition);

      @media (max-width: 767px) {
        font-size: 24px;
      }
    }
  `,
})
export class Logo {
  protected readonly lastName = PROFILE.lastName;
}
