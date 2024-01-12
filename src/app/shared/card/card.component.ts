import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Person } from '../../core/models/person.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() person: Person | null = null;
  constructor(private router: Router) {}

  navigate(id: number) {
    const route = `details/${id}`;
    this.router.navigate([route]);
  }
}
