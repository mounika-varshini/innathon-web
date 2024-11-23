import { BrowserModule } from '@angular/platform-browser';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { BreadcrumbService } from 'xng-breadcrumb';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { MappingEquipmentsWorkComponent } from './mapping-equipments-work/mapping-equipments-work.component';
import { MaintainanceTrackingComponent } from './maintainance-tracking/maintainance-tracking.component';
import { PatternsComponent } from './patterns/patterns.component';
import { SamsaraComponent } from './samsara/samsara.component';
import { AiComponent } from './ai/ai.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EquipmentsComponent,
    MappingEquipmentsWorkComponent,
    MaintainanceTrackingComponent,
    PatternsComponent,
    SamsaraComponent,
    AiComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [
    DatePipe,
    BreadcrumbService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
