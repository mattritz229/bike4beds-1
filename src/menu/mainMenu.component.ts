import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
  selector: 'main-menu',
  template: `
    <div class="mainMenuIcons">
      <div class="equidistantContainer">
        <i *ngFor="let mainMenuItem of items" [ngClass]="mainMenuItem.icons.class" 
          (click)="changeMenu(mainMenuItem)" aria-hidden="true">{{mainMenuItem.icons.text}}</i>
      </div>
    </div>
    <div class="footer-padding"></div>
  `,
  styles: [`
    .mainMenuIcons {
      position: fixed;
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
    .footer-padding {
      width: 100%;
      height: 50px;
      background-color: #C0D9D9;
    }
  `]
})
export class MainMenu {

  @Input() items;

  @Output() changeMainMenu = new EventEmitter();

  changeMenu(mainMenuItem){
    this.changeMainMenu.emit({
      value: mainMenuItem.path
    });
  }
}
