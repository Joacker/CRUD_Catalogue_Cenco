import { Component } from '@angular/core';

@Component({
  selector: 'app-array-users',
  templateUrl: './array-users.component.html',
  styleUrls: ['./array-users.component.css']
})
export class ArrayUsersComponent {
  users = [
    { name: 'John', age: 20 },
    { name: 'Mary', age: 25 },
    { name: 'Peter', age: 30 }
  ];
  users2 = [ 'John', 'Mary', 'Peter', 'Bruce' ];
  activated = true;
}
