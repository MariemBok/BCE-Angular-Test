import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesWatchComponent } from './series-watch.component';

describe('SeriesWatchComponent', () => {
  let component: SeriesWatchComponent;
  let fixture: ComponentFixture<SeriesWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
