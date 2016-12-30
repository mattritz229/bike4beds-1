import {Component, Input, SimpleChanges, Output, EventEmitter} from "@angular/core";
@Component({
  selector: "all-pages",
  template: `
    <home *ngIf="currentPagePathString === 'HOMEPAGE'"></home>
    <jersey-ride *ngIf="currentPagePathString === 'FALLRIDE'"
      (enterNewLevel)="goDeeper.emit({value: $event.value})"></jersey-ride>
    <velodrome-ride *ngIf="currentPagePathString === 'SPRINGRIDE'"></velodrome-ride>
    <about-us-page *ngIf="currentPagePathString === 'ABOUTUS'" 
      [pageData]="pageData.ABOUTUS" 
      (enterPage)="goDeeper.emit({value: $event.value})">
    </about-us-page>
    <about-us-page *ngIf="currentPagePathString === 'ABOUTUS,THETEAM'" 
      [pageData]="pageData.ABOUTUS.subpages.THETEAM" 
      (enterPage)="goDeeper.emit({value: $event.value})">
    </about-us-page>
    <about-us-page *ngIf="currentPagePathString === 'ABOUTUS,PREVIOUSYEARS'" 
      [pageData]="pageData.ABOUTUS.subpages.PREVIOUSYEARS" 
      (enterPage)="goDeeper.emit({value: $event.value})">
    </about-us-page>
    <markdown-pages [pagePath]="currentPagePathString"></markdown-pages>
  `,
  styles: [`

  `]
})
export class AllPages{

  @Input() currentPage;
  @Input() pageData;
  @Output() goDeeper = new EventEmitter();

  currentPagePathString;

  ngOnChanges(changes: any) {
    if(changes.hasOwnProperty('currentPage')){
      this.currentPagePathString = changes.currentPage.currentValue.path.join(',');
    }
  }
}
