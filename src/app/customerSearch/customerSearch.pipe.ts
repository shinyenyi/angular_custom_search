import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../app.component';

@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {

  transform(list: Customer[], searchString: string): any {
    return list ? list.filter(item =>
      item.name.toLowerCase().includes(searchString.toLowerCase()) ||
      item.location.toLowerCase().includes(searchString.toLowerCase()) ||
      item.gender.toLowerCase().includes(searchString.toLowerCase()) ||
      item.age.toLowerCase().includes(searchString.toLowerCase()) ||
      item.income.toLowerCase().includes(searchString.toLowerCase())
    ) : [];
  }
}

// item.name.search(new RegExp(searchString, 'i')) > -1 ||
// item.location.search(new RegExp(searchString, 'i')) > -1 ||
// item.income.search(new RegExp(searchString, 'i')) > -1 ||
// item.age.search(new RegExp(searchString, 'i')) > -1 ||
// item.gender.search(new RegExp(searchString, 'i')) > -1
