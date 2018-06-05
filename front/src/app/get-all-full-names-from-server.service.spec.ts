import { TestBed, inject } from '@angular/core/testing';

import { GetAllFullNamesFromServerService } from './get-all-full-names-from-server.service';

describe('GetAllFullNamesFromServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllFullNamesFromServerService]
    });
  });

  it('should be created', inject([GetAllFullNamesFromServerService], (service: GetAllFullNamesFromServerService) => {
    expect(service).toBeTruthy();
  }));
});
