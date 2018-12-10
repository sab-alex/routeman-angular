import { TestBed, inject } from '@angular/core/testing';

import { CommentsHttpService } from './comments-http.service';

describe('CommentsHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsHttpService]
    });
  });

  it('should be created', inject([CommentsHttpService], (service: CommentsHttpService) => {
    expect(service).toBeTruthy();
  }));
});
