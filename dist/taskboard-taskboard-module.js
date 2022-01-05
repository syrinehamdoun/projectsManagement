(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taskboard-taskboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/taskboard/crud-modal/crud-modal.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/taskboard/crud-modal/crud-modal.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">{{ModalTitle}}</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    x\r\n  </button>\r\n</div>\r\n<form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\">\r\n  <div class=\"modal-body taskboard-modal\">\r\n    <div class=\"container\">\r\n      <fieldset class=\"form-group position-relative has-icon-left\">\r\n      \r\n        <input type=\"text\" [formControl]=\"myForm.controls['title']\" formControlName=\"title\" class=\"form-control\" id=\"todoTitle\"\r\n          placeholder=\"Title\" (keydown.enter)=\"$event.preventDefault()\" required #todoTitle>\r\n        <div class=\"form-control-position control-position-right\">\r\n          <i class=\"ft-edit cursor-pointer\"></i>\r\n        </div>\r\n      </fieldset>\r\n      <fieldset class=\"form-group position-relative has-icon-left\">\r\n      \r\n        <input type=\"text\" [formControl]=\"myForm.controls['message']\" formControlName=\"message\" class=\"form-control\" id=\"todoMessage\"\r\n          placeholder=\"Description\" (keydown.enter)=\"$event.preventDefault()\" required #todoMessage>\r\n        <div class=\"form-control-position control-position-right\">\r\n          <i class=\"ft-file-text\"></i>\r\n        </div>\r\n      </fieldset>\r\n      <fieldset class=\"form-group position-relative has-icon-left\">\r\n        <select  [formControl]=\"myForm.controls['createdBy']\"  formControlName=\"createdBy\" class=\"form-control\" id=\"todocreatedBy\" (keydown.enter)=\"$event.preventDefault()\" required #todocreatedBy>\r\n          <option [value]=\"option['_id']\" *ngFor=\"let option of users\">{{option['username']}}</option>\r\n\r\n      </select>\r\n       \r\n      \r\n      \r\n      \r\n        <div class=\"form-control-position control-position-right\">\r\n        <i class=\"ft-user\"></i>\r\n      </div>\r\n    </fieldset>\r\n      <fieldset class=\"form-group position-relative has-icon-left\">\r\n    \r\n          <input type=\"datetime-local\" [formControl]=\"myForm.controls['createdOn']\" formControlName=\"createdOn\" class=\"form-control\" id=\"todocreatedOn\"\r\n          placeholder=\"createdOn\" (keydown.enter)=\"$event.preventDefault()\" required #todocreatedOn>\r\n        <div class=\"form-control-position control-position-right\">\r\n          <i class=\"ft-calendar\"></i>\r\n        </div>\r\n      </fieldset>\r\n\r\n    <fieldset class=\"form-group position-relative has-icon-left\">\r\n    \r\n      <input type=\"datetime-local\" [formControl]=\"myForm.controls['deadline']\" formControlName=\"deadline\" class=\"form-control\" id=\"tododeadline\"\r\n      placeholder=\"deadline\" (keydown.enter)=\"$event.preventDefault()\" required #tododeadline>\r\n    <div class=\"form-control-position control-position-right\">\r\n      <i class=\"ft-user\"></i>\r\n    </div>\r\n  </fieldset>\r\n  <fieldset class=\"form-group position-relative has-icon-left\">\r\n    <select [formControl]=\"myForm.controls['assignedTo']\" formControlName=\"assignedTo\" class=\"form-control\" id=\"todoassignedTo\" (keydown.enter)=\"$event.preventDefault()\" required #todoassignedTo>\r\n      <option [value]=\"option['_id']\" *ngFor=\"let option of usersto\">{{option['username']}}</option>\r\n  </select>  \r\n    \r\n  <div class=\"form-control-position control-position-right\">\r\n    <i class=\"ft-user\"></i>\r\n  </div>\r\n</fieldset>\r\n  <fieldset class=\"form-group position-relative has-icon-left\">\r\n    <select id=\"todostatus\"[formControl]=\"myForm.controls['status']\" required #todostatus>\r\n    <option selected>New</option>\r\n    <option>In-Process</option>  \r\n    <option>Completed</option>  \r\n    <option>Pending</option>\r\n    </select>\r\n  <div class=\"form-control-position control-position-right\">\r\n    <i class=\"ft-user\"></i>\r\n  </div>\r\n</fieldset>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer taskboard-modal-footer\">\r\n    <button class=\"btn btn-success btn-save\" [disabled]=\"!myForm.valid\">\r\n      Save\r\n    </button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/taskboard/taskboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/taskboard/taskboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n  <div class=\"col-6\">\r\n    <div class=\"content-header text-left\">Task Board</div>\r\n    <p class=\"content-sub-header\"></p>\r\n  </div>\r\n  <div class=\"col-6 text-right\">\r\n    <button type=\"button\" class=\"btn btn-raised btn-danger\" (click)=\"addTask()\">\r\n      <i class=\"fa fa-paper-plane-o d-lg-none d-block\"></i>\r\n      <span class=\"d-lg-block d-none\">Create</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n<!-- Taskboard Starts -->\r\n<section id=\"taskboard\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-list mr-1 float-left\"></i> To Dos</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' id=\"New\" [dragulaModel]='todo'>\r\n        <div *ngFor='let todo of todo' [attr.task-id]=\"todo.taskId\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body pt-3 text-left\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 primary float-left\">{{todo.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit cursor-pointer mr-1 info\" (click)=\"editTask(todo.taskId);\"></i>\r\n                  <i class=\"ft-trash-2 cursor-pointer danger\" (click)=\"deleteTask(todo.taskId);\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{todo.taskMessage}}</p>\r\n              <h4>{{backLog.assignedTo}}</h4>\r\n              <img src=\"assets/img/portrait/small/avatar-s-1.png\" class=\"rounded-circle width-50 mr-2\"> <span class=\"primary\">{{todo.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-trending-up mr-1  float-left\"></i> In Progress</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' id=\"In-Process\" [dragulaModel]='inProcess'>\r\n        <div *ngFor='let inProcess of inProcess' [attr.task-id]=\"inProcess.taskId\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body pt-3 text-left\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 info float-left\">{{inProcess.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit cursor-pointer mr-1 info\" (click)=\"editTask(inProcess.taskId);\"></i>\r\n                  <i class=\"ft-trash-2 cursor-pointer danger\" (click)=\"deleteTask(inProcess.taskId);\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{inProcess.taskMessage}}</p>\r\n              <h4>{{backLog.assignedTo}}</h4>\r\n              <img src=\"assets/img/portrait/small/avatar-s-1.png\" class=\"rounded-circle width-50 mr-2\"> <span class=\"info\">{{inProcess.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-thumbs-up mr-1  float-left\"></i>Completed</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' id=\"Completed\" [dragulaModel]='completed'>\r\n        <div *ngFor='let completed of completed' [attr.task-id]=\"completed.taskId\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body pt-3 text-left\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 success float-left\">{{completed.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit cursor-pointer mr-1 info\" (click)=\"editTask(completed.taskId);\"></i>\r\n                  <i class=\"ft-trash-2 cursor-pointer danger\" (click)=\"deleteTask(completed.taskId);\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{completed.taskMessage}}</p>\r\n              <h4>{{backLog.assignedTo}}</h4>\r\n              <img src=\"assets/img/portrait/small/avatar-s-1.png\" class=\"rounded-circle width-50 mr-2\"> <span class=\"success\">{{completed.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-alert-octagon mr-1  float-left\"></i>On Hold</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' id=\"Pending\" [dragulaModel]='backLog'>\r\n        <div *ngFor='let backLog of backLog' [attr.task-id]=\"backLog.taskId\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body pt-3 text-left\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 warning float-left\">{{backLog.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit cursor-pointer mr-1 info\" (click)=\"editTask(backLog.taskId);\"></i>\r\n                  <i class=\"ft-trash-2 cursor-pointer danger\" (click)=\"deleteTask(backLog.taskId);\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{backLog.taskMessage}}</p>\r\n              \r\n              <img src=\"assets/img/portrait/small/avatar-s-1.png\" class=\"rounded-circle width-50 mr-2\"> <span class=\"success\">{{backLog.createdOn}}</span>\r\n            \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</section>\r\n<!-- Taskboard Ends -->\r\n"

/***/ }),

