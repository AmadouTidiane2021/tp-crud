
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../classes/user';
import { catchError, map } from 'rxjs/operators';


const API_URL = 'https://dry-bastion-69323.herokuapp.com/api/users/';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:8080/user';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  users: Array<User> = new Array<User>();

  constructor(private http: HttpClient) {
  
  }
  // Recupère la liste des utilisateurs
  getAllUsers(): Observable<User[]> {
    let API_URL = `${this.url}/show`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: any) => {
          return res.result || {}
        }),
       catchError(this.errorMgmt)
      )
  }

  // Ajoute un utilisateur
  addUser(data: User) {
    let API_URL = `${this.url}/save`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

// recupere un utilisateur selon son identifiant
getUser(id :number): Observable<any>{
  let API_URL = `${this.url}/getOne/${id}`;
  return this.http.get(API_URL, { headers: this.headers })
  .pipe(
    map((res: any) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
  // return this.http.get(`${this.url}/getOne/${id}`);
 }

// Met à jour un utilisateur selon son identifiant
updateUser(id: number, data: User): Observable<any>{
  let API_URL = `${this.url}/update/${id}`;
  return this.http.put(API_URL, data)
    .pipe(
      map((res: any) => {
        return console.log("service :" + res);
      }),
      catchError(this.errorMgmt)
    );
}

// Supprime un utilisateur selon son identifiant
deleteUser(id: number): Observable<any> {
  var API_URL = `${this.url}/delete/${id}`;
  return this.http.delete(API_URL)
    .pipe(
      catchError(this.errorMgmt)
    )
}


 // Gère les erreurs par rapport au coté serveur
 errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}
}

