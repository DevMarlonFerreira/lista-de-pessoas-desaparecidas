import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private readonly http: HttpClient) {}
  execute(id: string) {
    return this.http.get<Person>(
      `/v1/pessoas/${id}`
    );
  }
}
