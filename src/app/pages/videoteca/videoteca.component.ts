import { VideoService } from './../../services/video.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'scp-videoteca',
  templateUrl: './videoteca.component.html',
  styleUrls: ['./videoteca.component.css']
})
export class VideotecaComponent implements OnInit {

  videos: any[];

  total: number = 0;
  currentPage: number = 1;
  maxResults: number = 9;

  constructor(private service: VideoService, private sanitizer: DomSanitizer) { }

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
    this.service.getAll((this.currentPage - 1) * this.maxResults, this.maxResults).subscribe(response => this.videos = response);
  }

  getSafeURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}
