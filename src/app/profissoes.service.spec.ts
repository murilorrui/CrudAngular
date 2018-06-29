import { TestBed, inject } from '@angular/core/testing';

import { ProfissoesService } from './profissoes.service';

describe('ProfissoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfissoesService]
    });
  });

  it('should be created', inject([ProfissoesService], (service: ProfissoesService) => {
    expect(service).toBeTruthy();
  }));
});
