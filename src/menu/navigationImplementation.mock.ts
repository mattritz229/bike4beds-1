const PAGETYPES = {
  MARKDOWN: { },
  MENU: { },
  ELEMENTLIST: { },
  CARDS: { },
  FORM: { },
  ROOT: { }
};



var createBasicMarkdownPage = function(title){
  return { title: title, type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null, isRoot: false }
};
var createMarkdownPageWithSubPages = function(title, subpages) {
  return { title: title, type: PAGETYPES.MARKDOWN, hasSubpages: true, subpages: subpages, isRoot: false }
};
var createFormPage = function(title) {
  return { title: title, type: PAGETYPES.FORM, hasSubpages: false, subpages: null, isRoot: false }
};
var createCardsPage = function(title, subpages){
  return { title: title, type: PAGETYPES.CARDS, hasSubpages: true, subpages: subpages, isRoot: false }
};
var createElementList = function(title, subpages){
  return { title: title, type: PAGETYPES.ELEMENTLIST, hasSubpages: true, subpages: subpages, isRoot: false }
};
var createRootIcon = function(style, text){
  return { class: "fa "+style, text: text,  }
};

var addPathReferencesToChildren = function(pages:any, pathArray: string[]){
  for(var page in pages){
    pathArray.push(page);
    pages[page].path = pathArray.slice();
    if (pages[page].hasSubpages){
      addPathReferencesToChildren(pages[page].subpages, pathArray)
    }
    pathArray.pop();
  }
}

var addPathReferences = function(pages) {
  for (var page in pages){
    var pathArray = [page];
    pages[page].path = pathArray.slice();
    if(pages[page].hasSubpages){
      addPathReferencesToChildren(pages[page].subpages, pathArray);
    }
  }
  return pages;
}

var buildPages = function(){
  var returnPages = {
    HOMEPAGE: getHomePages(),
    FALLRIDE: getFallRidePages(),
    SPRINGRIDE: getSpringRidePages(),
    ABOUTUS: getAboutUsPages()
  };
  returnPages = addPathReferences(returnPages);
  returnPages = addPageData(returnPages);
  return returnPages;
}


var getHomePages = function(){
  return { title: "Bike 4 Beds", type: PAGETYPES.MARKDOWN, hasSubpages: false, subpages: null, isRoot: true,
    icons: createRootIcon("fa-home fa-2x", "") };
};
var getFallRidePages = function(){
  return { title: "Fall Bike Ride", type: PAGETYPES.CARDS, hasSubpages: true, isRoot: true,
    icons: createRootIcon("fa-bicycle fa-2x", " Fall"), subpages: {
      BIKEFORM: createFormPage("Bike Form"),
      VOLUNTEERFORM: createFormPage("Volunteer Form"),
      SPONSORFORM: createFormPage("Sponsor Form"),
      DONATEFORM: createFormPage("Donate From")
    }};
};
var getSpringRidePages = function(){
  return {title: "Spring Bike Ride", type: PAGETYPES.CARDS, hasSubpages: true, isRoot: true,
    icons: createRootIcon("fa-bicycle fa-2x", " Spring"), subpages: {
      CAUSEINFO: createBasicMarkdownPage("Cause Info"),
      EVENTINFO: createBasicMarkdownPage("Event Info"),
      SIGNUPINFO: createMarkdownPageWithSubPages("Sign Up Info", {
        SIGNUPFORM: createFormPage("Sign Up Form")
      })
    }};
};
var getAboutUsPages = function(){
  return { title: "About Us", type: PAGETYPES.CARDS, hasSubpages: true, isRoot: true,
    icons: createRootIcon("fa-users fa-2x", ""), subpages: {
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
    }};
};

