import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaSourcesListComponent } from './media-sources-list.component';

describe('MediaSourcesListComponent', () => {
  let component: MediaSourcesListComponent;
  let fixture: ComponentFixture<MediaSourcesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaSourcesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaSourcesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
