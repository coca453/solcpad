import { FotogaleriaService } from './../../services/fotogaleria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scp-fotogaleria',
  templateUrl: './fotogaleria.component.html',
  styleUrls: ['./fotogaleria.component.css']
})
export class FotogaleriaComponent implements OnInit {

  fotos;
  totalFotos: number = 0;
  currentPageFotos: number = 1;
  fotoSeleccionada;

  maxResults: number = 18;

  constructor(private service: FotogaleriaService) { }

  pageChangedFotos(event: any): void {
    this.currentPageFotos = event.page;
    this.searchFotos();
  }

  ngOnInit() {

    this.service.getCount().subscribe(response => {
      this.totalFotos = response;
    });

    this.searchFotos();
  }

  searchFotos() {
    this.service.getFotos((this.currentPageFotos - 1) * this.maxResults, this.maxResults).subscribe(response => this.fotos = response);
  }

}