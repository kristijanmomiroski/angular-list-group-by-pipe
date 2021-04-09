import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'groupByDate'
})
export class GroupByPipe implements PipeTransform {
  transform(collection: Array<any>, property: string = 'date'): Array<any> {
    if (!collection) {
      return null;
    }
    const mappedCollection = collection.map(inputArr => ({
      ...inputArr,
      date: inputArr?.date
    }));

    const groupedCollection = mappedCollection.reduce((previous, current) => {
      if (!previous[current[property]]) {
        previous[current[property]] = [current];
      } else {
        previous[current[property]].push(current);
      }

      return previous;
    }, {});
    return Object.keys(groupedCollection).map(date => ({
      date: date,
      events: groupedCollection[date]
    }));
  }
}