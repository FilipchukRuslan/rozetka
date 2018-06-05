import { TestBed, inject } from '@angular/core/testing';

import { CustomerOrdersCostsfromServerService } from './customer-orders-costsfrom-server.service';

describe('CustomerOrdersCostsfromServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerOrdersCostsfromServerService]
    });
  });

  it('should be created', inject([CustomerOrdersCostsfromServerService], (service: CustomerOrdersCostsfromServerService) => {
    expect(service).toBeTruthy();
  }));
});
