import {NgModule} from "@angular/core";
import {Menu} from "./menu.component";
import {CommonModule} from "@angular/common";
import {PagesModule} from "../pages/pages.module";

@NgModule({
  imports: [CommonModule, PagesModule],
  declarations: [Menu],
  exports: [Menu]
})
export class MenuModule{}
