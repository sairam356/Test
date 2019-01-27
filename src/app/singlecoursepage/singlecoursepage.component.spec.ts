import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecoursepageComponent } from './singlecoursepage.component';

describe('SinglecoursepageComponent', () => {
  let component: SinglecoursepageComponent;
  let fixture: ComponentFixture<SinglecoursepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglecoursepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglecoursepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
