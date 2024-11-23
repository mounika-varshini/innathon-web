import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @ViewChild('createProject') createProjectTemplate: TemplateRef<any>;

  dialogRef;
  locationsData: { label: string; value: string }[] = [
    { label: 'New York', value: 'new_york' },
    { label: 'Los Angeles', value: 'los_angeles' },
    { label: 'Chicago', value: 'chicago' },
    { label: 'Houston', value: 'houston' },
    { label: 'Phoenix', value: 'phoenix' },
    { label: 'Philadelphia', value: 'philadelphia' },
    { label: 'San Antonio', value: 'san_antonio' },
    { label: 'San Diego', value: 'san_diego' },
    { label: 'Dallas', value: 'dallas' },
    { label: 'San Jose', value: 'san_jose' },
  ];

  activitiesData: { label: string; value: string }[] = [
    { label: 'Excavation', value: 'excavation' },
    { label: 'Concrete Mixing', value: 'concrete_mixing' },
    { label: 'Lifting', value: 'lifting' },
    { label: 'Paving', value: 'paving' },
    { label: 'Demolition', value: 'demolition' },
    { label: 'Electrical Work', value: 'electrical_work' },
    { label: 'Plumbing', value: 'plumbing' },
    { label: 'Roofing', value: 'roofing' },
    { label: 'Painting', value: 'painting' },
    { label: 'Landscaping', value: 'landscaping' },
  ];
  selectedLocation: string = '';
  selectedActivity: string = '';



  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {

  }

  openCreateProject() {
    this.dialogRef = this.dialog.open(this.createProjectTemplate, {
      width: '50vw',
      height: '50vh'
    })
  }
}
