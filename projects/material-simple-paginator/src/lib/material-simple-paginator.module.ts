import { NgModule } from '@angular/core';
import { MaterialSimplePaginatorComponent } from './material-simple-paginator.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [MaterialSimplePaginatorComponent],
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  exports: [MaterialSimplePaginatorComponent]
})
export class MaterialSimplePaginatorModule { }
