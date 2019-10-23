import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSimplePaginatorComponent } from './material-simple-paginator.component';

describe('MaterialSimplePaginatorComponent', () => {
  let component: MaterialSimplePaginatorComponent;
  let fixture: ComponentFixture<MaterialSimplePaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialSimplePaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSimplePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
