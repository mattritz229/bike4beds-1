import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
  selector: "header-nav",
  template: `
    <div class="header-buffer"></div>
    <div class="header-main">
        <div class="backIcon" ngShow="showBackIcon" (click)="returnPageNav()">
          <i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
        </div>
        <div class="extra-page-options">
          <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
        </div>
        <div class="pageTitle">
            <div class="eqidistant-container">
              <h1>{{title}}</h1>
            </div>
        </div>
    </div>
  `,
  styles: [`
    .header-buffer {
      height: 40px;
      width: 100%;
    }
    .header-main {
      background-color: #efefef;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 50px;
      padding: 5px 24px;
      display: block;
    }
    .pageTitle {
      width: auto;
      height: 40px;
      overflow: hidden;
    }
    .pageTitle h1 {
      font-size: 2em;
      display: inline-block;
      width: 100%;
      text-align: center;
      line-height: 40px;
      margin: 0px;
    }
    .backIcon {
      float: left;
      display: block;
      height: 40px;
      width: 40px;
    }
    i {
      line-height: 40px;
      width: 40px;
      text-align: center;
    }
    i:hover {
      color: red;
    }
    .eqidistant-container {
      width: 50%;
      height: 40px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .extra-page-options {
      float: right;
      display: block;
      height: 40px;
      width: 40px;
      padding-right: 24px;
    }
  `]
})
export class HeaderNav {

  @Input() title;

  @Output() navReturn = new EventEmitter();

  returnPageNav(){
    this.navReturn.emit();
  }

  showBackIcon = true;
  pageTitle = "The Page Title";
}
