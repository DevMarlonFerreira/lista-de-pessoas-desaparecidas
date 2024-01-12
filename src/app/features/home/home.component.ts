import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { PersonsService } from '../../core/services/persons.service';

import { Person } from '../../core/models/person.model';
import { CardComponent } from 'src/app/shared/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private unsubscribe = new Subject<void>();

  persons: Person[] = [];
  page: number = 0;

  nome?: string = '';
  idade?: number = 0;
  sexo?: string = '';

  constructor(private readonly personsService: PersonsService) {}

  ngOnInit(): void {
    this.personsService
      .execute()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        this.page = data.number;
        this.persons = data.content;
      });
  }

  filter(): void {
    this.personsService
      .filter(this.nome, this.idade, this.sexo)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        this.page = data.number;
        this.persons = data.content;
      });
  }

  pagination(index: number): void {
    this.page = this.page + index;
    this.personsService
      .execute(this.page)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        this.page = data.number;
        this.persons = data.content;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
