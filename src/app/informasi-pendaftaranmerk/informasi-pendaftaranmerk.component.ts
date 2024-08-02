import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-informasi-pendaftaranmerk',
  templateUrl: './informasi-pendaftaranmerk.component.html',
  styleUrls: ['./informasi-pendaftaranmerk.component.css']
})
export class InformasiPendaftaranmerkComponent implements OnInit {
  regulasis = [
    {
      title: 'Permohonan',
      year: '',
    },
    {
      title: 'Diagram Alur',
      year: '',
       
    },
    {
      title: 'Persyaratan Permohonan',
      year: ' ',
     
    },
    {
      title: 'Jangka Waktu Penyelesaian',
      year: ' ',
    
    },
    {
      title: 'Sistem Klasifikasi',
      year: ' ',
      
    },
    {
      title: 'Undang-Undang Republik Indonesia Nomor 9 Tahun 2015 Tentang Perubahan Kedua Atas Undang-Undang Nomor 23 Tahun 2014 Tentang Pemerintahan Daerah',
      year: ' ',
      
    },
    {
      title: 'Undang-Undang Republik Indonesia Nomor 9 Tahun 2015 Tentang Perubahan Kedua Atas Undang-Undang Nomor 23 Tahun 2014 Tentang Pemerintahan Daerah',
      year: ' ',
      
    },
    {
      title: 'Undang-Undang Republik Indonesia Nomor 9 Tahun 2015 Tentang Perubahan Kedua Atas Undang-Undang Nomor 23 Tahun 2014 Tentang Pemerintahan Daerah',
      year: ' ',
    
    },
    // tambahkan data regulasi lainnya di sini
  ];
  p: number = 1;

  constructor() { }

  ngOnInit(): void { }
}

