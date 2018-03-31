import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApplyComponent } from './my-apply.component';

describe('MyApplyComponent', () => {
  let component: MyApplyComponent;
  let fixture: ComponentFixture<MyApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
