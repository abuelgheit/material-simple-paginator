import { NgModule } from '@angular/core';
import { MaterialSimplePaginatorComponent } from './material-simple-paginator.component';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [MaterialSimplePaginatorComponent],
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  exports: [MaterialSimplePaginatorComponent]
})
export class MaterialSimplePaginatorModule { }
