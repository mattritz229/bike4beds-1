import {NgModule} from "@angular/core";
import {Home} from "./home.component";
import {Fall} from "./fall.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [Home, Fall],
  exports: [Home, Fall]
})
export class PagesModule{}
