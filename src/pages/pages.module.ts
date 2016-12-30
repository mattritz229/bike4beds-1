import {NgModule} from "@angular/core";
import {Home} from "./home.component";
import {JerseyRide} from "./jersey-ride.component";
import {CommonModule} from "@angular/common";
import {AllPages} from "./allPages.component";
import {AboutUsPage} from "./aboutUsPage.component";
import {MarkdownPages} from "./pageType-markdown.component";
import {VelodromeRide} from "./velodrome-ride.component";

@NgModule({
  imports: [CommonModule],
  declarations: [Home, JerseyRide, AllPages, AboutUsPage, MarkdownPages, VelodromeRide],
  exports: [AllPages]
})
export class PagesModule{}
