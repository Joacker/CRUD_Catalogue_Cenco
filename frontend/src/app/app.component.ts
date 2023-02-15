import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['John', 'Mary', 'Peter', 'Bruce'];
  title = 'frontend 1234';
  activated: boolean = true;
  users2 = 1234;
  //Creaciòn de atributos de usuario como una clase
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];
  users3: string[] = ['ryan', 'joe', 'carlos', 'jose'];
  
  name2: string = "John Carter";
  age2: number = 28;
  //constructor de la clase
  /*constructor() {
    this.age = 28;
    this.name = 'John Doe';
    this.address = {
      street: '50 Main st',
      city: 'Boston',
    };
    this.hobbies = ['write code', 'watch movies', 'listen to music'];
  }*/
  posts: Post[] = [];
  constructor(private dataService: DataService) {
    this.age = 28;
    this.name = 'John Doe';
    this.address = {
      street: '50 Main st',
      city: 'Boston',
    };
    this.hobbies = ['write code', 'watch movies', 'listen to music'];
    this.dataService.getDatas().subscribe(data => {
      this.posts = data;
      console.log(data);
    });
  }
  //metodo de decir hola
  sayHello() {
    alert('Hello World');
  };
  //metodo para borrar un usuario

  deleteUser(user: string) {
    for(let i = 0; i < this.users3.length; i++){
      if(user == this.users3[i]){
        this.users3.splice(i, 1);
      }
    }
  }

  //metodo para agregar un usuario
  addUser(newUser: any) {
    console.log(newUser.value);
    this.users3.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }

}