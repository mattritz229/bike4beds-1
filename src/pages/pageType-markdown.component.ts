import {Component, Input} from "@angular/core";
@Component({
  selector: 'markdown-pages',
  templateUrl: './pageType-markdown.templates.html',
  styles: [`
    .main-content-wrapper {
      padding: 5px 20px;
    }
  `]
})
export class MarkdownPages {
  @Input() pagePath;

}
