(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/project/project.service.ts":
/*!********************************************!*\
  !*** ./src/app/project/project.service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProjectService = /** @class */ (function () {
    function ProjectService(http, router) {
        this.http = http;
        this.router = router;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.url = 'https://projects-management-itbs.herokuapp.com';
    }
    ProjectService.prototype.getProjects = function () {
        return this
            .http
            .get(this.url + "/api/projects/getAllprojects");
    };
    ProjectService.prototype.addProject = function (newProject) {
        return this
            .http
            .post(this.url + "/api/projects/addProject", { newProject: newProject })
            .subscribe(function () {
            console.log("Added");
        });
    };
    ProjectService.prototype.deleteProject = function (id, deleted) {
        return this
            .http
            .patch(this.url + "/api/projects/deleteProject/" + id, { deleted: deleted })
            .subscribe(function () {
            console.log("Deleted");
        });
    };
    ProjectService.prototype.updateProjects = function (id, updateProject) {
        return this
            .http
            .patch(this.url + "/api/projects/updateProject/" + id, { updateProject: updateProject })
            .subscribe(function () {
            console.log("Updated");
        });
    };
    ProjectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/shared/data/smart-data-table.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/data/smart-data-table.ts ***!
  \*************************************************/
/*! exports provided: settings, data, filtersettings, filerdata, alertsettings, alertdata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filtersettings", function() { return filtersettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filerdata", function() { return filerdata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertsettings", function() { return alertsettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertdata", function() { return alertdata; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _client_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client/client.service */ "./src/app/client/client.service.ts");


clientService: _client_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"];
http: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"];
// Smart DataTable
var settings = {
    columns: {
        _id: {
            title: 'ID',
            filter: false,
        },
        nom: {
            title: 'Full Name',
            filter: false,
        },
        prenom: {
            title: 'User Name',
            filter: false,
        },
        mail: {
            title: 'Email',
            filter: false,
        },
        phone: {
            title: 'phome',
            filter: false,
        }
    },
    attr: {
        class: "table table-responsive"
    },
    edit: {
        editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
    },
    delete: {
        deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
    }
};
var data = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
    },
    {
        id: 11,
        name: 'Nicholas DuBuque',
        username: 'Nicholas.Stanton',
        email: 'Rey.Padberg@rosamond.biz',
    },
];
var filtersettings = {
    columns: {
        _id: {
            title: 'ID',
        },
        nom: {
            title: 'Full Name',
        },
        prenom: {
            title: 'Last Name',
        },
        mail: {
            title: 'Email',
        },
        phone: {
            title: 'Phone',
        },
    },
    attr: {
        class: "table table-responsive"
    },
    edit: {
        editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
    },
    delete: {
        deleteConfirm: true,
        deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2" ></i>'
    }
};
var filerdata = [
    {
        id: 4,
        name: 'Patricia Lebsack',
        email: 'Julianne.OConner@kory.org',
        passed: 'Yes',
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        email: 'Lucio_Hettinger@annie.ca',
        passed: 'No',
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        email: 'Karley_Dach@jasper.info',
        passed: 'Yes',
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        email: 'Telly.Hoeger@billy.biz',
        passed: 'No',
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        email: 'Sherwood@rosamond.me',
        passed: 'Yes',
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        email: 'Chaim_McDermott@dana.io',
        passed: 'No',
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        email: 'Rey.Padberg@karina.biz',
        passed: 'No',
    },
    {
        id: 11,
        name: 'Nicholas DuBuque',
        email: 'Rey.Padberg@rosamond.biz',
        passed: 'Yes',
    },
];
var alertsettings = {
    delete: {
        confirmDelete: true,
        deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
    },
    add: {
        confirmCreate: true,
    },
    edit: {
        confirmSave: true,
        editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
    },
    columns: {
        _id: {
            title: 'ID',
        },
        nom: {
            title: 'Full Name',
        },
        prenom: {
            title: 'User Name',
        },
        mail: {
            title: 'Email',
        },
    },
    attr: {
        class: "table table-responsive"
    },
};
var alertdata = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        notShownField: true,
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        notShownField: true,
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        notShownField: false,
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        notShownField: false,
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        notShownField: false,
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        notShownField: false,
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        notShownField: false,
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        notShownField: true,
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        notShownField: false,
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        notShownField: false,
    },
    {
        id: 11,
        name: 'Nicholas DuBuque',
        username: 'Nicholas.Stanton',
        email: 'Rey.Padberg@rosamond.biz',
        notShownField: true,
    }
];


/***/ })

}]);
//# sourceMappingURL=common.js.map