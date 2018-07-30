import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { ResultsComponent } from "./results/results.component";

const routes: Routes = [
  { path: "", component: HomeComponent }, 

  { path: "favorites", component: FavoritesComponent }, 
  { path: "results", component: ResultsComponent }, 

  { path: "", redirectTo: "/", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
