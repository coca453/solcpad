import { TestBed, inject } from '@angular/core/testing';

import { VideoPrivateService } from './videoprivate.service';

describe('VideoPrivateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoPrivateService]
    });
  });

  it('should be created', inject([VideoPrivateService], (service: VideoPrivateService) => {
    expect(service).toBeTruthy();
  }));
});
