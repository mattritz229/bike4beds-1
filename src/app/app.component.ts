import { Component } from '@angular/core';
import { PAGES } from "../menu/navigationImplementation.mock"

@Component({
  selector: 'app-root',
  template: `
    <header-nav [title]="currentPage.title" (navReturn)="changeCurrentLocation_goUp()"></header-nav>
    <all-pages [currentPage]="currentPage" [pageData]="pageData" 
      (goDeeper)="changeCurrentLocation_goDeeper($event.value)"></all-pages>
    <main-menu [items]="mainMenuItems" (changeMainMenu)="eventEmitedFromMainMenu($event)"></main-menu>
  `,
  styleUrls: ['./app.component.css']
})

//(enterPage)="goDeeper.emit({value: $event.value})"

// var getMainPages = function(navStructure){
//   var returnList = [];
//   console.log("here");
//   for (var i in navStructure){
//     if (navStructure[i].isRoot) {
//       returnList.push(navStructure[i]);
//     }
//   }
//   return returnList;
// }
export class AppComponent {
  title = 'app works!';

  pageData = PAGES;

  getMainPages(navStructure){
    var returnList = [];
      for (var i in navStructure) {
        if (navStructure[i].isRoot) {
          returnList.push(navStructure[i]);
        }
      }
      return returnList;
  }
  changeCurrentLocation_goDeeper(newLocationString){
    console.log("going deeper in the main", newLocationString);
    if(this.currentPage.hasSubpages) {
      var objToSearch = this.currentPage.subpages;
      if (objToSearch.hasOwnProperty(newLocationString)) {
        this.currentPage = objToSearch[newLocationString];
      }
    }
  }
  changeCurrentLocation_goUp(){
    if(!this.currentPage.isRoot) {

      var currentPath = this.currentPage.path.slice();

      currentPath.pop(); // go up one level
      this.currentPage = PAGES; // prepare to traverse

      for (var i = 0; i < currentPath.length; i++) {
        if (i === 0) { // the first page doesn't have a "subpage"
          this.currentPage = PAGES[currentPath[i]];
          continue;
        }
        this.currentPage = this.currentPage.subpages[currentPath[i]];
      }
    }
  }
  logState(message){
    console.log(message);
    console.log(this.currentPage);
  }

  eventEmitedFromMainMenu(event){
    this.changeCurrentLocation_switchMain(event.value[0])
  };

  changeCurrentLocation_switchMain(newLocationString){
    if(PAGES.hasOwnProperty(newLocationString)){
      this.currentPage = PAGES[newLocationString];
    }
  }
  mainMenuItems = this.getMainPages(PAGES);
  currentPage:any = PAGES.ABOUTUS;

  // ngAfterViewInit(){
  //   this.logState("start");
  //   this.changeCurrentLocation_goUp();
  //   this.logState("went up");
  //   this.changeCurrentLocation_goUp();
  //   this.logState("went up false");
  //   this.changeCurrentLocation_goDeeper("THETEAM");
  //   this.logState("went deeper");
  //   this.changeCurrentLocation_goDeeper("LEWISRITZ");
  //   this.logState("went deeper again");
  //   this.changeCurrentLocation_goDeeper("LEWISRITZ");
  //   this.logState("we t deeper FALSE");
  //   this.changeCurrentLocation_switchMain("THETEAMasdf");
  //   this.logState("went switch false");
  //   this.changeCurrentLocation_switchMain("HOMEPAGE");
  //   this.logState("went switch true");
  // }

}

