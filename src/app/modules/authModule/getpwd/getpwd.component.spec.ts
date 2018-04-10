import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpwdComponent } from './getpwd.component';

describe('GetpwdComponent', () => {
  let component: GetpwdComponent;
  let fixture: ComponentFixture<GetpwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetpwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
