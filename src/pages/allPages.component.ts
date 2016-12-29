import {Component, Input, SimpleChanges, Output, EventEmitter} from "@angular/core";
@Component({
  selector: "all-pages",
  template: `
    <home *ngIf="currentPagePathString === 'HOMEPAGE'"></home>
    <fall *ngIf="currentPagePathString === 'FALLRIDE'"></fall>
    <about-us-page *ngIf="currentPagePathString === 'ABOUTUS'" 
      [pageData]="pageData.ABOUTUS" 
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
