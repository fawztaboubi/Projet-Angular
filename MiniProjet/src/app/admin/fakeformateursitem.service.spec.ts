import { TestBed } from '@angular/core/testing';

import { FakeformateursitemService } from './fakeformateursitem.service';

describe('FakeformateursitemService', () => {
  let service: FakeformateursitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeformateursitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
