import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
  selector: 'about-us-page',
  template: `
      <div *ngFor="let key of arrayOfKeys" class="list-item" (click)="handleClick(aboutUsData[key])">
        <div class="header">
          <i class="fa fa-3x"[ngClass]="aboutUsData[key].iconStyles" aria-hidden="true"></i>
          <h2>{{aboutUsData[key].title}}</h2>
          <h4>{{aboutUsData[key].sentence}}</h4>
        </div>
      </div>
  `,
  styles: [`
    .list-item {
      width: 100%;
      min-height: 100px;
      /*border: 1px solid red;*/
      padding: 5px 13px;
    }
    .list-item i, h2 {
      display: inline-block;
      line-height: 30px;
      vertical-align: middle;
    }
    .list-item i {
      width: 70px;
    }
    .list-item h2 {
      margin: 0px;
      margin-left: 0px;
      line-height: 30px;
      vertical-align: middle;
    }
    .list-item .header {
      margin-top: 20px;
    }
    .list-item h4 {
      margin-left: 80px;
    }
  `]
})
export class AboutUsPage {

  @Input() pageData;
  @Output() enterPage = new EventEmitter();

  // @Output() changeMainMenu = new EventEmitter();
  //
  // changeMenu(mainMenuItem){
  //   this.changeMainMenu.emit({
  //     value: mainMenuItem.path
  //   });
  // }

  public arrayOfKeys = [];
  public aboutUsData = {};

  ngOnChanges(changes: any) {
    if(changes.hasOwnProperty('pageData')){
      this.aboutUsData = changes.pageData.currentValue.subpages;
      this.arrayOfKeys = Object.keys(this.aboutUsData);
    }
  };

  handleClick(object){
    console.log("something Clicked", object);
    console.log("last element", object.path[object.path.length - 1])
    var newPageString = object.path[object.path.length - 1];
    this.enterPage.emit({
      value: newPageString
    });
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

  // public arrayOfKeys;
  //
  // constructor(){
  //   this.arrayOfKeys = Object.keys(this.aboutUsData);
  // }
}
