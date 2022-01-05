(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taskboard-ngrx-taskboard-ngrx-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/taskboard-ngrx/taskboard-ngrx.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/taskboard-ngrx/taskboard-ngrx.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header text-left\">Task Board NgRx</div>\r\n    <p class=\"content-sub-header\"></p>\r\n  </div>\r\n</div>\r\n<!-- Taskboard Starts -->\r\n<section id=\"taskboard\">\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-list mr-1  float-left\"></i> To Dos</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='todo'>\r\n        <div *ngFor='let todo of todo'>\r\n          <div class=\"card\">\r\n            <div class=\"card-body pt-3 text-left\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 primary float-left\">{{todo.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit mr-1 info\"></i>\r\n                  <i class=\"ft-trash-2 danger\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{todo.taskMessage}}</p>\r\n              <img [src]=\"[todo.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span\r\n                class=\"primary\">{{todo.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-trending-up mr-1  float-left\"></i> In Progress</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='inProcess'>\r\n        <div *ngFor='let inProcess of inProcess'>\r\n          <div class=\"card\">\r\n            <div class=\"card-body pt-3 text-left\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 info float-left\">{{inProcess.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit mr-1 info\"></i>\r\n                  <i class=\"ft-trash-2 danger\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{inProcess.taskMessage}}</p>\r\n              <img [src]=\"[inProcess.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span\r\n                class=\"info\">{{inProcess.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-thumbs-up mr-1  float-left\"></i>Completed</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='completed'>\r\n        <div *ngFor='let completed of completed'>\r\n          <div class=\"card\">\r\n            <div class=\"card-body pt-3 text-left\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 success float-left\">{{completed.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit mr-1 info\"></i>\r\n                  <i class=\"ft-trash-2 danger\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{completed.taskMessage}}</p>\r\n              <img [src]=\"[completed.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span\r\n                class=\"success\">{{completed.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-alert-octagon mr-1  float-left\"></i>On Hold</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='backLog'>\r\n        <div *ngFor='let backLog of backLog'>\r\n          <div class=\"card\">\r\n            <div class=\"card-body pt-3 text-left\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 warning float-left\">{{backLog.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit mr-1 info\"></i>\r\n                  <i class=\"ft-trash-2 danger\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{backLog.taskMessage}}</p>\r\n              <img [src]=\"[backLog.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span\r\n                class=\"warning\">{{backLog.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <section class=\"taskboard-app-form bg-blue-grey bg-lighten-5\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body pt-3 text-left\">\r\n        <h5 class=\"text-bold-500\">Create new Task</h5>\r\n        <form class=\"taskboard-app-input row\">\r\n          <fieldset class=\"position-relative has-icon-left col-md-4 col-12 mb-1\">\r\n            <div class=\"form-control-position\">\r\n              <i class=\"icon-emoticon-smile\"></i>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"todoTitle\" placeholder=\"Title\">\r\n            <div class=\"form-control-position control-position-right\">\r\n              <i class=\"ft-image gallery-icon-title\"></i>\r\n            </div>\r\n          </fieldset>\r\n          <fieldset class=\"position-relative has-icon-left col-md-6 col-12 mb-1\">\r\n            <div class=\"form-control-position\">\r\n              <i class=\"icon-emoticon-smile\"></i>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"todoMessage\" placeholder=\"Message\">\r\n            <div class=\"form-control-position control-position-right\">\r\n              <i class=\"ft-image gallery-icon-msg\"></i>\r\n            </div>\r\n          </fieldset>\r\n\r\n          <fieldset class=\"position-relative has-icon-left col-md-2 col-12 mb-1 add-task-btn\">\r\n            <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\">\r\n              <i class=\"ft ft-plus-circle d-lg-none d-xl-inline-block\"></i>\r\n              <span class=\"d-lg-inline-block d-none ml-1\">Create</span>\r\n            </button>\r\n          </fieldset>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n</section>\r\n<!-- Taskboard Ends -->"

/***/ }),

