import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  template: `
    <main>
      <p class="eyebrow">Client-side deep-link test</p>
      <h1>Widget 1</h1>
      <p>
        This Angular Router route proves that navigation and direct requests to
        a nested SPA path use the declared fallback.
      </p>
      <nav>
        <a class="button" routerLink="/">Return home</a>
      </nav>
    </main>
  `,
})
export class Product {}
