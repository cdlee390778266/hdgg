import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAddComponent } from './ad-add.component';

describe('AdAddComponent', () => {
  let component: AdAddComponent;
  let fixture: ComponentFixture<AdAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
