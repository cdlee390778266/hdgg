import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdComponent } from './orderd.component';

describe('OrderdComponent', () => {
  let component: OrderdComponent;
  let fixture: ComponentFixture<OrderdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
