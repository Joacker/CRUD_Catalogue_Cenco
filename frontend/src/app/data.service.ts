import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    console.log('Data Service Initialized...'); 
    httpClient.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        console.log(response);
      });
   }
   getDatas() {
      return this.httpClient.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
    }
}
