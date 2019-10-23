import { Component } from '@angular/core';

@Component({
  selector: 'mat-simple-pa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  canClickNext = true;
  canClickPrevious = true;
  pageNumber = 2;

  pageChanged(event) {
    console.log(event);
  }
}
