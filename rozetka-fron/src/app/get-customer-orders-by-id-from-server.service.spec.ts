import { TestBed, inject } from '@angular/core/testing';

import { GetCustomerOrdersByIdFromServerService } from './get-customer-orders-by-id-from-server.service';

describe('GetCustomerOrdersByIdFromServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCustomerOrdersByIdFromServerService]
    });
  });

  it('should be created', inject([GetCustomerOrdersByIdFromServerService], (service: GetCustomerOrdersByIdFromServerService) => {
    expect(service).toBeTruthy();
  }));
});
