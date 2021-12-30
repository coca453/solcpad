import { environment } from '../../environments/environment';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VideoPrivateService extends DataService {

  constructor(http: HttpClient) {
    super(environment.apiURL + "video/private", http);
  }

}
