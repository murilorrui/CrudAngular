import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private http: HttpClient) { }

  states() {
    return this.http.get<Array<any>>('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  }

  cities(uf) {
    return this.http.get<Array<any>>('https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + uf +'/municipios');
  }

}
