import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchUserWrapperComponent } from 'src/app/modules/search-user/components/search-user-wrapper/search-user-wrapper.component';

const routes: Routes = [
    { path: '', component: SearchUserWrapperComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchUserRoutingModule { }
