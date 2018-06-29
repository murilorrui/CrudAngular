import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfissoesService {

  private url = 'api/profissoes';

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get<Array<any>>(this.url);
  }

  getById(id) {
    return this.http.get<any>(this.url+'/'+id);
  }

  add(job){
    return this.http.post(this.url, job);
  }

  edit(job) {
    return this.http.put(this.url+'/'+job.id, job);
  }

  delete(id:number) {
    return this.http.delete(this.url+'/'+id);
  }
}
