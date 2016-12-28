const PAGETYPES = {
  MARKDOWN: { },
  MENU: { },
  ELEMENTLIST: { },
  CARDS: { },
  FORM: { }
};

var createBasicMarkdownPage = function(title){
  return { title: title, type: this.PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null, isRoot: false }
};
var createMarkdownPageWithSubPages = function(title, subpages) {
  return { title: title, type: this.PAGETYPES.MARKDOWN, hasSubpages: true, subpages: subpages, isRoot: false }
};
var createFormPage = function(title) {
  return { title: title, type: this.PAGETYPES.FORM, hasSubpages: false, subpages: null, isRoot: false }
};
var createCardsPage = function(title, subpages){
  return { title: title, type: this.PAGETYPES.CARDS, hasSubpages: true, subpages: subpages, isRoot: false }
};
var createElementList = function(title, subpages){
  return { title: title, type: PAGETYPES.ELEMENTLIST, hasSubpages: true, subpages: subpages, isRoot: false }
};

export const PAGES = {
  HOMEPAGE: { title: "HOME", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null, isRoot: true },
  FALLRIDE: { title: "Fall Bike Ride", type: PAGETYPES.CARDS, hasSubpages: true, isRoot: true, subpages: {
    CAUSEINFO: createBasicMarkdownPage("Cause Info"),
    EVENTINFO: createBasicMarkdownPage("Event Info"),
    SIGNUPINFO: createMarkdownPageWithSubPages("Sign Up Info", {
      SIGNUPFORM: createFormPage("Sign Up Form")
    })
  }},
  SPRINGRIDE: {title: "Fall Bike Ride", type: PAGETYPES.CARDS, hasSubpages: true, isRoot: true, subpages: {
    CAUSEINFO: createBasicMarkdownPage("Cause Info"),
    EVENTINFO: createBasicMarkdownPage("Event Info"),
    SIGNUPINFO: createMarkdownPageWithSubPages("Sign Up Info", {
      SIGNUPFORM: createFormPage("Sign Up Form")
    })
  }},
  ABOUTUS: { title: "About Us", type: PAGETYPES.CARDS, hasSubpage: true, isRoot: true, subpages: {
    OURGOAL: createBasicMarkdownPage("Our Goal"),
    OURCHARITY: createBasicMarkdownPage("Our Charity"),
    THEBIKERIDE: createBasicMarkdownPage("The Bike Ride"),
    YOURSUPPORT: createBasicMarkdownPage("Your Support"),
    FINANCES: createBasicMarkdownPage("Finances"),
    THETEAM: createCardsPage("The Team",{
      AKOUAENOW: createBasicMarkdownPage("Akoua Enow"),
      ALARICECESAREOLONERGAN: createBasicMarkdownPage("Alarice Cesareo Lonergan"),
      JESSICARITZ: createBasicMarkdownPage("Jessica Ritz"),
      JOEKURIGER: createBasicMarkdownPage("Joe Kuriger"),
      KOMLANLONERGAN: createBasicMarkdownPage("Komlan Lonergan"),
      LEWISRITZ: createBasicMarkdownPage("Lewis Ritz"),
      BOBOCONNOR: createBasicMarkdownPage("Bob O'Connor"),
      DONLONERGAN: createBasicMarkdownPage("Don Lonergan"),
      JAYBOYLE: createBasicMarkdownPage("Jay Boyle"),
      MATTRITZ: createBasicMarkdownPage("Matt Ritz"),
    }),
    PREVIOUSYEARS: createElementList("Previous Years", {
      SPRING2008: createBasicMarkdownPage("Spring 2008"),
      FALL2008: createBasicMarkdownPage("Fall 2008"),
      SPRING2009: createBasicMarkdownPage("Spring 2009"),
      FALL2009: createBasicMarkdownPage("Fall 2009"),
      SPRING2010: createBasicMarkdownPage("Spring 2010"),
      FALL2010: createBasicMarkdownPage("Fall 2010"),
      SPRING2011: createBasicMarkdownPage("Spring 2011"),
      FALL2011: createBasicMarkdownPage("Fall 2011"),
      SPRING2012: createBasicMarkdownPage("Spring 2012"),
      FALL2012: createBasicMarkdownPage("Fall 2012"),
      SPRING2013: createBasicMarkdownPage("Spring 2013"),
      FALL2013: createBasicMarkdownPage("Fall 2013"),
      SPRING2014: createBasicMarkdownPage("Spring 2014"),
      FALL2014: createBasicMarkdownPage("Fall 2014"),
      SPRING2015: createBasicMarkdownPage("Spring 2015"),
      FALL2015: createBasicMarkdownPage("Fall 2015"),
      SPRING2016: createBasicMarkdownPage("Spring 2016"),
      FALL2016: createBasicMarkdownPage("Fall 2016")
    }),
    CONTACTUS: createFormPage("Contact Us")
  }}
};
