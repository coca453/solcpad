import { Component, OnInit } from '@angular/core';
import { DocumentoService } from 'src/app/services/documento.service';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoPrivateService } from 'src/app/services/videoprivate.service';

@Component({
  selector: 'scp-material-socios',
  templateUrl: './material-socios.component.html',
  styleUrls: ['./material-socios.component.css']
})
export class MaterialSociosComponent implements OnInit {

  articulos: any[];

  total: number = 0;
  currentPage: number = 1;
  maxResults: number = 10;

  loggedIn:boolean = false;
  passwordIncorrecta:boolean = false;

  password:string = "";

//videos
  videos: any[];

  videostotal: number = 0;
  videoscurrentPage: number = 1;
  videosmaxResults: number = 9;

  constructor(private service: DocumentoService,
    private videoservice: VideoPrivateService, private sanitizer: DomSanitizer) { }

  setPage(page: number): void {
    this.currentPage = page;
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.search();
  }

  ngOnInit() {

  }

  init(){
    this.service.getCount().subscribe(response => this.total = response);
    this.search();
  }

  search() {
    this.service.getAll((this.currentPage - 1) * this.maxResults, this.maxResults).subscribe(response => this.articulos = response);
  }

  login(){
    if(this.password == "1CongresoOnline2020solcpad"){
      this.loggedIn = true;
      this.passwordIncorrecta = false;
      this.init();
      this.videosinit();
    }else{
      this.passwordIncorrecta = true;
    }
  }



  //videos
  videossetPage(page: number): void {
    this.videoscurrentPage = page;
  }

  videospageChanged(event: any): void {
    this.videoscurrentPage = event.page;
    this.videossearch();
  }

  videosinit() {
    this.videoservice.getCount().subscribe(response => this.videostotal = response);
    this.videossearch();
  }

  videossearch() {
    this.videoservice.getAll((this.videoscurrentPage - 1) * this.videosmaxResults, this.videosmaxResults).subscribe(response => this.videos = response);
  }

  getSafeURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}
