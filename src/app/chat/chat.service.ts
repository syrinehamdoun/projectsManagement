import { Injectable } from '@angular/core';
import { Chat } from './chat.model';
import { Socket } from 'ngx-socket-io';
import { Message } from './message.model';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user/user.service';
import { environment } from '../../environments/environment';
import * as io from 'socket.io-client';
import { LoginService } from 'app/login/login.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class ChatService {
    private usersUrl: string = `${environment.backendUrl}/users`;
    private apiUrl: string = `${environment.backendUrl}/messages`;

    userList:any;
    constructor(public http: HttpClient,public authService: LoginService,private socket: Socket,private userService: UserService) { }
     username=JSON.parse(localStorage.getItem('currentUser')).userName;
    connect(username: string, callback: Function = () => {}): void {
        // initialize the connection
        this.socket = io(environment.chatUrl, { path: environment.chatPath });
    
        this.socket.on('error', error => {
          console.log('====================================');
          console.log(error);
          console.log('====================================');
        });
    
        this.socket.on('connect', () => {
          console.log('im connected ',username)
          this.sendUser(username);
          console.log('connected to the chat server');
          callback();
        });
      }
      sendUser(username: string): void {
        this.socket.emit('username', { username: username });
      }
    
    public getUsers() {
        return this.userService.getUsers();
    }
    public sendMessage(message: Message, chatWith: string): void {
        this.socket.emit('message', { message: message, to: chatWith });
        console.log(message,chatWith)
      }
      receiveMessage(): any {
        let observable = new Observable(observer => {
          this.socket.on('message', (data: Message) => {
            observer.next(data);
          });
        });
    
        return observable;
      }
      receiveActiveList(): any {
        let observable = new Observable(observer => {
          this.socket.on('active', data => {
            console.log(data);
            observer.next(data);
          });
        });
    
        return observable;
      }
    public getMessages = () => {
        return Observable.create((observer) => {
                this.socket.on('new-message', (message) => {
                    observer.next(message);
                });
        });
    }
    getUserList(): any {
        let url = this.usersUrl;
    
        let authToken = this.authService.getUserData().token;
    
        // prepare the request
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: authToken,
        });
        let options = { headers: headers };
    
        // POST
        let observableReq = this.http.get(url, options);
    
        return observableReq;
      }
      extractData(res: Response): any {
        let body = res.json();
        return body || {};
      }
      disconnect(): void {
        this.socket.disconnect();
      }
      isConnected(): boolean {
        if (this.socket != null) {
          return true;
        } else {
          return false;
        }
      }
      getActiveList(): void {
        this.socket.emit('getactive');
      }
      getConversation(name1: string, name2: string): any {
        let url = this.apiUrl;
        if (name2 != 'chat-room') {
          let route = '/' + name1 + '/' + name2;
          url += route;
        }
       
        let authToken = this.authService.getUserData().token;
    
        // prepare the request
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: authToken,
        });
        let options = { headers: headers };
    
        // POST
        let observableReq = this.http.get(url, options);

           return observableReq;

      }
    
}