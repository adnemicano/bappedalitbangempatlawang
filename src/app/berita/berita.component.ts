import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-berita",
  templateUrl: "./berita.component.html",
  styleUrls: ["./berita.component.css"],
})
export class BeritaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

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
    {
      image: "assets/img/brand/bert4.png",
      title: "Gebyar Intervensi Serentak Penanggulangan Stunting Tahun 2024",
      date: "14 Juni 2024",
    },
    {
      image: "assets/img/brand/brt3.png",
      title: "Kegiatan Verifikasi Lapangan Program Kampung Iklim (PROKLIM)",
      date: "14 Juni 2024",
    },
    {
      image: "assets/img/brand/brt2.png",
      title: "Rapat Koordinasi Persiapan Fasilitasi Rancangan Akhir RKPD",
      date: "14 Juni 2024",
    },
    {
      image: "assets/img/brand/brt1.png",
      title: "Gebyar Intervensi Serentak Penanggulangan Stunting Tahun 2024",
      date: "14 Juni 2024",
    },
  ];
}
