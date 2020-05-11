import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchFormComponent } from 'src/app/modules/search-user/components/search-form/search-form.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { DataPersistenceService } from 'src/app/common/services/data-persistence/data-persistence.service';
import { SortByPipe } from 'src/app/common/pipes/sort-by.pipe';
import { SearchUserRoutingModule } from 'src/app/modules/search-user/search-user-routing.module';
import { UserDetailComponent } from 'src/app/modules/search-user/components/user-detail/user-detail.component';
import { SearchUserWrapperComponent } from './components/search-user-wrapper/search-user-wrapper.component';
import { UserSharedDataService } from './services/user-shared-data.service';
import { RecentSearchPersistenceService } from './services/recent-search-persistence.service';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    SearchUserWrapperComponent,
    SearchFormComponent,
    UserDetailComponent,
    SortByPipe,
  ],
  providers: [
    RecentSearchPersistenceService,
    UserSharedDataService
  ],
  imports: [
    CommonModule,
    SearchUserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppMaterialModule,
    AgGridModule.withComponents([]),

  ],
})
export class SearchUserModule { }
