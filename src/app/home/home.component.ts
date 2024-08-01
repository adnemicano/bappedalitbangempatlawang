import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false,
  };

  focus;
  focus1;
  constructor() {}

  ngOnInit() {}

  services = [
    {
      img: "assets/img/brand/layanan1-galeri.png",
    },
    {
      img: "assets/img/brand/layanan2-kajian.png",
    },
    {
      img: "assets/img/brand/layanan3-inovasi.png",
    },
    {
      img: "assets/img/brand/layanan4-kontak.png",
    },
    {
      img: "assets/img/brand/layanan5-idsd.png",
    },
    {
      img: "assets/img/brand/layanan6-ipkd.png",
    },
    {
      img: "assets/img/brand/layanan7-iga.png",
    },
    {
      img: "assets/img/brand/layanan8-rinduk.png",
    },
  ];

  newsList = [
    {
      image: "assets/img/brand/brt1.png",
      title: "Gebyar Intervensi Serentak Penanggulangan Stunting Tahun 2024",
      date: "14 Juni 2024",
    },
    {
      image: "assets/img/brand/brt2.png",
      title: "Rapat Koordinasi Persiapan Fasilitasi Rancangan Akhir RKPD",
      date: "14 Juni 2024",
    },
    {
      image: "assets/img/brand/brt3.png",
      title: "Kegiatan Verifikasi Lapangan Program Kampung Iklim (PROKLIM)",
      date: "14 Juni 2024",
    },
    {
      image: "assets/img/brand/bert4.png",
      title: "Gebyar Intervensi Serentak Penanggulangan Stunting Tahun 2024",
      date: "14 Juni 2024",
    },
  ];
}
