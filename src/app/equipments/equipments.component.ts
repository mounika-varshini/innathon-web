import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {

  ngOnInit(): void {

  }
  displayedColumns: string[] = [
    'name',
    'location',
    'fuelUsage',
    'maintenanceDue',
    'operationalStatus',
  ];

  dataSource = [
    {
      name: 'Excavator',
      location: 'Site A',
      fuelUsage: '15L/hour',
      maintenanceDue: '2024-12-15',
      operationalStatus: 'Active',
    },
    {
      name: 'Bulldozer',
      location: 'Site B',
      fuelUsage: '20L/hour',
      maintenanceDue: '2024-11-30',
      operationalStatus: 'Under Maintenance',
    },
    {
      name: 'Crane',
      location: 'Site C',
      fuelUsage: '25L/hour',
      maintenanceDue: '2025-01-10',
      operationalStatus: 'Active',
    },
    {
      name: 'Concrete Mixer',
      location: 'Site D',
      fuelUsage: '10L/hour',
      maintenanceDue: '2024-12-05',
      operationalStatus: 'Inactive',
    },
  ];

}
