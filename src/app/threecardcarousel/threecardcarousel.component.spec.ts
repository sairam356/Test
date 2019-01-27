import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreecardcarouselComponent } from './threecardcarousel.component';

describe('ThreecardcarouselComponent', () => {
  let component: ThreecardcarouselComponent;
  let fixture: ComponentFixture<ThreecardcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreecardcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreecardcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
