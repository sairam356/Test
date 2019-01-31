import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollspycontentComponent } from './scrollspycontent.component';

describe('ScrollspycontentComponent', () => {
  let component: ScrollspycontentComponent;
  let fixture: ComponentFixture<ScrollspycontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollspycontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollspycontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
