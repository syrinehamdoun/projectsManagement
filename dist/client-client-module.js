(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-client-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/client/client.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/client/client.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-left\">\r\n  <div class=\"col-12\">\r\n    <div class=\"content-header\">Clients</div>\r\n  </div>\r\n</div>\r\n\r\n<!--built-in column filter types Starts-->\r\n<section id=\"filter\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n              <ng2-smart-table [settings]=\"settings\" [source]=\"clients\" (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"onSaveConfirm($event)\"\r\n              (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table>            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--built-in column filter types Ends-->\r\n\r\n"

/***/ }),

/***/ "./src/app/client/client-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/client/client-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoutingModule", function() { return ClientRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client.component */ "./src/app/client/client.component.ts");




var routes = [
    {
        path: '',
        component: _client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"],
        data: {
            title: 'Client'
        }
    }
];
var ClientRoutingModule = /** @class */ (function () {
    function ClientRoutingModule() {
    }
    ClientRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ClientRoutingModule);
    return ClientRoutingModule;
}());



/***/ }),

/***/ "./src/app/client/client.component.scss":
/*!**********************************************!*\
  !*** ./src/app/client/client.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/client/client.component.ts":
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_smart_data_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data/smart-data-table */ "./src/app/shared/data/smart-data-table.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client.service */ "./src/app/client/client.service.ts");





var ClientComponent = /** @class */ (function () {
    function ClientComponent(http, clientService) {
        this.http = http;
        this.clientService = clientService;
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
                nom: {
                    title: 'Full Name',
                },
                prenom: {
                    title: 'User Name',
                },
                mail: {
                    title: 'Email',
                },
                phone: {
                    title: 'phone',
                },
            },
        };
        this.filtersettings = _shared_data_smart_data_table__WEBPACK_IMPORTED_MODULE_2__["filtersettings"];
        this.alertsettings = _shared_data_smart_data_table__WEBPACK_IMPORTED_MODULE_2__["alertsettings"];
        this.newClient = [];
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (data) {
            _this.clients = data;
            /* for(var i=0 ;i< Object.keys(data).length;i++)
             {
               if (data[i].deleted==true) {
                 this.clients.splice(i);
               }
             }*/
            _this.filterSource = _this.clients;
            _this.source = _this.clients;
            _this.alertSource = _this.clients;
        });
    };
    // And the listener code which asks the DataSource to filter the data:
    ClientComponent.prototype.onSearch = function (query) {
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
    ClientComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
            event.data.deleted = true;
            this.clientService.deleteClients(event.data._id, event.data.deleted);
        }
        else {
            event.confirm.reject();
        }
    };
    //  For confirm action On Save
    ClientComponent.prototype.onSaveConfirm = function (event) {
        if (window.confirm('Are you sure you want to save?')) {
            event.confirm.resolve(event.newData);
            event.newData.phone = parseInt(event.newData.phone);
            this.clientService.updateClients(event.data._id, event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    //  For confirm action On Create
    ClientComponent.prototype.onCreateConfirm = function (event) {
        if (window.confirm('Are you sure you want to create?')) {
            event.confirm.resolve(event.newData);
            event.newData.phone = parseInt(event.newData.phone);
            this.clientService.addClients(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    ClientComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"] }
    ]; };
    ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! raw-loader!./client.component.html */ "./node_modules/raw-loader/index.js!./src/app/client/client.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./client.component.scss */ "./src/app/client/client.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/client/client.module.ts":
/*!*****************************************!*\
  !*** ./src/app/client/client.module.ts ***!
  \*****************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-routing.module */ "./src/app/client/client-routing.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client.component */ "./src/app/client/client.component.ts");






var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _client_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClientRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"]
            ],
            declarations: [
                _client_component__WEBPACK_IMPORTED_MODULE_5__["ClientComponent"]
            ]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ })

}]);
//# sourceMappingURL=client-client-module.js.map