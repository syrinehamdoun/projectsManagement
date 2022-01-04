/*import { Component, ViewChild, ElementRef, OnInit, ChangeDetectionStrategy, Renderer2, OnDestroy } from '@angular/core';
import { ChatService } from './chat.service';
import { UserService } from '../user/user.service';
import { LoginService } from '../login/login.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { NgModule } from '@angular/core';
import { Chat } from './chat.model';
import * as io from 'socket.io-client';
import { Message } from './message.model';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit,OnDestroy {
  socket: any;
  myDate :any;
  chat: Chat[];
  receiveMessageObs: any;
  receiveActiveObs: any;
  activeChatUser: string;
  message: string;
  conversationId: string;
  activeChatUserImg: string;
  messageList: Message[];
  noMsg: boolean;
  notify: boolean;
  notification: any = { timeout: null };
  @ViewChild('messageInput', {static: false}) messageInputRef: ElementRef;
  @ViewChild('newMessage', {static: false}) newMessage: ElementRef;
  @ViewChild('chatSidebar', {static: false}) sidebar:ElementRef;
  @ViewChild('contentOverlay', {static: false}) overlay:ElementRef;

  messages = new Array();
  userList = new Array();
  chatWith: string;
  item: number = 0;
  i: number = 0;
  allusers:any;
  username: string;
  constructor( public route: ActivatedRoute,public el: ElementRef,private elRef: ElementRef, private renderer: Renderer2, private chatService: ChatService,private userService: UserService,private loginService:LoginService) {
    this.userService.getUsers().subscribe(data => {
      console.log(data)
        for(var i=0 ;i< Object.keys(data).length;i++)
        {
          this.userList.push(data[i]);
        }
        this.activeChatUser =this.userList[0].username;

      });
      console.log(this.myDate)
    this.activeChatUserImg = "assets/img/portrait/small/avatar-s-3.png";
  }
  ngOnDestroy() {
    this.receiveActiveObs && this.receiveActiveObs.unsubscribe();
    this.receiveMessageObs && this.receiveMessageObs.unsubscribe();
  }

  ngOnInit() {
    /*this.chatService
      .getMessages()
      .subscribe((message: any) => {
        this.messageList.push(message,(JSON.parse(localStorage.getItem('currentUser'))).username,true);
      });
      let userData = this.loginService.getUserData();
      this.username = userData.user.username;
  
      this.route.params.subscribe((params: Params) => {
        this.chatWith = params.chatWith;
      });
  
  
      //this.getMessages(this.chatWith);
  
      //this.connectToChat();
  }

  sendMessage(messagesend) {
    console.log(messagesend);
   // this.chatService.sendMessage(messagesend);
    this.messageList.push(messagesend);
    this.message = '';
  }
 
  msgSound(): void {
    let audio = new Audio();
    audio.src = "../../../assets/audio/notification.mp3";
    audio.load();
    audio.play();
  }
  
    //send button function calls
  onAddMessage() {
    let newMessageDis: Message = {
      created: new Date(),
      from: (JSON.parse(localStorage.getItem('currentUser'))).userName,
      text: this.messageInputRef.nativeElement.value,
      conversationId: this.conversationId,
      inChatRoom: this.chatWith == 'chat-room',
    };
    this.chatService.sendMessage(newMessageDis,this.chatWith);
    newMessageDis.mine = true;
    this.noMsg = false;
    this.messageList=[];
    this.messageList.push(newMessageDis);
    this.msgSound();
    console.log(this.messageList);
if (this.messageInputRef.nativeElement.value != "") {
      this.messages.push(this.messageInputRef.nativeElement.value);
    }
    this.messageInputRef.nativeElement.value = "";
    this.messageInputRef.nativeElement.focus();
  }

  //chat user list click event function
  SetActive(event, chatId: string,user) {
    var hElement: HTMLElement = this.elRef.nativeElement;
    //now you can simply get your elements with their class name
    var allAnchors = hElement.getElementsByClassName('list-group-item');
    //do something with selected elements
    [].forEach.call(allAnchors, function (item: HTMLElement) {
      item.setAttribute('class', 'list-group-item no-border');
    });
    //set active class for selected item
    event.currentTarget.setAttribute('class', 'list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2');

    this.messages = [];
     if (this.userList.length!=0) {
      this.chat = this.chatService.getMessages();
      this.activeChatUser = user.username;
      this.activeChatUserImg = "assets/img/portrait/small/avatar-s-4.png";
    }

  }

  onSidebarToggle() {
    this.renderer.removeClass(this.sidebar.nativeElement, 'd-none');
    this.renderer.removeClass(this.sidebar.nativeElement, 'd-sm-none');
    this.renderer.addClass(this.sidebar.nativeElement, 'd-block');
    this.renderer.addClass(this.sidebar.nativeElement, 'd-sm-block');
    this.renderer.addClass(this.overlay.nativeElement, 'show');
  }

  onContentOverlay() {
    this.renderer.removeClass(this.overlay.nativeElement, 'show');
    this.renderer.removeClass(this.sidebar.nativeElement, 'd-block');
    this.renderer.removeClass(this.sidebar.nativeElement, 'd-sm-block');
    this.renderer.addClass(this.sidebar.nativeElement, 'd-none');
    this.renderer.addClass(this.sidebar.nativeElement, 'd-sm-none');

  }

}*/
import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Message } from './message.model';

