import {Component} from "@angular/core";
@Component({
  selector: 'main-menu',
  template: `
    <home *ngIf="currentPage === 'Home'"></home>
    <fall *ngIf="currentPage === 'Fall Bike Event'"></fall>
    <div class="mainMenuIcons">
      <div class="equidistantContainer">
        <i *ngFor="let mainMenuItem of mainMenuItems" [ngClass]="mainMenuItem.class" 
          (click)="check(mainMenuItem.title)" aria-hidden="true">{{mainMenuItem.text}}</i>
      </div>
    </div>
  `,
  styles: [`
    .mainMenuItem {
      height: 60px;
      width: 60px;
      background-color: lightgrey;
    }
    .mainMenuIcons {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 1rem;
      background-color: #efefef;
      text-alighn: center;
    }
    .mainMenuIcons .equidistantContainer {
      display: flex;
      justify-content: space-between;
      margin-left: 170px;
      margin-right: 170px;
    }
    .mainMenuIcons i:hover {
      color: red;
    }
  `]
})
export class MainMenu {

  currentPage = 'Home';

  mainMenuItems = [
    { id: 1, title: "Home", class: 'fa fa-home fa-2x', text: ""},
    { id: 2, title: "Spring Bike Event", class: 'fa fa-bicycle fa-2x', text: " Spring"},
    { id: 3, title: "Fall Bike Event", class: 'fa fa-bicycle fa-2x', text: " Fall"},
    { id: 4, title: "About Us", class: 'fa fa-users fa-2x', text: ""},
  ]

  menuItems = [
    { id: 1, title: 'first' }
  ];

  onlyShowMenuButton = true;
  showSubMenu = false;

  handleMenuClick(){
    this.showSubMenu = true;
    console.log("menu clicked");
  }

  handleMenuItemClick(){
    console.log("handle button action")
  }

  check(title){
    this.currentPage = title;
    console.log("it works ",title);
  }
}
