(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/content/content-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/content/content-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper p-0\" [dir]=\"direction\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full-layout.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/full/full-layout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  #wrapper\r\n  class=\"wrapper\"\r\n  [ngClass]=\"{\r\n    'nav-collapsed': iscollapsed,\r\n    'menu-collapsed': iscollapsed,\r\n    'sidebar-sm': isSidebar_sm,\r\n    'sidebar-lg': isSidebar_lg\r\n  }\"\r\n  [dir]=\"options.direction\"\r\n>\r\n  \r\n<div #appSidebar\r\n    appSidebar\r\n    class=\"app-sidebar\"\r\n    (toggleHideSidebar)=\"toggleHideSidebar($event)\"\r\n    [ngClass]=\"{ 'hide-sidebar': hideSidebar }\"\r\n    data-active-color=\"white\"\r\n    [attr.data-background-color]=\"bgColor\"\r\n    [attr.data-image]=\"bgImage\"\r\n  >\r\n    <app-sidebar></app-sidebar>\r\n    <div class=\"sidebar-background\" #sidebarBgImage></div>\r\n  </div>\r\n  <app-navbar (toggleHideSidebar)=\"toggleHideSidebar($event)\"></app-navbar>\r\n  <div class=\"main-panel\">\r\n    <div class=\"main-content\">\r\n      <div class=\"content-wrapper\">\r\n        <div class=\"container-fluid\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-footer></app-footer>\r\n  </div>\r\n  <app-notification-sidebar></app-notification-sidebar>\r\n  <app-customizer (directionEvent)=\"getOptions($event)\"></app-customizer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/error/error-page.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/error/error-page.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Error page starts-->\r\n<section id=\"error\">\r\n  <div class=\"container-fluid forgot-password-bg\">\r\n    <div class=\"row full-height-vh\">\r\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 text-center\">\r\n            <img src=\"../../assets/img/gallery/error.png\" alt=\"\" class=\"img-fluid error-img mt-2\" height=\"300\" width=\"400\">\r\n            <h1 class=\"text-white mt-4\">404 - Page Not Found!</h1>\r\n            <div class=\"error-text w-75 mx-auto mt-4\">\r\n              <p class=\"text-white\">paraphonic unassessable foramination Caulopteris worral Spirophyton\r\n                encrimson esparcet aggerate chondrule restate whistler shallopy biosystematy area\r\n                bertram plotting unstarting.</p>\r\n            </div>\r\n            <button class=\"btn btn-primary btn-lg mt-3\"><a [routerLink]=\"['/']\" class=\"text-decoration-none text-white\">Back\r\n                To Home</a></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Error page ends-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/forgot-password/forgot-password-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/forgot-password/forgot-password-page.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Forgot Password Starts-->\r\n<section id=\"forgot-password\">\r\n  <div class=\"container-fluid forgot-password-bg\">\r\n    <div\r\n      class=\"row full-height-vh m-0  d-flex align-items-center justify-content-center\"\r\n    >\r\n      <div class=\"col-md-7 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-content\">\r\n            <div class=\"card-body fg-image\">\r\n              <div class=\"row m-0\">\r\n                <div class=\"col-lg-6 d-none d-lg-block text-center py-3\">\r\n                  <img\r\n                    src=\"../../../../assets/img/gallery/forgot.png\"\r\n                    alt=\"\"\r\n                    class=\"img-fluid\"\r\n                    width=\"300\"\r\n                    height=\"230\"\r\n                  />\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-12 bg-white px-4 pt-3\">\r\n                  <h4 class=\"card-title mb-2\">Recover Password</h4>\r\n                  <p class=\"card-text mb-3\">\r\n                    Please enter your email address and we'll send you\r\n                    instructions on how to reset your password.\r\n                  </p>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control mb-3\"\r\n                    placeholder=\"Email\"\r\n                  />\r\n                  <div class=\"fg-actions d-flex justify-content-between\">\r\n                    <div class=\"login-btn\">\r\n                      <button class=\"btn btn-outline-primary\">\r\n                        <a\r\n                          class=\"text-decoration-none\"\r\n                          [routerLink]=\"['/login']\"\r\n                          >Back To Login</a\r\n                        >\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"recover-pass\">\r\n                      <button class=\"btn btn-primary\">\r\n                        <a\r\n                          class=\"text-decoration-none text-white\"\r\n                          [routerLink]=\"['/pages/forgotpassword']\"\r\n                        >\r\n                          Recover\r\n                        </a>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Forgot Password Ends-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/lock-screen/lock-screen-page.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/lock-screen/lock-screen-page.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Lock Screen Starts-->\r\n<section id=\"lock-screen\">\r\n  <div class=\"container-fluid forgot-password-bg\">\r\n    <div class=\"row full-height-vh m-0\">\r\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n        <div class=\"card\">\r\n          <div class=\"card-content\">\r\n            <div class=\"card-body lock-screen-img\">\r\n              <div class=\"row m-0\">\r\n                <div class=\"col-lg-6 d-lg-block d-none text-center py-2\">\r\n                  <img\r\n                    src=\"../../assets/img/gallery/lock.png\"\r\n                    alt=\"\"\r\n                    class=\"img-fluid\"\r\n                    height=\"230\"\r\n                    width=\"400\"\r\n                  />\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-12 pt-3 px-4 bg-white\">\r\n                  <h4 class=\"card-title mb-3\">\r\n                    Your Session is locked\r\n                  </h4>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control mb-3\"\r\n                    placeholder=\"Email\"\r\n                  />\r\n                  <input\r\n                    type=\"password\"\r\n                    class=\"form-control mb-3\"\r\n                    placeholder=\"password\"\r\n                  />\r\n                  <div class=\"fg-actions d-flex justify-content-between\">\r\n                    <div class=\"login-btn\">\r\n                      <button\r\n                        class=\"btn btn-link text-decoration-none text-primary\"\r\n                      >\r\n                        Are You Not John Doe ?\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"recover-pass\">\r\n                      <button class=\"btn btn-primary\">\r\n                        <a\r\n                          class=\"text-decoration-none text-white\"\r\n                          [routerLink]=\"['/Accueil']\"\r\n                        >\r\n                          Unlock\r\n                        </a>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Lock Screen Ends-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Login Page Starts-->\r\n<section id=\"login\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row full-height-vh m-0\">\r\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n        <div class=\"card\">\r\n          <div class=\"card-content\">\r\n            <div class=\"card-body login-img\">\r\n              <div class=\"row m-0\">\r\n                <div\r\n                  class=\"col-lg-6 d-lg-block d-none py-2 px-3 text-center align-middle\"\r\n                >\r\n                  <img\r\n                    src=\"../../assets/img/gif/giphy (1).gif\"\r\n                    alt=\"\"\r\n                    class=\"img-fluid st-2\"\r\n                    width=\"400\"\r\n                    height=\"230\"\r\n                    />\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-12 bg-white px-4 pt-3\">\r\n                  <h4 class=\"card-title mb-2\">Login</h4>\r\n                  <p class=\"card-text mb-3\">\r\n                    Welcome back, please login to your account.\r\n                  </p>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control mb-3\" [(ngModel)]=\"userName\" \r\n                    placeholder=\"Username\"\r\n                  />\r\n                  <input\r\n                    [(ngModel)]=\"password\" \r\n                    type=\"password\"\r\n                    class=\"form-control mb-3\"\r\n                    placeholder=\"Password\"\r\n                  />\r\n                  <div class=\"d-flex justify-content-between mt-2\">\r\n                    <div class=\"remember-me\">\r\n                      <div\r\n                        class=\"custom-control custom-checkbox custom-control-inline mb-3\"\r\n                      >\r\n                        <input\r\n                          type=\"checkbox\"\r\n                          id=\"customCheckboxInline1\"\r\n                          name=\"customCheckboxInline1\"\r\n                          class=\"custom-control-input\"\r\n                        />\r\n                        <label\r\n                          class=\"custom-control-label\"\r\n                          for=\"customCheckboxInline1\"\r\n                        >\r\n                          Remember Me\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"forgot-password-option\">\r\n                      <a  \r\n                        [routerLink]=\"['/pages/forgotpassword']\"\r\n                        class=\"text-decoration-none text-primary\"\r\n                        >Forgot Password ?</a\r\n                      >\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"fg-actions d-flex justify-content-between\">\r\n                    <div class=\"recover-pass\">\r\n                      <button class=\"btn btn-primary\"  (click)=\"onSubmit()\" >\r\n                        <a\r\n                         \r\n                          class=\"text-decoration-none text-white\"\r\n                          >Login</a\r\n                        >\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                  <hr class=\"m-0\" />\r\n                  <div class=\"d-flex justify-content-between mt-3\">\r\n                    <div class=\"option-login\">\r\n                      <h6 class=\"text-decoration-none text-primary\">\r\n                        Or Login With\r\n                      </h6>\r\n                    </div>\r\n                    <div class=\"social-login-options\">\r\n                      <a class=\"btn btn-social-icon mr-2 btn-facebook\">\r\n                        <span class=\"fa fa-facebook\"></span>\r\n                      </a>\r\n                      <a class=\"btn btn-social-icon mr-2 btn-twitter\">\r\n                        <span class=\"fa fa-twitter\"></span>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Login Page Ends-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/customizer/customizer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/customizer/customizer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Theme customizer Starts-->\r\n<div #customizer class=\"customizer border-left-blue-grey border-left-lighten-4 d-none d-sm-none d-md-block\" [ngClass]=\"{open: isOpen}\">\r\n  <a class=\"customizer-close\" (click)=\"closeCustomizer()\">\r\n    <i class=\"ft-x font-medium-3\"></i>\r\n  </a>\r\n  <a class=\"customizer-toggle bg-danger\" id=\"customizer-toggle-icon\" (click)=\"toggleCustomizer()\">\r\n    <i class=\"ft-settings font-medium-4 fa fa-spin white align-middle\"></i>\r\n  </a>\r\n  <div [perfectScrollbar] class=\"customizer-content p-3 ps-container ps-theme-dark text-left\" data-ps-id=\"df6a5ce4-a175-9172-4402-dabd98fc9c0a\">\r\n    <h4 class=\"text-uppercase mb-0 text-bold-400\">Theme Customizer</h4>\r\n    <p>Customize &amp; Preview in Real Time</p>\r\n    <hr>\r\n\r\n    <!-- Layout Options-->\r\n    <h6 class=\"text-center text-bold-500 mb-3 text-uppercase\">Layout Options</h6>\r\n    <div class=\"layout-switch ml-4\">\r\n      <div class=\"custom-control custom-radio d-inline-block custom-control-inline light-layout\">\r\n        <input class=\"custom-control-input\" id=\"ll-switch\" type=\"radio\" name=\"layout-switch\" [checked]=\"config.layout.variant === 'Light'\"  (click)=\"onLightLayout()\" />\r\n        <label class=\"custom-control-label\" for=\"ll-switch\">Light</label>\r\n      </div>\r\n      <div class=\"custom-control custom-radio d-inline-block custom-control-inline dark-layout\">\r\n        <input class=\"custom-control-input\" id=\"dl-switch\" type=\"radio\" name=\"layout-switch\" [checked]=\"config.layout.variant === 'Dark'\" (click)=\"onDarkLayout()\" />\r\n        <label class=\"custom-control-label\" for=\"dl-switch\">Dark</label>\r\n      </div>\r\n      <div class=\"custom-control custom-radio d-inline-block custom-control-inline transparent-layout\">\r\n        <input class=\"custom-control-input\" id=\"tl-switch\" type=\"radio\" name=\"layout-switch\" [checked]=\"config.layout.variant === 'Transparent'\" (click)=\"onTransparentLayout()\" />\r\n        <label class=\"custom-control-label\" for=\"tl-switch\">Transparent</label>\r\n      </div>\r\n    </div>\r\n    <hr />\r\n\r\n    <!-- Sidebar Options Starts-->\r\n    <h6 class=\"text-center text-bold-500 mb-3 text-uppercase sb-options\">Sidebar Color Options</h6>\r\n    <div class=\"cz-bg-color sb-color-options\">\r\n      <div class=\"row p-1\">\r\n        <div class=\"col\"><span class=\"gradient-pomegranate d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"pomegranate\" [ngClass]=\"{'selected': selectedBgColor === 'pomegranate'}\" (click)=\"changeSidebarBgColor('pomegranate')\"></span></div>\r\n        <div class=\"col\"><span class=\"gradient-king-yna d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"king-yna\" [ngClass]=\"{'selected': selectedBgColor === 'king-yna'}\" (click)=\"changeSidebarBgColor('king-yna')\"></span></div>\r\n        <div class=\"col\"><span class=\"gradient-ibiza-sunset d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"ibiza-sunset\" [ngClass]=\"{'selected': selectedBgColor === 'ibiza-sunset'}\" (click)=\"changeSidebarBgColor('ibiza-sunset')\"></span></div>\r\n        <div class=\"col\"><span class=\"gradient-flickr d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"flickr\" [ngClass]=\"{'selected': selectedBgColor === 'flickr'}\" (click)=\"changeSidebarBgColor('flickr')\"></span></div>\r\n        <div class=\"col\"><span class=\"gradient-purple-bliss d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"purple-bliss\" [ngClass]=\"{'selected': selectedBgColor === 'purple-bliss'}\" (click)=\"changeSidebarBgColor('purple-bliss')\"></span></div>\r\n        <div class=\"col\"><span class=\"gradient-man-of-steel d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"man-of-steel\" [ngClass]=\"{'selected': selectedBgColor === 'man-of-steel'}\" (click)=\"changeSidebarBgColor('man-of-steel')\"></span></div>\r\n        <div class=\"col\"><span class=\"gradient-purple-love d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"purple-love\" [ngClass]=\"{'selected': selectedBgColor === 'purple-love'}\" (click)=\"changeSidebarBgColor('purple-love')\"></span></div>\r\n      </div>\r\n      <div class=\"row p-1\">\r\n        <div class=\"col\"><span class=\"bg-black d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"black\" [ngClass]=\"{'selected': selectedBgColor === 'black'}\" (click)=\"changeSidebarBgColor('black')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-grey d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"white\" [ngClass]=\"{'selected': selectedBgColor === 'white'}\" (click)=\"changeSidebarBgColor('white')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-primary d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"primary\" [ngClass]=\"{'selected': selectedBgColor === 'primary'}\" (click)=\"changeSidebarBgColor('primary')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-success d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"success\" [ngClass]=\"{'selected': selectedBgColor === 'success'}\" (click)=\"changeSidebarBgColor('success')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-warning d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"warning\" [ngClass]=\"{'selected': selectedBgColor === 'warning'}\" (click)=\"changeSidebarBgColor('warning')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-info d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"info\" [ngClass]=\"{'selected': selectedBgColor === 'info'}\" (click)=\"changeSidebarBgColor('info')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-danger d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"danger\" [ngClass]=\"{'selected': selectedBgColor === 'danger'}\" (click)=\"changeSidebarBgColor('danger')\"></span></div>\r\n      </div>\r\n    </div>\r\n    <!-- Sidebar Options Ends-->\r\n    <!-- Transparent Layout Bg color Options-->\r\n    <h6 class=\"text-center text-bold-500 mb-3 text-uppercase tl-color-options d-none\">Background Colors</h6>\r\n    <div class=\"cz-tl-bg-color d-none\">\r\n      <div class=\"row p-1\">\r\n        <div class=\"col\"><span class=\"bg-hibiscus d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"bg-hibiscus\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-hibiscus'}\" (click)=\"changeSidebarTLBgColor('bg-hibiscus')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-purple-pizzazz d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"bg-purple-pizzazz\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-purple-pizzazz'}\" (click)=\"changeSidebarTLBgColor('bg-purple-pizzazz')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-blue-lagoon d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"bg-blue-lagoon\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-blue-lagoon'}\" (click)=\"changeSidebarTLBgColor('bg-blue-lagoon')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-electric-violet d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"bg-electric-violet\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-electric-violet'}\" (click)=\"changeSidebarTLBgColor('bg-electric-violet')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-portage d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"bg-portage\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-portage'}\" (click)=\"changeSidebarTLBgColor('bg-portage')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-tundora d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"bg-tundora\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-tundora'}\" (click)=\"changeSidebarTLBgColor('bg-tundora')\"></span></div>\r\n      </div>\r\n    </div>\r\n    <!-- Transparent Layout Bg color Ends-->\r\n    <hr />\r\n    <!--Sidebar BG Image Starts-->\r\n    <h6 class=\"text-center text-bold-500 mb-3 text-uppercase sb-bg-img\">Sidebar Bg Image</h6>\r\n    <div class=\"cz-bg-image row sb-bg-img\">\r\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/01.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/01.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/01.jpg')\" /></div>\r\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/02.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/02.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/02.jpg')\" /></div>\r\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/03.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/03.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/03.jpg')\" /></div>\r\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/04.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/04.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/04.jpg')\" /></div>\r\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/05.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/05.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/05.jpg')\" /></div>\r\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/06.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/06.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/06.jpg')\" /></div>\r\n    </div>\r\n    <!-- Transparent BG Image Ends-->\r\n    <div class=\"tl-bg-img d-none\">\r\n      <h6 class=\"text-center text-bold-500 text-uppercase\">Background Images</h6>\r\n      <div class=\"cz-tl-bg-image row\">\r\n        <div class=\"col-sm-3\"><img class=\"rounded bg-glass-1\" src=\"assets/img/gallery/bg-glass-1.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedTLBgImage === 'assets/img/gallery/bg-glass-1.jpg'}\" (click)=\"changeSidebarTLBgImage('assets/img/gallery/bg-glass-1.jpg', 'bg-glass-1')\" /></div>\r\n        <div class=\"col-sm-3\"><img class=\"rounded bg-glass-2\" src=\"assets/img/gallery/bg-glass-2.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedTLBgImage === 'assets/img/gallery/bg-glass-2.jpg'}\" (click)=\"changeSidebarTLBgImage('assets/img/gallery/bg-glass-2.jpg', 'bg-glass-2')\" /></div>\r\n        <div class=\"col-sm-3\"><img class=\"rounded bg-glass-3\" src=\"assets/img/gallery/bg-glass-3.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedTLBgImage === 'assets/img/gallery/bg-glass-3.jpg'}\" (click)=\"changeSidebarTLBgImage('assets/img/gallery/bg-glass-3.jpg', 'bg-glass-3')\" /></div>\r\n        <div class=\"col-sm-3\"><img class=\"rounded bg-glass-4\" src=\"assets/img/gallery/bg-glass-4.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedTLBgImage === 'assets/img/gallery/bg-glass-4.jpg'}\" (click)=\"changeSidebarTLBgImage('assets/img/gallery/bg-glass-4.jpg', 'bg-glass-4')\" /></div>\r\n      </div>\r\n    </div>\r\n\r\n    <hr />\r\n    <!-- Transparent BG Image Ends-->\r\n    <!--Sidebar BG Image Ends-->\r\n\r\n    <!--Sidebar BG Image Toggle Starts-->\r\n    <div class=\"togglebutton toggle-sb-bg-img\">\r\n      <div class=\"switch switch border-0 d-flex justify-content-between w-100\">\r\n        <span>Sidebar Bg Image</span>\r\n        <div class=\"float-right\">\r\n          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n            <input type=\"checkbox\" class=\"custom-control-input cz-bg-image-display\" checked id=\"sidebar-bg-img\" (change)=\"bgImageDisplay($event)\">\r\n            <label class=\"custom-control-label d-block\" for=\"sidebar-bg-img\"></label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n    </div>\r\n    <!--Sidebar BG Image Toggle Ends-->\r\n\r\n    <!--Compact Menu Starts-->\r\n    <div class=\"togglebutton\">\r\n      <div class=\"switch switch border-0 d-flex justify-content-between w-100\">\r\n        <span>Compact Menu</span>\r\n        <div class=\"float-right\">\r\n          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n            <input type=\"checkbox\" [checked]=\"config.layout.sidebar.collapsed\" class=\"custom-control-input cz-compact-menu\" id=\"cz-compact-menu\" (change)=\"toggleCompactMenu($event)\">\r\n            <label class=\"custom-control-label d-block\" for=\"cz-compact-menu\"></label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Compact Menu Ends-->\r\n    <hr>\r\n\r\n    <!--RTL Starts-->\r\n    <div class=\"togglebutton\">\r\n      <div class=\"switch switch border-0 d-flex justify-content-between w-100\">\r\n        <span>RTL</span>\r\n        <div class=\"float-right\">\r\n          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n            <input type=\"checkbox\" [checked]=\"options.direction == 'rtl' ? 'checked' : false\" class=\"custom-control-input cz-rtl\"\r\n              id=\"cz-rtl\" (change)=\"options.direction = (options.direction == 'rtl' ? 'ltr' : 'rtl'); sendOptions()\">\r\n            <label class=\"custom-control-label d-block\" for=\"cz-rtl\"></label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--RTL Ends-->\r\n    <hr>\r\n\r\n    <!--Sidebar Width Starts-->\r\n    <div>\r\n      <label for=\"cz-sidebar-width\">Sidebar Width</label>\r\n      <select id=\"cz-sidebar-width\" #width class=\"custom-select cz-sidebar-width float-right\" (change)=\"changeSidebarWidth(width.value)\">\r\n        <option value=\"sidebar-sm\" [selected] = \"size === 'sidebar-sm'\">Small</option>\r\n        <option value=\"sidebar-md\" [selected] = \"size === 'sidebar-md'\">Medium</option>\r\n        <option value=\"sidebar-lg\" [selected] = \"size === 'sidebar-lg'\">Large</option>\r\n      </select>\r\n    </div>\r\n    <!--Sidebar Width Ends-->\r\n  </div>\r\n</div>\r\n<!--Theme customizer Ends-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer Starts-->\r\n<footer>\r\n    <div class=\"container-fluid\">\r\n        <p class=\"copyright text-center\">\r\n                Copyright  &copy;  {{currentDate | date: 'yyyy'}} <a id=\"pixinventLink\" href=\"https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent\">PIXINVENT</a>, All rights reserved.          \r\n        </p>\r\n        \r\n    </div>\r\n</footer>\r\n<!--Footer Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar (Header) Starts -->\r\n<nav class=\"header-navbar navbar navbar-expand-lg navbar-light bg-faded\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle d-lg-none float-left\" data-toggle=\"collapse\" (click)=\"toggleSidebar()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <span class=\"d-lg-none navbar-right navbar-collapse-toggle\">\r\n                <a class=\"open-navbar-container\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarSupportedContent\">\r\n                    <i class=\"ft-more-vertical\"></i>\r\n                </a>\r\n            </span>\r\n            <form class=\"navbar-form navbar-right mt-1\" role=\"search\">\r\n                <div class=\"position-relative has-icon-right\">\r\n                    <input type=\"text\" class=\"form-control round\" placeholder=\"Search\">\r\n                    <div class=\"form-control-position\">\r\n                        <i class=\"ft-search\"></i>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n           \r\n        </div>\r\n        <div class=\"navbar-container\">\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\r\n                <ul class=\"navbar-nav\">\r\n                    <li class=\"nav-item mr-2  d-none d-lg-block\">\r\n                        <a href=\"javascript:;\" class=\"nav-link\" id=\"navbar-fullscreen\" appToggleFullscreen (click)=\"ToggleClass()\">                            \r\n                            <i class=\"{{toggleClass}} font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">fullscreen</p>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\r\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic3\" ngbDropdownToggle>\r\n                            <i class=\"ft-user font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">User Settings</p>\r\n                            <b>  {{username}} </b>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\" class=\"text-left\">                           \r\n                            <a class=\"dropdown-item py-1\" routerLink=\"/pages/profile\">\r\n                                <i class=\"ft-edit mr-2\"></i>\r\n                                <span>My Profile</span>\r\n                            </a>\r\n                            <a class=\"dropdown-item py-1\" routerLink=\"/inbox\">\r\n                                <i class=\"ft-mail mr-2\"></i>\r\n                                <span>My Inbox</span>\r\n                            </a>\r\n                            <a class=\"dropdown-item py-1\" href=\"javascript:;\">\r\n                                <i class=\"ft-settings mr-2\"></i>\r\n                                <span>Settings</span>\r\n                            </a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\" (click)=\"logout()\">\r\n                                <i class=\"ft-power mr-2\"></i>\r\n                                <span>Logout</span>\r\n                            </a>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"nav-item d-none d-lg-block\">\r\n                        <a class=\"nav-link position-relative notification-sidebar-toggle\" (click)=\"toggleNotificationSidebar();\">\r\n                            <i class=\"ft-align-left font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">Notifications Sidebar</p>\r\n                        </a>\r\n                    </li>\r\n                   \r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<!-- Navbar (Header) Ends -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/notification-sidebar/notification-sidebar.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/notification-sidebar/notification-sidebar.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- //////////////////////////////////////////////////////////////////////////// -->\r\n<!-- START Notification Sidebar -->\r\n<aside #sidebar id=\"notification-sidebar\" class=\"notification-sidebar d-none d-sm-none d-md-block\">\r\n  <a class=\"notification-sidebar-close\" (click)=\"onClose()\">\r\n    <i class=\"ft-x font-medium-3\"></i>\r\n  </a>\r\n  <div class=\"side-nav notification-sidebar-content\" [perfectScrollbar]>\r\n    <div class=\"row\">\r\n      <div class=\"col-12 mt-1\">\r\n        <ngb-tabset>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Activity</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div id=\"activity\" class=\"col-12 timeline-left\">\r\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">RECENT ACTIVITY</h6>\r\n                <div id=\"timeline\" class=\"timeline-left timeline-wrapper\">\r\n                  <ul class=\"timeline\">\r\n                    <li class=\"timeline-line\"></li>\r\n                    <li class=\"timeline-item text-left text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-purple bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\r\n                          title=\"Portfolio project work\"><i class=\"ft-shopping-cart\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"deep-purple-text medium-small\">just now</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jim Doe Purchased new\r\n                          equipments for zonal office.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-info bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\r\n                          title=\"Portfolio project work\"><i class=\"fa fa-plane\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"cyan-text medium-small\">Yesterday</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Your Next flight for USA\r\n                          will be on 15th August 2015.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-success bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\r\n                          title=\"Portfolio project work\"><i class=\"ft-mic\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"green-text medium-small\">5 Days Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a\r\n                          voice mail for next conference.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-warning bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\r\n                          title=\"Portfolio project work\"><i class=\"ft-map-pin\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"amber-text medium-small\">1 Week Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store\r\n                          at S.G Road.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-red bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\r\n                          title=\"Portfolio project work\"><i class=\"ft-inbox\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"deep-orange-text medium-small\">2 Week Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.\r\n                        </p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-cyan bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\r\n                          title=\"Portfolio project work\"><i class=\"ft-mic\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"brown-text medium-small\">1 Month Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a\r\n                          voice mail for next conference.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-amber bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\r\n                          title=\"Portfolio project work\"><i class=\"ft-map-pin\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"deep-purple-text medium-small\">3 Month Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store\r\n                          at S.G Road.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-grey bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\r\n                          title=\"Portfolio project work\"><i class=\"ft-inbox\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"grey-text medium-small\">1 Year Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.\r\n                        </p>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Chat</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div id=\"chatapp\" class=\"col-12\">\r\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">RECENT CHAT</h6>\r\n                <div class=\"collection border-none\">\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-12.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Elizabeth Elliott </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Thank you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-6.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Mary Adams </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Hello Boo </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-11.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Caleb Richards </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.00 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Keny ! </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-18.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">June Lane </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Ohh God </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-1.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Edward Fletcher </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.15 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Love you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-2.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Crystal Bates </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">8.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Can we </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-3.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Nathan Watts </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.53 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Great! </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-15.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Willard Wood </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.20 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Do it </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-19.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Ronnie Ellis </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.30 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Got that </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-14.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Gwendolyn Wood </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.34 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Like you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-13.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Daniel Russell </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">12.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Thank you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-22.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Sarah Graves </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">11.14 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Okay you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-9.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Andrew Hoffman </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">7.30 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Can do </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-20.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Camila Lynch </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">2.00 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Leave it </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Settings</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div id=\"settings\" class=\"col-12\">\r\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">GENERAL SETTINGS</h6>\r\n                <ul class=\"list-unstyled\">\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch d-flex justify-content-between w-100\">\r\n                        <span class=\"text-bold-500\">Notifications</span>\r\n                        <div class=\"notification-cb\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input checked=\"checked\" class=\"custom-control-input \" type=\"checkbox\"\r\n                              id=\"notifications1\">\r\n                            <label class=\"custom-control-label d-block\" for=\"notifications1\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch d-flex justify-content-between w-100\">\r\n                        <span class=\"text-bold-500\">Show recent activity</span>\r\n                        <div class=\"notification-cb\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input checked=\"checked\" class=\"custom-control-input \" type=\"checkbox\"\r\n                              id=\"recent-activity1\">\r\n                            <label class=\"custom-control-label d-block\" for=\"recent-activity1\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch  d-flex justify-content-between w-100\">\r\n                        <span class=\"text-bold-500\">Notifications</span>\r\n                        <div class=\"notification-cb\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input \" type=\"checkbox\" id=\"notifications2\">\r\n                            <label class=\"custom-control-label d-block\" for=\"notifications2\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch d-flex justify-content-between w-100\">\r\n                        <span class=\"text-bold-500\">Show recent activity</span>\r\n                        <div class=\"notification-cb\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input \" type=\"checkbox\"\r\n                              id=\"recent-activity2\">\r\n                            <label class=\"custom-control-label d-block\" for=\"recent-activity2\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch d-flex justify-content-between w-100\">\r\n                        <span class=\"text-bold-500\">Show your emails</span>\r\n                        <div class=\"notification-cb\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input \" type=\"checkbox\" id=\"show-emails\">\r\n                            <label class=\"custom-control-label d-block\" for=\"show-emails\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch d-flex justify-content-between w-100\">\r\n                        <span class=\"text-bold-500\">Show Task statistics</span>\r\n                        <div class=\"notification-cb\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input \" type=\"checkbox\" id=\"show-stats\">\r\n                            <label class=\"custom-control-label d-block\" for=\"show-stats\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</aside>\r\n<!-- END Notification Sidebar -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar Header starts -->\r\n<div class=\"sidebar-header\">\r\n    <div class=\"logo clearfix\">\r\n        <a [routerLink]=\"['/']\" class=\"logo-text float-left\">\r\n            <div class=\"logo-img\">\r\n                <img [src]=\"logoUrl\"  style=\"heigth:10px;width:40px;\"/>\r\n            </div>\r\n            <span class=\"text align-middle\"> \r\n                               <img src=\"assets/img/logo_title1.png\"  style=\"heigth:10px;width:80px;\"/>\r\n            </span>\r\n        </a>\r\n        <a class=\"nav-toggle d-none d-sm-none d-md-none d-lg-block\" id=\"sidebarToggle\" href=\"javascript:;\">\r\n            <i #toggleIcon appSidebarToggle class=\"ft-toggle-right toggle-icon\" data-toggle=\"expanded\"></i>\r\n        </a>\r\n        <a class=\"nav-close d-block d-md-block d-lg-none d-xl-none\" id=\"sidebarClose\" href=\"javascript:;\">\r\n            <i class=\"ft-x\"></i>\r\n        </a>\r\n    </div>\r\n</div>\r\n<!-- Sidebar Header Ends -->\r\n\r\n<!-- Sidebar Content starts -->\r\n<div class=\"sidebar-content\"  [perfectScrollbar]>\r\n    <div class=\"nav-container\">\r\n        <ul class=\"navigation\" appSidebarList>\r\n            <!-- First level menu -->\r\n             <li appSidebarlink level=\"{{depth + 1}}\" (toggleEmit)=\"handleToggle($event)\" (click)=\"toggleSlideInOut()\" [routePath]=\"menuItem.path\" [classes]=\"menuItem.class\" [title]=\"menuItem.title\"  [parent]=\"\" *ngFor=\"let menuItem of menuItems\"   [ngClass]=\"{'has-sub': menuItem.class === 'has-sub' ? true: false, 'open': activeTitles.includes(menuItem.title) && !nav_collapsed_open ? true : false, 'nav-collapsed-open': nav_collapsed_open && activeTitles.includes(menuItem.title)}\" [routerLinkActive]=\"menuItem.submenu.length != 0 ? '' : 'active'\"\r\n                [routerLinkActiveOptions]=\"{exact: true}\">\r\n                <a appSidebarAnchorToggle [routerLink]=\"menuItem.class === '' ? [menuItem.path] : null\" *ngIf=\"!menuItem.isExternalLink; else externalLinkBlock\">\r\n                    <i [ngClass]=\"[menuItem.icon]\"></i>\r\n                    <span class=\"menu-title\">{{menuItem.title | translate }}</span>\r\n                    <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                </a>\r\n                <ng-template #externalLinkBlock>\r\n                    <a [href]=\"[menuItem.path]\" target=\"_blank\">\r\n                        <i [ngClass]=\"[menuItem.icon]\"></i>\r\n                        <span class=\"menu-title\">{{menuItem.title | translate }}</span>\r\n                        <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                    </a>\r\n                </ng-template>\r\n                <!-- Second level menu -->\r\n                <ul class=\"menu-content\" *ngIf=\"menuItem.submenu.length > 0\" [@slideInOut]=\"activeTitles.includes(menuItem.title) ? true : false\">\r\n                    <li appSidebarlink level=\"{{depth + 2}}\" (toggleEmit)=\"handleToggle($event)\" [routePath]=\"menuSubItem.path\" [classes]=\"menuSubItem.class\" [title]=\"menuSubItem.title\" [parent]=\"menuItem.title\" *ngFor=\"let menuSubItem of menuItem.submenu\" [routerLinkActive]=\"menuSubItem.submenu.length > 0 ? '' : 'active'\" [ngClass]=\"{'has-sub': menuSubItem.class === 'has-sub' ? true: false, 'open': activeTitles.includes(menuSubItem.title) && !nav_collapsed_open ? true : false, 'nav-collapsed-open': nav_collapsed_open && activeTitles.includes(menuSubItem.title)}\">\r\n                        <a appSidebarAnchorToggle [routerLink]=\"menuSubItem.submenu.length > 0 ? null : [menuSubItem.path]\" *ngIf=\"!menuSubItem.isExternalLink; else externalSubLinkBlock\">\r\n                            <i [ngClass]=\"[menuSubItem.icon]\"></i>\r\n                            <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\r\n                            <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                        </a>\r\n                        <ng-template #externalSubLinkBlock>\r\n                            <a [href]=\"[menuSubItem.path]\">\r\n                                <i [ngClass]=\"[menuSubItem.icon]\"></i>\r\n                                <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\r\n                                <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                            </a>\r\n                        </ng-template>\r\n                        <!-- Third level menu -->\r\n                        <ul class=\"menu-content\" *ngIf=\"menuSubItem.submenu.length > 0\" [@slideInOut]=\"activeTitles.includes(menuSubItem.title) ? true : false\">\r\n                            <li appSidebarlink level=\"{{depth + 3}}\" [routePath]=\"menuSubsubItem.path\" [classes]=\"menuSubsubItem.class\" [title]=\"menuSubsubItem.title\" [parent]=\"menuSubItem.title\" *ngFor=\"let menuSubsubItem of menuSubItem.submenu\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n                                [ngClass]=\"[menuSubsubItem.class]\">\r\n                                <a appSidebarAnchorToggle [routerLink]=\"[menuSubsubItem.path]\" *ngIf=\"!menuSubsubItem.isExternalLink; else externalSubSubLinkBlock\">\r\n                                    <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                    <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\r\n                                    <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                </a>\r\n                                <ng-template #externalSubSubLinkBlock>\r\n                                    <a [href]=\"[menuSubsubItem.path]\">\r\n                                        <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                        <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\r\n                                        <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                    </a>\r\n                                </ng-template>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<!-- Sidebar Content Ends -->\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ "./src/app/shared/routes/full-layout.routes.ts");
/* harmony import */ var _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/routes/content-layout.routes */ "./src/app/shared/routes/content-layout.routes.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");








