import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
//modules
import { PagesRoutingModule } from './pages/pages.routing';

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  
  // path: '/dashboard' PagesRouting
  // path: '/auth' AuthRouting
  { path: '', redirectTo: '/dashboard', pathMatch:'full' },
  { path: '**', component: NopagefoundComponent }

]

@NgModule({
  declarations: [],
  imports: [
    // CommonModulem  Sirve para traer las directivas ngif ngfor
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
