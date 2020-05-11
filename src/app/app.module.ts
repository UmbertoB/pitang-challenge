// external modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// local modules
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SearchUserModule } from 'src/app/modules/search-user/search-user.module';

// components
import { AppComponent } from 'src/app/app.component';

// services
import { DataPersistenceService } from 'src/app/common/services/data-persistence/data-persistence.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SearchUserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataPersistenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
