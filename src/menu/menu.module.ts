import {NgModule} from "@angular/core";
import {MainMenu} from "./mainMenu.component";
import {CommonModule} from "@angular/common";
import {PagesModule} from "../pages/pages.module";
import {HeaderNav} from "./headerNav.component";

@NgModule({
  imports: [CommonModule, PagesModule],
  declarations: [MainMenu, HeaderNav],
  exports: [MainMenu, HeaderNav]
})
export class MenuModule{}
