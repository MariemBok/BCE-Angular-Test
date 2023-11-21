import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesSearchComponent } from './series-search.component';

describe('SeriesSearchComponent', () => {
  let component: SeriesSearchComponent;
  let fixture: ComponentFixture<SeriesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
