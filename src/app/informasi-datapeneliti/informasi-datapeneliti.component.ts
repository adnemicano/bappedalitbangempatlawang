import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: "app-informasi-datapeneliti",
  templateUrl: "./informasi-datapeneliti.component.html",
  styleUrls: ["./informasi-datapeneliti.component.css"],
})
export class InformasiDatapenelitiComponent implements OnInit {
  penelitis = [
    {
      name: "Prof. Dr. Ir. Andy Mulyana, M.Sc",
      nip: "19601201986031003",
      alumni: "Institut Pertanian Bogor",
      pekerjaan: "Dosen UNSRI",
      image: "assets/img/brand/image.png",
    },
    {
      name: "Prof. Dr. Ir. Andy Mulyana, M.Sc",
      nip: "19601201986031003",
      alumni: "Institut Pertanian Bogor",
      pekerjaan: "Dosen UNSRI",
      image: "assets/img/brand/image2.png",
    },
    {
      name: "Prof. Dr. Ir. Andy Mulyana, M.Sc",
      nip: "19601201986031003",
      alumni: "Institut Pertanian Bogor",
      pekerjaan: "Dosen UNSRI",
      image: "assets/img/brand/image3.png",
    },
    {
      name: "Prof. Dr. Ir. Andy Mulyana, M.Sc",
      nip: "19601201986031003",
      alumni: "Institut Pertanian Bogor",
      pekerjaan: "Dosen UNSRI",
      image: "assets/img/brand/image4.png",
    },
    {
      name: "Prof. Dr. Ir. Andy Mulyana, M.Sc",
      nip: "19601201986031003",
      alumni: "Institut Pertanian Bogor",
      pekerjaan: "Dosen UNSRI",
      image: "assets/img/brand/image5.png",
    },
    {
      name: "Prof. Dr. Ir. Andy Mulyana, M.Sc",
      nip: "19601201986031003",
      alumni: "Institut Pertanian Bogor",
      pekerjaan: "Dosen UNSRI",
      image: "assets/img/brand/image6.png",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
