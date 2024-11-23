import { Component } from '@angular/core';
import { MappingEquipmentsWorkService } from './mapping-equipments-work.service';

@Component({
  selector: 'app-mapping-equipments-work',
  templateUrl: './mapping-equipments-work.component.html',
  styleUrls: ['./mapping-equipments-work.component.scss']
})
export class MappingEquipmentsWorkComponent {

  displayedColumns: string[] = ['work', 'equipment'];
  dataSource = [
    {
      work: 'Excavation',
      equipment: ['Excavator', 'Shovel', 'Drill'],
    },
    {
      work: 'Concrete Mixing',
      equipment: ['Concrete Mixer', 'Bucket', 'Trowel'],
    },
    {
      work: 'Lifting',
      equipment: ['Crane', 'Pulley'],
    },
    {
      work: 'Paving',
      equipment: ['Road Roller', 'Asphalt Spreader'],
    },
  ];

  constructor(
    private mappingEquipmentsWorkService: MappingEquipmentsWorkService
  ) {

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.mappingEquipmentsWorkService.getUsers().subscribe(res => {
      if (res.success) {
        console.log('Users');

      }
    })
  }
}