var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    { path: '', component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_3__["FullLayoutComponent"], data: { title: 'full Views' }, children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_5__["Full_ROUTES"], canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: '', component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__["ContentLayoutComponent"], data: { title: 'content Views' }, children: _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_6__["CONTENT_ROUTES"], canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    {
        path: '**',
        redirectTo: 'pages/error'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.subscription = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function () { return window.scrollTo(0, 0); });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");






















var config = { url: 'https://projects-management-itbs.herokuapp.com', options: {} };
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"], _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_17__["FullLayoutComponent"], _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_16__["ContentLayoutComponent"]],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot({}),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_12__["LoginModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_21__["SocketIoModule"].forRoot(config),
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: "YOUR KEY"
                }),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"]
            ],
            providers: [
                _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"],
                _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_18__["DragulaService"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.service.ts":
/*!**************************************!*\
  !*** ./src/app/chat/chat.service.ts ***!
  \**************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var ChatService = /** @class */ (function () {
    function ChatService(http, authService, socket, userService) {
        var _this = this;
        this.http = http;
        this.authService = authService;
        this.socket = socket;
        this.userService = userService;
        this.usersUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backendUrl + "/users";
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backendUrl + "/messages";
        this.username = JSON.parse(localStorage.getItem('currentUser')).userName;
        this.getMessages = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('new-message', function (message) {
                    observer.next(message);
                });
            });
        };
    }
    ChatService.prototype.connect = function (username, callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        // initialize the connection
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6__(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].chatUrl, { path: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].chatPath });
        this.socket.on('error', function (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        });
        this.socket.on('connect', function () {
            console.log('im connected ', username);
            _this.sendUser(username);
            console.log('connected to the chat server');
            callback();
        });
    };
    ChatService.prototype.sendUser = function (username) {
        this.socket.emit('username', { username: username });
    };
    ChatService.prototype.getUsers = function () {
        return this.userService.getUsers();
    };
    ChatService.prototype.sendMessage = function (message, chatWith) {
        this.socket.emit('message', { message: message, to: chatWith });
        console.log(message, chatWith);
    };
    ChatService.prototype.receiveMessage = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatService.prototype.receiveActiveList = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('active', function (data) {
                console.log(data);
                observer.next(data);
            });
        });
        return observable;
    };
    ChatService.prototype.getUserList = function () {
        var url = this.usersUrl;
        var authToken = this.authService.getUserData().token;
        // prepare the request
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: authToken,
        });
        var options = { headers: headers };
        // POST
        var observableReq = this.http.get(url, options);
        return observableReq;
    };
    ChatService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ChatService.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    ChatService.prototype.isConnected = function () {
        if (this.socket != null) {
            return true;
        }
        else {
            return false;
        }
    };
    ChatService.prototype.getActiveList = function () {
        this.socket.emit('getactive');
    };
    ChatService.prototype.getConversation = function (name1, name2) {
        var url = this.apiUrl;
        if (name2 != 'chat-room') {
            var route = '/' + name1 + '/' + name2;
            url += route;
        }
        var authToken = this.authService.getUserData().token;
        // prepare the request
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: authToken,
        });
        var options = { headers: headers };
        // POST
        var observableReq = this.http.get(url, options);
        return observableReq;
    };
    ChatService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
        { type: app_login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] },
        { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] },
        { type: _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], app_login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"], _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY29udGVudC9jb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent(configService, document, renderer) {
        this.configService = configService;
        this.document = document;
        this.renderer = renderer;
        this.config = {};
    }
    ContentLayoutComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
    };
    ContentLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.dir) {
                _this.direction = _this.config.layout.dir;
            }
            if (_this.config.layout.variant === "Dark") {
                _this.renderer.addClass(_this.document.body, 'layout-dark');
            }
            else if (_this.config.layout.variant === "Transparent") {
                _this.renderer.addClass(_this.document.body, 'layout-dark');
                _this.renderer.addClass(_this.document.body, 'layout-transparent');
                if (_this.config.layout.sidebar.backgroundColor) {
                    _this.renderer.addClass(_this.document.body, _this.config.layout.sidebar.backgroundColor);
                }
                else {
                    _this.renderer.addClass(_this.document.body, 'bg-glass-1');
                }
            }
        }, 0);
    };
    ContentLayoutComponent.ctorParameters = function () { return [
        { type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content-wrapper', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ContentLayoutComponent.prototype, "wrapper", void 0);
    ContentLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-layout',
            template: __webpack_require__(/*! raw-loader!./content-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/content/content-layout.component.html"),
            styles: [__webpack_require__(/*! ./content-layout.component.scss */ "./src/app/layouts/content/content-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ContentLayoutComponent);
    return ContentLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");





var fireRefreshEventOnWindow = function () {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("resize", true, false);
    window.dispatchEvent(evt);
};
var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(elementRef, layoutService, configService, document, renderer) {
        var _this = this;
        this.elementRef = elementRef;
        this.layoutService = layoutService;
        this.configService = configService;
        this.document = document;
        this.renderer = renderer;
        this.options = {
            direction: "ltr",
            bgColor: "black",
            bgImage: "assets/img/sidebar-bg/01.jpg"
        };
        this.iscollapsed = false;
        this.isSidebar_sm = false;
        this.isSidebar_lg = false;
        this.bgColor = "black";
        this.bgImage = "assets/img/sidebar-bg/01.jpg";
        this.config = {};
        //event emitter call from customizer
        this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(function (options) {
            if (options) {
                if (options.bgColor) {
                    _this.bgColor = options.bgColor;
                }
                if (options.bgImage) {
                    _this.bgImage = options.bgImage;
                    _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, "style", 'background-image: url("' + _this.bgImage + '")');
                }
                if (options.bgImageDisplay === true) {
                    _this.bgImage = options.bgImage;
                    _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, "style", 'display: block; background-image: url("' + _this.bgImage + '")');
                }
                else if (options.bgImageDisplay === false) {
                    _this.bgImage = "";
                    // this.renderer.setAttribute(this.sidebarBgImage.nativeElement, 'style', 'display: none');
                    _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, "style", "background-image: none");
                }
                if (options.compactMenu === true) {
                    _this.renderer.addClass(_this.wrapper.nativeElement, "nav-collapsed");
                    _this.renderer.addClass(_this.wrapper.nativeElement, "menu-collapsed");
                }
                else if (options.compactMenu === false) {
                    if (_this.wrapper.nativeElement.classList.contains("nav-collapsed")) {
                        _this.renderer.removeClass(_this.wrapper.nativeElement, "nav-collapsed");
                        _this.renderer.removeClass(_this.wrapper.nativeElement, "menu-collapsed");
                    }
                }
                if (options.sidebarSize === "sidebar-lg") {
                    _this.isSidebar_sm = false;
                    _this.isSidebar_lg = true;
                }
                else if (options.sidebarSize === "sidebar-sm") {
                    _this.isSidebar_sm = true;
                    _this.isSidebar_lg = false;
                }
                else {
                    _this.isSidebar_sm = false;
                    _this.isSidebar_lg = false;
                }
                if (options.layout === "Light") {
                    _this.renderer.removeClass(_this.document.body, "layout-dark");
                    _this.renderer.removeClass(_this.document.body, "layout-transparent");
                    _this.renderer.removeClass(_this.document.body, "bg-hibiscus");
                    _this.renderer.removeClass(_this.document.body, "bg-purple-pizzazz");
                    _this.renderer.removeClass(_this.document.body, "bg-blue-lagoon");
                    _this.renderer.removeClass(_this.document.body, "bg-electric-violet");
                    _this.renderer.removeClass(_this.document.body, "bg-portage");
                    _this.renderer.removeClass(_this.document.body, "bg-tundora");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-1");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-2");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-3");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-4");
                }
                else if (options.layout === "Dark") {
                    if (_this.document.body.classList.contains("layout-transparent")) {
                        _this.renderer.removeClass(_this.document.body, "layout-transparent");
                        _this.renderer.removeClass(_this.document.body, "bg-hibiscus");
                        _this.renderer.removeClass(_this.document.body, "bg-purple-pizzazz");
                        _this.renderer.removeClass(_this.document.body, "bg-blue-lagoon");
                        _this.renderer.removeClass(_this.document.body, "bg-electric-violet");
                        _this.renderer.removeClass(_this.document.body, "bg-portage");
                        _this.renderer.removeClass(_this.document.body, "bg-tundora");
                        _this.renderer.removeClass(_this.document.body, "bg-glass-1");
                        _this.renderer.removeClass(_this.document.body, "bg-glass-2");
                        _this.renderer.removeClass(_this.document.body, "bg-glass-3");
                        _this.renderer.removeClass(_this.document.body, "bg-glass-4");
                        _this.renderer.addClass(_this.document.body, "layout-dark");
                    }
                    else {
                        _this.renderer.addClass(_this.document.body, "layout-dark");
                    }
                }
                else if (options.layout === "Transparent") {
                    _this.renderer.addClass(_this.document.body, "layout-transparent");
                    _this.renderer.addClass(_this.document.body, "layout-dark");
                    _this.renderer.addClass(_this.document.body, "bg-glass-1");
                }
                if (options.transparentColor) {
                    _this.renderer.removeClass(_this.document.body, "bg-hibiscus");
                    _this.renderer.removeClass(_this.document.body, "bg-purple-pizzazz");
                    _this.renderer.removeClass(_this.document.body, "bg-blue-lagoon");
                    _this.renderer.removeClass(_this.document.body, "bg-electric-violet");
                    _this.renderer.removeClass(_this.document.body, "bg-portage");
                    _this.renderer.removeClass(_this.document.body, "bg-tundora");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-1");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-2");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-3");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-4");
                    _this.renderer.addClass(_this.document.body, options.transparentColor);
                }
            }
        });
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.configService.templateConf;
        this.bgColor = this.config.layout.sidebar.backgroundColor;
        if (!this.config.layout.sidebar.backgroundImage) {
            this.bgImage = "";
        }
        else {
            this.bgImage = this.config.layout.sidebar.backgroundImageURL;
        }
        if (this.config.layout.variant === "Transparent") {
            if (this.config.layout.sidebar.backgroundColor.toString().trim() === "") {
                this.bgColor = "bg-glass-1";
            }
        }
        else {
            if (this.config.layout.sidebar.backgroundColor.toString().trim() === "") {
                this.bgColor = "black";
            }
        }
        setTimeout(function () {
            if (_this.config.layout.sidebar.size === "sidebar-lg") {
                _this.isSidebar_sm = false;
                _this.isSidebar_lg = true;
            }
            else if (_this.config.layout.sidebar.size === "sidebar-sm") {
                _this.isSidebar_sm = true;
                _this.isSidebar_lg = false;
            }
            else {
                _this.isSidebar_sm = false;
                _this.isSidebar_lg = false;
            }
            _this.iscollapsed = _this.config.layout.sidebar.collapsed;
        }, 0);
        //emit event to customizer
        this.options.bgColor = this.bgColor;
        this.options.bgImage = this.bgImage;
        this.layoutService.emitCustomizerChange(this.options);
        //customizer events
        this.elementRef.nativeElement
            .querySelector("#cz-compact-menu")
            .addEventListener("click", this.onClick.bind(this));
        this.elementRef.nativeElement
            .querySelector("#cz-sidebar-width")
            .addEventListener("click", this.onClick.bind(this));
    };
    FullLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.dir) {
                _this.options.direction = _this.config.layout.dir;
            }
            if (_this.config.layout.variant === "Dark") {
                _this.renderer.addClass(_this.document.body, "layout-dark");
            }
            else if (_this.config.layout.variant === "Transparent") {
                _this.renderer.addClass(_this.document.body, "layout-dark");
                _this.renderer.addClass(_this.document.body, "layout-transparent");
                if (_this.config.layout.sidebar.backgroundColor) {
                    _this.renderer.addClass(_this.document.body, _this.config.layout.sidebar.backgroundColor);
                }
                else {
                    _this.renderer.addClass(_this.document.body, "bg-glass-1");
                }
                _this.bgColor = "black";
                _this.options.bgColor = "black";
                _this.bgImage = "";
                _this.options.bgImage = "";
                _this.bgImage = "";
                _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, "style", "background-image: none");
            }
        }, 0);
    };
    FullLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    FullLayoutComponent.prototype.onClick = function (event) {
        //initialize window resizer event on sidebar toggle click event
        setTimeout(function () {
            fireRefreshEventOnWindow();
        }, 300);
    };
    FullLayoutComponent.prototype.toggleHideSidebar = function ($event) {
        var _this = this;
        setTimeout(function () {
            _this.hideSidebar = $event;
        }, 0);
    };
    FullLayoutComponent.prototype.getOptions = function ($event) {
        this.options = $event;
    };
    FullLayoutComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] },
        { type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("sidebarBgImage", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "sidebarBgImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("appSidebar", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "appSidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("wrapper", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "wrapper", void 0);
    FullLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-full-layout",
            template: __webpack_require__(/*! raw-loader!./full-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full-layout.component.html"),
            styles: [__webpack_require__(/*! ./full-layout.component.scss */ "./src/app/layouts/full/full-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"],
            app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/error/error-page.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/login/error/error-page.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#error {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n\n@media (max-width: 768px) {\n  #error .error-img {\n    width: 300px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vZXJyb3IvQzpcXFVzZXJzXFxhc3VzXFxEZXNrdG9wXFxwcm9qZWN0c01hbmFnZW1lbnQvc3JjXFxhcHBcXGxvZ2luXFxlcnJvclxcZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHFDQUFpRTtFQUNqRSwwQkFBMEI7RUFDMUIsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0U7SUFFSSxZQUFZLEVBQUEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2Vycm9yL2Vycm9yLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFcnJvclxyXG4jZXJyb3Ige1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9nYWxsZXJ5L2xpZ2h0LWJnLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAjZXJyb3Ige1xyXG4gICAgLmVycm9yLWltZyB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/error/error-page.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/login/error/error-page.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! raw-loader!./error-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/error/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/login/error/error-page.component.scss")]
        })
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/login/forgot-password/forgot-password-page.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password-page.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#forgot-password .forgot-password-bg {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n\n#forgot-password .fg-image {\n  padding: 0;\n  background: #f0f0f0; }\n\n#forgot-password .login-btn .btn.btn-outline-primary:hover a {\n  color: #fff; }\n\n#forgot-password .recover-pass button.btn.btn-primary {\n  color: #fff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vZm9yZ290LXBhc3N3b3JkL0M6XFxVc2Vyc1xcYXN1c1xcRGVza3RvcFxccHJvamVjdHNNYW5hZ2VtZW50L3NyY1xcYXBwXFxsb2dpblxcZm9yZ290LXBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLHFDQUFpRTtFQUNqRSwwQkFBMEI7RUFDMUIsNEJBQTRCLEVBQUE7O0FBSmhDO0VBT0ksVUFBVTtFQUNWLG1CQUFtQixFQUFBOztBQVJ2QjtFQWdCVSxXQUFXLEVBQUE7O0FBaEJyQjtFQXdCTSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvcmdvdCBQYXNzd29yZFxyXG5cclxuI2ZvcmdvdC1wYXNzd29yZCB7XHJcbiAgLmZvcmdvdC1wYXNzd29yZC1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2dhbGxlcnkvbGlnaHQtYmcuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxuICAuZmctaW1hZ2Uge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmxvZ2luLWJ0biB7XHJcbiAgICAuYnRuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJlY292ZXItcGFzcyB7XHJcbiAgICBidXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcclxuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/forgot-password/forgot-password-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageComponent", function() { return ForgotPasswordPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ForgotPasswordPageComponent = /** @class */ (function () {
    function ForgotPasswordPageComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    // On submit click, reset form fields
    ForgotPasswordPageComponent.prototype.onSubmit = function () {
        this.forogtPasswordForm.reset();
    };
    // On login link click
    ForgotPasswordPageComponent.prototype.onLogin = function () {
        this.router.navigate(['login'], { relativeTo: this.route.parent });
    };
    // On registration link click
    ForgotPasswordPageComponent.prototype.onRegister = function () {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    };
    ForgotPasswordPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ForgotPasswordPageComponent.prototype, "forogtPasswordForm", void 0);
    ForgotPasswordPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password-page',
            template: __webpack_require__(/*! raw-loader!./forgot-password-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/forgot-password/forgot-password-page.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password-page.component.scss */ "./src/app/login/forgot-password/forgot-password-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ForgotPasswordPageComponent);
    return ForgotPasswordPageComponent;
}());



