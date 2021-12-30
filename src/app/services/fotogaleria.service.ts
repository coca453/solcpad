import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { DataService } from './data.service';

@Injectable()
export class FotogaleriaService extends DataService {

  constructor(http: HttpClient) {
    super(environment.apiURL + "fotogaleria/", http);
  }

  public getFotos(start?, results?) {
    const options = { params: new HttpParams().set('start', String(start)).set('results', String(results)) };
    return this.getHttp().get(environment.apiURL + "fotogaleria/foto", options)
  }

}
