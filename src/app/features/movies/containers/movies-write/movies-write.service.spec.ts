import { TestBed } from '@angular/core/testing';

import { MoviesWriteService } from './movies-write.service';

describe('MoviesWriteService', () => {
  let service: MoviesWriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesWriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