/***/ }),

/***/ "./src/app/login/lock-screen/lock-screen-page.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/login/lock-screen/lock-screen-page.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#lock-screen {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n  #lock-screen .lock-screen-img {\n    background: #f0f0f0;\n    padding: 0; }\n  #lock-screen .btn.btn-link.text-decoration-none:hover {\n    text-decoration: none !important; }\n  #lock-screen .login-btn .btn.btn-link {\n    font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9jay1zY3JlZW4vQzpcXFVzZXJzXFxhc3VzXFxEZXNrdG9wXFxwcm9qZWN0c01hbmFnZW1lbnQvc3JjXFxhcHBcXGxvZ2luXFxsb2NrLXNjcmVlblxcbG9jay1zY3JlZW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFpRTtFQUNqRSwwQkFBMEI7RUFDMUIsNEJBQTRCLEVBQUE7RUFIOUI7SUFNSSxtQkFBbUI7SUFDbkIsVUFBVSxFQUFBO0VBUGQ7SUFZTSxnQ0FBZ0MsRUFBQTtFQVp0QztJQWtCTSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2NrLXNjcmVlbi9sb2NrLXNjcmVlbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9yZ290IFBhc3N3b3JkXHJcblxyXG4jbG9jay1zY3JlZW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9saWdodC1iZy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgLmxvY2stc2NyZWVuLWltZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC5idG4uYnRuLWxpbmsudGV4dC1kZWNvcmF0aW9uLW5vbmUge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWJ0biB7XHJcbiAgICAuYnRuLmJ0bi1saW5rIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/lock-screen/lock-screen-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/login/lock-screen/lock-screen-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: LockScreenPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockScreenPageComponent", function() { return LockScreenPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var LockScreenPageComponent = /** @class */ (function () {
    function LockScreenPageComponent() {
    }
    LockScreenPageComponent.prototype.onSubmit = function () {
        this.lockScreenForm.reset();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LockScreenPageComponent.prototype, "lockScreenForm", void 0);
    LockScreenPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lock-screen-page',
            template: __webpack_require__(/*! raw-loader!./lock-screen-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/lock-screen/lock-screen-page.component.html"),
            styles: [__webpack_require__(/*! ./lock-screen-page.component.scss */ "./src/app/login/lock-screen/lock-screen-page.component.scss")]
        })
    ], LockScreenPageComponent);
    return LockScreenPageComponent;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");




