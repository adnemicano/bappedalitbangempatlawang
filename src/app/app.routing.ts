import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfilDefinisiComponent } from './profil-definisi/profil-definisi.component';
import { ProfilSelayangpandangComponent } from './profil-selayangpandang/profil-selayangpandang.component';
import { ProfilStrukturorganisasiComponent } from './profil-strukturorganisasi/profil-strukturorganisasi.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'profil-definisi', component: ProfilDefinisiComponent},
    { path: 'profil-selayangpandang', component: ProfilSelayangpandangComponent},
    { path: 'profil-strukturorganisasi', component: ProfilStrukturorganisasiComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
