import { TestBed, inject } from '@angular/core/testing';

import { SocioService } from './socio.service';

describe('SocioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocioService]
    });
  });

  it('should be created', inject([SocioService], (service: SocioService) => {
    expect(service).toBeTruthy();
  }));
});
