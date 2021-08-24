import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunglassesComponent } from './sunglasses/sunglasses.component';
import { LoginComponent, WildComponent } from "@sunglasses/ui-login";
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'sunglasses', component: SunglassesComponent },
  {path: 'wild', component: WildComponent },
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
