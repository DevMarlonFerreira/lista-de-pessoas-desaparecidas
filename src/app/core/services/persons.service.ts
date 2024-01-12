import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  constructor(private readonly http: HttpClient) {}
  execute(page = 0) {
    return this.http.get<Response>(
      `/v1/pessoas/aberto/filtro?faixaIdadeFinal=0&faixaIdadeInicial=0&nome=&porPagina=12&sexo=&status=DESAPARECIDO&pagina=${page}`
    );
  }
  filter(name = '', idade = 0, sexo = '', page = 0) {
    return this.http.get<Response>(
      `/v1/pessoas/aberto/filtro?faixaIdadeFinal=${idade}&faixaIdadeInicial=${idade}&nome=${name}&porPagina=12&sexo=${sexo}&status=DESAPARECIDO&pagina=${page}`
    );
  }
}
