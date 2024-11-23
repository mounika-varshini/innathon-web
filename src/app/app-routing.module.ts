import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AiComponent } from './ai/ai.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { HomeComponent } from './home/home.component';
import { MaintainanceTrackingComponent } from './maintainance-tracking/maintainance-tracking.component';
import { MappingEquipmentsWorkComponent } from './mapping-equipments-work/mapping-equipments-work.component';
import { PatternsComponent } from './patterns/patterns.component';
import { ProjectsComponent } from './projects/projects.component';
import { SamsaraComponent } from './samsara/samsara.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProjectsComponent
      },
      {
        path: 'equipments',
        pathMatch: 'full',
        component: EquipmentsComponent
      },
      {
        path: 'mapping',
        pathMatch: 'full',
        component: MappingEquipmentsWorkComponent
      },
      {
        path: 'maintainance-tracking',
        pathMatch: 'full',
        component: MaintainanceTrackingComponent
      },
      {
        path: 'patterns',
        pathMatch: 'full',
        component: PatternsComponent
      },
      {
        path: 'samsara',
        pathMatch: 'full',
        component: SamsaraComponent
      },
      {
        path: 'ai',
        pathMatch: 'full',
        component: AiComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.events
  }
}
