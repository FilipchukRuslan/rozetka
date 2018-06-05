import { TestBed, inject } from '@angular/core/testing';

import { GetCustomerInfoByIdFromServerService } from './get-customer-info-by-id-from-server.service';

describe('GetCustomerInfoByIdFromServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCustomerInfoByIdFromServerService]
    });
  });

  it('should be created', inject([GetCustomerInfoByIdFromServerService], (service: GetCustomerInfoByIdFromServerService) => {
    expect(service).toBeTruthy();
  }));
});
