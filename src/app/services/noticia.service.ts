import { environment } from './../../environments/environment';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NoticiaService extends DataService {

  constructor(http: HttpClient) {
    super(environment.apiURL + "noticia/", http);
  }

  public getLatest() {
    return this.getHttp().get<any>(environment.apiURL + "noticia/latest");
  }

}
