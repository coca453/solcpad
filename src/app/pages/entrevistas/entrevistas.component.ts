import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';
import { EntrevistaService } from 'src/app/services/entrevista.service';

@Component({
  selector: 'scp-entrevistas',
  templateUrl: './entrevistas.component.html',
  styleUrls: ['./entrevistas.component.css']
})
export class EntrevistasComponent implements OnInit {

  noticias: any[];

  total: number = 0;
  currentPage: number = 1;
  maxResults: number = 10;

  constructor(private service: EntrevistaService) { }

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
    this.service.getAll((this.currentPage - 1) * this.maxResults, this.maxResults).subscribe(response => this.noticias = response);
  }

}
