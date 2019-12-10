import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import { MainRouteComponent, } from './components/main-route/main-route.component';
import { MainRoutingModule, routingComponent } from './main-routing/main-routing.module';
import {LoginService } from './services/login.service';
import {MatStepperModule,MatButtonToggleModule,MatInputModule,MatSelectModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,} from '@angular/material/button';
import { SidebarMenuComponent } from './components/dashboard-layout/sidebar-menu/sidebar-menu.component';
import { HomeDashboardComponent } from './components/dashboard-layout/home-dashboard/home-dashboard.component';
import { UserProfileComponent } from './components/dashboard-layout/user-profile/user-profile.component'
import { CommonService } from './services/common.service';
import { AboutUsComponent } from './components/login/about-us/about-us.component';
import { OutsideLayoutComponent } from './components/login/outside-layout/outside-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    SidebarMenuComponent,
    HomeDashboardComponent,
    UserProfileComponent,
    AboutUsComponent,
    OutsideLayoutComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MainRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [LoginService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
