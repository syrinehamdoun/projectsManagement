(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timesheet-timesheet-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/timesheet/timesheet.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/timesheet/timesheet.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"basic-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Your Timesheet</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left match-height\">\r\n    <div class=\"col-md-2\"></div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header pb-2\">\r\n          <h4 class=\"card-title\" id=\"basic-layout-icons\">Timesheet</h4>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n\r\n            <form class=\"form\">\r\n              <div class=\"form-body\">\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"timesheetinput1\">Employee Name</label>\r\n                  <div class=\"position-relative has-icon-left\">\r\n                    <input type=\"text\" id=\"timesheetinput1\" class=\"form-control\"[(ngModel)]=\"employee\" name=\"employeename\" disabled>\r\n                    <div class=\"form-control-position\">\r\n                      <i class=\"ft-user\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"timesheetinput2\">Project Name</label>\r\n                  <div class=\"position-relative\"> \r\n                    <select  [(ngModel)]=\"project\" id=\"timesheetinput2\" [(ngModel)]=\"project\"name=\"project\" class=\"form-control\">\r\n                     <option [value]=\"proj['_id']\" *ngFor=\"let proj of projects\">{{proj.description}} </option>    \r\n                  </select> \r\n                    <div class=\"form-control-position\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"timesheetinput3\">Date</label>\r\n                  <div class=\"position-relative has-icon-left\">\r\n                    <input type=\"date\" id=\"timesheetinput3\" class=\"form-control\" [(ngModel)]=\"date\"name=\"date\">\r\n                    <div class=\"form-control-position\">\r\n                      <i class=\"ft-message-square\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"timesheetinput5\">Start Time</label>\r\n                      <div class=\"position-relative has-icon-left\">\r\n                        <input type=\"time\" id=\"timesheetinput5\" class=\"form-control\" [(ngModel)]=\"starttime\"name=\"starttime\">\r\n                        <div class=\"form-control-position\">\r\n                          <i class=\"ft-clock\"></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"timesheetinput6\">End Time</label>\r\n                      <div class=\"position-relative has-icon-left\">\r\n                        <input type=\"time\" id=\"timesheetinput6\" class=\"form-control\" [(ngModel)]=\"endtime\"name=\"endtime\">\r\n                        <div class=\"form-control-position\">\r\n                          <i class=\"ft-clock\"></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"timesheetinput7\">Task Description</label>\r\n                  <div class=\"position-relative has-icon-left\">\r\n                    <textarea id=\"timesheetinput7\" rows=\"5\" class=\"form-control\" [(ngModel)]=\"description\" name=\"description\"></textarea>\r\n                    <div class=\"form-control-position\">\r\n                      <i class=\"ft-file\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-actions right\">\r\n                <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-raised btn-warning mr-1\">\r\n                  <i class=\"ft-x\"></i> Cancel\r\n                </button>\r\n                <button (click)=\"onSubmit()\"type=\"button\" class=\"btn btn-raised btn-primary\">\r\n                  <i class=\"fa fa-check-square-o\"></i> Save\r\n                </button>\r\n              </div>\r\n            </form>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./src/app/client/client.service.ts":
/*!******************************************!*\
  !*** ./src/app/client/client.service.ts ***!
  \******************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ClientService = /** @class */ (function () {
    function ClientService(http, router) {
        this.http = http;
        this.router = router;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.url = 'https://projects-management-itbs.herokuapp.com';
    }
    ClientService.prototype.getClients = function () {
        return this
            .http
            .get(this.url + "/api/clients/getAllclients");
    };
    ClientService.prototype.addClients = function (newClient) {
        return this
            .http
            .post(this.url + "/api/clients/addClient", { newClient: newClient })
            .subscribe(function () {
            console.log("Added");
        });
    };
    ClientService.prototype.deleteClients = function (id, deleted) {
        return this
            .http
            .patch(this.url + "/api/clients/deleteClient/" + id, { deleted: deleted })
            .subscribe(function () {
            console.log("Deleted");
        });
    };
    ClientService.prototype.updateClients = function (id, clientUpdated) {
        return this
            .http
            .patch(this.url + "/api/clients/updateClient/" + id, { clientUpdated: clientUpdated })
            .subscribe(function () {
            console.log("Updated");
        });
    };
    ClientService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/timesheet/timesheet-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/timesheet/timesheet-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TimesheetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetRoutingModule", function() { return TimesheetRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _timesheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timesheet.component */ "./src/app/timesheet/timesheet.component.ts");




var routes = [
    {
        path: '',
        component: _timesheet_component__WEBPACK_IMPORTED_MODULE_3__["TimesheetComponent"],
        data: {
            title: 'timesheet'
        },
    }
];
var TimesheetRoutingModule = /** @class */ (function () {
    function TimesheetRoutingModule() {
    }
    TimesheetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TimesheetRoutingModule);
    return TimesheetRoutingModule;
}());



/***/ }),

