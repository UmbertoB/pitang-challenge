import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


const MaterialImportedModules = [
  MatInputModule,
  MatButtonModule,
  MatAutocompleteModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...MaterialImportedModules,
  ],
  exports: MaterialImportedModules
})
export class AppMaterialModule { }
