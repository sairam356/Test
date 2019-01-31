import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactadsComponent } from './contactads.component';

describe('ContactadsComponent', () => {
  let component: ContactadsComponent;
  let fixture: ComponentFixture<ContactadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