/***/ "./src/app/taskboard/crud-modal/crud-modal.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/taskboard/crud-modal/crud-modal.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tib2FyZC9jcnVkLW1vZGFsL2NydWQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/taskboard/crud-modal/crud-modal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/taskboard/crud-modal/crud-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: CrudModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudModalComponent", function() { return CrudModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var app_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/user/user.service */ "./src/app/user/user.service.ts");





var CrudModalComponent = /** @class */ (function () {
    function CrudModalComponent(userService, activeModal, formBuilder) {
        this.userService = userService;
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.ModalTitle = '';
    }
    CrudModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) {
            _this.users = data;
            _this.usersto = data;
        });
        this.buildItemForm(this.data);
        if (this.id === 0) {
            this.ModalTitle = "Add Task";
        }
        else {
            this.ModalTitle = "Edit Task";
        }
    };
    CrudModalComponent.prototype.buildItemForm = function (item) {
        this.myForm = this.formBuilder.group({
            title: [item.title || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: [item.message || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            createdOn: [item.createdOn || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            createdBy: [item.createdBy || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            deadline: [item.deadline || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            assignedTo: [item.assignedTo || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [item.status || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    CrudModalComponent.prototype.submitForm = function () {
        this.activeModal.close(this.myForm.value);
    };
    CrudModalComponent.ctorParameters = function () { return [
        { type: app_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CrudModalComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CrudModalComponent.prototype, "data", void 0);
    CrudModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crud-modal',
            template: __webpack_require__(/*! raw-loader!./crud-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/taskboard/crud-modal/crud-modal.component.html"),
            styles: [__webpack_require__(/*! ./crud-modal.component.scss */ "./src/app/taskboard/crud-modal/crud-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CrudModalComponent);
    return CrudModalComponent;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/taskboard/taskboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TaskboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardRoutingModule", function() { return TaskboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _taskboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskboard.component */ "./src/app/taskboard/taskboard.component.ts");




var routes = [
    {
        path: '',
        component: _taskboard_component__WEBPACK_IMPORTED_MODULE_3__["TaskboardComponent"],
        data: {
            title: 'Taskboard'
        },
    }
];
var TaskboardRoutingModule = /** @class */ (function () {
    function TaskboardRoutingModule() {
    }
    TaskboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TaskboardRoutingModule);
    return TaskboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/taskboard/taskboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gh-fork {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border: 0; }\n\n/* dragula-specific example page styles */\n\n.dragdrop-wrapper {\n  display: table; }\n\n/* .dragdrop-container {\r\n    display: table-cell;\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    width: 25%;\r\n  } */\n\n.dragdrop-container:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n/*\r\n   * note that styling gu-mirror directly is a bad practice because it's too generic.\r\n   * you're better off giving the draggable elements a unique class and styling that directly!\r\n   */\n\n.dragdrop-container > div,\n.gu-mirror {\n  transition: opacity 0.4s ease-in-out; }\n\n.dragdrop-container > div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab; }\n\n.gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing; }\n\n.dragdrop-container .ex-moved {\n  background-color: #e74c3c; }\n\n.dragdrop-container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n#left-lovehandles > div,\n#right-lovehandles > div {\n  cursor: initial; }\n\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move; }\n\n.image-thing {\n  margin: 20px 0;\n  display: block;\n  text-align: center; }\n\n.slack-join {\n  position: absolute;\n  font-weight: normal;\n  font-size: 14px;\n  right: 10px;\n  top: 50%;\n  margin-top: -8px;\n  line-height: 16px; }\n\n.taskboard-modal-footer .btn-save {\n  color: #fff !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza2JvYXJkL0M6XFxVc2Vyc1xcYXN1c1xcRGVza3RvcFxccHJvamVjdHNNYW5hZ2VtZW50L3NyY1xcYXBwXFx0YXNrYm9hcmRcXHRhc2tib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFza2JvYXJkL3Rhc2tib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFHWCx5Q0FBQTs7QUFDQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7Ozs7S0NFSTs7QURHSjtFQUNFLG9DQUFvQyxFQUFBOztBQUd0Qzs7O0lDQUc7O0FESUg7O0VBS0Usb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFFWixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxnQkFBZ0I7RUFFaEIsd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsMENBQTBDLEVBQUE7O0FBRzVDOztFQUVFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUduQjtFQUVJLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFza2JvYXJkL3Rhc2tib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuZ2gtZm9yayB7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgdG9wOiAwO1xyXG4gICByaWdodDogMDtcclxuICAgYm9yZGVyOiAwO1xyXG4gfVxyXG5cclxuIC8qIGRyYWd1bGEtc3BlY2lmaWMgZXhhbXBsZSBwYWdlIHN0eWxlcyAqL1xyXG4gLmRyYWdkcm9wLXdyYXBwZXIge1xyXG4gICBkaXNwbGF5OiB0YWJsZTtcclxuIH1cclxuXHJcbiAvKiAuZHJhZ2Ryb3AtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH0gKi9cclxuIC5kcmFnZHJvcC1jb250YWluZXI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiB9XHJcblxyXG4gLypcclxuICAgKiBub3RlIHRoYXQgc3R5bGluZyBndS1taXJyb3IgZGlyZWN0bHkgaXMgYSBiYWQgcHJhY3RpY2UgYmVjYXVzZSBpdCdzIHRvbyBnZW5lcmljLlxyXG4gICAqIHlvdSdyZSBiZXR0ZXIgb2ZmIGdpdmluZyB0aGUgZHJhZ2dhYmxlIGVsZW1lbnRzIGEgdW5pcXVlIGNsYXNzIGFuZCBzdHlsaW5nIHRoYXQgZGlyZWN0bHkhXHJcbiAgICovXHJcbiAuZHJhZ2Ryb3AtY29udGFpbmVyPmRpdixcclxuIC5ndS1taXJyb3Ige1xyXG4gICAvLyBtYXJnaW46IDEwcHg7XHJcbiAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gfVxyXG5cclxuIC5kcmFnZHJvcC1jb250YWluZXI+ZGl2IHtcclxuICAgY3Vyc29yOiBtb3ZlO1xyXG4gICBjdXJzb3I6IGdyYWI7XHJcbiAgIGN1cnNvcjogLW1vei1ncmFiO1xyXG4gICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcclxuIH1cclxuXHJcbiAuZ3UtbWlycm9yIHtcclxuICAgY3Vyc29yOiBncmFiYmluZztcclxuICAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xyXG4gICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XHJcbiB9XHJcblxyXG4gLmRyYWdkcm9wLWNvbnRhaW5lciAuZXgtbW92ZWQge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xyXG4gfVxyXG5cclxuIC5kcmFnZHJvcC1jb250YWluZXIuZXgtb3ZlciB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuIH1cclxuXHJcbiAjbGVmdC1sb3ZlaGFuZGxlcz5kaXYsXHJcbiAjcmlnaHQtbG92ZWhhbmRsZXM+ZGl2IHtcclxuICAgY3Vyc29yOiBpbml0aWFsO1xyXG4gfVxyXG5cclxuIC5oYW5kbGUge1xyXG4gICBwYWRkaW5nOiAwIDVweDtcclxuICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgY3Vyc29yOiBtb3ZlO1xyXG4gfVxyXG5cclxuIC5pbWFnZS10aGluZyB7XHJcbiAgIG1hcmdpbjogMjBweCAwO1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG5cclxuIC5zbGFjay1qb2luIHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIHJpZ2h0OiAxMHB4O1xyXG4gICB0b3A6IDUwJTtcclxuICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiB9XHJcblxyXG4gLnRhc2tib2FyZC1tb2RhbC1mb290ZXIge1xyXG4gICAuYnRuLXNhdmUge1xyXG4gICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuIH1cclxuIiwiLmdoLWZvcmsge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlcjogMDsgfVxuXG4vKiBkcmFndWxhLXNwZWNpZmljIGV4YW1wbGUgcGFnZSBzdHlsZXMgKi9cbi5kcmFnZHJvcC13cmFwcGVyIHtcbiAgZGlzcGxheTogdGFibGU7IH1cblxuLyogLmRyYWdkcm9wLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9ICovXG4uZHJhZ2Ryb3AtY29udGFpbmVyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpOyB9XG5cbi8qXHJcbiAgICogbm90ZSB0aGF0IHN0eWxpbmcgZ3UtbWlycm9yIGRpcmVjdGx5IGlzIGEgYmFkIHByYWN0aWNlIGJlY2F1c2UgaXQncyB0b28gZ2VuZXJpYy5cclxuICAgKiB5b3UncmUgYmV0dGVyIG9mZiBnaXZpbmcgdGhlIGRyYWdnYWJsZSBlbGVtZW50cyBhIHVuaXF1ZSBjbGFzcyBhbmQgc3R5bGluZyB0aGF0IGRpcmVjdGx5IVxyXG4gICAqL1xuLmRyYWdkcm9wLWNvbnRhaW5lciA+IGRpdixcbi5ndS1taXJyb3Ige1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7IH1cblxuLmRyYWdkcm9wLWNvbnRhaW5lciA+IGRpdiB7XG4gIGN1cnNvcjogbW92ZTtcbiAgY3Vyc29yOiBncmFiO1xuICBjdXJzb3I6IC1tb3otZ3JhYjtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7IH1cblxuLmd1LW1pcnJvciB7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG4gIGN1cnNvcjogLW1vei1ncmFiYmluZztcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nOyB9XG5cbi5kcmFnZHJvcC1jb250YWluZXIgLmV4LW1vdmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYzsgfVxuXG4uZHJhZ2Ryb3AtY29udGFpbmVyLmV4LW92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IH1cblxuI2xlZnQtbG92ZWhhbmRsZXMgPiBkaXYsXG4jcmlnaHQtbG92ZWhhbmRsZXMgPiBkaXYge1xuICBjdXJzb3I6IGluaXRpYWw7IH1cblxuLmhhbmRsZSB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBjdXJzb3I6IG1vdmU7IH1cblxuLmltYWdlLXRoaW5nIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnNsYWNrLWpvaW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtOHB4O1xuICBsaW5lLWhlaWdodDogMTZweDsgfVxuXG4udGFza2JvYXJkLW1vZGFsLWZvb3RlciAuYnRuLXNhdmUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/taskboard/taskboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/taskboard/taskboard.component.ts ***!
  \**************************************************/
/*! exports provided: TaskboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardComponent", function() { return TaskboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _taskboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskboard.service */ "./src/app/taskboard/taskboard.service.ts");
/* harmony import */ var _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crud-modal/crud-modal.component */ "./src/app/taskboard/crud-modal/crud-modal.component.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");






var TaskboardComponent = /** @class */ (function () {
    function TaskboardComponent(dragulaService, elRef, taskBoardService, modalService) {
        // this.taskBoardService.getTasks();
        var _this = this;
        this.dragulaService = dragulaService;
        this.elRef = elRef;
        this.taskBoardService = taskBoardService;
        this.modalService = modalService;
        this.BAG = "task-group";
        dragulaService.drop(this.BAG)
            .subscribe(function (_a) {
            var el = _a.el, target = _a.target;
            _this.updateTaskStatus(el.getAttribute('task-id'), target.id);
        });
    }
    TaskboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskBoardService.getTasks1().subscribe(function (data) {
            var res = [];
            for (var i = 0; i < Object.keys(data).length; i++) {
                var task = {
                    taskId: data[i]._id,
                    id: data[i]._id,
                    taskTitle: data[i].title,
                    taskMessage: data[i].description,
                    createdOn: data[i].date_creation,
                    createdBy: data[i].createdBy,
                    deadline: data[i].deadline,
                    assignedTo: data[i].assignedTo,
                    status: data[i].status
                };
                console.log(task);
                res.unshift(task);
            }
            console.log(res);
            //alert(res)
            _this.tasks = res;
            _this.loadTasks();
            //alert(this.tasks)
        });
        //this.tasks = this.taskBoardService.tasks;
    };
    TaskboardComponent.prototype.loadTasks = function () {
        var _this = this;
        this.taskBoardService.getTasks1().subscribe(function (data) {
            var res = [];
            for (var i = 0; i < Object.keys(data).length; i++) {
                var task = {
                    taskId: data[i]._id,
                    id: data[i]._id,
                    taskTitle: data[i].title,
                    taskMessage: data[i].description,
                    createdOn: new Date(data[i].date_creation).toDateString(),
                    createdBy: new Date(data[i].createdBy).toDateString(),
                    deadline: data[i].deadline,
                    assignedTo: data[i].assignedTo,
                    status: data[i].status
                };
                console.log(task);
                res.unshift(task);
            }
            console.log(res);
            //alert(res)
            _this.tasks = res;
            _this.getAllTask();
            //alert(this.tasks)
        });
    };
    TaskboardComponent.prototype.getAllTask = function () {
        this.todo = this.tasks.filter(function (task) { return task.status === 'New'; });
        this.inProcess = this.tasks.filter(function (task) { return task.status === 'In-Process'; });
        this.backLog = this.tasks.filter(function (task) { return task.status === 'Pending'; });
        this.completed = this.tasks.filter(function (task) { return task.status === 'Completed'; });
    };
    TaskboardComponent.prototype.editTask = function (id) {
        var _this = this;
        alert(id);
        var task = this.tasks.find(function (x) { return x.taskId === id; });
        var modalRef = this.modalService.open(_crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_4__["CrudModalComponent"]);
        modalRef.componentInstance.id = id; // should be the id
        modalRef.componentInstance.data = { title: task.taskTitle, message: task.taskMessage, status: task.status, deadline: task.deadline, createdOn: task.createdOn }; // should be the data
        modalRef.result.then(function (result) {
            console.log(result);
            console.log('test');
            var index = _this.tasks.indexOf(task);
            task.taskTitle = result.title;
            task.taskMessage = result.message;
            task.createdOn = result.createdOn,
                task.createdBy = result.createdBy,
                task.deadline = result.deadline,
                task.assignedTo = result.assignedTo,
                task.status = result.status;
            _this.taskBoardService.UpdateTask(task, index, id.toString()).subscribe(function (data) {
                // this.tasks = data;
                _this.loadTasks();
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    TaskboardComponent.prototype.updateTaskStatus = function (id, status) {
        var _this = this;
        this.taskBoardService.UpdateStatusTask(status, id).subscribe(function (data) {
            // this.tasks = data;
            _this.loadTasks();
        });
    };
    TaskboardComponent.prototype.deleteTask = function (id) {
        var _this = this;
        alert(id);
        this.taskBoardService.deleteTask(id.toString(), true).subscribe(function (data) {
            _this.loadTasks();
        });
    };
    TaskboardComponent.prototype.addTask = function () {
        var _this = this;
        var modalRef = this.modalService.open(_crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_4__["CrudModalComponent"]);
        modalRef.componentInstance.id = 0; // should be the id
        modalRef.componentInstance.data = { title: '', message: '' }; // should be the data
        modalRef.result.then(function (result) {
            _this.taskBoardService.addNewTask(result.title, result.message, result.createdOn, result.createdBy, result.deadline, result.assignedTo, result.status).subscribe(function (data) {
                //this.taskBoardService.addTask(result.title, result.message,result.createdOn,result.createdBy,result.deadline,result.assignedTo,result.status);
                //=this.tasks = data;
                console.log(data);
                _this.loadTasks();
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    TaskboardComponent.ctorParameters = function () { return [
        { type: ng2_dragula__WEBPACK_IMPORTED_MODULE_5__["DragulaService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _taskboard_service__WEBPACK_IMPORTED_MODULE_3__["TaskBoardService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoTitle', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardComponent.prototype, "titleInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoMessage', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardComponent.prototype, "messageInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todocreatedOn', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardComponent.prototype, "createdOnInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todocreatedBy', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardComponent.prototype, "createdByInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tododeadline', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardComponent.prototype, "deadlineInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todostatus', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardComponent.prototype, "statusInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('assignedTo', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardComponent.prototype, "assignedToInputRef", void 0);
    TaskboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-taskboard',
            template: __webpack_require__(/*! raw-loader!./taskboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/taskboard/taskboard.component.html"),
            providers: [_taskboard_service__WEBPACK_IMPORTED_MODULE_3__["TaskBoardService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./taskboard.component.scss */ "./src/app/taskboard/taskboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_dragula__WEBPACK_IMPORTED_MODULE_5__["DragulaService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _taskboard_service__WEBPACK_IMPORTED_MODULE_3__["TaskBoardService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], TaskboardComponent);
    return TaskboardComponent;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/taskboard/taskboard.module.ts ***!
  \***********************************************/
/*! exports provided: TaskboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardModule", function() { return TaskboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _taskboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taskboard-routing.module */ "./src/app/taskboard/taskboard-routing.module.ts");
/* harmony import */ var _taskboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./taskboard.component */ "./src/app/taskboard/taskboard.component.ts");
/* harmony import */ var _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crud-modal/crud-modal.component */ "./src/app/taskboard/crud-modal/crud-modal.component.ts");









var TaskboardModule = /** @class */ (function () {
    function TaskboardModule() {
    }
    TaskboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _taskboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["TaskboardRoutingModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_3__["DragulaModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            declarations: [
                _taskboard_component__WEBPACK_IMPORTED_MODULE_7__["TaskboardComponent"],
                _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_8__["CrudModalComponent"]
            ],
            entryComponents: [
                _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_8__["CrudModalComponent"]
            ]
        })
    ], TaskboardModule);
    return TaskboardModule;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/taskboard/taskboard.service.ts ***!
  \************************************************/
/*! exports provided: TaskBoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskBoardService", function() { return TaskBoardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web-request.service */ "./src/app/web-request.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var TaskBoardService = /** @class */ (function () {
    function TaskBoardService(http, router, webReqService) {
        this.http = http;
        this.router = router;
        this.webReqService = webReqService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.url = 'http://localhost:5000';
        this.tasks = [];
        //this.getTasks() ;
    }
    TaskBoardService.prototype.getTasks = function () {
        var _this = this;
        var observableReq = this.http.get(this.url + "/api/taches/getAlltaches").subscribe(function (data) {
            for (var i = 0; i < Object.keys(data).length; i++) {
                var task = {
                    taskId: data[i]._id,
                    id: data[i]._id,
                    taskTitle: data[i].title,
                    taskMessage: data[i].description,
                    createdOn: data[i].date_creation,
                    createdBy: data[i].createdBy,
                    deadline: data[i].deadline,
                    assignedTo: data[i].assignedTo,
                    status: data[i].status
                };
                _this.tasks.unshift(task);
            }
            alert(_this.tasks);
        });
    };
    TaskBoardService.prototype.getTasks1 = function () {
        return this.http.get(this.url + "/api/taches/getAlltaches");
        /*return this
          .http
          .get(`${this.url}/api/taches/getAlltaches`);*/
    };
    TaskBoardService.prototype.addNew = function (title, message, createdOn, createdBy, deadline, assignedTo, status) {
        var task = {
            taskId: Math.round(Math.random() * 10000000000),
            id: "",
            taskTitle: title,
            taskMessage: message,
            createdOn: createdOn,
            createdBy: createdBy,
            deadline: deadline,
            assignedTo: assignedTo,
            status: status
        };
        this.webReqService.post('lists', { title: title });
        this.tasks.unshift(task);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.tasks.slice()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(100));
    };
    TaskBoardService.prototype.addNewTask = function (title, message, createdOn, createdBy, deadline, assignedTo, status) {
        var task = {
            taskId: Math.round(Math.random() * 10000000000),
            id: "",
            taskTitle: title,
            taskMessage: message,
            createdOn: createdOn,
            createdBy: createdBy,
            deadline: deadline,
            assignedTo: assignedTo,
            status: status
        };
        this.webReqService.post('lists', { title: title });
        this.tasks.unshift(task);
        return this
            .http
            .post(this.url + "/api/taches/addTache/", { title: title, description: message, status: status, date_creation: createdOn, assignedTo: assignedTo, createdBy: createdBy, deadline: deadline });
    };
    TaskBoardService.prototype.updateProjects = function (id, updateProject) {
        return this
            .http
            .patch(this.url + "/api/projects/updateProject/" + id, { updateProject: updateProject })
            .subscribe(function () {
            console.log("Updated");
        });
    };
    TaskBoardService.prototype.UpdateTask = function (task, index, id) {
        // this.tasks.splice(index, 1, task);
        alert(task.taskTitle);
        return this
            .http
            .patch(this.url + "/api/taches/updateTache/" + id, { title: task.taskTitle, description: task.taskMessage, status: task.status, date_creation: task.createdOn, assignedTo: task.assignedTo, createdBy: task.createdBy, deadline: task.deadline });
        /*this.tasks = this.tasks.map(i => {
            if(i.taskId === task.taskId) {
              return Object.assign({}, i, task);
            }
            return i;
          })
            return of(this.tasks.slice()).pipe(delay(1000));*/
    };
    TaskBoardService.prototype.UpdateStatusTask = function (status, id) {
        // this.tasks.splice(index, 1, task);
        return this
            .http
            .patch(this.url + "/api/taches/UpdateStatustache/" + id, { status: status });
    };
    TaskBoardService.prototype.deleteTask = function (id, deleted) {
        return this
            .http
            .patch(this.url + "/api/taches/deletetache/" + id, { deleted: deleted });
    };
    TaskBoardService.prototype.deleteTask1 = function (index) {
        this.tasks.splice(index, 1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.tasks.slice()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(100));
    };
    TaskBoardService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _web_request_service__WEBPACK_IMPORTED_MODULE_4__["WebRequestService"] }
    ]; };
    TaskBoardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _web_request_service__WEBPACK_IMPORTED_MODULE_4__["WebRequestService"]])
    ], TaskBoardService);
    return TaskBoardService;
}());



/***/ }),

/***/ "./src/app/web-request.service.ts":
/*!****************************************!*\
  !*** ./src/app/web-request.service.ts ***!
  \****************************************/
/*! exports provided: WebRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRequestService", function() { return WebRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WebRequestService = /** @class */ (function () {
    function WebRequestService(http) {
        this.http = http;
        this.ROOT_URL = 'http://localhost:5000';
    }
    WebRequestService.prototype.get = function (url) {
        return this.http.get(this.ROOT_URL + "/" + url);
    };
    WebRequestService.prototype.post = function (url, payload) {
        return this.http.post(this.ROOT_URL + "/" + url, payload);
    };
    WebRequestService.prototype.patch = function (url, payload) {
        return this.http.patch(this.ROOT_URL + "/" + url, payload);
    };
    WebRequestService.prototype.delete = function (url) {
        return this.http.delete(this.ROOT_URL + "/" + url);
    };
    WebRequestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WebRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WebRequestService);
    return WebRequestService;
}());



/***/ })

}]);
//# sourceMappingURL=taskboard-taskboard-module.js.map