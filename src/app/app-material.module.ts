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
];

@NgModule({
  imports: [
    CommonModule,
    ...MaterialImportedModules,
  ],
  exports: MaterialImportedModules
})
export class AppMaterialModule { }
