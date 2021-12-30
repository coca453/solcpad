import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactoService {

  constructor(private http: HttpClient) { }

  public post(data) {
    return this.http.post(environment.apiURL + "contacto/", JSON.stringify(data));
  }

}
