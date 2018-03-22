import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeDComponent } from './upgrade-d.component';

describe('UpgradeDComponent', () => {
  let component: UpgradeDComponent;
  let fixture: ComponentFixture<UpgradeDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
