import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const MaterialImportedModules = [
  MatInputModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatIconModule,
  MatCardModule,
  MatChipsModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatListModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...MaterialImportedModules,
  ],
  exports: MaterialImportedModules
})
export class AppMaterialModule { }
