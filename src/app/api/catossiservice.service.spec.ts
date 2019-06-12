import { TestBed } from '@angular/core/testing';

import { CatossiserviceService } from './catossiservice.service';

describe('CatossiserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatossiserviceService = TestBed.get(CatossiserviceService);
    expect(service).toBeTruthy();
  });
});
