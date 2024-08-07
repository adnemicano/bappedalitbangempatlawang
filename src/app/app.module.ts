import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup/signup.component";
import { LandingComponent } from "./landing/landing.component";
import { ProfileComponent } from "./profile/profile.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";

import { HomeModule } from "./home/home.module";
import { LoginComponent } from "./login/login.component";
import { ProfilDefinisiComponent } from "./profil-definisi/profil-definisi.component";
import { ProfilSelayangpandangComponent } from "./profil-selayangpandang/profil-selayangpandang.component";
import { ProfilStrukturorganisasiComponent } from "./profil-strukturorganisasi/profil-strukturorganisasi.component";
import { BeritaComponent } from "./berita/berita.component";
import { DetailBeritaComponent } from "./detail-berita/detail-berita.component";
import { InformasiRegulasiComponent } from "./informasi-regulasi/informasi-regulasi.component";
import { InformasiPendaftaranmerkComponent } from "./informasi-pendaftaranmerk/informasi-pendaftaranmerk.component";
import { LitbangInovasiComponent } from "./litbang-inovasi/litbang-inovasi.component";
import { LitbangPenelitianComponent } from "./litbang-penelitian/litbang-penelitian.component";
import { PenelitianComponent } from "./penelitian/penelitian.component";
import { MatCardModule } from "@angular/material/card";
import { NgxPaginationModule } from "ngx-pagination";
import { InformasiDatapenelitiComponent } from "./informasi-datapeneliti/informasi-datapeneliti.component";
import { InformasiHakiComponent } from "./informasi-haki/informasi-haki.component";
import { InformasiDocComponent } from "./informasi-doc/informasi-doc.component";
import { WebComponent } from "./web/web.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    MatCardModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
