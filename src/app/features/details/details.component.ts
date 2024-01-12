import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { PersonService } from '../../core/services/person.service';

import { Person } from '../../core/models/person.model';
import { CardComponent } from 'src/app/shared/card/card.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  private unsubscribe = new Subject<void>();

  person!: Person;

  constructor(
    private readonly personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('slug');

    this.personService
      .execute(id as string)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        this.person = data;
      });
  }

  navigate() {
    const route = `/`;
    this.router.navigate([route]);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