import { ChatService } from './chat.service';
import { LoginService } from '../login/login.service';
import { UserService } from 'app/user/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  messageList: Message[];
  userList: Array<any>;
  showActive: boolean;
  sendForm: FormGroup;
  username: string;
  chatWith: string;
  currentOnline: boolean;
  receiveMessageObs: any;
  receiveActiveObs: any;
  noMsg: boolean;
  conversationId: string;
  notify: boolean;
  notification: any = { timeout: null };
  activeChatUser:String;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public formBuilder: FormBuilder,
    public el: ElementRef,
    public authService: LoginService,
    public chatService: ChatService
  ) {}

  ngOnInit() {
    let userData = this.authService.getUserData();
    this.username = userData.user.userName;

    this.route.params.subscribe((params: Params) => {
      this.chatWith = params.chatWith;
    });

    this.sendForm = this.formBuilder.group({
      message: ['', Validators.required],
    });

    this.getMessages(this.chatWith);

    this.connectToChat();
  }

  ngOnDestroy() {
    this.receiveActiveObs && this.receiveActiveObs.unsubscribe();
    this.receiveMessageObs && this.receiveMessageObs.unsubscribe();
  }

  connectToChat(): void {
    let connected = this.chatService.isConnected();
    if (connected == true) {
      this.initReceivers();
    } else {
      this.chatService.connect(this.username, () => {
        this.initReceivers();
      });
    }
  }

  getMessages(name: string): void {
    this.chatService.getConversation(this.username, name).subscribe(data => {
      if (data.success == true) {
        this.conversationId =
          data.conversation._id || data.conversation._doc._id;
        let messages = data.conversation.messages || null;
        if (messages && messages.length > 0) {
          for (let message of messages) {
            this.checkMine(message);
          }
          this.noMsg = false;
          this.messageList = messages;
          this.scrollToBottom();
        } else {
          this.noMsg = true;
          this.messageList = [];
        }
      } else {
        this.onNewConv('chat-room');
      }
    });
  }

  getUserList(): void {
    this.chatService.getUserList().subscribe(data => {
      if (data!= null) {
        let users = data;
        this.userList = users;
console.log(this.userList)
        for (let i = 0; i < users.length; i++) {
          if (users[i].username == this.username) {
            users.splice(i, 1);
            break;
          }
        }
        this.userList = users.sort(this.compareByUsername);

        this.receiveActiveObs = this.chatService
          .receiveActiveList()
          .subscribe(users => {
            for (let onlineUsr of users) {
              
              if (onlineUsr.username != this.username) {
                let flaggy = 0;
                for (let registered of this.userList) {

                  if (registered.username == onlineUsr.username) {
                    flaggy = 1;
                    break;
                  }
                }
                if (flaggy == 0) {
                  this.userList.push(onlineUsr);
                  this.userList.sort(this.compareByUsername);
                }
              }
            }

            for (let user of this.userList) {
              let flag = 0;
              for (let liveUser of users) {
                console.log("im coneected",users)

                if (liveUser.username == user.username) {
                  user.online = true;
                  flag = 1;
                  break;
                }
              }
              if (flag == 0) {
                user.online = false;
              }
            }

            this.currentOnline = this.checkOnline(this.chatWith);
          });

        this.chatService.getActiveList();
      } else {
        this.onNewConv('chat-room');
      }
    });
  }

  initReceivers(): void {
    this.getUserList();

    this.receiveMessageObs = this.chatService
      .receiveMessage()
      .subscribe(message => {
        this.checkMine(message);
        if (message.conversationId == this.conversationId) {
          this.noMsg = false;
          this.messageList.push(message);
          this.scrollToBottom();
          this.msgSound();
        } else if (message.mine != true) {
          if (this.notification.timeout) {
            clearTimeout(this.notification.timeout);
          }
          this.notification = {
            from: message.from,
            inChatRoom: message.inChatRoom,
            text: message.text,
            timeout: setTimeout(() => {
              this.notify = false;
            }, 4000),
          };
          this.notify = true;
          this.notifSound();
        }
      });
  }
  onSendSubmit(sendMessage): void {
    let newMessage: Message = {
      created: new Date(),
      from: this.username,
      text: sendMessage,
      conversationId: this.conversationId,
      inChatRoom: this.chatWith == 'chat-room',
    };

    this.chatService.sendMessage(newMessage, this.chatWith);
    newMessage.mine = true;
    this.noMsg = false;
    this.messageList.push(newMessage);
    this.scrollToBottom();
    this.msgSound();
    this.sendForm.setValue({ message: '' });
  }

  checkMine(message: Message): void {
    if (message.from == this.username) {
      message.mine = true;
    }
  }

  onUsersClick(): void {
    this.showActive = !this.showActive;
  }

  onNewConv(username: string) {
    if (this.chatWith != username) {
      this.router.navigate(['/chat', username]);
      this.activeChatUser=username;
      this.getMessages(username);
    } else {
      this.getMessages(username);
    }
    this.currentOnline = this.checkOnline(username);
    this.showActive = false;
  }

  notifSound(): void {
    let sound: any = this.el.nativeElement.querySelector('#notifSound');
    sound.play();
  }

  msgSound(): void {
    let sound: any = this.el.nativeElement.querySelector('#msgSound');
    sound.load();
    sound.play();
  }

  scrollToBottom(): void {
    let element: any = this.el.nativeElement.querySelector('.msg-container');
    setTimeout(() => {
      element.scrollTop = element.scrollHeight;
    }, 100);
  }

  checkOnline(name: string): boolean {
    if (name == 'chat-room') {
      for (let user of this.userList) {
        if (user.online == true) {
          return true;
        }
      }
      return false;
    } else {
      for (let user of this.userList) {
        if (user.username == name) {
          return user.online;
        }
      }
    }
  }

  compareByUsername(a, b): number {
    if (a.username < b.username) return -1;
    if (a.username > b.username) return 1;
    return 0;
  }
}
