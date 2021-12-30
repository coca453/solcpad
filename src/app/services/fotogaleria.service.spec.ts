import { TestBed, inject } from '@angular/core/testing';

import { FotogaleriaService } from './fotogaleria.service';

describe('FotogaleriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FotogaleriaService]
    });
  });

  it('should be created', inject([FotogaleriaService], (service: FotogaleriaService) => {
    expect(service).toBeTruthy();
  }));
});
