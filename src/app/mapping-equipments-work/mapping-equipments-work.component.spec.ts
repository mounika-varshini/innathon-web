import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingEquipmentsWorkComponent } from './mapping-equipments-work.component';

describe('MappingEquipmentsWorkComponent', () => {
  let component: MappingEquipmentsWorkComponent;
  let fixture: ComponentFixture<MappingEquipmentsWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MappingEquipmentsWorkComponent]
    });
    fixture = TestBed.createComponent(MappingEquipmentsWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
