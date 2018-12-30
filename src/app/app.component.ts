
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {FormControl} from '@angular/forms';
export interface PeriodicElement {
  name: string;
  no: number;
  age: number;
  gender: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, name: 'karthi', age: 23, gender: 'Male'},
  {no: 2, name: 'Kumaravel', age: 23, gender: 'Male'},
  {no: 3, name: 'siranji', age: 23, gender: 'Male'},
  {no: 4, name: 'Aunty', age: 24, gender: 'Female'},
  {no: 5, name: 'Suvitha', age: 24, gender: 'Female'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   displayedColumns: string[] = ['No', 'name', 'Age', 'Gender','Operations'];
   dataSource = new MatTableDataSource(ELEMENT_DATA);

   myControl = new FormControl();
   options: string[] = ['One', 'Two', 'Three'];
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