var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        data: {
            title: 'Login Page'
        }
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n  #login .login-img {\n    padding: 0;\n    background: #f0f0f0; }\n  #login .login-btn .btn.btn-outline-primary:hover a {\n    color: #fff; }\n  #login .recover-pass button.btn.btn-primary {\n    color: #fff !important; }\n  #login .forgot-password-option a.text-decoration-none,\n  #login .forgot-password-option .custom-control-label,\n  #login .remember-me a.text-decoration-none,\n  #login .remember-me .custom-control-label {\n    font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxhc3VzXFxEZXNrdG9wXFxwcm9qZWN0c01hbmFnZW1lbnQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUE4RDtFQUM5RCwwQkFBMEI7RUFDMUIsNEJBQTRCLEVBQUE7RUFIOUI7SUFNSSxVQUFVO0lBQ1YsbUJBQW1CLEVBQUE7RUFQdkI7SUFjVSxXQUFXLEVBQUE7RUFkckI7SUFzQk0sc0JBQXNCLEVBQUE7RUF0QjVCOzs7O0lBK0JNLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTG9naW4gUGFnZVxyXG5cclxuI2xvZ2luIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9saWdodC1iZy5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAubG9naW4taW1nIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWJ0biB7XHJcbiAgICAuYnRuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJlY292ZXItcGFzcyB7XHJcbiAgICBidXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcclxuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3Jnb3QtcGFzc3dvcmQtb3B0aW9uLFxyXG4gIC5yZW1lbWJlci1tZSB7XHJcblxyXG4gICAgYS50ZXh0LWRlY29yYXRpb24tbm9uZSxcclxuICAgIC5jdXN0b20tY29udHJvbC1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/chat/chat.service */ "./src/app/chat/chat.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, LoginService, chatService, route) {
        this.router = router;
        this.LoginService = LoginService;
        this.chatService = chatService;
        this.route = route;
        this.userName = '';
        this.password = '';
    }
    // On submit button click
    LoginComponent.prototype.onSubmit = function () {
        console.log("submit");
        var login = {
            userName: this.userName,
            password: this.password
        };
        //this.loginForm.reset();
        var result = this.LoginService.loginUser(login);
        this.chatService.connect(login.userName);
        this.router.navigate(['/chat']);
    };
    // On Forgot password link click
    LoginComponent.prototype.onForgotPassword = function () {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    };
    // On registration link click
    LoginComponent.prototype.onRegister = function () {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] },
        { type: app_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], app_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: user, LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error-page.component */ "./src/app/login/error/error-page.component.ts");
/* harmony import */ var _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password-page.component */ "./src/app/login/forgot-password/forgot-password-page.component.ts");
/* harmony import */ var _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lock-screen/lock-screen-page.component */ "./src/app/login/lock-screen/lock-screen-page.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");









var user = /** @class */ (function () {
    function user(username, admin, password, email, phone, address, city, state, country, createdAt, updatedAt) {
        this.username = username;
        this.admin = admin;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.state = state;
        this.country = country;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    user.ctorParameters = function () { return [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]; };
    return user;
}());

var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [
                _error_error_page_component__WEBPACK_IMPORTED_MODULE_5__["ErrorPageComponent"],
                _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPageComponent"],
                _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_7__["LockScreenPageComponent"],
                _login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






//https://jasonwatmore.com/fr/post/2019/06/10/angular-8-tutoriel-et-exemple-sur-lenregistrement-et-lauthentification-des-utilisateurs
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var LoginService = /** @class */ (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.url = 'https://projects-management-itbs.herokuapp.com';
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(LoginService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.loginUser = function (login) {
        var _this = this;
        console.log("Service Login" + login);
        this
            .http
            .post(this.url + "/api/users/login", { login: login }, httpOptions)
            .subscribe(function (res) {
            console.log(res['auth']);
            console.log(res['user']);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(res));
            if (res['auth'] == true) {
                _this.router.navigate(['/Accueil']);
            }
            else {
                alert(res['auth']);
            }
        });
    };
    LoginService.prototype.login = function (login) {
        var _this = this;
        return this.http.post(this.url + "/api/users/login", { login: login })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            _this.currentUserSubject.next(user);
            return user;
        }));
    };
    LoginService.prototype.logout = function () {
        // remove user from local storage and set current user to null
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        this.currentUserSubject.next(null);
    };
    LoginService.prototype.getUserData = function () {
        this.loadCredentials();
        var jUser = JSON.parse(localStorage.getItem('currentUser'));
        var jData = { token: this.authToken, user: jUser };
        return jData;
    };
    LoginService.prototype.loadCredentials = function () {
        var token = JSON.parse(localStorage.getItem('currentUser')).token;
        var user = localStorage.getItem('currentUser');
        this.authToken = token;
        this.user = user;
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/shared/animations/custom-animations.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/custom-animations.ts ***!
  \********************************************************/
/*! exports provided: customAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAnimations", function() { return customAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var customAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 <=> 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200))
    ])
];


/***/ }),

