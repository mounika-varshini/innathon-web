import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainanceTrackingComponent } from './maintainance-tracking.component';

describe('MaintainanceTrackingComponent', () => {
  let component: MaintainanceTrackingComponent;
  let fixture: ComponentFixture<MaintainanceTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintainanceTrackingComponent]
    });
    fixture = TestBed.createComponent(MaintainanceTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
