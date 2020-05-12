// external modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// local modules
import { AppMaterialModule } from 'src/app/modules/trends/app-material.module';
import { TrendsRoutingModule } from 'src/app/modules/trends/trends-routing.module';
// components
import { TrendsWrapperComponent } from './components/trends-wrapper/trends-wrapper.component';
// services

@NgModule({
  declarations: [
    TrendsWrapperComponent,
  ],
  providers: [],
  imports: [
    CommonModule,
    TrendsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppMaterialModule,
    AgGridModule.withComponents([]),

  ],
})
export class TrendsModule { }