/***/ "./src/app/taskboard-ngrx/store/taskboard.actions.ts":
/*!***********************************************************!*\
  !*** ./src/app/taskboard-ngrx/store/taskboard.actions.ts ***!
  \***********************************************************/
/*! exports provided: ADD_TODO, AddTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodo", function() { return AddTodo; });
/* harmony import */ var _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../taskboard-ngrx.model */ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts");

var ADD_TODO = 'ADD_TODO';
var AddTodo = /** @class */ (function () {
    function AddTodo(payload) {
        this.payload = payload;
        this.type = ADD_TODO;
    }
    AddTodo.ctorParameters = function () { return [
        { type: _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Task"] }
    ]; };
    return AddTodo;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/store/taskboard.reducers.ts":
/*!************************************************************!*\
  !*** ./src/app/taskboard-ngrx/store/taskboard.reducers.ts ***!
  \************************************************************/
/*! exports provided: taskReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskReducer", function() { return taskReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../taskboard-ngrx.model */ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts");
/* harmony import */ var _taskboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskboard.actions */ "./src/app/taskboard-ngrx/store/taskboard.actions.ts");



var initialState = {
    todo: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Responsive', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('QA Testing', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Budget', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New')
    ],
    inProcess: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('checklist', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.png', 'In Process'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Navigation', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.png', 'In Process'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Bootstrap 4', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.png', 'In Process')
    ],
    backLog: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Assessment', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.png', 'Pending'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Schedule', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.png', 'Pending'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Unit tests', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.png', 'Pending')
    ],
    completed: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Angular 5', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.png', 'Completed'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Fields', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.png', 'Completed'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Task board', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.png', 'Completed')
    ]
};
function taskReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (_taskboard_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_TODO"]):
            var todo = state.todo.slice();
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { todo: state.todo.concat([action.payload]) });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TaskboardNGRXRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXRoutingModule", function() { return TaskboardNGRXRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskboard-ngrx.component */ "./src/app/taskboard-ngrx/taskboard-ngrx.component.ts");




