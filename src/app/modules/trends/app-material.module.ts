import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

const MaterialImportedModules = [
  MatInputModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatIconModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...MaterialImportedModules,
  ],
  exports: MaterialImportedModules
})
export class AppMaterialModule { }
