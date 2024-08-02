import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-litbang-penelitian',
  templateUrl: './litbang-penelitian.component.html',
  styleUrls: ['./litbang-penelitian.component.css']
})
export class LitbangPenelitianComponent implements OnInit {

  perangkatDaerahOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];
  kategoriOptions: string[] = ['Option A', 'Option B', 'Option C'];
  selectedPerangkatDaerah: string;
  selectedKategori: string;
  searchQuery: string;

  search() {
    console.log('Tombol Cari diklik');
    console.log('Perangkat Daerah yang dipilih:', this.selectedPerangkatDaerah);
    console.log('Kategori yang dipilih:', this.selectedKategori);
    console.log('Kueri Pencarian:', this.searchQuery);
    // Implementasikan fungsi pencarian Anda di sini
  }
  constructor() { }

  ngOnInit(): void {
  }

}
