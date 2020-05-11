// external modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// local modules
import { AppMaterialModule } from 'src/app/modules/search-user/app-material.module';
import { SearchUserRoutingModule } from 'src/app/modules/search-user/search-user-routing.module';
// components
import { SearchFormComponent } from 'src/app/modules/search-user/components/search-form/search-form.component';
import { SearchUserWrapperComponent } from './components/search-user-wrapper/search-user-wrapper.component';
import { UserDetailComponent } from 'src/app/modules/search-user/components/user-detail/user-detail.component';
// services
import { RecentSearchPersistenceService } from './services/recent-search-persistence.service';
import { UserSharedDataService } from './services/user-shared-data.service';
// others
import { SortByPipe } from 'src/app/common/pipes/sort-by.pipe';

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
