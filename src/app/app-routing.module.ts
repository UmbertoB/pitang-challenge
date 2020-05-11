import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'search-user',
    loadChildren: () => import('src/app/modules/search-user/search-user.module').then(m => m.SearchUserModule)
  },
  {
    path: 'repository-rank',
    loadChildren: () => import('src/app/modules/repository-rank/repository-rank.module').then(m => m.RepositoryRankModule)
  },
  {
    path: '**',
    redirectTo: '/search-user',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
