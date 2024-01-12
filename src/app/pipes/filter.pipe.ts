import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  transform(
    search?: string,
    minRating?: number,
    maxRating?: number,
    minPrice?: number,
    maxPrice?: number,
    isAvailable?: boolean,
    orderBy?: string,
    sort?: string
  ) {
    let text = '';
    if (search) {
      text = `${text}&search=${search}`;
    }
    if (minRating) {
      text = `${text}&minRating=${minRating}`;
    }
    if (maxRating) {
      text = `${text}&maxRating=${maxRating}`;
    }
    if (minPrice) {
      text = `${text}&minPrice=${minPrice}`;
    }
    if (maxPrice) {
      text = `${text}&maxPrice=${maxPrice}`;
    }
    if (isAvailable) {
      text = `${text}&isAvailable=${isAvailable}`;
    }
    if (orderBy) {
      text = `${text}&orderBy=${orderBy}`;
    }
    if (sort) {
      text = `${text}&sort=${sort}`;
    }
    return text;
  }
}
