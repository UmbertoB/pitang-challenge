// external modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// local modules
import { AppMaterialModule } from 'src/app/modules/repository-rank/app-material.module';
import { RepositoryRankRoutingModule } from 'src/app/modules/repository-rank/repository-rank-routing.module';
// components
import { RepositoryRankWrapperComponent } from './components/repository-rank-wrapper/repository-rank-wrapper.component';
// services

@NgModule({
  declarations: [
    RepositoryRankWrapperComponent,
  ],
  providers: [],
  imports: [
    CommonModule,
    RepositoryRankRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppMaterialModule,
    AgGridModule.withComponents([]),

  ],
})
export class RepositoryRankModule { }
