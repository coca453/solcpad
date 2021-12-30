import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';

@Component({
  selector: 'scp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  noticias: any[];

  constructor(
    private noticiaService: NoticiaService,
  ) { }

  ngOnInit(){
    this.noticiaService.getLatest().subscribe(response => this.noticias = response);
  }

  Arr = Array;
  num :number = 6;

}
