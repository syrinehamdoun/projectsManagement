(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-project-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/project/project.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project/project.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"basic-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Projects</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left match-height\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header pb-2\">\r\n          <h4 class=\"card-title\" id=\"basic-layout-form\">Project Info</h4>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form class=\"form\">\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\"><i class=\"ft-user\"></i> Project Info</h4>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"projectinput1\">Description</label>\r\n                      \r\n                      <textarea [(ngModel)]=\"description\"  type=\"text\" id=\"projectinput1\" class=\"form-control\" name=\"fname\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"projectinput3\">Date start</label>\r\n                      <input  [(ngModel)]=\"date_debut\" type=\"date\" id=\"projectinput3\" class=\"form-control\" name=\"email\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"projectinput4\">Date end</label>\r\n                      <input [(ngModel)]=\"date_fin\" type=\"date\" id=\"projectinput4\" class=\"form-control\" name=\"phone\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n             \r\n                <div class=\"form-group\">\r\n                  <label for=\"companyName\">Type</label>\r\n                  <input  [(ngModel)]=\"type\" type=\"text\" id=\"companyName\" class=\"form-control\" name=\"company\">\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"projectinput5\">Staus</label>\r\n                      <select  [(ngModel)]=\"status\" id=\"projectinput5\" name=\"interested\" class=\"form-control\">\r\n                        <option value=\"0\" selected=\"\" disabled=\"\">waiting</option>\r\n                        <option value=\"1\">In progress</option>\r\n                        <option value=\"2\">finish</option>\r\n                        <option value=\"3\">suspended</option>\r\n                        \r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label  for=\"projectinput6\">Client</label>\r\n                      <select  [(ngModel)]=\"client\" id=\"projectinput6\" name=\"Client\" class=\"form-control\">\r\n                          <option [value]=\"option['_id']\" *ngFor=\"let option of clients\">{{option['nom']}} {{option['prenom']}}</option>\r\n\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                \r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"projectinput8\">Remarque</label>\r\n                  <textarea [(ngModel)]=\"remarque\"  id=\"projectinput8\" rows=\"5\" class=\"form-control\" name=\"comment\"></textarea>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-actions\">\r\n                <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\">\r\n                  <i class=\"ft-x\"></i> Cancel\r\n                </button>\r\n                <button type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-raised btn-raised btn-primary\">\r\n                  <i class=\"fa fa-check-square-o\"></i> Save\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n\r\n\r\n\r\n<div class=\"row text-left\">\r\n  <div class=\"col-12\">\r\n    <div class=\"content-header\">Projects</div>\r\n  </div>\r\n</div>\r\n\r\n<!--built-in column filter types Starts-->\r\n<section id=\"filter\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n              <ng2-smart-table [settings]=\"settings\" [source]=\"projects\" (editConfirm)=\"onSaveConfirm($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n              ></ng2-smart-table>            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--built-in column filter types Ends-->\r\n"

/***/ }),

/***/ "./src/app/project/project-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/project/project-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProjectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRoutingModule", function() { return ProjectRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.component */ "./src/app/project/project.component.ts");




var routes = [
    {
        path: '',
        component: _project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"],
        data: {
            title: 'project'
        },
    }
];
var ProjectRoutingModule = /** @class */ (function () {
    function ProjectRoutingModule() {
    }
    ProjectRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProjectRoutingModule);
    return ProjectRoutingModule;
}());



/***/ }),

