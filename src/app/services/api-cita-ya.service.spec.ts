import { TestBed } from '@angular/core/testing';

import { ApiCitaYaService } from './api-cita-ya.service';

describe('ApiCitaYaService', () => {
  let service: ApiCitaYaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCitaYaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
