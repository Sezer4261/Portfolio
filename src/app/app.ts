import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cursor } from './layout/cursor/cursor';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Cursor],
  template: `
    <app-header />
    <router-outlet />
    <app-footer />
    <app-cursor />
  `,
})
export class App {}
