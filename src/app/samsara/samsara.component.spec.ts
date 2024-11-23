import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsaraComponent } from './samsara.component';

describe('SamsaraComponent', () => {
  let component: SamsaraComponent;
  let fixture: ComponentFixture<SamsaraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamsaraComponent]
    });
    fixture = TestBed.createComponent(SamsaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
