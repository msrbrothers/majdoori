import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LoginComponent } from '../components/login/login.component';
// import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { Routes, RouterModule } from '@angular/router';
import { MainRouteComponent } from '../components/main-route/main-route.component';
import { LoginComponent } from '../components/login/login/login.component';
import { SignUpComponent } from '../components/login/sign-up/sign-up.component';
import { HomeDashboardComponent } from '../components/dashboard-layout/home-dashboard/home-dashboard.component';
import { OutsideLayoutComponent } from '../components/login/outside-layout/outside-layout.component';
import { AboutUsComponent } from '../components/login/about-us/about-us.component';
import { UserProfileComponent } from '../components/dashboard-layout/user-profile/user-profile.component';
import { SidebarMenuComponent } from '../components/dashboard-layout/sidebar-menu/sidebar-menu.component';


const roters: Routes = [
  {
    path: '',
    component: OutsideLayoutComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'signup', component: SignUpComponent },
      { path: 'login', component: LoginComponent },
      { path: 'about', component: AboutUsComponent },
      
    ]
  },

  {
    path: 'majdoori',
    component: SidebarMenuComponent,
    children : [
      {
        path: 'dashboard',
        component: HomeDashboardComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent
      },
    ]
  },

  {
    path: 'dashboard',
    component: HomeDashboardComponent,
  },
 
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


export const routingComponent = [SignUpComponent, LoginComponent, MainRouteComponent]