var addPageData = function(pages){
  console.log("adding page data",pages);
  pages = addAboutUsPageData(pages);
  pages = addAboutUsTheTeamPageData(pages);
  console.log("done editing", pages);
  return pages;
};
var addAboutUsPageData = function(pages){
  console.log("adding about us page data", pages);
  pages.ABOUTUS.subpages.OURGOAL.iconStyles = 'fa-bullseye';
  pages.ABOUTUS.subpages.OURGOAL.sentence = "Each year we donate 100% of the money we raise to that year's cause.";
  pages.ABOUTUS.subpages.OURCHARITY.iconStyles = 'fa-heart';
  pages.ABOUTUS.subpages.OURCHARITY.sentence = "This year we are riding to support the academic and health services of the Cavaillon Orphanage and all the All of God's Children Orphanage in Haiti.";
  pages.ABOUTUS.subpages.THEBIKERIDE.iconStyles = 'fa-bicycle';
  pages.ABOUTUS.subpages.THEBIKERIDE.sentence = "We host a Fall and Spring bike event every year to raise funds for the current year's cause.";
  pages.ABOUTUS.subpages.YOURSUPPORT.iconStyles = 'fa-handshake-o';
  pages.ABOUTUS.subpages.YOURSUPPORT.sentence = "Bike, Sponsor, Donate, or Volunteer to make a difference.";
  pages.ABOUTUS.subpages.FINANCES.iconStyles = 'fa-bar-chart';
  pages.ABOUTUS.subpages.FINANCES.sentence = "The past 7 years we have raised over $26,000 for our beneficiaries.";
  pages.ABOUTUS.subpages.THETEAM.iconStyles = 'fa-user';
  pages.ABOUTUS.subpages.THETEAM.sentence = "Bike4Beds is run by 6 officers, 3 board memebers, and the founder; Matt Ritz.";
  pages.ABOUTUS.subpages.PREVIOUSYEARS.iconStyles = 'fa-calendar';
  pages.ABOUTUS.subpages.PREVIOUSYEARS.sentence = "We have been biking since 2008.  Read the stories and view photo galleries of the previous events.";
  pages.ABOUTUS.subpages.CONTACTUS.iconStyles = 'fa-id-card';
  pages.ABOUTUS.subpages.CONTACTUS.sentence = "";
  return pages
};
var addAboutUsTheTeamPageData = function(pages){
  pages.ABOUTUS.subpages.THETEAM.subpages.AKOUAENOW.sentence = "Chief Operating Officer";
  pages.ABOUTUS.subpages.THETEAM.subpages.ALARICECESAREOLONERGAN.sentence = "Chief Marketing Officer";
  pages.ABOUTUS.subpages.THETEAM.subpages.JESSICARITZ.sentence = "Chief Content Officer";
  pages.ABOUTUS.subpages.THETEAM.subpages.JOEKURIGER.sentence = "Volunteer";
  pages.ABOUTUS.subpages.THETEAM.subpages.KOMLANLONERGAN.sentence = "Chief Program Officer";
  pages.ABOUTUS.subpages.THETEAM.subpages.LEWISRITZ.sentence = "Chief Technical Officer";
  pages.ABOUTUS.subpages.THETEAM.subpages.BOBOCONNOR.sentence = "Board Member";
  pages.ABOUTUS.subpages.THETEAM.subpages.DONLONERGAN.sentence = "Board Member";
  pages.ABOUTUS.subpages.THETEAM.subpages.JAYBOYLE.sentence = "Board Member";
  pages.ABOUTUS.subpages.THETEAM.subpages.MATTRITZ.sentence = "Chief Executive Officer & Board Chairman";

  return pages;
};

// aboutUsData = {
//   OurGoal: { title: 'Our Goal', iconStyles: 'fa-bullseye', sentence: "Each year we donate 100% of the money we raise to that year's cause." },
//   OurCharity: { title: 'Our Charity', iconStyles: 'fa-heart', sentence: "This year we are riding to support the academic and health services of the Cavaillon Orphanage and all the All of God's Children Orphanage in Haiti." },
//   TheBikeRide: { title: 'The Bike Rides', iconStyles: 'fa-bicycle', sentence: "We host a Fall and Spring bike event every year to raise funds for the current year's cause." },
//   YourSupport: { title: 'Your Support', iconStyles: 'fa-handshake-o', sentence: "Bike, Sponsor, Donate, or Volunteer to make a difference." },
//   Finances: { title: 'Finances', iconStyles: 'fa-bar-chart', sentence: "The past 7 years we have raised over $26,000 for our beneficiaries." },
//   TheTeam: { title: 'The Team', iconStyles: 'fa-user', sentence: "Bike4Beds is run by 6 officers, 3 board memebers, and the founder; Matt Ritz" },
//   PreviousYears: { title: 'Previous Years', iconStyles: 'fa-calendar', sentence: "We have been biking since 2008.  Read the stories and view photo galleries of the previous events." },
//   ContactUs: { title: 'Contact Us ', iconStyles: 'fa-id-card' }
// }

export const PAGES = buildPages();

