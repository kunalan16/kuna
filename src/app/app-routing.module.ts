import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';

import { BindingComponent } from './components/binding/binding.component';
import { ProductsComponent } from './components/products/products.component';
import { DirectComponent } from './direct/direct.component';
import { AuthGuard } from './guards/auth.guard';
import { GuardsComponent } from './guards/guards.component';
import { HttpclientToExtendserviceComponent } from './httpclient-to-extendservice/httpclient-to-extendservice.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RoutpharmComponent } from './routpharm/routpharm.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';

const routes: Routes = [
  {
    path:'binding',
    component:BindingComponent
  },
  {   
    path:'products',
    component:ProductsComponent
  },
  {
   path:'directives',
   component:DirectComponent
  },
  {
    path:'pipes',
    component:PipesComponent
  },
  {
    path:'templatedriven',
    component:TemplatedrivenComponent
  },
  {
    path:'reactiveform',
    component:ReactiveformComponent
  },
  {
    path:'httpclient',
    component:HttpclientToExtendserviceComponent

  },
  // {
  // path:'',
  // redirectTo:'/binding',pathMatch:'full'      deraitta open pannalam edha code 

  // },
 
  {
    path:'animation',
    component:AnimationComponent
  },
  {
    path:'routpharm/:id',
    component:RoutpharmComponent
    
  },
  {
    path:'guards',
    component:GuardsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'**',
    component:PagenotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



