import {
	Component,
	Pipe,
	PipeTransform
} from '@angular/core';

@Pipe({
	name: 'groupByDate'
})
export class GroupByPipe implements PipeTransform {
	transform(collection: Array < any > , property: string = 'date'): Array < any > {
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
@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	mockResponse = [{
		date: '2017-12-26',
		id: 1,
		title: 'test 1'
	}, {
		date: '2017-12-26',
		id: 2,
		title: 'test 2'
	}, {
		date: '2017-12-30',
		id: 3,
		title: 'test 3'
	}, {
		date: '2017-12-31',
		id: 4,
		title: 'test 4'
	}];
}