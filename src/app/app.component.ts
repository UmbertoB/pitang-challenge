import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-content">
      <app-search-form></app-search-form>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly title = 'pitang-challenge';
}