/***/ "./src/app/project/project.component.scss":
/*!************************************************!*\
  !*** ./src/app/project/project.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.service */ "./src/app/project/project.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _client_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/client.service */ "./src/app/client/client.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(http, clientService, projectService) {
        this.http = http;
        this.clientService = clientService;
        this.projectService = projectService;
        this.settings = {
            delete: {
                confirmDelete: true,
                deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2" ></i>',
                saveButtonContent: 'save',
                cancelButtonContent: 'cancel'
            },
            edit: {
                confirmSave: true,
                editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
            },
            columns: {
                description: {
                    title: 'Description',
                },
                status: {
                    title: 'Status',
                    editor: {
                        type: 'list',
                        config: {
                            selectText: 'Select',
                            list: [
                                { value: '0', title: 'waiting' },
                                { value: '1', title: 'In progress' },
                                { value: '2', title: 'finish' },
                                { value: '3', title: 'suspended' },
                            ],
                        },
                    },
                    type: 'number',
                },
                date_debut: {
                    title: 'Date start',
                    type: 'Date',
                },
                date_fin: {
                    title: 'Date Finsh',
                    type: 'Date',
                },
            },
        };
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (data) {
            _this.clients = data;
            /* for(var i=0 ;i< Object.keys(data).length;i++)
             {
               if (data[i].deleted==true) {
                 this.clients.splice(i);
               }
             }*/
        });
        this.projectService.getProjects().subscribe(function (data) {
            for (var i = 0; i < Object.keys(data).length; i++) {
                if (data[i].status == 0) {
                    data[i].status = "waiting";
                }
                else if (data[i].status == 1) {
                    data[i].status = "In progress";
                }
                else if (data[i].status == 2) {
                    data[i].status = "finish";
                }
                else if (data[i].status == 3) {
                    data[i].status = "suspended";
                }
                data[i].date_fin = new Date(data[i].date_fin).toDateString();
                data[i].date_debut = new Date(data[i].date_debut).toDateString();
            }
            _this.projects = data;
            _this.filterSource = _this.projects;
            _this.source = _this.projects;
            _this.alertSource = _this.projects;
        });
    };
    ProjectComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        alert('hello');
        this.source.setFilter([
            // sourcefields we want to inclue in the search
            {
                field: 'id',
                search: query,
            },
            {
                field: 'description',
                search: query,
            },
            {
                field: 'date_fin',
                search: query,
            },
            {
                field: 'date_debut',
                search: query,
            },
            {
                field: 'status',
                search: query,
            },
        ]);
        // second parameter specifying whether to perform 'AND' or 'OR' search 
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    };
    //  For confirm action On Delete
    ProjectComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
            event.data.deleted = true;
            this.projectService.deleteProject(event.data._id, event.data.deleted);
        }
        else {
            event.confirm.reject();
        }
    };
    //  For confirm action On Save
    ProjectComponent.prototype.onSaveConfirm = function (event) {
        if (window.confirm('Are you sure you want to save?')) {
            event.confirm.resolve(event.newData);
            event.newData.status = parseInt(event.newData.status);
            this.projectService.updateProjects(event.data._id, event.newData);
            this.ngOnInit();
        }
        else {
            event.confirm.reject();
        }
    };
    ProjectComponent.prototype.onSubmit = function () {
        //alert("submit")
        this.projectService.addProject({ client: this.client, remarque: this.remarque, description: this.description, type: this.type,
            status: parseInt(this.status), date_debut: this.date_debut, date_fin: this.date_fin
        });
        this.client = '';
        this.remarque = '';
        this.description = '';
        this.type = '';
        this.status = '';
        this.date_debut = '';
        this.date_fin = '';
        this.ngOnInit();
    };
    ProjectComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _client_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"] },
        { type: _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], ProjectComponent.prototype, "projectForm", void 0);
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/index.js!./src/app/project/project.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/project/project.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _client_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"], _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/project/project.module.ts":
/*!*******************************************!*\
  !*** ./src/app/project/project.module.ts ***!
  \*******************************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _project_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-routing.module */ "./src/app/project/project-routing.module.ts");
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-archwizard */ "./node_modules/angular-archwizard/fesm5/angular-archwizard.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");











var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _project_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                angular_archwizard__WEBPACK_IMPORTED_MODULE_6__["ArchwizardModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_7__["CustomFormsModule"],
                app_shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_8__["MatchHeightModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__["Ng2SmartTableModule"]
            ],
            declarations: [
                _project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"],
            ]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ })

}]);
//# sourceMappingURL=project-project-module.js.map