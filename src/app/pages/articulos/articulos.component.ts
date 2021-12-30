import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'scp-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  articulos: any[];

  total: number = 0;
  currentPage: number = 1;
  maxResults: number = 10;

  constructor(private service: ArticuloService) { }

  setPage(page: number): void {
    this.currentPage = page;
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.search();
  }

  ngOnInit() {
    this.service.getCount().subscribe(response => this.total = response);
    this.search();
  }

  search() {
    this.service.getAll((this.currentPage - 1) * this.maxResults, this.maxResults).subscribe(response => this.articulos = response);
  }

}
