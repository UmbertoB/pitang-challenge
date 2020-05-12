import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'search-user',
    loadChildren: () => import('src/app/modules/search-user/search-user.module').then(m => m.SearchUserModule)
  },
  {
    path: 'repository-trends',
    loadChildren: () => import('src/app/modules/trends/trends.module').then(m => m.TrendsModule),
    data: { entity: 'repositories' }
  },
  {
    path: 'user-trends',
    loadChildren: () => import('src/app/modules/trends/trends.module').then(m => m.TrendsModule),
    data: { entity: 'developers' }
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