/***/ "./src/app/timesheet/timesheet.component.scss":
/*!****************************************************!*\
  !*** ./src/app/timesheet/timesheet.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVzaGVldC90aW1lc2hlZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/timesheet/timesheet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timesheet/timesheet.component.ts ***!
  \**************************************************/
/*! exports provided: TimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetComponent", function() { return TimesheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_client_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/client/client.service */ "./src/app/client/client.service.ts");
/* harmony import */ var app_project_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/project/project.service */ "./src/app/project/project.service.ts");
/* harmony import */ var _timesheet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timesheet.service */ "./src/app/timesheet/timesheet.service.ts");






var TimesheetComponent = /** @class */ (function () {
    function TimesheetComponent(http, clientService, timesheetService, projectService) {
        this.http = http;
        this.clientService = clientService;
        this.timesheetService = timesheetService;
        this.projectService = projectService;
    }
    TimesheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employee = JSON.parse(localStorage.getItem('currentUser')).userName;
        this.projectService.getProjects().subscribe(function (data) {
            _this.projects = data;
            for (var i = 0; i < Object.keys(data).length; i++) {
                if (data[i].deleted == true) {
                    _this.projects.splice(i);
                }
            }
        });
    };
    TimesheetComponent.prototype.onCancel = function () {
        this.project = '';
        this.description = '';
        this.date = '';
        this.endtime = '';
        this.starttime = '';
        this.ngOnInit();
    };
    TimesheetComponent.prototype.onSubmit = function () {
        this.timesheetService.addTimesheet({ employee: this.employee, project: this.project, description: this.description,
            date: this.date, endtime: this.endtime, starttime: this.starttime,
        });
        /*this.project='';
        this.description='';
        this.date='';
        this.endtime='';
        this.starttime='';*/
        this.ngOnInit();
    };
    TimesheetComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: app_client_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] },
        { type: _timesheet_service__WEBPACK_IMPORTED_MODULE_5__["TimesheetService"] },
        { type: app_project_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] }
    ]; };
    TimesheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-timesheet',
            template: __webpack_require__(/*! raw-loader!./timesheet.component.html */ "./node_modules/raw-loader/index.js!./src/app/timesheet/timesheet.component.html"),
            styles: [__webpack_require__(/*! ./timesheet.component.scss */ "./src/app/timesheet/timesheet.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], app_client_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"], _timesheet_service__WEBPACK_IMPORTED_MODULE_5__["TimesheetService"], app_project_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]])
    ], TimesheetComponent);
    return TimesheetComponent;
}());



/***/ }),

/***/ "./src/app/timesheet/timesheet.module.ts":
/*!***********************************************!*\
  !*** ./src/app/timesheet/timesheet.module.ts ***!
  \***********************************************/
/*! exports provided: TimesheetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetModule", function() { return TimesheetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timesheet-routing.module */ "./src/app/timesheet/timesheet-routing.module.ts");
/* harmony import */ var _timesheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timesheet.component */ "./src/app/timesheet/timesheet.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var TimesheetModule = /** @class */ (function () {
    function TimesheetModule() {
    }
    TimesheetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_3__["TimesheetRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            declarations: [
                _timesheet_component__WEBPACK_IMPORTED_MODULE_4__["TimesheetComponent"]
            ]
        })
    ], TimesheetModule);
    return TimesheetModule;
}());



/***/ }),

/***/ "./src/app/timesheet/timesheet.service.ts":
/*!************************************************!*\
  !*** ./src/app/timesheet/timesheet.service.ts ***!
  \************************************************/
/*! exports provided: TimesheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetService", function() { return TimesheetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TimesheetService = /** @class */ (function () {
    function TimesheetService(http, router) {
        this.http = http;
        this.router = router;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.url = 'https://projects-management-itbs.herokuapp.com';
    }
    TimesheetService.prototype.getTimesheets = function () {
        return this
            .http
            .get(this.url + "/api/timesheets/getAllTimesheets");
    };
    TimesheetService.prototype.addTimesheet = function (newTimesheet) {
        return this
            .http
            .post(this.url + "/api/timesheets/addTimesheet", { newTimesheet: newTimesheet })
            .subscribe(function () {
            console.log("Added");
        });
    };
    TimesheetService.prototype.deleteTimesheet = function (id, deleted) {
        return this
            .http
            .patch(this.url + "/api/timesheets/deleteTimesheet/" + id, { deleted: deleted })
            .subscribe(function () {
            console.log("Deleted");
        });
    };
    TimesheetService.prototype.updateProjects = function (id, updateTimesheet) {
        return this
            .http
            .patch(this.url + "/api/timesheets/updateTimesheet/" + id, { updateTimesheet: updateTimesheet })
            .subscribe(function () {
            console.log("Updated");
        });
    };
    TimesheetService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    TimesheetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TimesheetService);
    return TimesheetService;
}());



/***/ })

}]);
//# sourceMappingURL=timesheet-timesheet-module.js.map