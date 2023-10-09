import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofcustomerComponent } from './listofcustomer.component';

describe('ListofcustomerComponent', () => {
  let component: ListofcustomerComponent;
  let fixture: ComponentFixture<ListofcustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListofcustomerComponent]
    });
    fixture = TestBed.createComponent(ListofcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
