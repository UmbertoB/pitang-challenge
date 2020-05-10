import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';


const MaterialImportedModules = [
  MatInputModule,
  MatButtonModule,
  MatAutocompleteModule,
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
