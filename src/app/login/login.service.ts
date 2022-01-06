import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable /*, of */} from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Login } from './login';
import { User } from './user';

//https://jasonwatmore.com/fr/post/2019/06/10/angular-8-tutoriel-et-exemple-sur-lenregistrement-et-lauthentification-des-utilisateurs
const  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({//
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient,  private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  
  url = 'https://projects-management-itbs.herokuapp.com'
  result;
  private authToken: string;
  private user: string;

  loginUser(login: { userName: string; password: string; }) {
    
    console.log("Service Login"+login)
    this
      .http
      .post(`${this.url}/api/users/login`,{login},httpOptions)     
        .subscribe((res)=>{
          console.log(res['auth'])
          console.log(res['user'])
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(res))
          if( res['auth']==true){
            this.router.navigate(['/Accueil']);
        }
        else{
            alert( res['auth'])
        }
      });
    
      
     
    
  }

  login(login: { userName: string; password: string; }) {
    return this.http.post<any>(`${this.url}/api/users/login`, { login })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }

  logout() {
  // remove user from local storage and set current user to null
  this.authToken = null;
  this.user = null;
  localStorage.clear();
      this.currentUserSubject.next(null);
   
  
  }
  getUserData(): any {
    this.loadCredentials();
    let jUser = JSON.parse(localStorage.getItem('currentUser'));
    let jData = { token: this.authToken, user: jUser };

    return jData;
  }

  loadCredentials(): void {
    let token = JSON.parse(localStorage.getItem('currentUser')).token;
    let user = localStorage.getItem('currentUser');
    this.authToken = token;
    this.user = user;
  }


  



}








