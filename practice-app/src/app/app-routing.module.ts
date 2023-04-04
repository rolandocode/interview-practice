import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './Components/dogs/dogs.component';
import { FirstComponentComponent } from './Components/first-component/first-component.component';

const routes: Routes = [
  {path: 'component1', component: FirstComponentComponent},
  {path: 'dogs', component: DogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
