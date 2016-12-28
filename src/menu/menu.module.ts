import {NgModule} from "@angular/core";
import {MainMenu} from "./menu.component";
import {CommonModule} from "@angular/common";
import {PagesModule} from "../pages/pages.module";

const PAGETYPES = {
  MARKDOWN: { },
  MENU: { },
  ELEMENTLIST: { },
  CARDS: { },
  FORM: { }
}
const PAGES = {
  HOMEPAGE: { title: "HOME", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
  FALLRIDE: { title: "Fall Bike Ride", type: PAGETYPES.CARDS, hasSubpages: true, subpages: {
    CAUSEINFO: { title: "Cause Info", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
    EVENTINFO: { title: "Event Info", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
    SIGNUPINFO: { title: "Sign Up Info", type: PAGETYPES.MARKDOWN, hasSubpages: true, subpages: {
      SIGNUPFORM: { title: "Sign Up Form", type: PAGETYPES.FORM, hasSubpages: false, subpages: null }
    }}
  }},
  SPRINGRIDE: {title: "Fall Bike Ride", type: PAGETYPES.CARDS, hasSubpages: true, subpages: {
    CAUSEINFO: {title: "Cause Info", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null},
    EVENTINFO: {title: "Event Info", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null},
    SIGNUPINFO: {
      title: "Sign Up Info", type: PAGETYPES.MARKDOWN, hasSubpages: true, subpages: {
        SIGNUPFORM: {title: "Sign Up Form", type: PAGETYPES.FORM, hasSubpages: false, subpages: null}
      }
    }
  }},
  ABOUTUS: { title: "About Us", type: PAGETYPES.CARDS, hasSubpage: true, subpages: {
    OURGOAL: { title: "Our Goal", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
    OURCHARITY: { title: "Our Charity", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
    THEBIKERIDE: { title: "The Bike Ride", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
    YOURSUPPORT: { title: "Your Support", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
    FINANCES: { title: "Finances", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
    THETEAM: { title: "The Team", type: PAGETYPES.CARDS, hasSubpages: true, subpages: {
      AKOUAENOW: { title: "Akoua Enow", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      ALARICECESAREOLONERGAN: { title: "Alarice Cesareo Lonergan", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      JESSICARITZ: { title: "Jessica Ritz", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      JOEKURIGER: { title: "Joe Kuriger", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      KOMLANLONERGAN: { title: "Komlan Lonergan", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      LEWISRITZ: { title: "Lewis Ritz", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      BOBOCONNOR: { title: "Bob O'Connor", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      DONLONERGAN: { title: "Don Lonergan", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      JAYBOYLE: { title: "Jay Boyle", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      MATTRITZ: { title: "Matt Ritz", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
    }},
    PREVIOUSYEARS: { title: "Previous Years", type: PAGETYPES.ELEMENTLIST, hasSubpages: true, subpages: {
      SPRING2008: { title: "Spring 2008", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      FALL2008: { title: "Fall 2008", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      SPRING2009: { title: "Spring 2009", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      FALL2009: { title: "Fall 2009", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      SPRING2010: { title: "Spring 2010", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      FALL2010: { title: "Fall 2010", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      SPRING2011: { title: "Spring 2011", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      FALL2011: { title: "Fall 2011", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      SPRING2012: { title: "Spring 2012", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      FALL2012: { title: "Fall 2012", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      SPRING2013: { title: "Spring 2013", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      FALL2013: { title: "Fall 2013", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      SPRING2014: { title: "Spring 2014", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      FALL2014: { title: "Fall 2014", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      SPRING2015: { title: "Spring 2015", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      FALL2015: { title: "Fall 2015", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      SPRING2016: { title: "Spring 2016", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null },
      FALL2016: { title: "Fall 2016", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null }
    }},
    CONTACTUS: { title: "Contact Us", type: PAGETYPES.FORM, hasSubpages: false, subpages: null }
  }}
}
const MAINMENU = {
  HOME: { id: 1, page: PAGES.HOMEPAGE , icon: { iconClass: "fa fa-home fa-2x", iconText: ""}},
  FALLRIDE: {},
  SPRINGRIDE: {},
  ABOUTUS: {}
}


@NgModule({
  imports: [CommonModule, PagesModule],
  declarations: [MainMenu],
  exports: [MainMenu]
})
export class MenuModule{}