/***/ "./src/app/shared/auth/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signupUser = function (email, password) {
        //your code for signing up the new user
    };
    AuthService.prototype.signinUser = function (email, password) {
        //your code for checking credentials and getting tokens for for signing in user
    };
    AuthService.prototype.logout = function () {
        this.token = null;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        // here you can check if user is authenticated or not through his token 
        return true;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customizer {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); }\n  .customizer.open {\n    right: 0; }\n  .customizer .customizer-content {\n    position: relative;\n    height: 100%; }\n  .customizer a.customizer-toggle {\n    background: #FFF;\n    color: theme-color(\"primary\");\n    display: block;\n    box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1); }\n  .customizer a.customizer-close {\n    color: #000; }\n  .customizer .customizer-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 7px;\n    width: auto;\n    z-index: 10; }\n  .customizer #rtl-icon {\n    position: absolute;\n    right: -1px;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    text-align: center;\n    cursor: pointer;\n    line-height: 50px;\n    margin-top: 50px; }\n  .customizer .customizer-toggle {\n    position: absolute;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    left: -54px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer; }\n  .customizer .color-options a {\n    white-space: pre; }\n  .customizer .cz-bg-color {\n    margin: 0 auto; }\n  .customizer .cz-bg-color span:hover {\n      cursor: pointer; }\n  .customizer .cz-bg-color span.white {\n      color: #ddd !important; }\n  .customizer .cz-bg-color .selected,\n  .customizer .cz-tl-bg-color .selected {\n    box-shadow: 0 0 10px 3px #009da0;\n    border: 3px solid #fff; }\n  .customizer .cz-bg-image:hover {\n    cursor: pointer; }\n  .customizer .cz-bg-image img.rounded {\n    border-radius: 1rem !important;\n    border: 2px solid #e6e6e6;\n    height: 100px;\n    width: 50px; }\n  .customizer .cz-bg-image img.rounded.selected {\n      border: 2px solid #FF586B; }\n  .customizer .tl-color-options {\n    display: none; }\n  .customizer .cz-tl-bg-image img.rounded {\n    border-radius: 1rem !important;\n    border: 2px solid #e6e6e6;\n    height: 100px;\n    width: 70px; }\n  .customizer .cz-tl-bg-image img.rounded.selected {\n      border: 2px solid #FF586B; }\n  .customizer .cz-tl-bg-image img.rounded:hover {\n      cursor: pointer; }\n  .customizer .bg-hibiscus {\n    background-image: linear-gradient(to right bottom, #f05f57, #c83d5c, #99245a, #671351, #360940);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .bg-purple-pizzazz {\n    background-image: linear-gradient(to right bottom, #662d86, #8b2a8a, #ae2389, #cf1d83, #ed1e79);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .bg-blue-lagoon {\n    background-image: linear-gradient(to right bottom, #144e68, #006d83, #008d92, #00ad91, #57ca85);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .bg-electric-violet {\n    background-image: linear-gradient(to left top, #4a00e0, #600de0, #7119e1, #8023e1, #8e2de2);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .bg-portage {\n    background-image: linear-gradient(to left top, #97abff, #798ce5, #5b6ecb, #3b51b1, #123597);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .bg-tundora {\n    background-image: linear-gradient(to left top, #474747, #4a4a4a, #4c4d4d, #4f5050, #525352);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .cz-bg-color .col span.rounded-circle:hover,\n  .customizer .cz-tl-bg-color .col span.rounded-circle:hover {\n    cursor: pointer; }\n  [dir=rtl] :host ::ng-deep .customizer {\n  left: -400px;\n  right: auto;\n  border-right: 1px solid rgba(0, 0, 0, 0.05);\n  border-left: 0px; }\n  [dir=rtl] :host ::ng-deep .customizer.open {\n    left: 0;\n    right: auto; }\n  [dir=rtl] :host ::ng-deep .customizer .customizer-close {\n    left: 10px;\n    right: auto; }\n  [dir=rtl] :host ::ng-deep .customizer .customizer-toggle {\n    right: -54px;\n    left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2N1c3RvbWl6ZXIvQzpcXFVzZXJzXFxhc3VzXFxEZXNrdG9wXFxwcm9qZWN0c01hbmFnZW1lbnQvc3JjXFxhcHBcXHNoYXJlZFxcY3VzdG9taXplclxcY3VzdG9taXplci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2N1c3RvbWl6ZXIvY3VzdG9taXplci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsYUFBYTtFQUNiLDBEQUEwRDtFQUMxRCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLDBDQUEwQztFQUMxQyxzQ0FBc0MsRUFBQTtFQWJ4QztJQWdCSSxRQUFRLEVBQUE7RUFoQlo7SUFvQkksa0JBQWtCO0lBQ2xCLFlBQVksRUFBQTtFQXJCaEI7SUF5QkksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsMkNBQTJDLEVBQUE7RUE1Qi9DO0lBZ0NJLFdBQVcsRUFBQTtFQWhDZjtJQW9DSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVcsRUFBQTtFQXpDZjtJQTZDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0VBckRwQjtJQXlESSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZSxFQUFBO0VBaEVuQjtJQXFFTSxnQkFBZ0IsRUFBQTtFQXJFdEI7SUEwRUksY0FBYyxFQUFBO0VBMUVsQjtNQThFUSxlQUFlLEVBQUE7RUE5RXZCO01Ba0ZRLHNCQUFzQixFQUFBO0VBbEY5Qjs7SUEwRk0sZ0NBQWdDO0lBQ2hDLHNCQUFzQixFQUFBO0VBM0Y1QjtJQWlHTSxlQUFlLEVBQUE7RUFqR3JCO0lBcUdNLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFdBQVcsRUFBQTtFQXhHakI7TUEyR1EseUJBQXlCLEVBQUE7RUEzR2pDO0lBaUhJLGFBQWEsRUFBQTtFQWpIakI7SUFzSE0sOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsV0FBVyxFQUFBO0VBekhqQjtNQTRIUSx5QkFBeUIsRUFBQTtFQTVIakM7TUFnSVEsZUFBZSxFQUFBO0VBaEl2QjtJQXNJSSwrRkE3SXdGO0lBOEl4RixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDBCQUEwQixFQUFBO0VBNUk5QjtJQWdKSSwrRkF0SjhGO0lBdUo5RixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDBCQUEwQixFQUFBO0VBdEo5QjtJQTBKSSwrRkEvSjBGO0lBZ0sxRixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDBCQUEwQixFQUFBO0VBaEs5QjtJQW9LSSwyRkF4S3lGO0lBeUt6RixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDBCQUEwQixFQUFBO0VBMUs5QjtJQThLSSwyRkFqTGlGO0lBa0xqRixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDBCQUEwQixFQUFBO0VBcEw5QjtJQXlMSSwyRkEzTGlGO0lBNExqRixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDBCQUEwQixFQUFBO0VBL0w5Qjs7SUF1TVUsZUFBZSxFQUFBO0VDdkV6QjtFRGtGSSxZQUFZO0VBQ1osV0FBVztFQUNYLDJDQUEyQztFQUMzQyxnQkFBZ0IsRUFBQTtFQ2hGbEI7SURtRkksT0FBTztJQUNQLFdBQVcsRUFBQTtFQ2pGZjtJRHFGSSxVQUFVO0lBQ1YsV0FBVyxFQUFBO0VDbkZmO0lEd0ZJLFlBQVk7SUFDWixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY3VzdG9taXplci9jdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVmFyaWFibGVzIEZvciBUcmFuc3BhcmVudCBMYXlvdXRcclxuJGJnLWhpYmlzY3VzIDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI2YwNWY1NywgI2M4M2Q1YywgIzk5MjQ1YSwgIzY3MTM1MSwgIzM2MDk0MCk7XHJcbiRiZy1wdXJwbGUtcGl6emF6eiA6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICM2NjJkODYsICM4YjJhOGEsICNhZTIzODksICNjZjFkODMsICNlZDFlNzkpO1xyXG4kYmctYmx1ZS1sYWdvb246IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICMxNDRlNjgsICMwMDZkODMsICMwMDhkOTIsICMwMGFkOTEsICM1N2NhODUpO1xyXG4kYmctZWxlY3RyaWMtdmlvbGV0OmxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCwgIzRhMDBlMCwgIzYwMGRlMCwgIzcxMTllMSwgIzgwMjNlMSwgIzhlMmRlMik7XHJcbiRiZy1wb3J0YWdlOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCwgIzk3YWJmZiwgIzc5OGNlNSwgIzViNmVjYiwgIzNiNTFiMSwgIzEyMzU5Nyk7XHJcbiRiZy10dW5kb3JhOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCwgIzQ3NDc0NywgIzRhNGE0YSwgIzRjNGQ0ZCwgIzRmNTA1MCwgIzUyNTM1Mik7XHJcblxyXG4uY3VzdG9taXplciB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHJpZ2h0OiAtNDAwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIHotaW5kZXg6IDEwNTE7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB0cmFuc2l0aW9uOiByaWdodCAwLjRzIGN1YmljLWJlemllcigwLjA1LCAwLjc0LCAwLjIsIDAuOTkpO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gICYub3BlbiB7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5jdXN0b21pemVyLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgYS5jdXN0b21pemVyLXRvZ2dsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgY29sb3I6IHRoZW1lLWNvbG9yKCdwcmltYXJ5Jyk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJveC1zaGFkb3c6IC0zcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG5cclxuICBhLmN1c3RvbWl6ZXItY2xvc2Uge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9taXplci1jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgfVxyXG5cclxuICAjcnRsLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC0xcHg7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIHdpZHRoOiA1NHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbWl6ZXItdG9nZ2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzUlO1xyXG4gICAgd2lkdGg6IDU0cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBsZWZ0OiAtNTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbG9yLW9wdGlvbnMge1xyXG4gICAgYSB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY3otYmctY29sb3Ige1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi53aGl0ZSB7XHJcbiAgICAgICAgY29sb3I6ICNkZGQgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmN6LWJnLWNvbG9yLFxyXG4gIC5jei10bC1iZy1jb2xvciB7XHJcbiAgICAuc2VsZWN0ZWQge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAzcHggIzAwOWRhMDtcclxuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jei1iZy1pbWFnZSB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGltZy5yb3VuZGVkIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuXHJcbiAgICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjU4NkI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50bC1jb2xvci1vcHRpb25zIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY3otdGwtYmctaW1hZ2Uge1xyXG4gICAgaW1nLnJvdW5kZWQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIHdpZHRoOiA3MHB4O1xyXG5cclxuICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGNTg2QjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmctaGliaXNjdXMge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGJnLWhpYmlzY3VzO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcztcclxuICB9XHJcblxyXG4gIC5iZy1wdXJwbGUtcGl6emF6eiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAkYmctcHVycGxlLXBpenpheno7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xyXG4gIH1cclxuXHJcbiAgLmJnLWJsdWUtbGFnb29uIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICRiZy1ibHVlLWxhZ29vbjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XHJcbiAgfVxyXG5cclxuICAuYmctZWxlY3RyaWMtdmlvbGV0IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICRiZy1lbGVjdHJpYy12aW9sZXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xyXG4gIH1cclxuXHJcbiAgLmJnLXBvcnRhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGJnLXBvcnRhZ2U7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xyXG4gIH1cclxuXHJcblxyXG4gIC5iZy10dW5kb3JhIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICRiZy10dW5kb3JhO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcztcclxuICB9XHJcblxyXG4gIC5jei1iZy1jb2xvcixcclxuICAuY3otdGwtYmctY29sb3Ige1xyXG4gICAgLmNvbCB7XHJcbiAgICAgIHNwYW4ucm91bmRlZC1jaXJjbGUge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5bZGlyPXJ0bF0gOmhvc3QgOjpuZy1kZWVwIHtcclxuICAuY3VzdG9taXplciB7XHJcbiAgICBsZWZ0OiAtNDAwcHg7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBib3JkZXItbGVmdDogMHB4O1xyXG5cclxuICAgICYub3BlbiB7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b21pemVyLWNsb3NlIHtcclxuICAgICAgbGVmdDogMTBweDtcclxuICAgICAgcmlnaHQ6IGF1dG87XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b21pemVyLXRvZ2dsZSB7XHJcbiAgICAgIHJpZ2h0OiAtNTRweDtcclxuICAgICAgbGVmdDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiIsIi5jdXN0b21pemVyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICByaWdodDogLTQwMHB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICB6LWluZGV4OiAxMDUxO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiByaWdodCAwLjRzIGN1YmljLWJlemllcigwLjA1LCAwLjc0LCAwLjIsIDAuOTkpO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cbiAgLmN1c3RvbWl6ZXIub3BlbiB7XG4gICAgcmlnaHQ6IDA7IH1cbiAgLmN1c3RvbWl6ZXIgLmN1c3RvbWl6ZXItY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTsgfVxuICAuY3VzdG9taXplciBhLmN1c3RvbWl6ZXItdG9nZ2xlIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIGNvbG9yOiB0aGVtZS1jb2xvcihcInByaW1hcnlcIik7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNoYWRvdzogLTNweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuICAuY3VzdG9taXplciBhLmN1c3RvbWl6ZXItY2xvc2Uge1xuICAgIGNvbG9yOiAjMDAwOyB9XG4gIC5jdXN0b21pemVyIC5jdXN0b21pemVyLWNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB6LWluZGV4OiAxMDsgfVxuICAuY3VzdG9taXplciAjcnRsLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTFweDtcbiAgICB0b3A6IDM1JTtcbiAgICB3aWR0aDogNTRweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4OyB9XG4gIC5jdXN0b21pemVyIC5jdXN0b21pemVyLXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzUlO1xuICAgIHdpZHRoOiA1NHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBsZWZ0OiAtNTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5jdXN0b21pemVyIC5jb2xvci1vcHRpb25zIGEge1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7IH1cbiAgLmN1c3RvbWl6ZXIgLmN6LWJnLWNvbG9yIHtcbiAgICBtYXJnaW46IDAgYXV0bzsgfVxuICAgIC5jdXN0b21pemVyIC5jei1iZy1jb2xvciBzcGFuOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIC5jdXN0b21pemVyIC5jei1iZy1jb2xvciBzcGFuLndoaXRlIHtcbiAgICAgIGNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7IH1cbiAgLmN1c3RvbWl6ZXIgLmN6LWJnLWNvbG9yIC5zZWxlY3RlZCxcbiAgLmN1c3RvbWl6ZXIgLmN6LXRsLWJnLWNvbG9yIC5zZWxlY3RlZCB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggM3B4ICMwMDlkYTA7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjsgfVxuICAuY3VzdG9taXplciAuY3otYmctaW1hZ2U6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY3VzdG9taXplciAuY3otYmctaW1hZ2UgaW1nLnJvdW5kZWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTZlNmU2O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDUwcHg7IH1cbiAgICAuY3VzdG9taXplciAuY3otYmctaW1hZ2UgaW1nLnJvdW5kZWQuc2VsZWN0ZWQge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGNTg2QjsgfVxuICAuY3VzdG9taXplciAudGwtY29sb3Itb3B0aW9ucyB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuY3VzdG9taXplciAuY3otdGwtYmctaW1hZ2UgaW1nLnJvdW5kZWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTZlNmU2O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDcwcHg7IH1cbiAgICAuY3VzdG9taXplciAuY3otdGwtYmctaW1hZ2UgaW1nLnJvdW5kZWQuc2VsZWN0ZWQge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGNTg2QjsgfVxuICAgIC5jdXN0b21pemVyIC5jei10bC1iZy1pbWFnZSBpbWcucm91bmRlZDpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmN1c3RvbWl6ZXIgLmJnLWhpYmlzY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjZjA1ZjU3LCAjYzgzZDVjLCAjOTkyNDVhLCAjNjcxMzUxLCAjMzYwOTQwKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7IH1cbiAgLmN1c3RvbWl6ZXIgLmJnLXB1cnBsZS1waXp6YXp6IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjNjYyZDg2LCAjOGIyYThhLCAjYWUyMzg5LCAjY2YxZDgzLCAjZWQxZTc5KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7IH1cbiAgLmN1c3RvbWl6ZXIgLmJnLWJsdWUtbGFnb29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjMTQ0ZTY4LCAjMDA2ZDgzLCAjMDA4ZDkyLCAjMDBhZDkxLCAjNTdjYTg1KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7IH1cbiAgLmN1c3RvbWl6ZXIgLmJnLWVsZWN0cmljLXZpb2xldCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQgdG9wLCAjNGEwMGUwLCAjNjAwZGUwLCAjNzExOWUxLCAjODAyM2UxLCAjOGUyZGUyKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7IH1cbiAgLmN1c3RvbWl6ZXIgLmJnLXBvcnRhZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCwgIzk3YWJmZiwgIzc5OGNlNSwgIzViNmVjYiwgIzNiNTFiMSwgIzEyMzU5Nyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzOyB9XG4gIC5jdXN0b21pemVyIC5iZy10dW5kb3JhIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AsICM0NzQ3NDcsICM0YTRhNGEsICM0YzRkNGQsICM0ZjUwNTAsICM1MjUzNTIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zczsgfVxuICAuY3VzdG9taXplciAuY3otYmctY29sb3IgLmNvbCBzcGFuLnJvdW5kZWQtY2lyY2xlOmhvdmVyLFxuICAuY3VzdG9taXplciAuY3otdGwtYmctY29sb3IgLmNvbCBzcGFuLnJvdW5kZWQtY2lyY2xlOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuW2Rpcj1ydGxdIDpob3N0IDo6bmctZGVlcCAuY3VzdG9taXplciB7XG4gIGxlZnQ6IC00MDBweDtcbiAgcmlnaHQ6IGF1dG87XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1sZWZ0OiAwcHg7IH1cbiAgW2Rpcj1ydGxdIDpob3N0IDo6bmctZGVlcCAuY3VzdG9taXplci5vcGVuIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiBhdXRvOyB9XG4gIFtkaXI9cnRsXSA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbWl6ZXIgLmN1c3RvbWl6ZXItY2xvc2Uge1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgcmlnaHQ6IGF1dG87IH1cbiAgW2Rpcj1ydGxdIDpob3N0IDo6bmctZGVlcCAuY3VzdG9taXplciAuY3VzdG9taXplci10b2dnbGUge1xuICAgIHJpZ2h0OiAtNTRweDtcbiAgICBsZWZ0OiBhdXRvOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");




var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(elRef, renderer, layoutService, configService) {
        var _this = this;
        this.elRef = elRef;
        this.renderer = renderer;
        this.layoutService = layoutService;
        this.configService = configService;
        this.options = {
            direction: "ltr",
            bgColor: "black",
            transparentColor: "",
            bgImage: "assets/img/sidebar-bg/01.jpg",
            bgImageDisplay: true,
            compactMenu: false,
            sidebarSize: "sidebar-md",
            layout: "Light"
        };
        this.size = "sidebar-md";
        this.isOpen = true;
        this.config = {};
        this.isBgImageDisplay = true;
        this.selectedBgColor = "black";
        this.selectedBgImage = "assets/img/sidebar-bg/01.jpg";
        this.selectedTLBgColor = "";
        this.selectedTLBgImage = "";
        this.directionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(function (options) {
            if (options) {
                if (options.bgColor) {
                    _this.selectedBgColor = options.bgColor;
                    _this.selectedBgImage = options.bgImage;
                }
            }
        });
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
        this.isOpen = !this.config.layout.customizer.hidden;
        if (this.config.layout.sidebar.size) {
            this.options.sidebarSize = this.config.layout.sidebar.size;
            this.size = this.config.layout.sidebar.size;
        }
    };
    CustomizerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.dir) {
                _this.options.direction = _this.config.layout.dir;
            }
            if (_this.config.layout.variant) {
                _this.options.layout = _this.config.layout.variant;
            }
            if (_this.config.layout.sidebar.collapsed != undefined) {
                _this.options.compactMenu = _this.config.layout.sidebar.collapsed;
            }
            if (_this.config.layout.sidebar.backgroundColor &&
                _this.config.layout.sidebar.backgroundColor != "") {
                _this.options.bgColor = _this.config.layout.sidebar.backgroundColor;
                _this.selectedBgColor = _this.config.layout.sidebar.backgroundColor;
            }
            else {
                _this.options.bgColor = "black";
                _this.selectedBgColor = "black";
            }
            if (_this.config.layout.sidebar.backgroundImage != undefined) {
                _this.options.bgImageDisplay = _this.config.layout.sidebar.backgroundImage;
                _this.isBgImageDisplay = _this.config.layout.sidebar.backgroundImage;
            }
            if (_this.config.layout.sidebar.backgroundImageURL) {
                _this.options.bgImage = _this.config.layout.sidebar.backgroundImageURL;
                _this.selectedBgImage = _this.config.layout.sidebar.backgroundImageURL;
            }
            if (_this.options.layout === "Transparent") {
                _this.options.bgColor = "black";
                _this.selectedBgColor = "black";
                _this.options.bgImageDisplay = false;
                _this.selectedTLBgColor = "";
                _this.selectedBgImage = "";
                _this.options.bgImage = "";
                _this.isBgImageDisplay = false;
                if (_this.config.layout.sidebar.backgroundColor) {
                    if (_this.config.layout.sidebar.backgroundColor === "bg-glass-1") {
                        _this.selectedTLBgImage = "assets/img/gallery/bg-glass-1.jpg";
                        _this.options.transparentColor = "bg-glass-1";
                    }
                    else if (_this.config.layout.sidebar.backgroundColor === "bg-glass-2") {
                        _this.selectedTLBgImage = "assets/img/gallery/bg-glass-2.jpg";
                        _this.options.transparentColor = "bg-glass-2";
                    }
                    else if (_this.config.layout.sidebar.backgroundColor === "bg-glass-3") {
                        _this.selectedTLBgImage = "assets/img/gallery/bg-glass-3.jpg";
                        _this.options.transparentColor = "bg-glass-3";
                    }
                    else if (_this.config.layout.sidebar.backgroundColor === "bg-glass-4") {
                        _this.selectedTLBgImage = "assets/img/gallery/bg-glass-4.jpg";
                        _this.options.transparentColor = "bg-glass-4";
                    }
                    else {
                        _this.options.transparentColor = _this.config.layout.sidebar.backgroundColor;
                        _this.selectedTLBgColor = _this.config.layout.sidebar.backgroundColor;
                    }
                }
                else {
                    _this.options.bgColor = "black";
                    _this.selectedBgColor = "black";
                    _this.options.bgImageDisplay = false;
                    _this.selectedBgColor = "";
                    _this.selectedTLBgColor = "";
                    _this.selectedTLBgImage = "assets/img/gallery/bg-glass-1.jpg";
                    _this.options.transparentColor = "bg-glass-1";
                }
            }
        }, 0);
    };
    CustomizerComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    CustomizerComponent.prototype.sendOptions = function () {
        this.directionEvent.emit(this.options);
        this.layoutService.emitChange(this.options);
    };
    CustomizerComponent.prototype.bgImageDisplay = function (e) {
        if (e.target.checked) {
            this.options.bgImageDisplay = true;
            this.isBgImageDisplay = true;
        }
        else {
            this.options.bgImageDisplay = false;
            this.isBgImageDisplay = false;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.toggleCompactMenu = function (e) {
        if (e.target.checked) {
            this.options.compactMenu = true;
        }
        else {
            this.options.compactMenu = false;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.changeSidebarWidth = function (value) {
        this.options.sidebarSize = value;
        this.size = value;
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.onLightLayout = function () {
        this.options.layout = "Light";
        this.options.bgColor = "man-of-steel";
        this.selectedBgColor = "man-of-steel";
        if (this.isBgImageDisplay) {
            this.options.bgImageDisplay = true;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.onDarkLayout = function () {
        this.options.layout = "Dark";
        this.options.bgColor = "black";
        this.selectedBgColor = "black";
        if (this.isBgImageDisplay) {
            this.options.bgImageDisplay = true;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.onTransparentLayout = function () {
        this.options.layout = "Transparent";
        this.options.bgColor = "black";
        this.selectedBgColor = "black";
        this.options.bgImageDisplay = false;
        this.selectedBgColor = "";
        this.selectedTLBgColor = "";
        this.selectedTLBgImage = "assets/img/gallery/bg-glass-1.jpg";
        this.options.transparentColor = "bg-glass-1";
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.toggleCustomizer = function () {
        if (this.isOpen) {
            this.renderer.removeClass(this.customizer.nativeElement, "open");
            this.isOpen = false;
        }
        else {
            this.renderer.addClass(this.customizer.nativeElement, "open");
            this.isOpen = true;
        }
    };
    CustomizerComponent.prototype.closeCustomizer = function () {
        this.renderer.removeClass(this.customizer.nativeElement, "open");
        this.isOpen = false;
    };
    CustomizerComponent.prototype.changeSidebarBgColor = function (color) {
        this.selectedBgColor = color;
        this.selectedTLBgColor = "";
        this.options.bgColor = color;
        if (this.isBgImageDisplay) {
            this.options.bgImageDisplay = true;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.changeSidebarBgImage = function (url) {
        this.selectedBgImage = url;
        this.selectedTLBgImage = "";
        //emit event to FUll Layout
        this.options.bgImage = url;
        if (this.isBgImageDisplay) {
            this.options.bgImageDisplay = true;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.changeSidebarTLBgColor = function (color) {
        this.selectedBgColor = "";
        this.selectedTLBgColor = color;
        this.selectedTLBgImage = "";
        this.options.transparentColor = color;
        this.options.bgImageDisplay = false;
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.changeSidebarTLBgImage = function (url, color) {
        this.selectedTLBgColor = "";
        this.selectedTLBgImage = url;
        this.options.transparentColor = color;
        this.options.bgImageDisplay = false;
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("customizer", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CustomizerComponent.prototype, "customizer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomizerComponent.prototype, "directionEvent", void 0);
    CustomizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-customizer",
            template: __webpack_require__(/*! raw-loader!./customizer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/customizer/customizer.component.html"),
            styles: [__webpack_require__(/*! ./customizer.component.scss */ "./src/app/shared/customizer/customizer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebar.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/*! exports provided: SidebarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDirective", function() { return SidebarDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SidebarDirective = /** @class */ (function () {
    function SidebarDirective(el, renderer, router, cd) {
        this.el = el;
        this.renderer = renderer;
        this.router = router;
        this.cd = cd;
        this.navlinks = [];
        this.activeLinks = [];
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SidebarDirective.prototype.ngOnInit = function () {
        this.activeRoute = this.router.url;
        this.innerWidth = window.innerWidth;
    };
    SidebarDirective.prototype.ngAfterViewInit = function () {
        var element = this.el.nativeElement;
        this.$wrapper = this.renderer.parentNode(this.el.nativeElement); // document.getElementsByClassName("wrapper")[0];
        var $sidebar_img_container = this.el.nativeElement.querySelector('.sidebar-background');
        var $sidebar_img = element.getAttribute("data-image");
        if ($sidebar_img_container.length !== 0 && $sidebar_img !== undefined) {
            this.renderer.setAttribute($sidebar_img_container, 'style', 'background-image: url("' + $sidebar_img + '")');
        }
        if (!this.$wrapper.classList.contains("nav-collapsed")) {
            this.expandActive();
        }
        if (this.innerWidth < 992) {
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.toggleHideSidebar.emit(true);
        }
        this.cd.detectChanges();
    };
    SidebarDirective.prototype.onMouseOver = function (e) {
        if (this.$wrapper.classList.contains("nav-collapsed")) {
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.navlinks
                .filter(function (_) { return _.navCollapsedOpen === true; })
                .forEach(function (link) {
                link.open = true;
                link.navCollapsedOpen = false;
            });
        }
    };
    SidebarDirective.prototype.onMouseOut = function (e) {
        if (this.$wrapper.classList.contains("nav-collapsed")) {
            this.renderer.addClass(this.$wrapper, 'menu-collapsed');
            this.navlinks
                .filter(function (_) { return _.open === true; })
                .forEach(function (link) {
                link.open = false;
                link.navCollapsedOpen = true;
            });
        }
    };
    SidebarDirective.prototype.onClick = function (e) {
        if (e.target.parentElement.classList.contains("logo-text") ||
            e.target.parentElement.classList.contains("logo-img")) {
            this.activeLinks = [];
            this.activeRoute = this.router.url;
            this.expandActive();
            this.hideSidebar();
        }
        else if (e.target.parentElement.classList.contains("nav-close") ||
            e.target.classList.contains("nav-close")) {
            this.toggleHideSidebar.emit(true);
        }
    };
    SidebarDirective.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        if (event.target.innerWidth < 992) {
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.toggleHideSidebar.emit(true);
        }
        if (event.target.innerWidth > 992) {
            var toggleStatus = this.el.nativeElement;
            this.el.nativeElement.querySelector('.toggle-icon')
                .getAttribute("data-toggle");
            if (toggleStatus === "collapsed" &&
                this.$wrapper.classList.contains("nav-collapsed") &&
                this.$wrapper.classList.contains("menu-collapsed")) {
                this.$wrapper.classList.add("nav-collapsed");
                this.$wrapper.classList.add("menu-collapsed");
            }
            this.toggleHideSidebar.emit(false);
        }
    };
    // check outside click and close sidebar for smaller screen <992
    SidebarDirective.prototype.onOutsideClick = function (event) {
        if (this.innerWidth < 992) {
            var clickedComponent = event.target;
            var inside = false;
            do {
                if (clickedComponent === this.el.nativeElement) {
                    inside = true;
                }
                clickedComponent = clickedComponent.parentNode;
            } while (clickedComponent);
            if (!this.el.nativeElement.classList.contains("hide-sidebar") &&
                !inside &&
                !event.target.classList.contains("navbar-toggle")) {
                this.toggleHideSidebar.emit(true);
            }
        }
    };
    SidebarDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    SidebarDirective.prototype.getLinks = function () {
        return this.navlinks;
    };
    SidebarDirective.prototype.hideSidebar = function () {
        if (this.innerWidth < 992) {
            this.toggleHideSidebar.emit(true);
        }
    };
    SidebarDirective.prototype.expandActive = function () {
        var _this = this;
        this.navlinks
            .filter(function (_) { return _.routePath === _this.activeRoute; })
            .forEach(function (link) {
            link.isShown = true;
            if (link.level.toString().trim() === "3") {
                _this.navlinks
                    .filter(function (_) { return _.level.toString().trim() === "2" && _.title === link.parent; })
                    .forEach(function (parentLink) {
                    parentLink.open = true;
                    _this.activeLinks.push(parentLink.title);
                    _this.navlinks
                        .filter(function (_) {
                        return _.level.toString().trim() === "1" &&
                            _.title === parentLink.parent;
                    })
                        .forEach(function (superParentLink) {
                        superParentLink.open = true;
                        _this.activeLinks.push(superParentLink.title);
                        superParentLink.toggleEmit.emit(_this.activeLinks);
                    });
                });
            }
            else if (link.level.toString().trim() === "2") {
                _this.navlinks
                    .filter(function (_) { return _.level.toString().trim() === "1" && _.title === link.parent; })
                    .forEach(function (parentLink) {
                    parentLink.open = true;
                    _this.activeLinks.push(parentLink.title);
                    parentLink.toggleEmit.emit(_this.activeLinks);
                });
            }
        });
    };
    SidebarDirective.prototype.toggleActiveList = function () {
        var _this = this;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === "3" && _.routePath !== _this.activeRoute;
        })
            .forEach(function (link) {
            link.active = false;
        });
    };
    SidebarDirective.prototype.setIsShown = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = true;
            link.isHidden = false;
        });
    };
    SidebarDirective.prototype.setIsHidden = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = false;
            link.isHidden = true;
        });
    };
    SidebarDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarDirective.prototype, "toggleHideSidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseenter", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onMouseOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseleave", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onMouseOut", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onResize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onOutsideClick", null);
    SidebarDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebar]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SidebarDirective);
    return SidebarDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebaranchortoggle.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/directives/sidebaranchortoggle.directive.ts ***!
  \********************************************************************/
/*! exports provided: SidebarAnchorToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarAnchorToggleDirective", function() { return SidebarAnchorToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarlink.directive */ "./src/app/shared/directives/sidebarlink.directive.ts");



var SidebarAnchorToggleDirective = /** @class */ (function () {
    function SidebarAnchorToggleDirective(navlink) {
        this.navlink = navlink;
    }
    SidebarAnchorToggleDirective.prototype.onClick = function () {
        this.navlink.toggle();
    };
    SidebarAnchorToggleDirective.ctorParameters = function () { return [
        { type: _sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarAnchorToggleDirective.prototype, "onClick", null);
    SidebarAnchorToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[appSidebarAnchorToggle]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"]])
    ], SidebarAnchorToggleDirective);
    return SidebarAnchorToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebarlink.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/sidebarlink.directive.ts ***!
  \************************************************************/
/*! exports provided: SidebarLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLinkDirective", function() { return SidebarLinkDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarlist.directive */ "./src/app/shared/directives/sidebarlist.directive.ts");
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");




var SidebarLinkDirective = /** @class */ (function () {
    function SidebarLinkDirective(sidebarList, sidebar, el) {
        this.el = el;
        this.toggleEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sidebarList = sidebarList;
        this.sidebar = sidebar;
    }
    Object.defineProperty(SidebarLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "navCollapsedOpen", {
        get: function () {
            return this._navCollapsedOpen;
        },
        set: function (value) {
            this._navCollapsedOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "isHidden", {
        get: function () {
            return this._isHidden;
        },
        set: function (value) {
            this._isHidden = value;
        },
        enumerable: true,
        configurable: true
    });
    SidebarLinkDirective.prototype.ngOnInit = function () {
        this.sidebar.addLink(this);
    };
    SidebarLinkDirective.prototype.toggle = function () {
        this.sidebarList.activeLinks = [];
        this.sidebarList.setList(this.sidebar.getLinks());
        var classList = this.el.nativeElement.classList;
        if (this.level.toString().trim() === "3") {
            this.active = true;
            this.sidebarList.toggleActiveList(this);
            this.sidebar.hideSidebar();
        }
        if (this.level.toString().trim() === "1" && !classList.contains("has-sub")) {
            this.sidebarList.collapseOtherLinks(this);
        }
        if (classList.contains("has-sub") && classList.contains("open")) {
            this.sidebarList.collapse(this);
        }
        else {
            if (classList.contains("has-sub")) {
                this.sidebarList.expand(this);
            }
        }
    };
    SidebarLinkDirective.ctorParameters = function () { return [
        { type: _sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"],] }] },
        { type: _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SidebarLinkDirective.prototype, "level", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "classes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "parent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "routePath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarLinkDirective.prototype, "toggleEmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.open"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "open", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.nav-collapsed-open"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "navCollapsedOpen", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.active"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "active", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.is-shown"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "isShown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.is-hidden"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "isHidden", null);
    SidebarLinkDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarlink]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"],
            _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SidebarLinkDirective);
    return SidebarLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebarlist.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/sidebarlist.directive.ts ***!
  \************************************************************/
/*! exports provided: SidebarListDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarListDirective", function() { return SidebarListDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarListDirective = /** @class */ (function () {
    function SidebarListDirective() {
        this.navlinks = [];
        this.activeLinks = [];
    }
    SidebarListDirective.prototype.setList = function (list) {
        this.navlinks = list;
    };
    SidebarListDirective.prototype.collapse = function (link) {
        link.open = false;
        this.setIsHidden(link);
        if (link.level.toString().trim() === "2") {
            this.activeLinks.push(this.navlinks
                .filter(function (_) { return _.level.toString().trim() === "1" && _.open === true; })[0].title);
        }
        link.toggleEmit.emit(this.activeLinks);
    };
    SidebarListDirective.prototype.expand = function (link) {
        link.open = true;
        this.activeLinks.push(link.title);
        this.collapseOtherLinks(link);
        this.setIsShown(link);
        link.toggleEmit.emit(this.activeLinks);
    };
    SidebarListDirective.prototype.toggleActiveList = function (openLink) {
        this.navlinks
            .filter(function (_) { return _.level.toString().trim() === "3"; })
            .forEach(function (link) {
            if (link !== openLink) {
                link.active = false;
            }
        });
    };
    SidebarListDirective.prototype.collapseOtherLinks = function (openLink) {
        var _this = this;
        if (openLink.level.toString().trim() === "1") {
            this.navlinks
                .filter(function (_) {
                return (_.level.toString().trim() === openLink.level.toString().trim() ||
                    _.level.toString().trim() === "2") &&
                    _.open === true;
            })
                .forEach(function (link) {
                if (link !== openLink) {
                    link.open = false;
                    _this.setIsHidden(link);
                }
            });
        }
        else if (openLink.level.toString().trim() === "2") {
            this.activeLinks.push(this.navlinks
                .filter(function (_) { return _.level.toString().trim() === "1" && _.open === true; })[0].title);
            this.navlinks
                .filter(function (_) {
                return _.level.toString().trim() === openLink.level.toString().trim() &&
                    _.parent === openLink.parent &&
                    _.open === true;
            })
                .forEach(function (link) {
                if (link !== openLink) {
                    link.open = false;
                    _this.setIsHidden(link);
                }
            });
        }
    };
    SidebarListDirective.prototype.setIsShown = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = true;
            link.isHidden = false;
        });
    };
    SidebarListDirective.prototype.setIsHidden = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = false;
            link.isHidden = true;
        });
    };
    SidebarListDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarList]" })
    ], SidebarListDirective);
    return SidebarListDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebartoggle.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/sidebartoggle.directive.ts ***!
  \**************************************************************/
/*! exports provided: SidebarToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return SidebarToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this._dataToggle = "expanded";
        this._toggleRight = true;
        this._toggleLeft = false;
        this.fireRefreshEventOnWindow = function () {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("resize", true, false);
            window.dispatchEvent(evt);
        };
    }
    Object.defineProperty(SidebarToggleDirective.prototype, "dataToggle", {
        get: function () {
            return this._dataToggle;
        },
        set: function (value) {
            this._dataToggle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarToggleDirective.prototype, "toggleRight", {
        get: function () {
            return this._toggleRight;
        },
        set: function (value) {
            this._toggleRight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarToggleDirective.prototype, "toggleLeft", {
        get: function () {
            return this._toggleLeft;
        },
        set: function (value) {
            this._toggleLeft = value;
        },
        enumerable: true,
        configurable: true
    });
    SidebarToggleDirective.prototype.ngAfterViewInit = function () {
        this.$wrapper = document.getElementsByClassName("wrapper")[0];
        this.compact_menu_checkbox = this.$wrapper.querySelector('.cz-compact-menu');
    };
    SidebarToggleDirective.prototype.onClick = function (e) {
        var _this = this;
        if (this.dataToggle === "expanded") {
            this.dataToggle = "collapsed";
            this.renderer.addClass(this.$wrapper, 'nav-collapsed');
            if (this.compact_menu_checkbox) {
                this.compact_menu_checkbox.checked = true;
            }
        }
        else {
            this.dataToggle = "expanded";
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            if (this.compact_menu_checkbox) {
                this.compact_menu_checkbox.checked = false;
            }
        }
        this.toggleLeft = !this.toggleLeft;
        this.toggleRight = !this.toggleRight;
        setTimeout(function () {
            _this.fireRefreshEventOnWindow();
        }, 300);
    };
    SidebarToggleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("attr.data-toggle"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], SidebarToggleDirective.prototype, "dataToggle", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.ft-toggle-right"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarToggleDirective.prototype, "toggleRight", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.ft-toggle-left"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarToggleDirective.prototype, "toggleLeft", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "onClick", null);
    SidebarToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarToggle]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/toggle-fullscreen.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_2__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_2__["toggle"]();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appToggleFullscreen]'
        })
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        //Variables
        this.currentDate = new Date();
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, route, translate, layoutService, configService, loginService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.layoutService = layoutService;
        this.configService = configService;
        this.loginService = loginService;
        this.currentLang = "en";
        this.toggleClass = "ft-maximize";
        this.placement = "bottom-right";
        this.isCollapsed = true;
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.config = {};
        this.users = [];
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : "en");
        this.layoutSub = layoutService.changeEmitted$.subscribe(function (direction) {
            var dir = direction.direction;
            if (dir === "rtl") {
                _this.placement = "bottom-left";
            }
            else if (dir === "ltr") {
                _this.placement = "bottom-right";
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.username = this.currentUser.userName;
    };
    NavbarComponent.prototype.logout = function () {
        var res = this.loginService.logout();
        this.router.navigate(['/login'], { relativeTo: this.route.parent });
        //alert('logout');
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.config.layout.dir) {
            setTimeout(function () {
                var dir = _this.config.layout.dir;
                if (dir === "rtl") {
                    _this.placement = "bottom-left";
                }
                else if (dir === "ltr") {
                    _this.placement = "bottom-right";
                }
            }, 0);
        }
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    NavbarComponent.prototype.ChangeLanguage = function (language) {
        this.translate.use(language);
    };
    NavbarComponent.prototype.ToggleClass = function () {
        if (this.toggleClass === "ft-maximize") {
            this.toggleClass = "ft-minimize";
        }
        else {
            this.toggleClass = "ft-maximize";
        }
    };
    NavbarComponent.prototype.toggleNotificationSidebar = function () {
        this.layoutService.emitNotiSidebarChange(true);
    };
    NavbarComponent.prototype.toggleSidebar = function () {
        var appSidebar = document.getElementsByClassName("app-sidebar")[0];
        if (appSidebar.classList.contains("hide-sidebar")) {
            this.toggleHideSidebar.emit(false);
        }
        else {
            this.toggleHideSidebar.emit(true);
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
        { type: _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarComponent.prototype, "toggleHideSidebar", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"], _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notification-sidebar {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar.open {\n    right: 0; }\n  #notification-sidebar .notification-sidebar-content {\n    position: relative;\n    height: 100%;\n    padding: 10px; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:before {\n      border: none; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:after {\n      border: none; }\n  #notification-sidebar .notification-sidebar-content #settings .switch {\n      border: none; }\n  #notification-sidebar a.notification-sidebar-toggle {\n    background: #FFF;\n    color: theme-color(\"primary\");\n    display: block;\n    box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar a.notification-sidebar-close {\n    color: #000; }\n  #notification-sidebar .notification-sidebar-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 7px;\n    width: auto;\n    z-index: 10; }\n  #notification-sidebar .notification-sidebar-toggle {\n    position: absolute;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    left: -54px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar {\n  left: -400px;\n  right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar.open {\n    left: 0;\n    right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar .notification-sidebar-close {\n    left: 10px;\n    right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar .notification-sidebar-toggle {\n    right: -54px;\n    left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25vdGlmaWNhdGlvbi1zaWRlYmFyL0M6XFxVc2Vyc1xcYXN1c1xcRGVza3RvcFxccHJvamVjdHNNYW5hZ2VtZW50L3NyY1xcYXBwXFxzaGFyZWRcXG5vdGlmaWNhdGlvbi1zaWRlYmFyXFxub3RpZmljYXRpb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL25vdGlmaWNhdGlvbi1zaWRlYmFyL25vdGlmaWNhdGlvbi1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBWTtFQUNULGFBQWE7RUFDaEIsVUFBVTtFQUNQLHNCQUFzQjtFQUN6QixhQUFhO0VBQ1YsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsYUFBYTtFQUNiLDBEQUEwRDtFQUMxRCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLDBDQUEwQztFQUMxQyxzQ0FBc0MsRUFBQTtFQWIxQztJQWdCRSxRQUFRLEVBQUE7RUFoQlY7SUFzQkUsa0JBQWtCO0lBQ2YsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQXhCbEI7TUE4Qk0sWUFBVyxFQUFBO0VBOUJqQjtNQWlDTSxZQUFXLEVBQUE7RUFqQ2pCO01BeUNJLFlBQVksRUFBQTtFQXpDaEI7SUFnREUsZ0JBQWdCO0lBQ2hCLDZCQUE0QjtJQUM1QixjQUFjO0lBQ1gsMkNBQTJDLEVBQUE7RUFuRGhEO0lBc0RLLFdBQVcsRUFBQTtFQXREaEI7SUF5REUsa0JBQWtCO0lBQ2YsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVcsRUFBQTtFQTlEaEI7SUFpRUUsa0JBQWtCO0lBQ2YsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZSxFQUFBO0VDdEJwQjtFRGdDRSxZQUFZO0VBQ1osV0FBVyxFQUFBO0VDOUJYO0lEZ0NDLE9BQU87SUFDUCxXQUFXLEVBQUE7RUM5Qlo7SURpQ0MsVUFBVTtJQUNWLFdBQVcsRUFBQTtFQy9CWjtJRGtDQyxZQUFZO0lBQ1osVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL25vdGlmaWNhdGlvbi1zaWRlYmFyL25vdGlmaWNhdGlvbi1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25vdGlmaWNhdGlvbi1zaWRlYmFye1xyXG5cdHdpZHRoOiA0MDBweDtcclxuICAgIHJpZ2h0OiAtNDAwcHg7XHJcblx0cGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcblx0ei1pbmRleDogMTA1MTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0cmFuc2l0aW9uOiByaWdodCAwLjRzIGN1YmljLWJlemllcigwLjA1LCAwLjc0LCAwLjIsIDAuOTkpO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG5cdCYub3BlbntcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdH1cclxuXHJcblx0XHJcblxyXG5cdC5ub3RpZmljYXRpb24tc2lkZWJhci1jb250ZW50e1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHRoZWlnaHQ6IDEwMCU7XHJcbiAgICBcdHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgXHQjdGltZWxpbmV7XHJcbiAgICBcdFx0Ji50aW1lbGluZS1sZWZ0e1xyXG4gICAgXHRcdFx0LnRpbWVsaW5lLWl0ZW17XHJcbiAgICBcdFx0XHRcdCY6YmVmb3Jle1xyXG5cdFx0XHRcdFx0XHRib3JkZXI6bm9uZTtcclxuICAgIFx0XHRcdFx0fVxyXG4gICAgXHRcdFx0XHQmOmFmdGVye1xyXG5cdFx0XHRcdFx0XHRib3JkZXI6bm9uZTtcclxuICAgIFx0XHRcdFx0fVxyXG4gICAgXHRcdFx0fVxyXG4gICAgXHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0I3NldHRpbmdze1xyXG5cdFx0XHQuc3dpdGNoe1xyXG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGEubm90aWZpY2F0aW9uLXNpZGViYXItdG9nZ2xle1xyXG5cdFx0YmFja2dyb3VuZDogI0ZGRjtcclxuXHRcdGNvbG9yOnRoZW1lLWNvbG9yKCdwcmltYXJ5Jyk7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuICAgIFx0Ym94LXNoYWRvdzogLTNweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHR9XHJcblx0YS5ub3RpZmljYXRpb24tc2lkZWJhci1jbG9zZSB7XHJcbiAgICBcdGNvbG9yOiAjMDAwO1xyXG5cdH1cclxuXHQubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2V7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgIHJpZ2h0OiAxMHB4O1xyXG5cdCAgICB0b3A6IDEwcHg7XHJcblx0ICAgIHBhZGRpbmc6IDdweDtcclxuXHQgICAgd2lkdGg6IGF1dG87XHJcblx0ICAgIHotaW5kZXg6IDEwO1xyXG5cdH1cclxuXHQubm90aWZpY2F0aW9uLXNpZGViYXItdG9nZ2xle1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdCAgICB0b3A6IDM1JTtcclxuXHQgICAgd2lkdGg6IDU0cHg7XHJcblx0ICAgIGhlaWdodDogNTBweDtcclxuXHQgICAgbGVmdDogLTU0cHg7XHJcblx0ICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHQgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcblx0ICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHR9XHJcblx0XHJcblxyXG5cdFxyXG5cclxufVxyXG5cclxuW2Rpcj1cInJ0bFwiXSA6aG9zdCA6Om5nLWRlZXB7XHJcblx0I25vdGlmaWNhdGlvbi1zaWRlYmFye1x0XHJcblx0XHRsZWZ0OiAtNDAwcHg7XHRcclxuXHRcdHJpZ2h0OiBhdXRvO1x0ICAgXHJcblx0XHQmLm9wZW57XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdHJpZ2h0OiBhdXRvO1xyXG5cdFx0fVxyXG5cdFx0Lm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3Nle1xyXG5cdFx0XHRsZWZ0OiAxMHB4O1xyXG5cdFx0XHRyaWdodDogYXV0bztcclxuXHRcdH1cclxuXHRcdC5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGV7XHRcclxuXHRcdFx0cmlnaHQ6IC01NHB4O1xyXG5cdFx0XHRsZWZ0OiBhdXRvO1xyXG5cdFx0fVx0XHJcblx0fVxyXG59IiwiI25vdGlmaWNhdGlvbi1zaWRlYmFyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICByaWdodDogLTQwMHB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICB6LWluZGV4OiAxMDUxO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiByaWdodCAwLjRzIGN1YmljLWJlemllcigwLjA1LCAwLjc0LCAwLjIsIDAuOTkpO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cbiAgI25vdGlmaWNhdGlvbi1zaWRlYmFyLm9wZW4ge1xuICAgIHJpZ2h0OiAwOyB9XG4gICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4OyB9XG4gICAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIC5ub3RpZmljYXRpb24tc2lkZWJhci1jb250ZW50ICN0aW1lbGluZS50aW1lbGluZS1sZWZ0IC50aW1lbGluZS1pdGVtOmJlZm9yZSB7XG4gICAgICBib3JkZXI6IG5vbmU7IH1cbiAgICAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNvbnRlbnQgI3RpbWVsaW5lLnRpbWVsaW5lLWxlZnQgLnRpbWVsaW5lLWl0ZW06YWZ0ZXIge1xuICAgICAgYm9yZGVyOiBub25lOyB9XG4gICAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIC5ub3RpZmljYXRpb24tc2lkZWJhci1jb250ZW50ICNzZXR0aW5ncyAuc3dpdGNoIHtcbiAgICAgIGJvcmRlcjogbm9uZTsgfVxuICAjbm90aWZpY2F0aW9uLXNpZGViYXIgYS5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGUge1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgY29sb3I6IHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG4gICNub3RpZmljYXRpb24tc2lkZWJhciBhLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3NlIHtcbiAgICBjb2xvcjogIzAwMDsgfVxuICAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB6LWluZGV4OiAxMDsgfVxuICAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzUlO1xuICAgIHdpZHRoOiA1NHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBsZWZ0OiAtNTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbltkaXI9XCJydGxcIl0gOmhvc3QgOjpuZy1kZWVwICNub3RpZmljYXRpb24tc2lkZWJhciB7XG4gIGxlZnQ6IC00MDBweDtcbiAgcmlnaHQ6IGF1dG87IH1cbiAgW2Rpcj1cInJ0bFwiXSA6aG9zdCA6Om5nLWRlZXAgI25vdGlmaWNhdGlvbi1zaWRlYmFyLm9wZW4ge1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IGF1dG87IH1cbiAgW2Rpcj1cInJ0bFwiXSA6aG9zdCA6Om5nLWRlZXAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIC5ub3RpZmljYXRpb24tc2lkZWJhci1jbG9zZSB7XG4gICAgbGVmdDogMTBweDtcbiAgICByaWdodDogYXV0bzsgfVxuICBbZGlyPVwicnRsXCJdIDpob3N0IDo6bmctZGVlcCAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLXRvZ2dsZSB7XG4gICAgcmlnaHQ6IC01NHB4O1xuICAgIGxlZnQ6IGF1dG87IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NotificationSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSidebarComponent", function() { return NotificationSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");



var NotificationSidebarComponent = /** @class */ (function () {
    function NotificationSidebarComponent(elRef, renderer, layoutService) {
        var _this = this;
        this.elRef = elRef;
        this.renderer = renderer;
        this.layoutService = layoutService;
        this.isOpen = false;
        this.layoutSub = layoutService.notiSidebarChangeEmitted$.subscribe(function (value) {
            if (_this.isOpen) {
                _this.renderer.removeClass(_this.sidebar.nativeElement, 'open');
                _this.isOpen = false;
            }
            else {
                _this.renderer.addClass(_this.sidebar.nativeElement, 'open');
                _this.isOpen = true;
            }
        });
    }
    NotificationSidebarComponent.prototype.ngOnInit = function () {
    };
    NotificationSidebarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    NotificationSidebarComponent.prototype.onClose = function () {
        this.renderer.removeClass(this.sidebar.nativeElement, 'open');
        this.isOpen = false;
    };
    NotificationSidebarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebar', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NotificationSidebarComponent.prototype, "sidebar", void 0);
    NotificationSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification-sidebar',
            template: __webpack_require__(/*! raw-loader!./notification-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/notification-sidebar/notification-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./notification-sidebar.component.scss */ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])
    ], NotificationSidebarComponent);
    return NotificationSidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/routes/content-layout.routes.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/routes/content-layout.routes.ts ***!
  \********************************************************/
/*! exports provided: CONTENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function() { return CONTENT_ROUTES; });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var CONTENT_ROUTES = [
    {
        path: 'login',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../login/login.module */ "./src/app/login/login.module.ts")).then(function (m) { return m.LoginModule; }); }
    }
];


/***/ }),

/***/ "./src/app/shared/routes/full-layout.routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/*! exports provided: Full_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Full_ROUTES", function() { return Full_ROUTES; });
//Route for content layout with sidebar, navbar and footer.
var Full_ROUTES = [
    {
        path: 'Accueil',
        loadChildren: function () { return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~pages-full-pages-full-pages-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ../../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); }
    },
    /*{
      path: 'calendar',
      loadChildren: () => import('../../calendar/calendar.module').then(m => m.CalendarsModule)
    },*/
    {
        path: 'charts',
        loadChildren: function () { return Promise.all(/*! import() | charts-charts-module */[__webpack_require__.e("default~charts-charts-module~client-client-module~project-project-module~user-user-module"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~pages-full-pages-full-pages-module"), __webpack_require__.e("default~cards-cards-module~charts-charts-module"), __webpack_require__.e("default~charts-charts-module~chat-chat-module"), __webpack_require__.e("charts-charts-module")]).then(__webpack_require__.bind(null, /*! ../../charts/charts.module */ "./src/app/charts/charts.module.ts")).then(function (m) { return m.ChartsNg2Module; }); }
    },
    {
        path: 'project',
        loadChildren: function () { return Promise.all(/*! import() | project-project-module */[__webpack_require__.e("default~charts-charts-module~client-client-module~project-project-module~user-user-module"), __webpack_require__.e("default~forms-forms-module~project-project-module~user-user-module"), __webpack_require__.e("default~client-client-module~project-project-module~user-user-module"), __webpack_require__.e("common"), __webpack_require__.e("project-project-module")]).then(__webpack_require__.bind(null, /*! ../../project/project.module */ "./src/app/project/project.module.ts")).then(function (m) { return m.ProjectModule; }); }
    },
    {
        path: 'timesheet',
        loadChildren: function () { return Promise.all(/*! import() | timesheet-timesheet-module */[__webpack_require__.e("common"), __webpack_require__.e("timesheet-timesheet-module")]).then(__webpack_require__.bind(null, /*! ../../timesheet/timesheet.module */ "./src/app/timesheet/timesheet.module.ts")).then(function (m) { return m.TimesheetModule; }); }
    },
    {
        path: 'clients',
        loadChildren: function () { return Promise.all(/*! import() | client-client-module */[__webpack_require__.e("default~charts-charts-module~client-client-module~project-project-module~user-user-module"), __webpack_require__.e("default~client-client-module~project-project-module~user-user-module"), __webpack_require__.e("common"), __webpack_require__.e("client-client-module")]).then(__webpack_require__.bind(null, /*! ../../client/client.module */ "./src/app/client/client.module.ts")).then(function (m) { return m.ClientModule; }); }
    },
    {
        path: 'forms',
        loadChildren: function () { return Promise.all(/*! import() | forms-forms-module */[__webpack_require__.e("default~forms-forms-module~project-project-module~user-user-module"), __webpack_require__.e("forms-forms-module")]).then(__webpack_require__.bind(null, /*! ../../forms/forms.module */ "./src/app/forms/forms.module.ts")).then(function (m) { return m.FormModule; }); }
    },
    {
        path: 'user',
        loadChildren: function () { return Promise.all(/*! import() | user-user-module */[__webpack_require__.e("default~charts-charts-module~client-client-module~project-project-module~user-user-module"), __webpack_require__.e("default~forms-forms-module~project-project-module~user-user-module"), __webpack_require__.e("default~client-client-module~project-project-module~user-user-module"), __webpack_require__.e("common"), __webpack_require__.e("user-user-module")]).then(__webpack_require__.bind(null, /*! ../../user/user.module */ "./src/app/user/user.module.ts")).then(function (m) { return m.UserModule; }); }
    },
    {
        path: 'calendar',
        loadChildren: function () { return __webpack_require__.e(/*! import() | calendar-calendar-module */ "calendar-calendar-module").then(__webpack_require__.bind(null, /*! ../../calendar/calendar.module */ "./src/app/calendar/calendar.module.ts")).then(function (m) { return m.CalendarsModule; }); }
    },
    /* {
       path: '#',
       loadChildren: () => import('../../login/login.module').then(m => m.LoginModule)
     },
    /* {
       path: 'maps',
       loadChildren: () => import('../../maps/maps.module').then(m => m.MapsModule)
     },
     {
       path: 'tables',
       loadChildren: () => import('../../tables/tables.module').then(m => m.TablesModule)
     },
     {
       path: 'datatables',
       loadChildren: () => import('../../data-tables/data-tables.module').then(m => m.DataTablesModule)
     },
    /* {
       path: 'uikit',
       loadChildren: () => import('../../ui-kit/ui-kit.module').then(m => m.UIKitModule)
     },*/
    {
        path: 'components',
        loadChildren: function () { return __webpack_require__.e(/*! import() | components-ui-components-module */ "components-ui-components-module").then(__webpack_require__.bind(null, /*! ../../components/ui-components.module */ "./src/app/components/ui-components.module.ts")).then(function (m) { return m.UIComponentsModule; }); }
    },
    {
        path: 'pages',
        loadChildren: function () { return Promise.all(/*! import() | pages-full-pages-full-pages-module */[__webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~pages-full-pages-full-pages-module"), __webpack_require__.e("pages-full-pages-full-pages-module")]).then(__webpack_require__.bind(null, /*! ../../pages/full-pages/full-pages.module */ "./src/app/pages/full-pages/full-pages.module.ts")).then(function (m) { return m.FullPagesModule; }); }
    },
    {
        path: 'cards',
        loadChildren: function () { return Promise.all(/*! import() | cards-cards-module */[__webpack_require__.e("default~cards-cards-module~charts-charts-module"), __webpack_require__.e("cards-cards-module")]).then(__webpack_require__.bind(null, /*! ../../cards/cards.module */ "./src/app/cards/cards.module.ts")).then(function (m) { return m.CardsModule; }); }
    },
    /*{
      path: 'colorpalettes',
      loadChildren: () => import('../../color-palette/color-palette.module').then(m => m.ColorPaletteModule)
    },*/
    {
        path: 'chat',
        loadChildren: function () { return Promise.all(/*! import() | chat-chat-module */[__webpack_require__.e("default~charts-charts-module~chat-chat-module"), __webpack_require__.e("default~chat-chat-module~chat-ngrx-chat-ngrx-module"), __webpack_require__.e("chat-chat-module")]).then(__webpack_require__.bind(null, /*! ../../chat/chat.module */ "./src/app/chat/chat.module.ts")).then(function (m) { return m.ChatModule; }); }
    },
    {
        path: 'chat-ngrx',
        loadChildren: function () { return Promise.all(/*! import() | chat-ngrx-chat-ngrx-module */[__webpack_require__.e("default~chat-chat-module~chat-ngrx-chat-ngrx-module"), __webpack_require__.e("chat-ngrx-chat-ngrx-module")]).then(__webpack_require__.bind(null, /*! ../../chat-ngrx/chat-ngrx.module */ "./src/app/chat-ngrx/chat-ngrx.module.ts")).then(function (m) { return m.ChatNGRXModule; }); }
    },
    /* {
       path: 'inbox',
       loadChildren: () => import('../../inbox/inbox.module').then(m => m.InboxModule)
     },*/
    {
        path: 'taskboard',
        loadChildren: function () { return __webpack_require__.e(/*! import() | taskboard-taskboard-module */ "taskboard-taskboard-module").then(__webpack_require__.bind(null, /*! ../../taskboard/taskboard.module */ "./src/app/taskboard/taskboard.module.ts")).then(function (m) { return m.TaskboardModule; }); }
    },
    {
        path: 'taskboard-ngrx',
        loadChildren: function () { return __webpack_require__.e(/*! import() | taskboard-ngrx-taskboard-ngrx-module */ "taskboard-ngrx-taskboard-ngrx-module").then(__webpack_require__.bind(null, /*! ../../taskboard-ngrx/taskboard-ngrx.module */ "./src/app/taskboard-ngrx/taskboard-ngrx.module.ts")).then(function (m) { return m.TaskboardNGRXModule; }); }
    },
];


/***/ }),

/***/ "./src/app/shared/services/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.setConfigValue();
    }
    ConfigService.prototype.setConfigValue = function () {
        this.templateConf = {
            layout: {
                variant: "Light",
                dir: "ltr",
                customizer: {
                    hidden: false //options: true, false
                },
                sidebar: {
                    collapsed: false,
                    size: "sidebar-md",
                    backgroundColor: "man-of-steel",
                    /* If you want transparent layout add any of the following mentioned classes to backgroundColor of sidebar option :
                      bg-glass-1, bg-glass-2, bg-glass-3, bg-glass-4, bg-hibiscus, bg-purple-pizzaz, bg-blue-lagoon, bg-electric-viloet, bg-protage, bg-tundora
                    */
                    backgroundImage: true,
                    backgroundImageURL: "assets/img/sidebar-bg/01.jpg"
                }
            }
        };
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/shared/services/layout.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.changeEmitted$ = this.emitChangeSource.asObservable();
        //Customizer
        this.emitCustomizerSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.customizerChangeEmitted$ = this.emitCustomizerSource.asObservable();
        //customizer - compact menu
        this.emitCustomizerCMSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.customizerCMChangeEmitted$ = this.emitCustomizerCMSource.asObservable();
        //customizer - compact menu
        this.emitNotiSidebarSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.notiSidebarChangeEmitted$ = this.emitNotiSidebarSource.asObservable();
    }
    LayoutService.prototype.emitChange = function (change) {
        this.emitChangeSource.next(change);
    };
    LayoutService.prototype.emitCustomizerChange = function (change) {
        this.emitCustomizerSource.next(change);
    };
    LayoutService.prototype.emitCustomizerCMChange = function (change) {
        this.emitCustomizerCMSource.next(change);
    };
    LayoutService.prototype.emitNotiSidebarChange = function (change) {
        this.emitNotiSidebarSource.next(change);
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customizer/customizer.component */ "./src/app/shared/customizer/customizer.component.ts");
/* harmony import */ var _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification-sidebar/notification-sidebar.component */ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts");
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ "./src/app/shared/directives/toggle-fullscreen.directive.ts");
/* harmony import */ var _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
/* harmony import */ var _directives_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/sidebarlink.directive */ "./src/app/shared/directives/sidebarlink.directive.ts");
/* harmony import */ var _directives_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/sidebarlist.directive */ "./src/app/shared/directives/sidebarlist.directive.ts");
/* harmony import */ var _directives_sidebaranchortoggle_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/sidebaranchortoggle.directive */ "./src/app/shared/directives/sidebaranchortoggle.directive.ts");
/* harmony import */ var _directives_sidebartoggle_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/sidebartoggle.directive */ "./src/app/shared/directives/sidebartoggle.directive.ts");







