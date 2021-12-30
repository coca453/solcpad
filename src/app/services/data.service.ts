import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private url :string, private http: HttpClient) { }

  getHttp() {
    return this.http;
  }

  getCount() {
    return this.http.get<any>(this.url + 'count');
  }

  getAll(start?: number, results?: number) {
    return this.http.get<any>(this.url, { params: { start: String(start), results: String(results) } });
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
  }

  update(resource) {
    return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource))
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
  }
  
}