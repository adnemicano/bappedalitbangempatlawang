import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-detail-berita",
  templateUrl: "./detail-berita.component.html",
  styleUrls: ["./detail-berita.component.css"],
})
export class DetailBeritaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
