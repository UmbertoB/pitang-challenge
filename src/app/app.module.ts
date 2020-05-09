// external modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// local modules
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';

// components
import { AppComponent } from 'src/app/app.component';
import { SearchFormComponent } from 'src/app/components/search-form/search-form.component';
import { UserRankingComponent } from 'src/app/components/user-ranking/user-ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    UserRankingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
