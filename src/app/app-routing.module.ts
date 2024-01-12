import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("../app/features/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "details/:slug",
    loadComponent: () =>
      import("../app/features/details/details.component").then((m) => m.DetailsComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
