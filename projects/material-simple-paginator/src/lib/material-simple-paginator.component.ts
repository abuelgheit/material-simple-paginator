import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'mat-simple-paginator',
  templateUrl: 'material-simple-paginator.component.html',
  styleUrls: ['material-simple-paginator.component.scss']
})
export class MaterialSimplePaginatorComponent implements OnInit, OnChanges {

  @Input() canClickNext = true;
  @Input() canClickPrivious = true;
  @Input() pageIndex;
  @Output() page = new EventEmitter<{page: number}>();

  currentPageNumber;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.currentPageNumber = this.pageIndex ? (this.pageIndex  + 1) : 1;
  }

  next() {
    this.currentPageNumber++;
    this.change(this.currentPageNumber);
  }

  previous() {
    this.currentPageNumber--;
    this.change(this.currentPageNumber);
  }

  change(page: number) {
    this.page.emit({page});
  }

}
