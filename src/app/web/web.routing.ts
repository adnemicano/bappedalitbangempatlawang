import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "../home/home.component";
import { ProfileComponent } from "../profile/profile.component";
import { SignupComponent } from "../signup/signup.component";
import { LandingComponent } from "../landing/landing.component";
import { LoginComponent } from "../login/login.component";
import { ProfilDefinisiComponent } from "../profil-definisi/profil-definisi.component";
import { ProfilSelayangpandangComponent } from "../profil-selayangpandang/profil-selayangpandang.component";
import { ProfilStrukturorganisasiComponent } from "../profil-strukturorganisasi/profil-strukturorganisasi.component";
import { BeritaComponent } from "../berita/berita.component";
import { DetailBeritaComponent } from "../detail-berita/detail-berita.component";
import { InformasiRegulasiComponent } from "../informasi-regulasi/informasi-regulasi.component";
import { InformasiPendaftaranmerkComponent } from "../informasi-pendaftaranmerk/informasi-pendaftaranmerk.component";
import { LitbangPenelitianComponent } from "../litbang-penelitian/litbang-penelitian.component";
import { LitbangInovasiComponent } from "../litbang-inovasi/litbang-inovasi.component";
import { PenelitianComponent } from "../penelitian/penelitian.component";
import { InformasiDatapenelitiComponent } from "../informasi-datapeneliti/informasi-datapeneliti.component";
import { InformasiHakiComponent } from "../informasi-haki/informasi-haki.component";
import { InformasiDocComponent } from "../informasi-doc/informasi-doc.component";
import { WebComponent } from "./web.component";

const routes: Routes = [
  {
    path: "",
    component: WebComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "user-profile", component: ProfileComponent },
      { path: "landing", component: LandingComponent },
      { path: "profil-definisi", component: ProfilDefinisiComponent },
      {
        path: "profil-selayangpandang",
        component: ProfilSelayangpandangComponent,
      },
      {
        path: "profil-strukturorganisasi",
        component: ProfilStrukturorganisasiComponent,
      },
      { path: "berita", component: BeritaComponent },
      { path: "detail-berita", component: DetailBeritaComponent },
      { path: "informasi-regulasi", component: InformasiRegulasiComponent },
      {
        path: "informasi-pendaftaranmerk",
        component: InformasiPendaftaranmerkComponent,
      },
      { path: "litbang-penelitian", component: LitbangPenelitianComponent },
      { path: "litbang-inovasi", component: LitbangInovasiComponent },
      { path: "penelitian", component: PenelitianComponent },
      {
        path: "informasi-datapeneliti",
        component: InformasiDatapenelitiComponent,
      },
      { path: "informasi-haki", component: InformasiHakiComponent },
      { path: "informasi-doc", component: InformasiDocComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class WebRoutingModule {}
