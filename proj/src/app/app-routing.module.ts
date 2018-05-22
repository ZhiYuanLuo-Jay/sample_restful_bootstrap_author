import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllComponent } from './all/all.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: 'all', component: AllComponent},
  {path: 'new', component: NewComponent},
  {path: 'edit/:id', component: EditComponent},

  {path: '', pathMatch: 'full', redirectTo: '/all' },
  // {path: '**', component: SanjoseComponent }
  // the ** will catch anything that did not match any of the above routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