//COMPONENTS





//DIRECTIVES






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__["CustomizerComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__["ToggleFullscreenDirective"],
                _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__["SidebarDirective"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__["CustomizerComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__["ToggleFullscreenDirective"],
                _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__["SidebarDirective"],
                _directives_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_14__["SidebarLinkDirective"],
                _directives_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_15__["SidebarListDirective"],
                _directives_sidebaranchortoggle_directive__WEBPACK_IMPORTED_MODULE_16__["SidebarAnchorToggleDirective"],
                _directives_sidebartoggle_directive__WEBPACK_IMPORTED_MODULE_17__["SidebarToggleDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar-routes.config.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar-routes.config.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
//Sidebar menu Routes and data
var ROUTES = [
    {
        path: '/pages/verticaltimeline', title: 'Accueil', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
        //{ path: '/dashboard/dashboard1', title: 'Dashboard1', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        //{ path: '/dashboard/dashboard2', title: 'Dashboard2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        //]
    },
    //{ path: '/colorpalettes', title: 'Color Palette', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    // { path: '/inbox', title: 'Inbox', icon: 'ft-mail', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/chat', title: 'Chat', icon: 'ft-message-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    // { path: '/chat-ngrx', title: 'Chat NgRx', icon: 'ft-message-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/taskboard', title: 'Task Board', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/project', title: 'Project Management', icon: 'ft-book', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/timesheet', title: 'Timesheet', icon: 'ft-clock', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/calendar', title: 'Calendar', icon: 'ft-calendar', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/clients', title: 'Clients', icon: 'ft-users', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/user', title: 'Users', icon: 'ft-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-routes.config */ "./src/app/shared/sidebar/sidebar-routes.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _animations_custom_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations/custom-animations */ "./src/app/shared/animations/custom-animations.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");








var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(elementRef, renderer, router, route, translate, configService, layoutService) {
        var _this = this;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.configService = configService;
        this.layoutService = layoutService;
        this.activeTitles = [];
        this.nav_collapsed_open = false;
        this.logoUrl = 'assets/img/logo_adobespark.png';
        this.config = {};
        if (this.depth === undefined) {
            this.depth = 0;
            this.expanded = true;
        }
        this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(function (options) {
            if (options) {
                if (options.bgColor) {
                    if (options.bgColor === 'white') {
                        _this.logoUrl = 'assets/img/logo-dark.png';
                    }
                    else {
                        _this.logoUrl = 'assets/img/logo.png';
                    }
                }
                if (options.compactMenu === true) {
                    _this.expanded = false;
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = true;
                }
                else if (options.compactMenu === false) {
                    _this.expanded = true;
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = false;
                }
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
        this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__["ROUTES"];
        if (this.config.layout.sidebar.backgroundColor === 'white') {
            this.logoUrl = 'assets/img/logo-dark.png';
        }
        else {
            this.logoUrl = 'assets/img/logo_adobespark.png';
        }
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.sidebar.collapsed != undefined) {
                if (_this.config.layout.sidebar.collapsed === true) {
                    _this.expanded = false;
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = true;
                }
                else if (_this.config.layout.sidebar.collapsed === false) {
                    _this.expanded = true;
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = false;
                }
            }
        }, 0);
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    SidebarComponent.prototype.toggleSlideInOut = function () {
        this.expanded = !this.expanded;
    };
    SidebarComponent.prototype.handleToggle = function (titles) {
        this.activeTitles = titles;
    };
    // NGX Wizard - skip url change
    SidebarComponent.prototype.ngxWizardFunction = function (path) {
        if (path.indexOf("forms/ngx") !== -1)
            this.router.navigate(["forms/ngx/wizard"], { skipLocationChange: false });
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toggleIcon', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SidebarComponent.prototype, "toggleIcon", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sidebar",
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html"),
            animations: _animations_custom_animations__WEBPACK_IMPORTED_MODULE_5__["customAnimations"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.url = 'https://projects-management-itbs.herokuapp.com';
    }
    UserService.prototype.getUsers = function () {
        return this
            .http
            .get(this.url + "/api/users/");
    };
    UserService.prototype.addUsers = function (newUser) {
        console.log(newUser);
        return this
            .http
            .post(this.url + "/api/users/register", { newUser: newUser })
            .subscribe(function () {
            console.log("Added");
        });
    };
    UserService.prototype.deleteUsers = function (id, deleted) {
        return this
            .http
            .patch(this.url + "/api/users/deleteUser/" + id, { deleted: deleted })
            .subscribe(function () {
            console.log("Deleted");
        });
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var BASE_URL = 'https://projects-management-itbs.herokuapp.com';
var environment = {
    production: false,
    chatUrl: BASE_URL,
    backendUrl: BASE_URL + "/api",
    chatPath: '/socket.io',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\asus\Desktop\projectsManagement\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map