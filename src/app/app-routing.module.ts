import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { ApifetchingComponent } from './components/apifetching/apifetching.component';

const routes: Routes = [
  {
    path: '',
    component: ApifetchingComponent,
  },
  {
    path: 'products',
    component: ApifetchingComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
