import { Component } from '@angular/core';
import { PAGES } from "../menu/navigationImplementation.mock"

@Component({
  selector: 'app-root',
  template: `
    <main-menu></main-menu>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  thing = PAGES;
}
