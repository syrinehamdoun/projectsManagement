(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"content-header\">Add User</div>\r\n    </div>\r\n  </div>\r\n  <section id=\"ngx\">\r\n    <div class=\"card\">\r\n        <div class=\"card-content\">\r\n            <div class=\"card-body\">\r\n                <aw-wizard #wizard navBarLayout=\"large-empty-symbols\">\r\n                    <aw-wizard-step [stepTitle]=\"'Steptitle 1'\" [navigationSymbol]=\"{ symbol: '&#xf007;', fontFamily: 'FontAwesome' }\">\r\n                        <form #personalForm=\"ngForm\" class=\"editForm\" novalidate>\r\n                            <h4 class=\"head text-center\">Please tell us about yourself.</h4>\r\n                            <br/>\r\n                            <div class='row'>\r\n                                <div class='col-12'>\r\n                                    <div class=\"row\">\r\n                                        <div class='col-12 col-sm-6'>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"form-control-label\" for=\"firstname\">First Name</label>\r\n                                                <input class=\"form-control input-md\" [(ngModel)]=\"userName\"  #firstname=\"ngModel\" required id=\"firstname\" name=\"firstname\" type=\"text\">\r\n                                                <small class=\"form-text text-muted danger\" *ngIf=\"!firstname.valid && (firstname.dirty || firstname.touched)\">This field is required!</small>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class='col-12 col-sm-6'>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"form-control-label\" for=\"lastname\">Last Name </label>\r\n                                                <input class=\"form-control input-md\" [(ngModel)]=\"userLastName\" #lastname=\"ngModel\" required id=\"lastname\" name=\"lastname\" type=\"text\">\r\n                                                <small class=\"form-text text-muted danger\" *ngIf=\"!lastname.valid && (lastname.dirty || lastname.touched)\">This field is required!</small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"form-control-label\" for=\"email\">Email</label>\r\n                                        <input class=\"form-control input-md\" [(ngModel)]=\"userEmail\" #email=\"ngModel\" required email id=\"email\" name=\"email\" type=\"text\">{{ ngModel }}\r\n                                        <small class=\"form-text text-muted danger\" *ngIf=\"!email.valid && (email.dirty || email.touched)\">Please enter a valid email!</small>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"form-control-label\" for=\"userFile\">Email</label>\r\n                                        <input class=\"form-control input-md\" [(ngModel)]=\"userFile\" #userFile=\"ngModel\" required  id=\"userFile\" name=\"userFile\" type=\"file\">{{ ngModel }}\r\n                                       \r\n                                    </div>\r\n                                    \r\n                      \r\n  \r\n                                    <div class=\"form-group text-center\">\r\n                                        <button type=\"button\" uiSref=\"work\" class=\"btn btn-info btn-raised\" [disabled]=\"!personalForm.valid\" awNextStep>\r\n                                            Next\r\n                                            <span style=\"margin-left:10px;\">\r\n                                                <i class=\"ft-chevron-right\"></i>\r\n                                            </span>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </aw-wizard-step>\r\n                    <aw-wizard-step  [stepTitle]=\"'Steptitle 2'\" [navigationSymbol]=\"{ symbol: '&#xf0b1;', fontFamily: 'FontAwesome' }\">\r\n                        <form #workForm=\"ngForm\" class=\"editForm\" novalidate>\r\n                            <h4 class=\"head text-center\">What do you do?</h4>\r\n                            <br/>\r\n                            <div class='row justify-content-center'>\r\n                                <div class='col-2'>\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"custom-control custom-radio m-0\">\r\n                                            <input type=\"radio\" [(ngModel)]=\"userWork\" #work required id=\"customRadioInline1\" name=\"work\" class=\"custom-control-input\" value=\"1\">\r\n                                            <label class=\"custom-control-label\" for=\"customRadioInline1\">Design</label>\r\n                                        </div>\r\n                                        <div class=\"custom-control custom-radio m-0\">\r\n                                            <input type=\"radio\" [(ngModel)]=\"userWork\" #work required id=\"customRadioInline2\"  name=\"work\" class=\"custom-control-input\" value=\"2\">\r\n                                            <label class=\"custom-control-label\" for=\"customRadioInline2\">Code</label>\r\n                                        </div>\r\n                                        <div class=\"custom-control custom-radio m-0\">\r\n                                            <input type=\"radio\" [(ngModel)]=\"userWork\" #work required id=\"customRadioInline3\" checked name=\"work\" class=\"custom-control-input\" value=\"3\">\r\n                                            <label class=\"custom-control-label\" for=\"customRadioInline3\">Deploy</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group text-center space-20\">\r\n                                <button uiSref=\"personal\" type=\"button\" class=\"btn btn-raised btn-secondary mr-1\" awPreviousStep>\r\n                                    <span style=\"margin-right:10px;\">\r\n                                        <i class=\"ft-chevron-left\"></i>\r\n                                    </span> Previous</button>\r\n                                <button uiSref=\"address\" type=\"button\" class=\"btn btn-raised btn-info\" [disabled]=\"!workForm.valid\" awNextStep>\r\n                                    Next\r\n                                    <span style=\"margin-left:10px;\">\r\n                                        <i class=\"ft-chevron-right\"></i>\r\n                                    </span>\r\n                                </button>\r\n                            </div>\r\n                        </form>                        \r\n                    </aw-wizard-step>\r\n                    <aw-wizard-step [stepTitle]=\"'Steptitle 3'\" [navigationSymbol]=\"{ symbol: '&#xf0ac;', fontFamily: 'FontAwesome' }\">\r\n                        <form #addressForm=\"ngForm\" class=\"editForm\" novalidate>\r\n                            <h4 class=\"head text-center\">Where do you live?</h4>\r\n                            <br/>\r\n                            <div class='row'>\r\n                                <div class='col-sm-12'>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"form-control-label\" for=\"street\">Street Address</label>\r\n                                        <input class=\"form-control input-md\" [(ngModel)]=\"userStreet\" #street=\"ngModel\" required id=\"street\" name=\"street\" type=\"text\">\r\n                                        <small class=\"form-text text-muted danger\" *ngIf=\"!street.valid && (street.dirty || street.touched)\">This field is required!</small>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                      <label class=\"form-control-label\" for=\"phone\">Phone</label>\r\n                                      <input class=\"form-control input-md\" [(ngModel)]=\"userPhone\" #phone=\"ngModel\" required id=\"phone\" name=\"phone\" type=\"text\">\r\n                                      <small class=\"form-text text-muted danger\" *ngIf=\"!phone.valid && (phone.dirty || phone.touched)\">This field is required!</small>\r\n  \r\n                                  </div>\r\n                                    <div class=\"row\">\r\n                                        <div class='col-12 col-sm-4'>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"form-control-label\" for=\"city\">City</label>\r\n                                                <input class=\"form-control input-md\" [(ngModel)]=\"userCity\" #city=\"ngModel\" required id=\"city\" name=\"city\" type=\"text\">\r\n                                                <small class=\"form-text text-muted danger\" *ngIf=\"!city.valid && (city.dirty || city.touched)\">This field is required!</small>\r\n  \r\n                                            </div>\r\n                                        </div>\r\n                                        <div class='col-4 col-sm-offset-1 col-sm-3'>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"form-control-label\" for=\"state\">State</label>\r\n                                                <input class=\"form-control input-md\" [(ngModel)]=\"userState\" #state=\"ngModel\" required id=\"state\" name=\"state\" type=\"text\">\r\n                                                <small class=\"form-text text-muted danger\" *ngIf=\"!state.valid && (state.dirty || state.touched)\">This field is required!</small>\r\n  \r\n                                            </div>\r\n                                        </div>\r\n                                        <div class='col-offset-1 col-7 col-sm-offset-1 col-sm-3'>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"form-control-label\" for=\"zip\">Zip</label>\r\n                                                <input class=\"form-control input-md\" [(ngModel)]=\"userZip\" #zip=\"ngModel\" required id=\"zip\" name=\"zip\" type=\"text\">\r\n                                                <small class=\"form-text text-muted danger\" *ngIf=\"!zip.valid && (zip.dirty || zip.touched)\">This field is required!</small>\r\n  \r\n                                            </div>\r\n                                        </div> \r\n                                        <div class='col-6 col-sm-offset-1 col-sm-3'>\r\n                                          <div class=\"form-group\">\r\n                                              <label class=\"form-control-label\" for=\"country\">Country</label>\r\n                                              <input class=\"form-control input-md\" [(ngModel)]=\"userCountry\" #country=\"ngModel\" required id=\"country\" name=\"country\" type=\"text\">\r\n                                              <small class=\"form-text text-muted danger\" *ngIf=\"!country.valid && (country.dirty || country.touched)\">This field is required!</small>\r\n      \r\n                                          </div>\r\n                                      </div>\r\n      \r\n                                        <div class='col-6 col-sm-offset-1 col-sm-3'>\r\n                                          <div class=\"form-group\">\r\n                                              <label class=\"form-control-label\" for=\"password\">Password</label>\r\n                                              <input class=\"form-control input-md\" [(ngModel)]=\"userPassword\" #password=\"ngModel\" required id=\"password\" name=\"password\" type=\"password\">\r\n                                              <small class=\"form-text text-muted danger\" *ngIf=\"!password.valid && (password.dirty || password.touched)\">This field is required!</small>\r\n                                          </div>\r\n                                      </div>\r\n  \r\n                                      <div class='col-offset-1 col-6 col-sm-offset-1 col-sm-3'>\r\n                                          <div class=\"form-group\">\r\n                                              <label class=\"form-control-label\" for=\"confPassword\">Confirm Password</label>\r\n                                              <input class=\"form-control input-md\" [(ngModel)]=\"userConfPassword\" #confPassword=\"ngModel\" required id=\"confPassword\" name=\"confPassword\" type=\"password\">\r\n                                              <small class=\"form-text text-muted danger\" *ngIf=\"!confPassword.valid && (confPassword.dirty || confPassword.touched)\">This field is required!</small>\r\n                                          </div>\r\n                                      </div>\r\n                                    </div>\r\n  \r\n                                    <div class=\"form-group text-center\">\r\n                                        <button uiSref=\"work\" type=\"button\" class=\"btn btn-raised btn-secondary mr-1\" awPreviousStep>\r\n                                            <span style=\"margin-right:10px;\">\r\n                                                <i class=\"ft-chevron-left\"></i>\r\n                                            </span> Previous</button>\r\n                                        <button uiSref=\"result\" type=\"button\"  (click)=\"onSubmit()\"  class=\"btn btn-raised btn-success\" [disabled]=\"!addressForm.valid\" awResetWizard>\r\n                                            Finish\r\n                                            <span style=\"margin-left:10px;\">\r\n                                                <i class=\"ft-chevron-right\"></i>\r\n                                            </span>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </aw-wizard-step>\r\n                </aw-wizard>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n<div class=\"row text-left\">\r\n    <div class=\"col-12\">\r\n      <div class=\"content-header\">Users</div>\r\n    </div>\r\n  </div>\r\n  \r\n  <!--built-in column filter types Starts-->\r\n  <section id=\"filter\">\r\n    <div class=\"row text-left\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-content\">\r\n            <div class=\"card-body\">\r\n              <div class=\"table-responsive\">\r\n                <ng2-smart-table [settings]=\"settings\" [source]=\"Users\" (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"onSaveConfirm($event)\"\r\n                (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table>            </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!--built-in column filter types Ends-->\r\n  \r\n  \r\n"

/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");




var routes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
        data: {
            title: 'user'
        }
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_smart_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data/smart-data-table */ "./src/app/shared/data/smart-data-table.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var UserComponent = /** @class */ (function () {
    function UserComponent(http, UserService) {
        this.http = http;
        this.UserService = UserService;
        this.settings = {
            delete: {
                confirmDelete: true,
                deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2" ></i>',
                saveButtonContent: 'save',
                cancelButtonContent: 'cancel'
            },
            add: {
                confirmCreate: true,
            },
            edit: {
                confirmSave: true,
                editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
            },
            columns: {
                username: {
                    title: 'User Name',
                },
                email: {
                    title: 'Email',
                },
                phone: {
                    title: 'phone',
                },
            },
        };
        this.filtersettings = _shared_data_smart_data_table__WEBPACK_IMPORTED_MODULE_3__["filtersettings"];
        this.alertsettings = _shared_data_smart_data_table__WEBPACK_IMPORTED_MODULE_3__["alertsettings"];
        this.street = '';
        this.newClient = [];
    }
    UserComponent.prototype.loadData = function () {
        var _this = this;
        this.UserService.getUsers().subscribe(function (data) {
            console.log(data);
            _this.Users = data;
            /* for(var i=0 ;i< Object.keys(data).length;i++)
             {
               if (data[i].deleted==true) {
                 this.clients.splice(i);
               }
             }*/
            _this.filterSource = _this.Users;
            _this.source = _this.Users;
            _this.alertSource = _this.Users;
        });
    };
    UserComponent.prototype.ngOnInit = function () {
        //this.lastname.value="emna";
        this.loadData();
    };
    UserComponent.prototype.onSubmit = function () {
        this.UserService.addUsers({ username: this.userName + ' ' + this.userLastName, email: this.userEmail,
            phone: this.userPhone, password: this.userPassword, city: this.userCity, admin: 0, state: this.userState,
            zip: this.userZip, country: this.userCountry, role: parseInt(this.userWork)
        });
        this.loadData();
        console.log({ username: this.userName, email: this.userEmail, phone: this.userPhone, password: this.userLastName });
    };
    // And the listener code which asks the DataSource to filter the data:
    UserComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        alert('hello');
        this.source.setFilter([
            // fields we want to inclue in the search
            {
                field: 'id',
                search: query,
            },
            {
                field: 'name',
                search: query,
            },
            {
                field: 'username',
                search: query,
            },
            {
                field: 'email',
                search: query,
            },
            {
                field: 'phone',
                search: query,
            },
        ]);
        // second parameter specifying whether to perform 'AND' or 'OR' search 
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    };
    //  For confirm action On Delete
    UserComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
            event.data.deleted = true;
            this.UserService.deleteUsers(event.data._id, event.data.deleted);
        }
        else {
            event.confirm.reject();
        }
    };
    //  For confirm action On Save
    UserComponent.prototype.onSaveConfirm = function (event) {
        if (window.confirm('Are you sure you want to save?')) {
            event.confirm.resolve(event.newData);
            event.newData.phone = parseInt(event.newData.phone);
            // this.clientService.updateClients(event.data._id,event.newData);           
        }
        else {
            event.confirm.reject();
        }
    };
    //  For confirm action On Create
    UserComponent.prototype.onCreateConfirm = function (event) {
        if (window.confirm('Are you sure you want to create?')) {
            event.confirm.resolve(event.newData);
            //event.newData.phone=parseInt(event.newData.phone);
            console.log(event.newData);
            this.UserService.addUsers(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    UserComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
    ]; };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-archwizard */ "./node_modules/angular-archwizard/fesm5/angular-archwizard.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");











var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular_archwizard__WEBPACK_IMPORTED_MODULE_8__["ArchwizardModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_6__["CustomFormsModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_7__["MatchHeightModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__["Ng2SmartTableModule"]
            ],
            declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map