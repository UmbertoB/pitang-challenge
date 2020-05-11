import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryRankWrapperComponent } from 'src/app/modules/repository-rank/components/repository-rank-wrapper/repository-rank-wrapper.component';

const routes: Routes = [
    { path: '', component: RepositoryRankWrapperComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RepositoryRankRoutingModule { }
