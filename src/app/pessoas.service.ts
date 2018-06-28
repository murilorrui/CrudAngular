import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private url = 'api/pessoas';

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get<Array<any>>(this.url);
  }

  getById(id) {
    return this.http.get<any>(this.url+'/'+id);
  }

  add(user){
    return this.http.post(this.url, user);
  }

  edit(user) {
    return this.http.put(this.url+'/'+user.id, user);
  }

  delete(id:number) {
    return this.http.delete(this.url+'/'+id);
  }
}
