(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/active-list/active-list.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/active-list/active-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div id=\"users-list\" class=\"list-group position-relative\">\r\n\r\n    <div class=\"users-list-padding\">\r\n      <a class=\"list-group-item no-border\" (click)=\"onUserClick('chat-room')\" [ngClass]=\"{active: current == 'chat-room'}\">\r\n        <span class=\"media\">\r\n          <div class=\"media-body  text-left\">\r\n            <h6 class=\"list-group-item-heading\" style=\"color: #009DA0;\">Chat Room for all\r\n            </h6>\r\n                </div>\r\n        </span>\r\n    </a>\r\n      <div *ngFor=\"let user of users\">\r\n  \r\n      <a class=\"list-group-item no-border\" (click)=\"onUserClick(user.username)\" [ngClass]=\"{active: user.username == current, online: user.online}\"    >\r\n  \r\n        <span class=\"media\">\r\n          <span class=\"avatar avatar-md avatar-busy\">\r\n            <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-4.png\"\r\n              alt=\"Generic placeholder image\">\r\n            <i></i>\r\n          </span>\r\n          <div class=\"media-body  text-left\">\r\n            <h6 class=\"list-group-item-heading\">{{user.username}}\r\n              <span *ngIf=\"user.online\"class=\"font-small-3 float-right primary\">connect</span>\r\n            </h6>\r\n            <!--<p class=\"list-group-item-text text-muted\">\r\n              <i class=\"ft-check font-small-2\"></i> I love you </p>-->\r\n          </div>\r\n        </span>\r\n      \r\n      </a>\r\n    </div>\r\n    </div>\r\n  \r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-application\">\r\n  <div #contentOverlay class=\"content-overlay\" (click)=\"onContentOverlay()\"></div>\r\n  <div [perfectScrollbar] #chatSidebar class=\"chat-sidebar float-left d-none d-sm-none d-md-block d-lg-block\">\r\n    <div class=\"chat-sidebar-content\">\r\n      <div class=\"chat-fixed-search p-2\">\r\n        <form>\r\n          <div class=\"position-relative has-icon-left\">\r\n            <input class=\"form-control\" id=\"timesheetinput1\" name=\"employeename\" type=\"text\">\r\n            <div class=\"form-control-position\">\r\n              <i class=\"ft-user\"></i>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <app-active-list [users]=\"userList\" [current]=\"chatWith\" (newConv)=\"onNewConv($event)\"></app-active-list>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"chat-name p-2 bg-white\">\r\n    <div class=\"media\">\r\n      <span class=\"chat-app-sidebar-toggle ft-align-justify font-large-1 mr-2 d-none d-block d-sm-block d-md-none\" (click)=\"onSidebarToggle()\"></span>\r\n      <div class=\"media-body text-left\">\r\n        <img [src]=\"[activeChatUserImg]\" width=\"37\" class=\"rounded-circle mr-1\" alt=\"avatar\" />\r\n        <span>{{ activeChatUser }}</span>\r\n        <i class=\"ft-more-vertical float-right mt-1\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <section class=\"chat-app-window\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\r\n    <div class=\"badge badge-dark mb-1\">Chat History</div>\r\n    <div class=\"chats\">\r\n      <div class=\"chats\">\r\n\r\n        <div class=\"chat\" *ngIf=\"messageList\">\r\n          <div class=\"chat-avatar\">\r\n            <a class=\"avatar\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"\" data-original-title=\"\">\r\n              <img src=\"../../assets/img/generic-avatar.png\" class=\"width-50\" alt=\"avatar\" />\r\n            </a>\r\n          </div>\r\n          <div class=\"chat-body\">\r\n                  <app-message *ngFor=\"let message of messageList\" [message]=\"message\"></app-message>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"chat-app-form bg-blue-grey bg-lighten-5\">\r\n    <form class=\"chat-app-input row mt-2\">\r\n      <fieldset class=\"form-group position-relative has-icon-left col-lg-10 col-8 m-0 px-3\">\r\n        <div class=\"form-control-position\">\r\n          <i class=\"icon-emoticon-smile\"></i>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" #messageInput\r\n        name=\"message\" placeholder=\"Type your message\" [(ngModel)]=\"sendMessage\" (keydown.enter)=\"onSendSubmit(sendMessage);$event.preventDefault()\">\r\n        <div class=\"form-control-position control-position-right\">\r\n          <i class=\"ft-image mr-1\"></i>\r\n        </div>\r\n      </fieldset>\r\n      <fieldset class=\"form-group position-relative has-icon-left col-lg-2 col-4 m-0\">\r\n        <button  name=\"send\" type=\"button\" class=\"btn btn-raised btn-primary px-4\" (click)=\"onSendSubmit(sendMessage)\">\r\n          <i class=\"fa fa-paper-plane-o d-block d-xl-inline-block d-lg-none p-0\"></i>\r\n          <span class=\"d-none d-lg-inline-block ml-1\">Send</span>\r\n        </button>\r\n      </fieldset>\r\n    </form>\r\n  </section>\r\n</div>\r\n\r\n  \r\n  \r\n<audio id=\"notifSound\"><source src=\"../../app/chat/assets/audio/notification.mp3\" type=\"audio/mpeg\"></audio>\r\n  <audio id=\"msgSound\" ><source src=\"../../app/chat/assets/audio/notification.mp3\" type=\"audio/mpeg\">\r\n  \r\n  </audio>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/message/message.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/message/message.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel message\" [ngClass]=\"{'panel-info': message.mine, 'panel-warning': !message.mine}\">\r\n  <div class=\"panel-body\" [ngClass]=\"{mine: message.mine}\">\r\n      <div *ngIf=\"!message.mine\" class=\"avatar\">\r\n        <img src=\"../../assets/img/generic-avatar.png\" alt=\"avatar\" height=\"57px\" width=\"50px\">\r\n      </div>\r\n\r\n      <div class=\"msg-text-container\">\r\n        <p *ngIf=\"!message.mine\" class=\"list-group-item-heading\">{{message.from}}</p>\r\n        <div class=\"chat-contentNotMine\"*ngIf=\"!message.mine\" style=\"background: rgb(156, 153, 153);\">\r\n          <p >{{ message.text }}</p>\r\n        </div>\r\n        <div class=\"chat-content\"*ngIf=\"message.mine\" >\r\n          <p >{{ message.text }}</p>\r\n        </div>\r\n        <p  class=\"time\" id=\"time\" [ngClass]=\"{'fade-in': fadeTime}\">•{{time}}</p>\r\n      </div>\r\n\r\n    <div *ngIf=\"message.mine\" class=\"avatar\">\r\n       <img src=\"../../assets/img/generic-avatar.png\" alt=\"avatar\" height=\"57px\" width=\"50px\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app/active-list/active-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/active-list/active-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  margin-top: 24px;\n  margin-bottom: 0;\n  height: calc(100vh - 194px);\n  overflow-y: scroll; }\n  @media only screen and (min-width: 768px) {\n    ul {\n      height: calc(100vh - 154px);\n      overflow-y: scroll; } }\n  ul a.list-group-item {\n    border-right: none;\n    border-left: none; }\n  ul a.list-group-item span.glyphicon-comment {\n      color: #4CAF50; }\n  ul a.list-group-item.online span.glyphicon {\n      color: #4CAF50; }\n  ul a.list-group-item.online img {\n      border: 2px solid #4CAF50; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZlLWxpc3QvQzpcXFVzZXJzXFxhc3VzXFxEZXNrdG9wXFxwcm9qZWN0c01hbmFnZW1lbnQvc3JjXFxhcHBcXGFjdGl2ZS1saXN0XFxhY3RpdmUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGtCQUFrQixFQUFBO0VBRWxCO0lBTko7TUFPTSwyQkFBMkI7TUFDM0Isa0JBQWtCLEVBQUEsRUFxQnJCO0VBN0JIO0lBWU0sa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBO0VBYnZCO01BZ0JRLGNBQWMsRUFBQTtFQWhCdEI7TUFxQlUsY0FBYyxFQUFBO0VBckJ4QjtNQXlCVSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjdGl2ZS1saXN0L2FjdGl2ZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxOTRweCk7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1NHB4KTtcclxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYS5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIFxyXG4gICAgICBzcGFuLmdseXBoaWNvbi1jb21tZW50IHtcclxuICAgICAgICBjb2xvcjogIzRDQUY1MDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAmLm9ubGluZSB7XHJcbiAgICAgICAgc3Bhbi5nbHlwaGljb24ge1xyXG4gICAgICAgICAgY29sb3I6ICM0Q0FGNTA7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNENBRjUwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/active-list/active-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/active-list/active-list.component.ts ***!
  \******************************************************/
/*! exports provided: ActiveListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveListComponent", function() { return ActiveListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActiveListComponent = /** @class */ (function () {
    function ActiveListComponent() {
        this.newConv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ActiveListComponent.prototype.ngOnInit = function () {
    };
    ActiveListComponent.prototype.onUserClick = function (username) {
        this.newConv.emit(username);
        return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ActiveListComponent.prototype, "users", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ActiveListComponent.prototype, "current", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ActiveListComponent.prototype, "newConv", void 0);
    ActiveListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-active-list',
            template: __webpack_require__(/*! raw-loader!./active-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/active-list/active-list.component.html"),
            styles: [__webpack_require__(/*! ./active-list.component.scss */ "./src/app/active-list/active-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ActiveListComponent);
    return ActiveListComponent;
}());



/***/ }),

/***/ "./src/app/active-list/active-list.module.ts":
/*!***************************************************!*\
  !*** ./src/app/active-list/active-list.module.ts ***!
  \***************************************************/
/*! exports provided: ActiveListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveListModule", function() { return ActiveListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _active_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./active-list.component */ "./src/app/active-list/active-list.component.ts");




