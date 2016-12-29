import {NgModule} from "@angular/core";
import {Home} from "./home.component";
import {Fall} from "./fall.component";
import {CommonModule} from "@angular/common";
import {AllPages} from "./allPages.component";
import {AboutUsPage} from "./aboutUsPage.component";
import {MarkdownPages} from "./pageType-markdown.component";

@NgModule({
  imports: [CommonModule],
  declarations: [Home, Fall, AllPages, AboutUsPage, MarkdownPages],
  exports: [AllPages]
})
export class PagesModule{}
