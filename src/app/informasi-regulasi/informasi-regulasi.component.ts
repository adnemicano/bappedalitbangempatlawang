import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-informasi-regulasi',
  templateUrl: './informasi-regulasi.component.html',
  styleUrls: ['./informasi-regulasi.component.css']
})
export class InformasiRegulasiComponent implements OnInit {
  regulasis = [
    {
      title: 'Undang-Undang Republik Indonesia Nomor 23 Tahun 2014 Tentang Pemerintahan Daerah',
      year: '2015',
      imageUrl: 'assets/img/brand/logo.png'
    },
    {
      title: 'PERATURAN MENTERI DALAM NEGERI REPUBLIK INDONESIA NOMOR 17 TAHUN 2016 TENTANG PEDOMAN PENELITIAN DAN PENGEMBANGAN DI KEMENTERIAN DALAM NEGERI DAN PEMERINTAHAN DAERAH',
      year: '2015',
      imageUrl: 'assets/img/brand/logo.png'
    },
    {
      title: 'PERMENDAGRI NO 90 TAHUN 2019 TENTANG KLASIFIKASI, KODEFIKASI, NOMENKLATUR PERENCANAAN PEMBANGUNAN DAN KEUANGAN DAERAH',
      year: '2015',
      imageUrl: 'assets/img/brand/logo.png'
    },
    {
      title: 'Undang-Undang Republik Indonesia Nomor 9 Tahun 2015 Tentang Perubahan Kedua Atas Undang-Undang Nomor 23 Tahun 2014 Tentang Pemerintahan Daerah',
      year: '2015',
      imageUrl: 'assets/img/brand/logo.png'
    },
    {
      title: 'Undang-Undang Republik Indonesia Nomor 9 Tahun 2015 Tentang Perubahan Kedua Atas Undang-Undang Nomor 23 Tahun 2014 Tentang Pemerintahan Daerah',
      year: '2015',
      imageUrl: 'assets/img/brand/logo.png'
    },
    {
      title: 'Undang-Undang Republik Indonesia Nomor 9 Tahun 2015 Tentang Perubahan Kedua Atas Undang-Undang Nomor 23 Tahun 2014 Tentang Pemerintahan Daerah',
      year: '2015',
      imageUrl: 'assets/img/brand/logo.png'
    },
    {
      title: 'Undang-Undang Republik Indonesia Nomor 9 Tahun 2015 Tentang Perubahan Kedua Atas Undang-Undang Nomor 23 Tahun 2014 Tentang Pemerintahan Daerah',
      year: '2015',
      imageUrl: 'assets/img/brand/logo.png'
    },
    {
      title: 'Undang-Undang Republik Indonesia Nomor 9 Tahun 2015 Tentang Perubahan Kedua Atas Undang-Undang Nomor 23 Tahun 2014 Tentang Pemerintahan Daerah',
      year: '2015',
      imageUrl: 'assets/img/brand/logo.png'
    },
    // tambahkan data regulasi lainnya di sini
  ];
  p: number = 1;

  constructor() { }

  ngOnInit(): void { }
}
