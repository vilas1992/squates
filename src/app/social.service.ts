import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  url = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {

   }

  comments(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'comments');
      
  }
  photos(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'albums');      
  }
  albums(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'albums');      
  }
  posts(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'posts');      
  }
  tasks(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'posts');      
  }
  users(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'posts');      
  }

 
}
