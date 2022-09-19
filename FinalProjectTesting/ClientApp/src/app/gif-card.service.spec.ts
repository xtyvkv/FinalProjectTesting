import { TestBed } from '@angular/core/testing';

import { GifCardService } from './gif-card.service';

describe('GifCardService', () => {
  let service: GifCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
