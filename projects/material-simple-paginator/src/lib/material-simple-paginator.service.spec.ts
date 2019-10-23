import { TestBed } from '@angular/core/testing';

import { MaterialSimplePaginatorService } from './material-simple-paginator.service';

describe('MaterialSimplePaginatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialSimplePaginatorService = TestBed.get(MaterialSimplePaginatorService);
    expect(service).toBeTruthy();
  });
});
