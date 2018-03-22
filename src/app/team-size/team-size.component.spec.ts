import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSizeComponent } from './team-size.component';

describe('TeamSizeComponent', () => {
  let component: TeamSizeComponent;
  let fixture: ComponentFixture<TeamSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