var ActiveListModule = /** @class */ (function () {
    function ActiveListModule() {
    }
    ActiveListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_active_list_component__WEBPACK_IMPORTED_MODULE_3__["ActiveListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _active_list_component__WEBPACK_IMPORTED_MODULE_3__["ActiveListComponent"]
            ]
        })
    ], ActiveListModule);
    return ActiveListModule;
}());



/***/ }),

/***/ "./src/app/chat/chat-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ChatRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat.component */ "./src/app/chat/chat.component.ts");





var routes = [
    {
        path: '',
        component: _chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"],
        data: {
            title: 'Chat'
        },
        canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            { path: ':chatWith', component: _chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"] },
            { path: '**', redirectTo: '/chat/chat-room', pathMatch: 'full' }
        ]
    }
];
var ChatRoutingModule = /** @class */ (function () {
    function ChatRoutingModule() {
    }
    ChatRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChatRoutingModule);
    return ChatRoutingModule;
}());

var routedComponents = [_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"]];


/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat/chat.service.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var app_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/user/user.service */ "./src/app/user/user.service.ts");

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






var ChatComponent = /** @class */ (function () {
    function ChatComponent(route, router, formBuilder, el, authService, chatService, userService, elRef) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.el = el;
        this.authService = authService;
        this.chatService = chatService;
        this.userService = userService;
        this.elRef = elRef;
        this.userList = new Array();
        this.notification = { timeout: null };
        this.userService.getUsers().subscribe(function (data) {
            console.log(data);
            for (var i = 0; i < Object.keys(data).length; i++) {
                _this.userList.push(data[i]);
            }
            _this.activeChatUser = _this.userList[0].username;
        });
        this.activeChatUserImg = "../../assets/img/generic-avatar.png";
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userData = this.authService.getUserData();
        this.username = userData.user.userName;
        this.route.params.subscribe(function (params) {
            _this.chatWith = params.chatWith;
        });
        this.sendForm = this.formBuilder.group({
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.getMessages(this.chatWith);
        this.connectToChat();
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.receiveActiveObs && this.receiveActiveObs.unsubscribe();
        this.receiveMessageObs && this.receiveMessageObs.unsubscribe();
    };
    ChatComponent.prototype.connectToChat = function () {
        var _this = this;
        var connected = this.chatService.isConnected();
        if (connected == true) {
            this.initReceivers();
        }
        else {
            this.chatService.connect(this.username, function () {
                _this.initReceivers();
            });
        }
    };
    ChatComponent.prototype.getMessages = function (name) {
        var _this = this;
        this.chatService.getConversation(this.username, name).subscribe(function (data) {
            if (data.success == true) {
                _this.conversationId =
                    data.conversation._id || data.conversation._doc._id;
                var messages = data.conversation.messages || null;
                if (messages && messages.length > 0) {
                    for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                        var message = messages_1[_i];
                        _this.checkMine(message);
                    }
                    _this.noMsg = false;
                    _this.messageList = messages;
                    // this.scrollToBottom();
                }
                else {
                    _this.noMsg = true;
                    _this.messageList = [];
                }
            }
            else {
                _this.onNewConv('chat-room');
            }
        });
    };
    ChatComponent.prototype.getUserList = function () {
        var _this = this;
        this.chatService.getUserList().subscribe(function (data) {
            if (data != null) {
                var users = data;
                _this.userList = users;
                console.log(_this.userList);
                for (var i = 0; i < users.length; i++) {
                    if (users[i].username == _this.username) {
                        users.splice(i, 1);
                        break;
                    }
                }
                _this.userList = users.sort(_this.compareByUsername);
                _this.receiveActiveObs = _this.chatService
                    .receiveActiveList()
                    .subscribe(function (users) {
                    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                        var onlineUsr = users_1[_i];
                        if (onlineUsr.username != _this.username) {
                            var flaggy = 0;
                            for (var _a = 0, _b = _this.userList; _a < _b.length; _a++) {
                                var registered = _b[_a];
                                if (registered.username == onlineUsr.username) {
                                    flaggy = 1;
                                    break;
                                }
                            }
                            if (flaggy == 0) {
                                _this.userList.push(onlineUsr);
                                _this.userList.sort(_this.compareByUsername);
                            }
                        }
                    }
                    for (var _c = 0, _d = _this.userList; _c < _d.length; _c++) {
                        var user = _d[_c];
                        var flag = 0;
                        for (var _e = 0, users_2 = users; _e < users_2.length; _e++) {
                            var liveUser = users_2[_e];
                            console.log("im coneected", users);
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
                    _this.currentOnline = _this.checkOnline(_this.chatWith);
                });
                _this.chatService.getActiveList();
            }
            else {
                _this.onNewConv('chat-room');
            }
        });
    };
    ChatComponent.prototype.initReceivers = function () {
        var _this = this;
        this.getUserList();
        this.receiveMessageObs = this.chatService
            .receiveMessage()
            .subscribe(function (message) {
            _this.checkMine(message);
            if (message.conversationId == _this.conversationId) {
                _this.noMsg = false;
                _this.messageList.push(message);
                // this.scrollToBottom();
                _this.msgSound();
            }
            else if (message.mine != true) {
                if (_this.notification.timeout) {
                    clearTimeout(_this.notification.timeout);
                }
                _this.notification = {
                    from: message.from,
                    inChatRoom: message.inChatRoom,
                    text: message.text,
                    timeout: setTimeout(function () {
                        _this.notify = false;
                    }, 4000),
                };
                _this.notify = true;
                _this.notifSound();
            }
        });
    };
    ChatComponent.prototype.onSendSubmit = function (sendMessage) {
        if (this.messageInputRef.nativeElement.value != "") {
            var newMessage = {
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
            //this.scrollToBottom();
            this.messageInputRef.nativeElement.value = "";
            this.messageInputRef.nativeElement.focus();
            this.onNewConv(this.activeChatUser);
            this.msgSound();
        }
    };
    ChatComponent.prototype.checkMine = function (message) {
        if (message.from == this.username) {
            message.mine = true;
        }
    };
    ChatComponent.prototype.onUsersClick = function () {
        this.showActive = !this.showActive;
    };
    ChatComponent.prototype.onNewConv = function (username) {
        if (this.chatWith != username) {
            this.router.navigate(['/chat', username]);
            this.activeChatUser = username;
            this.getMessages(username);
        }
        else {
            this.getMessages(username);
        }
        this.currentOnline = this.checkOnline(username);
        this.showActive = false;
    };
    ChatComponent.prototype.notifSound = function () {
        var sound = this.el.nativeElement.querySelector('#notifSound');
        sound.play();
    };
    ChatComponent.prototype.msgSound = function () {
        var sound = this.el.nativeElement.querySelector('#msgSound');
        sound.load();
        sound.play();
    };
    /*scrollToBottom(): void {
      let element: any = this.el.nativeElement.querySelector('.msg-container');
      setTimeout(() => {
        element.scrollTop = element.scrollHeight;
      }, 100);
    }*/
    ChatComponent.prototype.checkOnline = function (name) {
        if (name == 'chat-room') {
            for (var _i = 0, _a = this.userList; _i < _a.length; _i++) {
                var user = _a[_i];
                if (user.online == true) {
                    return true;
                }
            }
            return false;
        }
        else {
            for (var _b = 0, _c = this.userList; _b < _c.length; _b++) {
                var user = _c[_b];
                if (user.username == name) {
                    return user.online;
                }
            }
        }
    };
    ChatComponent.prototype.compareByUsername = function (a, b) {
        if (a.username < b.username)
            return -1;
        if (a.username > b.username)
            return 1;
        return 0;
    };
    ChatComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: _chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"] },
        { type: app_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageInput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatComponent.prototype, "messageInputRef", void 0);
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"],
            app_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! videogular2/core */ "./node_modules/videogular2/core.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(videogular2_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! videogular2/controls */ "./node_modules/videogular2/controls.js");
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(videogular2_controls__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! videogular2/overlay-play */ "./node_modules/videogular2/overlay-play.js");
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! videogular2/buffering */ "./node_modules/videogular2/buffering.js");
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(videogular2_buffering__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/chat/chat-routing.module.ts");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_active_list_active_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/active-list/active-list.module */ "./src/app/active-list/active-list.module.ts");
/* harmony import */ var app_message_message_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/message/message.module */ "./src/app/message/message.module.ts");













var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _chat_routing_module__WEBPACK_IMPORTED_MODULE_8__["ChatRoutingModule"],
                videogular2_core__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"],
                videogular2_controls__WEBPACK_IMPORTED_MODULE_4__["VgControlsModule"],
                videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5__["VgOverlayPlayModule"],
                videogular2_buffering__WEBPACK_IMPORTED_MODULE_6__["VgBufferingModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                app_active_list_active_list_module__WEBPACK_IMPORTED_MODULE_11__["ActiveListModule"],
                app_message_message_module__WEBPACK_IMPORTED_MODULE_12__["MessageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
            ],
            declarations: [
                _chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"],
            ]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/message/message.component.scss":
/*!************************************************!*\
  !*** ./src/app/message/message.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* -------------------------------------------------------------\r\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\r\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\r\n\r\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\r\n\r\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\r\n  ENDING css files\r\n\r\n  note: All CSS3 Properties are being supported by Safari 5\r\n  more info: http://www.findmebyip.com/litmus/#css3-properties\r\n\r\n------------------------------------------------------------- */\n/**\r\n* SassFlexbox\r\n* Manage Flexbox in Sass easily.\r\n*\r\n* @author     Samuel Marchal (zessx)\r\n* @version    0.1\r\n*/\n/*\r\n    Display\r\n */\n.panel-body {\n  display: -webkit-flexbox;\n  display: flex; }\n/*\r\n    Flex direction\r\n */\n/*\r\n    Flex wrap\r\n */\n/*\r\n    Flex flow\r\n */\n/*\r\n    Order\r\n */\n/*\r\n    Flex grow\r\n */\n/*\r\n    Flex shrink\r\n */\n/*\r\n    Flex basis\r\n */\n/*\r\n    Flex\r\n */\n/*\r\n    Justify content\r\n */\n.panel-body.mine {\n  -webkit-flex-pack: end;\n  -moz-justify-content: flex-end;\n  justify-content: flex-end; }\n/*\r\n    Align items\r\n */\n/*\r\n    Align self\r\n */\n/*\r\n    Align content\r\n */\n.panel-body.mine {\n  text-align: right; }\n.panel-body .avatar {\n  height: 57px;\n  width: 50px;\n  padding-left: 0;\n  padding-right: 0; }\n.panel-body .msg-text-container {\n  padding-left: 10px;\n  padding-right: 10px; }\n.panel-body .msg-text-container .msg-text {\n    margin-top: 12px; }\n#time {\n  filter: alpha(opacity=0);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  -webkit-opacity: 0;\n  -khtml-opacity: 0;\n  -moz-opacity: 0;\n  -ms-opacity: 0;\n  -o-opacity: 0;\n  opacity: 0;\n  transition: opacity .2s ease-in 0s; }\n#time.fade-in {\n    filter: alpha(opacity=100);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n    -webkit-opacity: 1;\n    -khtml-opacity: 1;\n    -moz-opacity: 1;\n    -ms-opacity: 1;\n    -o-opacity: 1;\n    opacity: 1; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9DOlxcVXNlcnNcXGFzdXNcXERlc2t0b3BcXHByb2plY3RzTWFuYWdlbWVudC9zcmNcXGFzc2V0c1xcc2Fzc1xcc2Nzc1xcY3NzMy1taXhpbnMuc2NzcyIsInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZXNzYWdlL0M6XFxVc2Vyc1xcYXN1c1xcRGVza3RvcFxccHJvamVjdHNNYW5hZ2VtZW50L3NyY1xcYXNzZXRzXFxzYXNzXFxzY3NzXFxzYXNzLWZsZXhib3guc2NzcyIsInNyYy9hcHAvbWVzc2FnZS9DOlxcVXNlcnNcXGFzdXNcXERlc2t0b3BcXHByb2plY3RzTWFuYWdlbWVudC9zcmNcXGFwcFxcbWVzc2FnZVxcbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OytEQ1krRDtBQ1ovRDs7Ozs7O0NEbUJDO0FDVkQ7O0VEYUU7QUVwQkY7RURhSSx3QkFBd0I7RUFHeEIsYUFBYSxFQUFBO0FBYWpCOztFREVFO0FDb0RGOztFRGpERTtBQ21GRjs7RURoRkU7QUN3RkY7O0VEckZFO0FDaUdGOztFRDlGRTtBQ3lHRjs7RUR0R0U7QUNpSEY7O0VEOUdFO0FDd0hGOztFRHJIRTtBQzhIRjs7RUQzSEU7QUV2REY7RURpTUksc0JBQXNCO0VBRXRCLDhCQUE4QjtFQUU5Qix5QkFBeUIsRUFBQTtBQXlDN0I7O0VEM0tFO0FDK05GOztFRDVORTtBQ2dSRjs7RUQ3UUU7QUV6RUY7RUFLSSxpQkFBaUIsRUFBQTtBQUxyQjtFQVNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0FBWnBCO0VBZ0JJLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTtBQWpCdkI7SUFvQk0sZ0JBQWdCLEVBQUE7QUFLdEI7RUhnUEksd0JBQWlEO0VBQ2pELGdFQUE2RjtFQWxQL0Ysa0JBQThCO0VBQzdCLGlCQUE0QjtFQUMxQixlQUF3QjtFQUN2QixjQUFzQjtFQUNyQixhQUFvQjtFQUNqQixVQUFjO0VBQWQsa0NBQWMsRUFBQTtBR0p4QjtJSGdQSSwwQkFBaUQ7SUFDakQsa0VBQTZGO0lBbFAvRixrQkFBOEI7SUFDN0IsaUJBQTRCO0lBQzFCLGVBQXdCO0lBQ3ZCLGNBQXNCO0lBQ3JCLGFBQW9CO0lBQ2pCLFVBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBTYXNzIENTUzMgTWl4aW5zISBUaGUgQ3Jvc3MtQnJvd3NlciBDU1MzIFNhc3MgTGlicmFyeVxyXG4gIEJ5OiBNYXR0aGlldSBBdXNzYWd1ZWwsIGh0dHA6Ly93d3cubXluYW1laXNtYXR0aGlldS5jb20sIEBtYXR0aGlldV90d2VldHNcclxuXHJcbiAgTGlzdCBvZiBDU1MzIFNhc3MgTWl4aW5zIEZpbGUgdG8gYmUgQGltcG9ydGVkIGFuZCBAaW5jbHVkZWQgYXMgeW91IG5lZWRcclxuXHJcbiAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBsaWJyYXJ5IGlzIHRvIGZhY2lsaXRhdGUgdGhlIHVzZSBvZiBDU1MzIG9uIGRpZmZlcmVudCBicm93c2VycyBhdm9pZGluZyBIQVJEIFRPIFJFQUQgYW5kIE5FVkVSXHJcbiAgRU5ESU5HIGNzcyBmaWxlc1xyXG5cclxuICBub3RlOiBBbGwgQ1NTMyBQcm9wZXJ0aWVzIGFyZSBiZWluZyBzdXBwb3J0ZWQgYnkgU2FmYXJpIDVcclxuICBtb3JlIGluZm86IGh0dHA6Ly93d3cuZmluZG1lYnlpcC5jb20vbGl0bXVzLyNjc3MzLXByb3BlcnRpZXNcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG4vLy8vXHJcbi8vLyBAYXV0aG9yIE1hdHRoaWV1IEF1c3NhZ3VlbFxyXG4vLy8gQGdyb3VwIHNhc3MtY3NzMy1taXhpbnNcclxuLy8vL1xyXG5cclxuXHJcbi8vLyBBZGRzIGEgYnJvd3NlciBwcmVmaXggdG8gdGhlIHByb3BlcnR5XHJcbi8vLyBAcGFyYW0geyp9ICRwcm9wZXJ0eSBQcm9wZXJ0eVxyXG4vLy8gQHBhcmFtIHsqfSAkdmFsdWUgVmFsdWVcclxuXHJcbkBtaXhpbiBjc3MzLXByZWZpeCgkcHJvcGVydHksICR2YWx1ZSkge1xyXG4gIC13ZWJraXQtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XHJcbiAgIC1raHRtbC0jeyRwcm9wZXJ0eX06ICN7JHZhbHVlfTtcclxuICAgICAtbW96LSN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xyXG4gICAgICAtbXMtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XHJcbiAgICAgICAtby0jeyRwcm9wZXJ0eX06ICN7JHZhbHVlfTtcclxuICAgICAgICAgICN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xyXG59XHJcblxyXG5cclxuLy8vIEJhY2tncm91bmQgR3JhZGllbnRcclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRzdGFydENvbG9yIFsjM0MzQzNDXSAtIFN0YXJ0IENvbG9yXHJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkZW5kQ29sb3IgWyM5OTk5OTldIC0gRW5kIENvbG9yXHJcblxyXG5AbWl4aW4gYmFja2dyb3VuZC1ncmFkaWVudCgkc3RhcnRDb2xvcjogIzNDM0MzQywgJGVuZENvbG9yOiAjOTk5OTk5KSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3RhcnRDb2xvcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oJHN0YXJ0Q29sb3IpLCB0bygkZW5kQ29sb3IpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogICAgIC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xyXG4gICAgZmlsdGVyOiAgICAgICAgICAgIHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yU3RyPScjeyRzdGFydENvbG9yfScsIGVuZENvbG9yU3RyPScjeyRlbmRDb2xvcn0nKTtcclxufVxyXG5cclxuXHJcbi8vLyBCYWNrZ3JvdW5kIEhvcml6b250YWxcclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRzdGFydENvbG9yIFsjM0MzQzNDXSAtIFN0YXJ0IENvbG9yXHJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkZW5kQ29sb3IgWyM5OTk5OTldIC0gRW5kIENvbG9yXHJcblxyXG5AbWl4aW4gYmFja2dyb3VuZC1ob3Jpem9udGFsKCRzdGFydENvbG9yOiAjM0MzQzNDLCAkZW5kQ29sb3I6ICM5OTk5OTkpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdGFydENvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oJHN0YXJ0Q29sb3IpLCB0bygkZW5kQ29sb3IpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogICAgLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogICAgICAgICBsaW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XHJcbiAgICBmaWx0ZXI6ICAgICAgICAgICAgcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JTdHI9JyN7JHN0YXJ0Q29sb3J9JywgZW5kQ29sb3JTdHI9JyN7JGVuZENvbG9yfScsIGdyYWRpZW50VHlwZT0nMScpO1xyXG59XHJcblxyXG5cclxuLy8vIEJhY2tncm91bmQgUmFkaWFsXHJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxyXG4vLy8gQHBhcmFtIHtQZXJjZW50YWdlfSAkc3RhcnRQb3MgWzAlXSAtIFN0YXJ0IHBvc2l0aW9uXHJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkZW5kQ29sb3IgWyM5OTk5OTldIC0gRW5kIENvbG9yXHJcbi8vLyBAcGFyYW0ge1BlcmNlbnRhZ2V9ICRlbmRQb3MgWzEwMCVdIC0gRW5kIHBvc2l0aW9uXHJcblxyXG5AbWl4aW4gYmFja2dyb3VuZC1yYWRpYWwoJHN0YXJ0Q29sb3I6ICNGRkZGRkYsICRzdGFydFBvczogMCUsICRlbmRDb2xvcjogIzAwMDAwMCwgJGVuZFBvczoxMDAlKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywgJGVuZENvbG9yICRlbmRQb3MpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgkc3RhcnRQb3MsJHN0YXJ0Q29sb3IpLCBjb2xvci1zdG9wKCRlbmRQb3MsJGVuZENvbG9yKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XHJcbn1cclxuXHJcblxyXG4vLy8gQmFja2dyb3VuZCBTaXplXHJcbi8vLyBAcGFyYW0ge1NpemV9ICR3aWR0aCBbMTAwJV0gLSBXaWR0aFxyXG4vLy8gQHBhcmFtIHtTaXplfSAkd2lkdGggWyR3aWR0aF0gLSBIZWlnaHRcclxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcclxuXHJcbkBtaXhpbiBiYWNrZ3JvdW5kLXNpemUoJHdpZHRoOiAxMDAlLCAkaGVpZ2h0OiAkd2lkdGgpIHtcclxuICBAaWYgdHlwZS1vZigkd2lkdGgpID09ICdudW1iZXInIGFuZCAkaGVpZ2h0ICE9IG51bGwge1xyXG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JhY2tncm91bmQtc2l6ZScsICR3aWR0aCAkaGVpZ2h0KTtcclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdiYWNrZ3JvdW5kLXNpemUnLCAkd2lkdGgpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vLyBCYWNrZ3JvdW5kIENvbG9yIE9wYWNpdHlcclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciBbMTAwJV0gLSBDb2xvclxyXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRvcGFjaXR5IFswLjg1XSAtIE9wYWNpdHlcclxuXHJcbkBtaXhpbiBiYWNrZ3JvdW5kLW9wYWNpdHkoJGNvbG9yOiAjMDAwLCAkb3BhY2l0eTogMC44NSkge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xyXG59XHJcblxyXG5cclxuLy8vIEJvcmRlciBSYWRpdXNcclxuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbNXB4XSAtIFJhZGl1c1xyXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxyXG5cclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1czogNXB4KSB7XHJcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm9yZGVyLXJhZGl1cycsICRyYWRpdXMpO1xyXG59XHJcblxyXG5cclxuLy8vIEJvcmRlciBSYWRpdXMgU2VwYXJhdGVcclxuLy8vIEBwYXJhbSB7U2l6ZX0gJHRvcExlZnRSYWRpdXMgWzVweF0gLSBUb3AgTGVmdFxyXG4vLy8gQHBhcmFtIHtTaXplfSAkdG9wUmlnaHRSYWRpdXMgWzVweF0gLSBUb3AgUmlnaHRcclxuLy8vIEBwYXJhbSB7U2l6ZX0gJGJvdHRvbUxlZnRSYWRpdXMgWzVweF0gLSBCb3R0b20gTGVmdFxyXG4vLy8gQHBhcmFtIHtTaXplfSAkYm90dG9tUmlnaHRSYWRpdXMgWzVweF0gLSBCb3R0b20gUmlnaHRcclxuXHJcbkBtaXhpbiBib3JkZXItcmFkaXVzLXNlcGFyYXRlKCR0b3BMZWZ0UmFkaXVzOiA1cHgsICR0b3BSaWdodFJhZGl1czogNXB4LCAkYm90dG9tTGVmdFJhZGl1czogNXB4LCAkYm90dG9tUmlnaHRSYWRpdXM6IDVweCkge1xyXG4gIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogICAgICR0b3BMZWZ0UmFkaXVzO1xyXG4gIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICAgICR0b3BSaWdodFJhZGl1cztcclxuICAtd2Via2l0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tUmlnaHRSYWRpdXM7XHJcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAgJGJvdHRvbUxlZnRSYWRpdXM7XHJcblxyXG4gIC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiAgICAgJHRvcExlZnRSYWRpdXM7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiAgICAkdG9wUmlnaHRSYWRpdXM7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbXJpZ2h0OiAkYm90dG9tUmlnaHRSYWRpdXM7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6ICAkYm90dG9tTGVmdFJhZGl1cztcclxuXHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogICAgICR0b3BMZWZ0UmFkaXVzO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAgICAkdG9wUmlnaHRSYWRpdXM7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21SaWdodFJhZGl1cztcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAgJGJvdHRvbUxlZnRSYWRpdXM7XHJcbn1cclxuXHJcblxyXG4vLy8gQm94XHJcbi8vLyBAcGFyYW0geyp9ICRvcmllbnQgW2hvcml6b250YWxdIC0gT3JpZW50YXRpb25cclxuLy8vIEBwYXJhbSB7Kn0gJHBhY2sgW2NlbnRlcl0gLSBQYWNrXHJcbi8vLyBAcGFyYW0geyp9ICRhbGlnbiBbY2VudGVyXSAtIEFsaWduXHJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XHJcblxyXG5AbWl4aW4gYm94KCRvcmllbnQ6IGhvcml6b250YWwsICRwYWNrOiBjZW50ZXIsICRhbGlnbjogY2VudGVyKSB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogYm94O1xyXG5cclxuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LW9yaWVudCcsICRvcmllbnQpO1xyXG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtcGFjaycsICRwYWNrKTtcclxuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LWFsaWduJywgJGFsaWduKTtcclxufVxyXG5cclxuXHJcbi8vLyBCb3ggUkdCQVxyXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkciBbNjBdIC0gUmVkXHJcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRnIFszXSAtIEdyZWVuXHJcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRiIFsxMl0gLSBCbHVlXHJcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG9wYWNpdHkgWzAuMjNdIC0gT3BhY2l0eVxyXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFsjM0MzQzNDXSAtIENvbG9yXHJcblxyXG5AbWl4aW4gYm94LXJnYmEoJHI6IDYwLCAkZzogMywgJGI6IDEyLCAkb3BhY2l0eTogMC4yMywgJGNvbG9yOiAjM0MzQzNDKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkciwgJGcsICRiLCAkb3BhY2l0eSk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7JGNvbG9yfScsZW5kQ29sb3JzdHI9JyN7JGNvbG9yfScpO1xyXG4gICAgICAgICAgICB6b29tOiAgIDE7XHJcbn1cclxuXHJcblxyXG4vLy8gQm94IFNoYWRvd1xyXG4vLy8gQHBhcmFtIHtTaXplfSAkeCBbMnB4XSAtIFhcclxuLy8vIEBwYXJhbSB7U2l6ZX0gJHkgWzJweF0gLSBZXHJcbi8vLyBAcGFyYW0ge1NpemV9ICRibHVyIFs1cHhdIC0gQmx1clxyXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFtyZ2JhKDAsMCwwLC40KV0gLSBDb2xvclxyXG4vLy8gQHBhcmFtIHtCb29sZWFufSAkaW5zZXQgLSBJbnNldFxyXG5cclxuQG1peGluIGJveC1zaGFkb3coJHg6IDJweCwgJHk6IDJweCwgJGJsdXI6IDVweCwgJGNvbG9yOiByZ2JhKDAsMCwwLC40KSwgJGluc2V0OiBcIlwiKSB7XHJcbiAgQGlmICgkaW5zZXQgIT0gXCJcIikge1xyXG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1zaGFkb3cnLCAkaW5zZXQgJHggJHkgJGJsdXIgJGNvbG9yKTtcclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgJHggJHkgJGJsdXIgJGNvbG9yKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLy8gQm94IFNpemluZ1xyXG4vLy8gQHBhcmFtIHsqfSAkdHlwZSBbYm9yZGVyLWJveF0gLSBUeXBlXHJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XHJcblxyXG5AbWl4aW4gYm94LXNpemluZygkdHlwZTogYm9yZGVyLWJveCkge1xyXG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2l6aW5nJywgJHR5cGUpO1xyXG59XHJcblxyXG5cclxuLy8vIENvbHVtbnNcclxuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJGNvdW50IFszXSAtIENvdW50XHJcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRnYXAgWzEwXSAtIEdhcFxyXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxyXG5cclxuQG1peGluIGNvbHVtbnMoJGNvdW50OiAzLCAkZ2FwOiAxMCkge1xyXG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdjb2x1bW4tY291bnQnLCAkY291bnQpO1xyXG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdjb2x1bW4tZ2FwJywgJGdhcCk7XHJcbn1cclxuXHJcblxyXG4vLy8gRG91YmxlIEJvcmRlcnNcclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvck9uZSBbIzNDM0MzQ10gLSBDb2xvciBPbmVcclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvclR3byBbIzk5OTk5OV0gLSBDb2xvciBUd29cclxuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbMF0gLSBSYWRpdXNcclxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcclxuLy8vIEByZXF1aXJlIHttaXhpbn0gYm9yZGVyLXJhZGl1c1xyXG5cclxuQG1peGluIGRvdWJsZS1ib3JkZXJzKCRjb2xvck9uZTogIzNDM0MzQywgJGNvbG9yVHdvOiAjOTk5OTk5LCAkcmFkaXVzOiAwKSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yT25lO1xyXG5cclxuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNoYWRvdycsIDAgMCAwIDFweCAkY29sb3JUd28pO1xyXG5cclxuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCAkcmFkaXVzICk7XHJcbn1cclxuXHJcblxyXG4vLy8gRmxleFxyXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkdmFsdWUgWzFdIC0gVmFsdWVcclxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcclxuXHJcbkBtaXhpbiBmbGV4KCR2YWx1ZTogMSkge1xyXG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtZmxleCcsICR2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG4vLy8gRmxpcFxyXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRzY2FsZVggWy0xXSAtIFNjYWxlWFxyXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxyXG5cclxuQG1peGluIGZsaXAoJHNjYWxlWDogLTEpIHtcclxuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtJywgc2NhbGVYKCRzY2FsZVgpKTtcclxuICBmaWx0ZXI6ICAgICAgICAgICAgRmxpcEg7XHJcbiAgLW1zLWZpbHRlcjogICAgICAgIFwiRmxpcEhcIjtcclxufVxyXG5cclxuXHJcbi8vLyBGb250IEZhY2VcclxuLy8vIEBwYXJhbSB7Rm9udH0gJGZvbnRGYW1pbHkgW215Rm9udF0gLSBGb250IEZhbWlseVxyXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRlb3RGaWxlU3JjIFsnbXlGb250LmVvdCddIC0gRW90IEZpbGUgU291cmNlXHJcbi8vLyBAcGFyYW0ge1N0cmluZ30gJHdvZmZGaWxlU3JjIFsnbXlGb250LndvZmYnXSAtIFdvZmYgRmlsZSBTb3VyY2VcclxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkdHRmRmlsZVNyYyBbJ215Rm9udC50dGYnXSAtIFR0ZiBGaWxlIFNvdXJjZVxyXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRzdmdGaWxlU3JjIFsnbXlGb250LnN2ZyddIC0gU3ZnIEZpbGUgU291cmNlXHJcblxyXG5AbWl4aW4gZm9udC1mYWNlKCRmb250RmFtaWx5OiBteUZvbnQsICRlb3RGaWxlU3JjOiAnbXlGb250LmVvdCcsICR3b2ZmRmlsZVNyYzogJ215Rm9udC53b2ZmJywgJHR0ZkZpbGVTcmM6ICdteUZvbnQudHRmJywgJHN2Z0ZpbGVTcmM6ICdteUZvbnQuc3ZnJywgJHN2Z0ZvbnRJRDogJyNteUZvbnQnKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xyXG4gIHNyYzogdXJsKCRlb3RGaWxlU3JjKSAgZm9ybWF0KCdlb3QnKSxcclxuICAgICAgIHVybCgkd29mZkZpbGVTcmMpIGZvcm1hdCgnd29mZicpLFxyXG4gICAgICAgdXJsKCR0dGZGaWxlU3JjKSAgZm9ybWF0KCd0cnVldHlwZScpLFxyXG4gICAgICAgdXJsKCRzdmdGaWxlU3JjICsgJHN2Z0ZvbnRJRCkgZm9ybWF0KCdzdmcnKTtcclxufVxyXG5cclxuXHJcbi8vLyBPcGFjaXR5XHJcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG9wYWNpdHkgWzAuNV0gLSBPcGFjaXR5XHJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XHJcblxyXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eTogMC41KSB7XHJcbiAgICAkb3BhY2l0eU11bHRpcGxpZWQ6ICgkb3BhY2l0eSAqIDEwMCk7XHJcblxyXG4gICAgZmlsdGVyOiAgICAgICAgIGFscGhhKG9wYWNpdHk9JG9wYWNpdHlNdWx0aXBsaWVkKTtcclxuICAgIC1tcy1maWx0ZXI6ICAgICBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PVwiICsgJG9wYWNpdHlNdWx0aXBsaWVkICsgXCIpXCI7XHJcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnb3BhY2l0eScsICRvcGFjaXR5KTtcclxufVxyXG5cclxuXHJcbi8vLyBPdXRsaW5lIFJhZGl1c1xyXG4vLy8gQHBhcmFtIHtTaXplfSAkcmFkaXVzIFs1cHhdIC0gUmFkaXVzXHJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XHJcblxyXG5AbWl4aW4gb3V0bGluZS1yYWRpdXMoJHJhZGl1czogNXB4KSB7XHJcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ291dGxpbmUtcmFkaXVzJywgJHJhZGl1cyk7XHJcbn1cclxuXHJcblxyXG4vLy8gUmVzaXplXHJcbi8vLyBAcGFyYW0geyp9ICRkaXJlY3RvaW4gW2JvdGhdIC0gRGlyZWN0aW9uXHJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XHJcblxyXG5AbWl4aW4gcmVzaXplKCRkaXJlY3Rpb246IGJvdGgpIHtcclxuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgncmVzaXplJywgJGRpcmVjdGlvbik7XHJcbn1cclxuXHJcblxyXG4vLy8gUm90YXRlXHJcbi8vL1xyXG4vLy8gQ1NTIE1hdHJpeCBSb3RhdGlvbiBDYWxjdWxhdG9yIGh0dHA6Ly93d3cuYm9vZ2Rlc2lnbi5jb20vZXhhbXBsZXMvdHJhbnNmb3Jtcy9tYXRyaXgtY2FsY3VsYXRvci5odG1sXHJcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJGRlZyBbMF0gLSBEZWdyZWVcclxuLy8vIEBwYXJhbSB7RG91YmxlfSAkbTExIFswXSAtIE0xMVxyXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRtMTIgWzBdIC0gTTEyXHJcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0yMSBbMF0gLSBNMjFcclxuLy8vIEBwYXJhbSB7RG91YmxlfSAkbTIyIFswXSAtIE0yMlxyXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxyXG5cclxuQG1peGluIHJvdGF0ZSgkZGVnOiAwLCAkbTExOiAwLCAkbTEyOiAwLCAkbTIxOiAwLCAkbTIyOiAwKSB7XHJcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsIHJvdGF0ZSgkZGVnICsgZGVnKSk7XHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KFxyXG4gICAgICAgTTExPSN7JG0xMX0sIE0xMj0jeyRtMTJ9LCBNMjE9I3skbTIxfSwgTTIyPSN7JG0yMn0sIHNpemluZ01ldGhvZD0nYXV0byBleHBhbmQnKTtcclxuICAgIHpvb206IDE7XHJcbn1cclxuXHJcblxyXG4vLy8gVGV4dCBTaGFkb3dcclxuLy8vIEBwYXJhbSB7U2l6ZX0gJHggWzJweF0gLSBYXHJcbi8vLyBAcGFyYW0ge1NpemV9ICR5IFsycHhdIC0gWVxyXG4vLy8gQHBhcmFtIHtTaXplfSAkYmx1ciBbMnB4XSAtIEJsdXJcclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciBbcmdiYSgwLDAsMCwuNCldIC0gQ29sb3JcclxuXHJcbkBtaXhpbiB0ZXh0LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpKSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogJHggJHkgJGJsdXIgJGNvbG9yO1xyXG59XHJcblxyXG5cclxuLy8vIFRyYW5zZm9ybVxyXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXHJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRwYXJhbXMpIHtcclxuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtJywgJHBhcmFtcyk7XHJcbn1cclxuXHJcblxyXG4vLy8gVHJhbnNmb3JtLU9yaWdpblxyXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXHJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkcGFyYW1zKSB7XHJcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybS1vcmlnaW4nLCAkcGFyYW1zKTtcclxufVxyXG5cclxuXHJcbi8vIFRyYW5zZm9ybS1TdHlsZVxyXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXHJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtLXN0eWxlKCRzdHlsZTogcHJlc2VydmUtM2QpIHtcclxuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtLXN0eWxlJywgJHN0eWxlKTtcclxufVxyXG5cclxuLy8vIFRyYW5zaXRpb25cclxuLy8vIEBwYXJhbSB7TGlzdH0gJHByb3BlcnRpZXMgLSBQcm9wZXJ0aWVzXHJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkcHJvcGVydGllcy4uLikge1xyXG5cclxuICBAaWYgbGVuZ3RoKCRwcm9wZXJ0aWVzKSA+PSAxIHtcclxuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2l0aW9uJywgJHByb3BlcnRpZXMpO1xyXG4gIH1cclxuXHJcbiAgQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zaXRpb24nLCAgXCJhbGwgMC4ycyBlYXNlLWluLW91dCAwc1wiKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLy8gVHJpcGxlIEJvcmRlcnNcclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvck9uZSBbIzNDM0MzQ10gLSBDb2xvciBPbmVcclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvclR3byBbIzk5OTk5OV0gLSBDb2xvciBUd29cclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvclRocmVlIFsjMDAwMDAwXSAtIENvbG9yIFRocmVlXHJcbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzBdIC0gUmFkaXVzXHJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGJvcmRlci1yYWRpdXNcclxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcclxuXHJcbkBtaXhpbiB0cmlwbGUtYm9yZGVycygkY29sb3JPbmU6ICMzQzNDM0MsICRjb2xvclR3bzogIzk5OTk5OSwgJGNvbG9yVGhyZWU6ICMwMDAwMDAsICRyYWRpdXM6IDApIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvck9uZTtcclxuXHJcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyYWRpdXMpO1xyXG5cclxuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgXCIwIDAgMCAxcHggI3skY29sb3JUd299LCAwIDAgMCAycHggI3skY29sb3JUaHJlZX1cIik7XHJcbn1cclxuXHJcblxyXG4vLy8gS2V5ZnJhbWVzXHJcbi8vLyBAcGFyYW0geyp9ICRhbmltYXRpb24tbmFtZSAtIEFuaW1hdGlvbiBuYW1lXHJcbi8vLyBAY29udGVudCBbQW5pbWF0aW9uIGNzc11cclxuXHJcbkBtaXhpbiBrZXlmcmFtZXMoJGFuaW1hdGlvbi1uYW1lKSB7XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgQC1tcy1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgQGtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8vIEFuaW1hdGlvblxyXG4vLy8gQHBhcmFtIHsqfSAkc3RyIC0gbmFtZSBkdXJhdGlvbiB0aW1pbmctZnVuY3Rpb24gZGVsYXkgaXRlcmF0aW9uLWNvdW50IGRpcmVjdGlvbiBmaWxsLW1vZGUgcGxheS1zdGF0ZSAoW2h0dHA6Ly93d3cudzNzY2hvb2xzLmNvbS9jc3NyZWYvY3NzM19wcl9hbmltYXRpb24uYXNwXShodHRwOi8vd3d3Lnczc2Nob29scy5jb20vY3NzcmVmL2NzczNfcHJfYW5pbWF0aW9uLmFzcCkpXHJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uKCRzdHIpIHtcclxuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYW5pbWF0aW9uJywgJHN0cik7XHJcbn1cclxuIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFNhc3MgQ1NTMyBNaXhpbnMhIFRoZSBDcm9zcy1Ccm93c2VyIENTUzMgU2FzcyBMaWJyYXJ5XHJcbiAgQnk6IE1hdHRoaWV1IEF1c3NhZ3VlbCwgaHR0cDovL3d3dy5teW5hbWVpc21hdHRoaWV1LmNvbSwgQG1hdHRoaWV1X3R3ZWV0c1xyXG5cclxuICBMaXN0IG9mIENTUzMgU2FzcyBNaXhpbnMgRmlsZSB0byBiZSBAaW1wb3J0ZWQgYW5kIEBpbmNsdWRlZCBhcyB5b3UgbmVlZFxyXG5cclxuICBUaGUgcHVycG9zZSBvZiB0aGlzIGxpYnJhcnkgaXMgdG8gZmFjaWxpdGF0ZSB0aGUgdXNlIG9mIENTUzMgb24gZGlmZmVyZW50IGJyb3dzZXJzIGF2b2lkaW5nIEhBUkQgVE8gUkVBRCBhbmQgTkVWRVJcclxuICBFTkRJTkcgY3NzIGZpbGVzXHJcblxyXG4gIG5vdGU6IEFsbCBDU1MzIFByb3BlcnRpZXMgYXJlIGJlaW5nIHN1cHBvcnRlZCBieSBTYWZhcmkgNVxyXG4gIG1vcmUgaW5mbzogaHR0cDovL3d3dy5maW5kbWVieWlwLmNvbS9saXRtdXMvI2NzczMtcHJvcGVydGllc1xyXG5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyoqXHJcbiogU2Fzc0ZsZXhib3hcclxuKiBNYW5hZ2UgRmxleGJveCBpbiBTYXNzIGVhc2lseS5cclxuKlxyXG4qIEBhdXRob3IgICAgIFNhbXVlbCBNYXJjaGFsICh6ZXNzeClcclxuKiBAdmVyc2lvbiAgICAwLjFcclxuKi9cbi8qXHJcbiAgICBEaXNwbGF5XHJcbiAqL1xuLnBhbmVsLWJvZHkge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleGJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4vKlxyXG4gICAgRmxleCBkaXJlY3Rpb25cclxuICovXG4vKlxyXG4gICAgRmxleCB3cmFwXHJcbiAqL1xuLypcclxuICAgIEZsZXggZmxvd1xyXG4gKi9cbi8qXHJcbiAgICBPcmRlclxyXG4gKi9cbi8qXHJcbiAgICBGbGV4IGdyb3dcclxuICovXG4vKlxyXG4gICAgRmxleCBzaHJpbmtcclxuICovXG4vKlxyXG4gICAgRmxleCBiYXNpc1xyXG4gKi9cbi8qXHJcbiAgICBGbGV4XHJcbiAqL1xuLypcclxuICAgIEp1c3RpZnkgY29udGVudFxyXG4gKi9cbi5wYW5lbC1ib2R5Lm1pbmUge1xuICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XG4gIC1tb3otYm94LXBhY2s6IGVuZDtcbiAgLXdlYmtpdC1mbGV4LXBhY2s6IGVuZDtcbiAgLW1zLWZsZXgtcGFjazogZW5kO1xuICAtbW96LWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxuXG4vKlxyXG4gICAgQWxpZ24gaXRlbXNcclxuICovXG4vKlxyXG4gICAgQWxpZ24gc2VsZlxyXG4gKi9cbi8qXHJcbiAgICBBbGlnbiBjb250ZW50XHJcbiAqL1xuLnBhbmVsLWJvZHkubWluZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XG5cbi5wYW5lbC1ib2R5IC5hdmF0YXIge1xuICBoZWlnaHQ6IDU3cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cblxuLnBhbmVsLWJvZHkgLm1zZy10ZXh0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDsgfVxuICAucGFuZWwtYm9keSAubXNnLXRleHQtY29udGFpbmVyIC5tc2ctdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDsgfVxuXG4jdGltZSB7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICAtd2Via2l0LW9wYWNpdHk6IDA7XG4gIC1raHRtbC1vcGFjaXR5OiAwO1xuICAtbW96LW9wYWNpdHk6IDA7XG4gIC1tcy1vcGFjaXR5OiAwO1xuICAtby1vcGFjaXR5OiAwO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2UtaW4gMHM7XG4gIC1raHRtbC10cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLWluIDBzO1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2UtaW4gMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLWluIDBzO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLWluIDBzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLWluIDBzOyB9XG4gICN0aW1lLmZhZGUtaW4ge1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTAwKVwiO1xuICAgIC13ZWJraXQtb3BhY2l0eTogMTtcbiAgICAta2h0bWwtb3BhY2l0eTogMTtcbiAgICAtbW96LW9wYWNpdHk6IDE7XG4gICAgLW1zLW9wYWNpdHk6IDE7XG4gICAgLW8tb3BhY2l0eTogMTtcbiAgICBvcGFjaXR5OiAxOyB9XG4iLCIvKipcclxuKiBTYXNzRmxleGJveFxyXG4qIE1hbmFnZSBGbGV4Ym94IGluIFNhc3MgZWFzaWx5LlxyXG4qXHJcbiogQGF1dGhvciAgICAgU2FtdWVsIE1hcmNoYWwgKHplc3N4KVxyXG4qIEB2ZXJzaW9uICAgIDAuMVxyXG4qL1xyXG5cclxuXHJcbi8qXHJcbiAgICBEaXNwbGF5XHJcbiAqL1xyXG4lZGlzcGxheS1mbGV4IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuJWRpc3BsYXktaW5saW5lLWZsZXgge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbkBtaXhpbiBkaXNwbGF5LWZsZXgoKSB7XHJcbiAgICBAZXh0ZW5kICVkaXNwbGF5LWZsZXg7XHJcbn1cclxuQG1peGluIGRpc3BsYXktaW5saW5lLWZsZXgoKSB7XHJcbiAgICBAZXh0ZW5kICVkaXNwbGF5LWlubGluZS1mbGV4O1xyXG59XHJcblxyXG4vKlxyXG4gICAgRmxleCBkaXJlY3Rpb25cclxuICovXHJcbiVmbGV4LWRpcmVjdGlvbi1yb3cge1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgLW1vei1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLW1vei1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbiVmbGV4LWRpcmVjdGlvbi1yb3ctcmV2ZXJzZSB7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgICAtbW96LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IHJldmVyc2U7XHJcbiAgICAtbW96LWJveC1kaXJlY3Rpb246IHJldmVyc2U7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIC1tb3otZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG4lZmxleC1kaXJlY3Rpb24tY29sdW1uIHtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiVmbGV4LWRpcmVjdGlvbi1jb2x1bW4tcmV2ZXJzZSB7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogcmV2ZXJzZTtcclxuICAgIC1tb3otYm94LWRpcmVjdGlvbjogcmV2ZXJzZTtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgLW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG59XHJcbiVmbGV4LWRpcmVjdGlvbi1pbmhlcml0IHtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogaW5oZXJpdDtcclxuICAgIC1tb3otYm94LW9yaWVudDogaW5oZXJpdDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGluaGVyaXQ7XHJcbiAgICAtbW96LWZsZXgtZGlyZWN0aW9uOiBpbmhlcml0O1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBpbmhlcml0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGluaGVyaXQ7XHJcbn1cclxuQG1peGluIGZsZXgtZGlyZWN0aW9uKCRkaXJlY3Rpb246IHJvdykge1xyXG4gICAgQGlmIG5vdCBpbmRleCgocm93LCByb3ctcmV2ZXJzZSwgY29sdW1uLCBjb2x1bW4tcmV2ZXJzZSwgaW5oZXJpdCksICRkaXJlY3Rpb24pIHtcclxuICAgICAgICAkZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbiAgICBAZXh0ZW5kICVmbGV4LWRpcmVjdGlvbi0jeyRkaXJlY3Rpb259O1xyXG59XHJcblxyXG4vKlxyXG4gICAgRmxleCB3cmFwXHJcbiAqL1xyXG4lZmxleC13cmFwLW5vd3JhcCB7XHJcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgLW1vei1mbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IG5vbmU7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG4lZmxleC13cmFwLXdyYXAge1xyXG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAtbW96LWZsZXgtd3JhcDogd3JhcDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuJWZsZXgtd3JhcC13cmFwLXJldmVyc2Uge1xyXG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcclxuICAgIC1tb3otZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcclxufVxyXG4lZmxleC13cmFwLWluaGVyaXQge1xyXG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IGluaGVyaXQ7XHJcbiAgICAtbW96LWZsZXgtd3JhcDogaW5oZXJpdDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IGluaGVyaXQ7XHJcbiAgICBmbGV4LXdyYXA6IGluaGVyaXQ7XHJcbn1cclxuQG1peGluIGZsZXgtd3JhcCgkd3JhcDogbm93cmFwKSB7XHJcbiAgICBAaWYgbm90IGluZGV4KChub3dyYXAsIHdyYXAsIHdyYXAtcmV2ZXJzZSwgaW5oZXJpdCksICR3cmFwKSB7XHJcbiAgICAgICAgJHdyYXA6IG5vd3JhcDtcclxuICAgIH1cclxuICAgIEBleHRlbmQgJWZsZXgtd3JhcC0jeyR3cmFwfTtcclxufVxyXG5cclxuLypcclxuICAgIEZsZXggZmxvd1xyXG4gKi9cclxuQG1peGluIGZsZXgtZmxvdygkZGlyZWN0aW9uLCAkd3JhcCkge1xyXG4gICAgQGluY2x1ZGUgZmxleC1kaXJlY3Rpb24oJGRpcmVjdGlvbik7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXdyYXAoJHdyYXApO1xyXG59XHJcblxyXG4vKlxyXG4gICAgT3JkZXJcclxuICovXHJcbkBtaXhpbiBvcmRlcigkb3JkZXI6IDApIHtcclxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6ICgkb3JkZXIgKyAxKTtcclxuICAgIC1tb3otYm94LW9yZGluYWwtZ3JvdXA6ICRvcmRlcjtcclxuICAgIC1tcy1mbGV4LW9yZGVyOiAkb3JkZXI7XHJcbiAgICAtd2Via2l0LW9yZGVyOiAkb3JkZXI7XHJcbiAgICAtbW96LW9yZGVyOiAkb3JkZXI7XHJcbiAgICBvcmRlcjogJG9yZGVyO1xyXG59XHJcblxyXG4vKlxyXG4gICAgRmxleCBncm93XHJcbiAqL1xyXG5AbWl4aW4gZmxleC1ncm93KCRncm93OiAwKSB7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogJGdyb3c7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAkZ3JvdztcclxuICAgIC1tb3otZmxleC1ncm93OiAkZ3JvdztcclxuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAkZ3JvdztcclxuICAgIGZsZXgtZ3JvdzogJGdyb3c7XHJcbn1cclxuXHJcbi8qXHJcbiAgICBGbGV4IHNocmlua1xyXG4gKi9cclxuQG1peGluIGZsZXgtc2hyaW5rKCRzaHJpbms6IDEpIHtcclxuICAgIC13ZWJraXQtZmxleC1zaHJpbms6ICRzaHJpbms7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAkc2hyaW5rO1xyXG4gICAgLW1vei1mbGV4LXNocmluazogJHNocmluaztcclxuICAgIC1tcy1mbGV4LW5lZ2F0aXZlOiAkc2hyaW5rO1xyXG4gICAgZmxleC1zaHJpbms6ICRzaHJpbms7XHJcbn1cclxuXHJcbi8qXHJcbiAgICBGbGV4IGJhc2lzXHJcbiAqL1xyXG5AbWl4aW4gZmxleC1iYXNpcygkYmFzaXM6IGF1dG8pIHtcclxuICAgIC13ZWJraXQtZmxleC1iYXNpczogJGJhc2lzO1xyXG4gICAgLW1vei1mbGV4LWJhc2lzOiAkYmFzaXM7XHJcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogJGJhc2lzO1xyXG4gICAgZmxleC1iYXNpczogJGJhc2lzO1xyXG59XHJcblxyXG4vKlxyXG4gICAgRmxleFxyXG4gKi9cclxuQG1peGluIGZsZXgoJGdyb3c6IDAsICRzaHJpbms6IDEsICRiYXNpczogYXV0bykge1xyXG4gICAgQGluY2x1ZGUgZmxleC1ncm93KCRncm93KTtcclxuICAgIEBpbmNsdWRlIGZsZXgtc2hyaW5rKCRzaHJpbmspO1xyXG4gICAgQGluY2x1ZGUgZmxleC1iYXNpcygkYmFzaXMpO1xyXG59XHJcblxyXG4vKlxyXG4gICAgSnVzdGlmeSBjb250ZW50XHJcbiAqL1xyXG4lanVzdGlmeS1jb250ZW50LWZsZXgtc3RhcnQge1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XHJcbiAgICAtbW96LWJveC1wYWNrOiBzdGFydDtcclxuICAgIC13ZWJraXQtZmxleC1wYWNrOiBzdGFydDtcclxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xyXG4gICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG4lanVzdGlmeS1jb250ZW50LWZsZXgtZW5kIHtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcclxuICAgIC1tb3otYm94LXBhY2s6IGVuZDtcclxuICAgIC13ZWJraXQtZmxleC1wYWNrOiBlbmQ7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XHJcbiAgICAtbW96LWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbiVqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiVqdXN0aWZ5LWNvbnRlbnQtc3BhY2UtYmV0d2VlbiB7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIC13ZWJraXQtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICAgIC1tb3otanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuJWp1c3RpZnktY29udGVudC1zcGFjZS1hcm91bmQge1xyXG4gICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4lanVzdGlmeS1jb250ZW50LWluaGVyaXQge1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogaW5oZXJpdDtcclxuICAgIC1tb3otYm94LXBhY2s6IGluaGVyaXQ7XHJcbiAgICAtd2Via2l0LWZsZXgtcGFjazogaW5oZXJpdDtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGluaGVyaXQ7XHJcbiAgICAtbW96LWp1c3RpZnktY29udGVudDogaW5oZXJpdDtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBpbmhlcml0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBpbmhlcml0O1xyXG59XHJcbkBtaXhpbiBqdXN0aWZ5LWNvbnRlbnQoJGp1c3RpZnk6IGZsZXgtc3RhcnQpIHtcclxuICAgIEBpZiBub3QgaW5kZXgoKGZsZXgtc3RhcnQsIGZsZXgtZW5kLCBjZW50ZXIsIHNwYWNlLWJldHdlZW4sIHNwYWNlLWFyb3VuZCwgaW5oZXJpdCksICRqdXN0aWZ5KSB7XHJcbiAgICAgICAgJGp1c3RpZnk6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgICBAZXh0ZW5kICVqdXN0aWZ5LWNvbnRlbnQtI3skanVzdGlmeX07XHJcbn1cclxuXHJcbi8qXHJcbiAgICBBbGlnbiBpdGVtc1xyXG4gKi9cclxuJWFsaWduLWl0ZW1zLWZsZXgtc3RhcnQge1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIC1tb3otYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG4lYWxpZ24taXRlbXMtZmxleC1lbmQge1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIC1tb3otYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbiVhbGlnbi1pdGVtcy1jZW50ZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiVhbGlnbi1pdGVtcy1iYXNlbGluZSB7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIC1tb3otYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcbiVhbGlnbi1pdGVtcy1zdHJldGNoIHtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgLW1vei1hbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcbiVhbGlnbi1pdGVtcy1pbmhlcml0IHtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBpbmhlcml0O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGluaGVyaXQ7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBpbmhlcml0O1xyXG4gICAgLW1vei1hbGlnbi1pdGVtczogaW5oZXJpdDtcclxuICAgIGFsaWduLWl0ZW1zOiBpbmhlcml0O1xyXG59XHJcbkBtaXhpbiBhbGlnbi1pdGVtcygkYWxpZ246IHN0cmV0Y2gpIHtcclxuICAgIEBpZiBub3QgaW5kZXgoKGZsZXgtc3RhcnQsIGZsZXgtZW5kLCBjZW50ZXIsIGJhc2VsaW5lLCBzdHJldGNoLCBpbmhlcml0KSwgJGFsaWduKSB7XHJcbiAgICAgICAgJGFsaWduOiBzdHJldGNoO1xyXG4gICAgfVxyXG4gICAgQGV4dGVuZCAlYWxpZ24taXRlbXMtI3skYWxpZ259O1xyXG59XHJcblxyXG4vKlxyXG4gICAgQWxpZ24gc2VsZlxyXG4gKi9cclxuJWFsaWduLXNlbGYtYXV0byB7XHJcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBhdXRvO1xyXG4gICAgLW1vei1hbGlnbi1zZWxmOiBhdXRvO1xyXG4gICAgYWxpZ24tc2VsZjogYXV0bztcclxufVxyXG4lYWxpZ24tc2VsZi1mbGV4LXN0YXJ0IHtcclxuICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IHN0YXJ0O1xyXG4gICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgLW1vei1hbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG4lYWxpZ24tc2VsZi1mbGV4LWVuZCB7XHJcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBlbmQ7XHJcbiAgICAtd2Via2l0LWFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgLW1vei1hbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcbiVhbGlnbi1zZWxmLWNlbnRlciB7XHJcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIC1tb3otYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbiVhbGlnbi1zZWxmLWJhc2VsaW5lIHtcclxuICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBiYXNlbGluZTtcclxuICAgIC1tb3otYWxpZ24tc2VsZjogYmFzZWxpbmU7XHJcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcclxufVxyXG4lYWxpZ24tc2VsZi1zdHJldGNoIHtcclxuICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IHN0cmV0Y2g7XHJcbiAgICAtd2Via2l0LWFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAtbW96LWFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG59XHJcbiVhbGlnbi1zZWxmLWluaGVyaXQge1xyXG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogaW5oZXJpdDtcclxuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogaW5oZXJpdDtcclxuICAgIC1tb3otYWxpZ24tc2VsZjogaW5oZXJpdDtcclxuICAgIGFsaWduLXNlbGY6IGluaGVyaXQ7XHJcbn1cclxuQG1peGluIGFsaWduLXNlbGYoJGFsaWduOiBhdXRvKSB7XHJcbiAgICBAaWYgbm90IGluZGV4KChhdXRvLCBmbGV4LXN0YXJ0LCBmbGV4LWVuZCwgY2VudGVyLCBiYXNlbGluZSwgc3RyZXRjaCwgaW5oZXJpdCksICRhbGlnbikge1xyXG4gICAgICAgICRhbGlnbjogYXV0bztcclxuICAgIH1cclxuICAgIEBleHRlbmQgJWFsaWduLXNlbGYtI3skYWxpZ259O1xyXG59XHJcblxyXG4vKlxyXG4gICAgQWxpZ24gY29udGVudFxyXG4gKi9cclxuJWFsaWduLWNvbnRlbnQtZmxleC1zdGFydCB7XHJcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IHN0YXJ0O1xyXG4gICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgLW1vei1hbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG4lYWxpZ24tY29udGVudC1mbGV4LWVuZCB7XHJcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IGVuZDtcclxuICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAtbW96LWFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuJWFsaWduLWNvbnRlbnQtY2VudGVyIHtcclxuICAgIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtbW96LWFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4lYWxpZ24tY29udGVudC1zcGFjZS1iZXR3ZWVuIHtcclxuICAgIC1tcy1mbGV4LWxpbmUtcGFjazogc3BhY2UtYmV0d2VlbjtcclxuICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC1tb3otYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuJWFsaWduLWNvbnRlbnQtc3BhY2UtYXJvdW5kIHtcclxuICAgIC1tcy1mbGV4LWxpbmUtcGFjazogc3BhY2UtYXJvdW5kO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAtbW96LWFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4lYWxpZ24tY29udGVudC1zdHJldGNoIHtcclxuICAgIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcclxuICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICAgIC1tb3otYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbn1cclxuJWFsaWduLWNvbnRlbnQtaW5oZXJpdCB7XHJcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IGluaGVyaXQ7XHJcbiAgICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IGluaGVyaXQ7XHJcbiAgICAtbW96LWFsaWduLWNvbnRlbnQ6IGluaGVyaXQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBpbmhlcml0O1xyXG59XHJcbkBtaXhpbiBhbGlnbi1jb250ZW50KCRhbGlnbjogc3RyZXRjaCkge1xyXG4gICAgQGlmIG5vdCBpbmRleCgoZmxleC1zdGFydCwgZmxleC1lbmQsIGNlbnRlciwgc3BhY2UtYmV0d2Vlbiwgc3BhY2UtYXJvdW5kLCBzdHJldGNoLCBpbmhlcml0KSwgJGFsaWduKSB7XHJcbiAgICAgICAgJGFsaWduOiBzdHJldGNoO1xyXG4gICAgfVxyXG4gICAgQGV4dGVuZCAlYWxpZ24tY29udGVudC0jeyRhbGlnbn07XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zYXNzL3Njc3MvdG8taW1wb3J0LnNjc3NcIjtcclxuXHJcbi5wYW5lbC1ib2R5IHtcclxuICBAaW5jbHVkZSBkaXNwbGF5LWZsZXgoKTtcclxuXHJcbiAgJi5taW5lIHtcclxuICAgIEBpbmNsdWRlIGp1c3RpZnktY29udGVudChmbGV4LWVuZCk7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcblxyXG4gIC5hdmF0YXIge1xyXG4gICAgaGVpZ2h0OiA1N3B4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLm1zZy10ZXh0LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgIC5tc2ctdGV4dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4jdGltZSB7XHJcbiAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKFwib3BhY2l0eSAuMnMgZWFzZS1pbiAwc1wiKTtcclxuXHJcbiAgJi5mYWRlLWluIHtcclxuICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.updateFromNow(); _this.fadeTime = true; }, 2000);
        setInterval(function () { _this.updateFromNow(); }, 60000);
    };
    MessageComponent.prototype.updateFromNow = function () {
        this.time = moment__WEBPACK_IMPORTED_MODULE_2__(this.message.created).fromNow();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MessageComponent.prototype, "message", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/index.js!./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.scss */ "./src/app/message/message.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/message/message.module.ts":
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/*! exports provided: MessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.component */ "./src/app/message/message.component.ts");




var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"]
            ]
        })
    ], MessageModule);
    return MessageModule;
}());



/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map