var routes = [
    {
        path: '',
        component: _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_3__["TaskboardNGRXComponent"],
        data: {
            title: 'Taskboard'
        },
    }
];
var TaskboardNGRXRoutingModule = /** @class */ (function () {
    function TaskboardNGRXRoutingModule() {
    }
    TaskboardNGRXRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TaskboardNGRXRoutingModule);
    return TaskboardNGRXRoutingModule;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gh-fork {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border: 0; }\n\n/* dragula-specific example page styles */\n\n.dragdrop-wrapper {\n  display: table; }\n\n/* .dragdrop-container {\r\n    display: table-cell;\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    width: 25%;\r\n  } */\n\n.dragdrop-container:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n/*\r\n   * note that styling gu-mirror directly is a bad practice because it's too generic.\r\n   * you're better off giving the draggable elements a unique class and styling that directly!\r\n   */\n\n.dragdrop-container > div,\n.gu-mirror {\n  transition: opacity 0.4s ease-in-out; }\n\n.dragdrop-container > div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab; }\n\n.gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing; }\n\n.dragdrop-container .ex-moved {\n  background-color: #e74c3c; }\n\n.dragdrop-container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n#left-lovehandles > div,\n#right-lovehandles > div {\n  cursor: initial; }\n\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move; }\n\n.image-thing {\n  margin: 20px 0;\n  display: block;\n  text-align: center; }\n\n.slack-join {\n  position: absolute;\n  font-weight: normal;\n  font-size: 14px;\n  right: 10px;\n  top: 50%;\n  margin-top: -8px;\n  line-height: 16px; }\n\n.taskboard-app-input i.ft.ft-plus-circle {\n  position: relative;\n  top: 2px; }\n\n.taskboard-app-input .form-control-position.control-position-right .gallery-icon-title {\n  position: absolute;\n  left: 363px;\n  font-size: 1.2rem;\n  top: 7px; }\n\n.taskboard-app-input .form-control-position.control-position-right .gallery-icon-msg {\n  position: absolute;\n  left: 573px;\n  font-size: 1.2rem;\n  top: 7px; }\n\n@media (max-width: 992px) {\n  .taskboard-app-input i.ft.ft-plus-circle {\n    padding: 0.25rem; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza2JvYXJkLW5ncngvQzpcXFVzZXJzXFxhc3VzXFxEZXNrdG9wXFxwcm9qZWN0c01hbmFnZW1lbnQvc3JjXFxhcHBcXHRhc2tib2FyZC1uZ3J4XFx0YXNrYm9hcmQtbmdyeC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFza2JvYXJkLW5ncngvdGFza2JvYXJkLW5ncnguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTLEVBQUE7O0FBR1gseUNBQUE7O0FBQ0E7RUFDRSxjQUFjLEVBQUE7O0FBR2hCOzs7O0tDRUs7O0FER0w7RUFDRSxvQ0FBb0MsRUFBQTs7QUFHdEM7OztJQ0FJOztBRElKOztFQUtFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLFlBQVk7RUFDWixZQUFZO0VBRVosb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZ0JBQWdCO0VBRWhCLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLDBDQUEwQyxFQUFBOztBQUc1Qzs7RUFFRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsWUFBWSxFQUFBOztBQUdkO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFFSSxrQkFBa0I7RUFDbEIsUUFBUSxFQUFBOztBQUhaO0VBT00sa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsUUFBUSxFQUFBOztBQVZkO0VBY00sa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsUUFBUSxFQUFBOztBQUtkO0VBQ0U7SUFFSSxnQkFBZ0IsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tib2FyZC1uZ3J4L3Rhc2tib2FyZC1uZ3J4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdoLWZvcmsge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4vKiBkcmFndWxhLXNwZWNpZmljIGV4YW1wbGUgcGFnZSBzdHlsZXMgKi9cclxuLmRyYWdkcm9wLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4vKiAuZHJhZ2Ryb3AtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH0gKi9cclxuLmRyYWdkcm9wLWNvbnRhaW5lcjpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4vKlxyXG4gICAqIG5vdGUgdGhhdCBzdHlsaW5nIGd1LW1pcnJvciBkaXJlY3RseSBpcyBhIGJhZCBwcmFjdGljZSBiZWNhdXNlIGl0J3MgdG9vIGdlbmVyaWMuXHJcbiAgICogeW91J3JlIGJldHRlciBvZmYgZ2l2aW5nIHRoZSBkcmFnZ2FibGUgZWxlbWVudHMgYSB1bmlxdWUgY2xhc3MgYW5kIHN0eWxpbmcgdGhhdCBkaXJlY3RseSFcclxuICAgKi9cclxuLmRyYWdkcm9wLWNvbnRhaW5lciA+IGRpdixcclxuLmd1LW1pcnJvciB7XHJcbiAgLy8gbWFyZ2luOiAxMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmRyYWdkcm9wLWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG4gIGN1cnNvcjogZ3JhYjtcclxuICBjdXJzb3I6IC1tb3otZ3JhYjtcclxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcclxufVxyXG5cclxuLmd1LW1pcnJvciB7XHJcbiAgY3Vyc29yOiBncmFiYmluZztcclxuICBjdXJzb3I6IC1tb3otZ3JhYmJpbmc7XHJcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xyXG59XHJcblxyXG4uZHJhZ2Ryb3AtY29udGFpbmVyIC5leC1tb3ZlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcclxufVxyXG5cclxuLmRyYWdkcm9wLWNvbnRhaW5lci5leC1vdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbiNsZWZ0LWxvdmVoYW5kbGVzID4gZGl2LFxyXG4jcmlnaHQtbG92ZWhhbmRsZXMgPiBkaXYge1xyXG4gIGN1cnNvcjogaW5pdGlhbDtcclxufVxyXG5cclxuLmhhbmRsZSB7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIGN1cnNvcjogbW92ZTtcclxufVxyXG5cclxuLmltYWdlLXRoaW5nIHtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGFjay1qb2luIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogLThweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxufVxyXG5cclxuLnRhc2tib2FyZC1hcHAtaW5wdXQge1xyXG4gIGkuZnQuZnQtcGx1cy1jaXJjbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAycHg7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRyb2wtcG9zaXRpb24uY29udHJvbC1wb3NpdGlvbi1yaWdodCB7XHJcbiAgICAuZ2FsbGVyeS1pY29uLXRpdGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAzNjNweDtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIHRvcDogN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5nYWxsZXJ5LWljb24tbXNnIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA1NzNweDtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIHRvcDogN3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLnRhc2tib2FyZC1hcHAtaW5wdXQge1xyXG4gICAgaS5mdC5mdC1wbHVzLWNpcmNsZSB7XHJcbiAgICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5naC1mb3JrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXI6IDA7IH1cblxuLyogZHJhZ3VsYS1zcGVjaWZpYyBleGFtcGxlIHBhZ2Ugc3R5bGVzICovXG4uZHJhZ2Ryb3Atd3JhcHBlciB7XG4gIGRpc3BsYXk6IHRhYmxlOyB9XG5cbi8qIC5kcmFnZHJvcC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfSAqL1xuLmRyYWdkcm9wLWNvbnRhaW5lcjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxuXG4vKlxyXG4gICAqIG5vdGUgdGhhdCBzdHlsaW5nIGd1LW1pcnJvciBkaXJlY3RseSBpcyBhIGJhZCBwcmFjdGljZSBiZWNhdXNlIGl0J3MgdG9vIGdlbmVyaWMuXHJcbiAgICogeW91J3JlIGJldHRlciBvZmYgZ2l2aW5nIHRoZSBkcmFnZ2FibGUgZWxlbWVudHMgYSB1bmlxdWUgY2xhc3MgYW5kIHN0eWxpbmcgdGhhdCBkaXJlY3RseSFcclxuICAgKi9cbi5kcmFnZHJvcC1jb250YWluZXIgPiBkaXYsXG4uZ3UtbWlycm9yIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0OyB9XG5cbi5kcmFnZHJvcC1jb250YWluZXIgPiBkaXYge1xuICBjdXJzb3I6IG1vdmU7XG4gIGN1cnNvcjogZ3JhYjtcbiAgY3Vyc29yOiAtbW96LWdyYWI7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiOyB9XG5cbi5ndS1taXJyb3Ige1xuICBjdXJzb3I6IGdyYWJiaW5nO1xuICBjdXJzb3I6IC1tb3otZ3JhYmJpbmc7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZzsgfVxuXG4uZHJhZ2Ryb3AtY29udGFpbmVyIC5leC1tb3ZlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7IH1cblxuLmRyYWdkcm9wLWNvbnRhaW5lci5leC1vdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyB9XG5cbiNsZWZ0LWxvdmVoYW5kbGVzID4gZGl2LFxuI3JpZ2h0LWxvdmVoYW5kbGVzID4gZGl2IHtcbiAgY3Vyc29yOiBpbml0aWFsOyB9XG5cbi5oYW5kbGUge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgY3Vyc29yOiBtb3ZlOyB9XG5cbi5pbWFnZS10aGluZyB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5zbGFjay1qb2luIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLXRvcDogLThweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7IH1cblxuLnRhc2tib2FyZC1hcHAtaW5wdXQgaS5mdC5mdC1wbHVzLWNpcmNsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7IH1cblxuLnRhc2tib2FyZC1hcHAtaW5wdXQgLmZvcm0tY29udHJvbC1wb3NpdGlvbi5jb250cm9sLXBvc2l0aW9uLXJpZ2h0IC5nYWxsZXJ5LWljb24tdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM2M3B4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdG9wOiA3cHg7IH1cblxuLnRhc2tib2FyZC1hcHAtaW5wdXQgLmZvcm0tY29udHJvbC1wb3NpdGlvbi5jb250cm9sLXBvc2l0aW9uLXJpZ2h0IC5nYWxsZXJ5LWljb24tbXNnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1NzNweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRvcDogN3B4OyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAudGFza2JvYXJkLWFwcC1pbnB1dCBpLmZ0LmZ0LXBsdXMtY2lyY2xlIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.component.ts":
/*!************************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.component.ts ***!
  \************************************************************/
/*! exports provided: TaskboardNGRXComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXComponent", function() { return TaskboardNGRXComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskboard-ngrx.model */ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_taskboard_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/taskboard.actions */ "./src/app/taskboard-ngrx/store/taskboard.actions.ts");





