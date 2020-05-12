import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendsWrapperComponent } from 'src/app/modules/trends/components/trends-wrapper/trends-wrapper.component';

const routes: Routes = [
    { path: '', component: TrendsWrapperComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrendsRoutingModule { }
