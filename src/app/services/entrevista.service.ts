import { environment } from '../../environments/environment';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EntrevistaService extends DataService {

  constructor(http: HttpClient) {
    super(environment.apiURL + "entrevista/", http);
  }

  public getLatest() {
    return this.getHttp().get<any>(environment.apiURL + "entrevista/latest");
  }

}
