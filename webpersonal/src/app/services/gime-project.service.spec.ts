import { TestBed } from '@angular/core/testing';

import { GimeProjectService } from './gime-project.service';

describe('GimeProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GimeProjectService = TestBed.get(GimeProjectService);
    expect(service).toBeTruthy();
  });
});
