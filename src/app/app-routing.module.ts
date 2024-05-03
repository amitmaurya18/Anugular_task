import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';

const routes: Routes = [
  { path: 'matches', component: MatchesComponent },
  // Add more routes if needed
  { path: '', redirectTo: '/matches', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
