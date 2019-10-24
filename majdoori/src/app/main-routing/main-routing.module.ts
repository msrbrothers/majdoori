import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LoginComponent } from '../components/login/login.component';
// import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { Routes,RouterModule   } from '@angular/router';
import { MainRouteComponent } from '../components/main-route/main-route.component';
import { LoginComponent } from '../components/login/login/login.component';
import { SignUpComponent } from '../components/login/sign-up/sign-up.component';


const roters : Routes = [
    {path : '' ,component : LoginComponent },
    {path : 'login' ,component : LoginComponent },
    {path : 'signup' ,component : SignUpComponent } 
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(roters)
  ],
  exports: [
    RouterModule
  ]
})

export class MainRoutingModule { }


export const routingComponent = [SignUpComponent,LoginComponent,MainRouteComponent]