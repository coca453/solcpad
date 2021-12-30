import { environment } from '../../environments/environment';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DocumentoService extends DataService {

    constructor(http: HttpClient) {
      super(environment.apiURL + "documento/", http);
    }

}
