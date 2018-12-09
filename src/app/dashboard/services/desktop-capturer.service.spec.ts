import { TestBed } from '@angular/core/testing';

import { DesktopCapturerService } from './desktop-capturer.service';

describe('DesktopCapturerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesktopCapturerService = TestBed.get(DesktopCapturerService);
    expect(service).toBeTruthy();
  });
});
