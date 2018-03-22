import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDComponent } from './address-d.component';

describe('AddressDComponent', () => {
  let component: AddressDComponent;
  let fixture: ComponentFixture<AddressDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