var TaskboardNGRXComponent = /** @class */ (function () {
    function TaskboardNGRXComponent(elRef, store) {
        this.elRef = elRef;
        this.store = store;
    }
    TaskboardNGRXComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskboardState = this.store.select('task');
        this.subscription = this.taskboardState.subscribe(function (data) {
            _this.todo = data.todo;
            _this.inProcess = data.inProcess;
            _this.backLog = data.backLog;
            _this.completed = data.completed;
        });
    };
    TaskboardNGRXComponent.prototype.onAddTask = function () {
        if (this.messageInputRef.nativeElement.value != "" && this.titleInputRef.nativeElement.value != "") {
            this.store.dispatch(new _store_taskboard_actions__WEBPACK_IMPORTED_MODULE_4__["AddTodo"](new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_2__["Task"](this.titleInputRef.nativeElement.value, this.messageInputRef.nativeElement.value, 'Nov 12', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New')));
        }
        this.titleInputRef.nativeElement.value = "";
        this.messageInputRef.nativeElement.value = "";
        this.titleInputRef.nativeElement.focus();
    };
    TaskboardNGRXComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoTitle', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardNGRXComponent.prototype, "titleInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoMessage', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardNGRXComponent.prototype, "messageInputRef", void 0);
    TaskboardNGRXComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngrx-taskboard',
            template: __webpack_require__(/*! raw-loader!./taskboard-ngrx.component.html */ "./node_modules/raw-loader/index.js!./src/app/taskboard-ngrx/taskboard-ngrx.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./taskboard-ngrx.component.scss */ "./src/app/taskboard-ngrx/taskboard-ngrx.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], TaskboardNGRXComponent);
    return TaskboardNGRXComponent;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts":
/*!********************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.model.ts ***!
  \********************************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(taskTitle, taskMessage, createdOn, createdBy, assignedTo, status) {
        this.taskTitle = taskTitle;
        this.taskMessage = taskMessage;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.assignedTo = assignedTo;
        this.status = status;
    }
    Task.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Task;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.module.ts ***!
  \*********************************************************/
/*! exports provided: TaskboardNGRXModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXModule", function() { return TaskboardNGRXModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _taskboard_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskboard-ngrx-routing.module */ "./src/app/taskboard-ngrx/taskboard-ngrx-routing.module.ts");
/* harmony import */ var _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taskboard-ngrx.component */ "./src/app/taskboard-ngrx/taskboard-ngrx.component.ts");
/* harmony import */ var _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../taskboard-ngrx/store/taskboard.reducers */ "./src/app/taskboard-ngrx/store/taskboard.reducers.ts");








var TaskboardNGRXModule = /** @class */ (function () {
    function TaskboardNGRXModule() {
    }
    TaskboardNGRXModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _taskboard_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskboardNGRXRoutingModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('task', _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_7__["taskReducer"])
            ],
            declarations: [
                _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_6__["TaskboardNGRXComponent"]
            ]
        })
    ], TaskboardNGRXModule);
    return TaskboardNGRXModule;
}());



/***/ })

}]);
//# sourceMappingURL=taskboard-ngrx-taskboard-ngrx-module.js.map