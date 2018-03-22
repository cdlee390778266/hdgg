import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdUploadComponent } from './ad-upload.component';

describe('AdUploadComponent', () => {
  let component: AdUploadComponent;
  let fixture: ComponentFixture<AdUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
