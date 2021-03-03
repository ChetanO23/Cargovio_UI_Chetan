import { TestBed } from '@angular/core/testing';

import { CustomerAdminService } from './customer-admin.service';

describe('CustomerAdminService', () => {
  let service: CustomerAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
