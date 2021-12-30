import { environment } from './../../environments/environment';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SocioService {

  constructor(private http: HttpClient) { }
  
    public post(data) {
      return this.http.post(environment.apiURL + "socio/", JSON.stringify(data));
    }

}
