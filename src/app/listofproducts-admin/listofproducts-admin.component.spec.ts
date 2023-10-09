import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofproductsAdminComponent } from './listofproducts-admin.component';

describe('ListofproductsAdminComponent', () => {
  let component: ListofproductsAdminComponent;
  let fixture: ComponentFixture<ListofproductsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListofproductsAdminComponent]
    });
    fixture = TestBed.createComponent(ListofproductsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
