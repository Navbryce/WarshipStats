webpackJsonp(["main"],{

/***/ "./config.json":
/***/ (function(module, exports) {

module.exports = {"backendIP":"","dbName":"ships","mongoIP":"ships-read:read@ds135619.mlab.com:35619","port":"4000"}

/***/ }),

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.create-validation.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isWikipediaLink */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateShipValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Returns null when true. Else, returns "error" object
function isWikipediaLink() {
    return function (control) {
        var errorMessage;
        if (control.value != null) {
            var wikipediaLinks = ["en.wikipedia.org"];
            var containsWikipediaLink = false;
            for (var linkTypeCounter = 0; linkTypeCounter < wikipediaLinks.length && !containsWikipediaLink; linkTypeCounter++) {
                var linkStyle = wikipediaLinks[linkTypeCounter];
                containsWikipediaLink = control.value.includes(linkStyle); // for loop exists when true
            }
            if (!containsWikipediaLink) {
                errorMessage = {
                    containsWikipediaLink: false
                };
            }
        }
        return errorMessage;
    };
}
var CreateShipValidator = CreateShipValidator_1 = (function () {
    function CreateShipValidator() {
    }
    CreateShipValidator.prototype.validate = function (control) {
        return isWikipediaLink()(control);
    };
    return CreateShipValidator;
}());
CreateShipValidator = CreateShipValidator_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[createShipValidator]',
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: CreateShipValidator_1, multi: true }]
    })
], CreateShipValidator);

var CreateShipValidator_1;
//# sourceMappingURL=app.create-validation.directive.js.map

/***/ }),

/***/ "./src/app/app.error-visible.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorVisibleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Apparently directives' selectors aren't case sensitive?
var ErrorVisibleDirective = (function () {
    function ErrorVisibleDirective(inputElement) {
        this.inputElement = inputElement;
    }
    ErrorVisibleDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        var mutationObserver = new MutationObserver(function (mutations) {
            _this.changeError(_this.inputElement.nativeElement.className);
        });
        mutationObserver.observe(this.inputElement.nativeElement, { attributeFilter: ["class"] });
    };
    // Deals with changes to @Inputs
    ErrorVisibleDirective.prototype.changeError = function (currentClassName) {
        if (currentClassName.search("ng-valid") >= 0) {
            this.setErrorState("hidden");
        }
        else {
            this.setErrorState("visible");
        }
    };
    ErrorVisibleDirective.prototype.setErrorState = function (state) {
        document.getElementById(this.inputElement.nativeElement.id + '-error').style.visibility = state;
    };
    return ErrorVisibleDirective;
}());
ErrorVisibleDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[error-visible]'
    })
    // Sets if the error message is visible
    // DEPRECATED
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], ErrorVisibleDirective);

var _a;
//# sourceMappingURL=app.error-visible.directive.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_viewer_app_component__ = __webpack_require__("./src/app/main-viewer/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ship_creation_app_ship_creation_component__ = __webpack_require__("./src/app/ship-creation/app.ship-creation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_app_navbar_component__ = __webpack_require__("./src/app/navbar/app.navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_app_search_service__ = __webpack_require__("./src/app/navbar/app.search-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_error_visible_directive__ = __webpack_require__("./src/app/app.error-visible.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ship_creation_app_ship_creation_placeholder_directive__ = __webpack_require__("./src/app/ship-creation/app.ship-creation-placeholder.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_create_validation_directive__ = __webpack_require__("./src/app/app.create-validation.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_viewer_armament_list_app_armament_list_component__ = __webpack_require__("./src/app/main-viewer/armament-list/app.armament-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utilities_load_screen_load_screen_component__ = __webpack_require__("./src/app/utilities/load-screen/load-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utilities_load_screen_load_screen_service__ = __webpack_require__("./src/app/utilities/load-screen/load-screen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_viewer_ship_graph_ship_graph_component__ = __webpack_require__("./src/app/main-viewer/ship-graph/ship-graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__main_viewer_ship_rankings_ship_rankings_component__ = __webpack_require__("./src/app/main-viewer/ship-rankings/ship-rankings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__main_viewer_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__ship_creation_app_ship_creation_component__["a" /* ShipCreationComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_app_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__ship_creation_app_ship_creation_placeholder_directive__["a" /* PlaceHolderDirective */],
            __WEBPACK_IMPORTED_MODULE_9__app_error_visible_directive__["a" /* ErrorVisibleDirective */],
            __WEBPACK_IMPORTED_MODULE_11__app_create_validation_directive__["a" /* CreateShipValidator */],
            __WEBPACK_IMPORTED_MODULE_12__main_viewer_armament_list_app_armament_list_component__["a" /* ArmamentListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__utilities_load_screen_load_screen_component__["a" /* LoadScreen */],
            __WEBPACK_IMPORTED_MODULE_15__main_viewer_ship_graph_ship_graph_component__["a" /* ShipGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_16__main_viewer_ship_rankings_ship_rankings_component__["a" /* ShipRankings */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__utilities_load_screen_load_screen_service__["a" /* LoadScreenService */], __WEBPACK_IMPORTED_MODULE_8__navbar_app_search_service__["a" /* SearchService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__utilities_load_screen_load_screen_component__["a" /* LoadScreen */], __WEBPACK_IMPORTED_MODULE_5__main_viewer_app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_7__navbar_app_navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_6__ship_creation_app_ship_creation_component__["a" /* ShipCreationComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/main-viewer/app.component.css":
/***/ (function(module, exports) {

module.exports = "ship-graph {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n}\r\n\r\n.selected-ship-tabs>.nav-item {\r\n\tmargin-top: auto;\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t    -ms-user-select: none;\r\n\t        user-select: none;\r\n}\r\n\r\n.selected-ship-tabs>.nav-item>a {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\tbackground-color: #ffc107;\r\n\tborder-top-right-radius: 3px;\r\n\tborder-top-left-radius: 3px;\r\n\twidth: 100px;\r\n\theight: 40px;\r\n\tpadding: 0px;\r\n  cursor: pointer;\r\n\ttext-align: center;\r\n\tfont-size: 10pt;\r\n\r\n\r\n}\r\n\r\n.selected-ship-tabs>.nav-item:not(:first-child){\r\n\tmargin-left: 3px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main-viewer/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div id=\"content\" class=\"not-dialogue\">\r\n    <div id=\"ships\">\r\n        <div *ngFor=\"let ship of shipsList\" (click)=\"selectShip(ship)\">\r\n            <div class=\"ship-header\">\r\n                <div class=\"ship-header-text\">\r\n                    <h3>{{ship.displayName}}</h3>\r\n                </div>\r\n                <span class=\"ship-header-divider\"></span>\r\n            </div>\r\n            <div class=\"ship-content\">\r\n                <div>\r\n                    <img src=\"{{ship.pictures[0].src}}\">\r\n                </div>\r\n            </div>\r\n            <span class=\"ship-header-divider\"></span>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"selectedShip\" [@dialogueState]=\"dialogueState\" class=\"selected-dialogue\">\r\n    <div class=\"selected-box\">\r\n        <div class=\"selected-frame\">\r\n            <div class=\"selected-box-header\">\r\n                <h1 class=\"title-font metallic-text\">{{selectedShip.displayName}}</h1>\r\n                <ul class=\"selected-ship-tabs nav nav-tabs\">\r\n                      <li [ngClass]=\"{'active-tab': selectedShip.selectedTab==0}\" class=\"nav-item\">\r\n                            <a  class=\"nav-link\" (click)=\"selectTab(0)\">General Overview</a>\r\n                      </li>\r\n                      <li [ngClass]=\"{'active-tab': selectedShip.selectedTab==1}\" class=\"nav-item\">\r\n                            <a class=\"nav-link\" (click)=\"selectTab(1)\">Weapon Systems</a>\r\n                      </li>\r\n                      <li [ngClass]=\"{'active-tab': selectedShip.selectedTab==2}\" class=\"nav-item\">\r\n                            <a class=\"nav-link\" (click)=\"selectTab(2)\">Visualization</a>\r\n                      </li>\r\n                      <li [ngClass]=\"{'active-tab': selectedShip.selectedTab==3}\" class=\"nav-item\">\r\n                            <a class=\"nav-link\" (click)=\"selectTab(3)\">Ship Rankings</a>\r\n                      </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"selected-box-main\">\r\n                <div class=\"tab-0 content-of-selected-box\" *ngIf=\"selectedShip.selectedTab==0\">\r\n                    <div class=\"allow-y-scroll\">\r\n                        <div class=\"gallery-wrapper\">\r\n                            <div id=\"ship-gallery\">\r\n                                <img src=\"{{image.src}}\" [attr.data-description]=\"image.description\" *ngFor=\"let image of selectedShip.pictures\">\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"selectedShip.description\"  class=\"info-section primary-weapons\">\r\n                            <h4 class=\"title-font blue-underline\">Description:</h4>\r\n                            <div  class=\"info-box\">\r\n                                <p>{{selectedShip.description}}</p>\r\n                                <p *ngIf=\"selectedShip.type\" style=\"padding-top: 5px;\"><b>Class:</b> {{formatString(selectedShip.class)}}</p>\r\n                                <p *ngIf=\"selectedShip.class\" style=\"padding-top: 5px;\"><b>Type:</b> {{formatString(selectedShip.type)}}</p>\r\n                                <p *ngIf=\"selectedShip.complement\" style=\"padding-top: 5px;\"><b>Complement:</b> {{formatString(selectedShip.complement)}} sailors</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"info-section primary-weapons\">\r\n                            <h4 class=\"title-font blue-underline\">Important Dates:</h4>\r\n                            <div class=\"info-box\">\r\n                                <div *ngFor=\"let key of getKeysArray(selectedShip.importantDates)\">\r\n                                    <p><b>{{formatString(key)}}:</b> <span *ngFor=\"let dateKey of getKeysArray(selectedShip.importantDates[key])\">{{selectedShip.importantDates[key][dateKey]}}</span></p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"info-section primary-weapons\">\r\n                            <h4 class=\"title-font blue-underline\">Physical Attributes:</h4>\r\n                            <div class=\"info-box\">\r\n                                <div *ngFor=\"let attrKey of getKeysArray(selectedShip.physicalAttributes)\">\r\n                                    <p><b>{{formatString(attrKey)}}:</b> {{selectedShip.physicalAttributes[attrKey].value}} {{selectedShip.physicalAttributes[attrKey].unit}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"selectedShip.armor.armorObjects != null && selectedShip.armor.armorObjects.length > 0\" class=\"info-section primary-weapons\">\r\n                            <h4 class=\"title-font blue-underline\">Armor:</h4>\r\n                            <div class=\"info-box\">\r\n                                <div class=\"info-box\">\r\n                                    <h5 class=\"title-font blue-underline\">General Armor Stats:</h5>\r\n                                    <!--- All armor is in mm from the scraper conersion--->\r\n                                    <p><b>Average Width:</b> {{selectedShip.armor.calculations.average}} mm</p>\r\n                                    <p><b>Median Width:</b> {{selectedShip.armor.calculations.median}} mm</p>\r\n                                    <p *ngIf = \"selectedShip.armor.calculations.mode.frequency > 1\"><b>Mode:</b> {{selectedShip.armor.calculations.mode.value}} mm with a frequency of {{selectedShip.armor.calculations.mode.frequency}}</p>\r\n                                    <p><b>Range of Widths:</b> {{selectedShip.armor.calculations.minValue}}-{{selectedShip.armor.calculations.maxValue}} mm</p>\r\n                                </div>\r\n                                <div class=\"info-box\">\r\n                                  <h4 class=\"title-font blue-underline\">Types of Armor:</h4>\r\n                                  <div *ngFor=\"let armorObject of selectedShip.armor.armorObjects\">\r\n                                      <p><b>{{formatString(armorObject.armorType)}}:</b> {{armorObject.minValue}}<span *ngIf=\"armorObject.range\">-{{armorObject.maxValue}}</span> {{armorObject.unit}}</p>\r\n                                  </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"info-section primary-weapons\">\r\n                            <h4 class=\"title-font blue-underline\">Other Info:</h4>\r\n                            <div class=\"info-box\">\r\n                                <div *ngFor=\"let key of getsKeysNotInUse(selectedShip)\">\r\n                                    <b>{{formatString(key)}}:</b> {{formatString(selectedShip[key])}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"tab-1 content-of-selected-box\" *ngIf=\"selectedShip.selectedTab==1\">\r\n                    <div class=\"allow-y-scroll\">\r\n                      <app-armament-list [armament-object]=selectedShip.armament></app-armament-list>\r\n                    </div>\r\n                </div>\r\n                <div class=\"content-of-selected-box\" *ngIf=\"selectedShip.selectedTab==2\">\r\n                    <ship-graph (switchShips)=\"switchShips($event)\" [allShips]=\"allShipsList\" [ship]=\"selectedShip\"></ship-graph>\r\n                </div>\r\n                <div class=\"content-of-selected-box\" *ngIf=\"selectedShip.selectedTab==3\">\r\n                    <div class=\"allow-y-scroll\">\r\n                      <ship-rankings (selectShip)=\"switchShips($event)\" [ship]=\"selectedShip\" [allShips] = \"allShipsList\"></ship-rankings>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"wrapper-background\">\r\n        </div>\r\n    </div>\r\n    <div class=\"glass-pane\" (click)=\"selectShip(null)\">\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-viewer/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_load_screen_load_screen_service__ = __webpack_require__("./src/app/utilities/load-screen/load-screen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_app_search_service__ = __webpack_require__("./src/app/navbar/app.search-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__misc_functions_get_ip_function__ = __webpack_require__("./src/app/misc-functions/get-ip.function.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__misc_functions_formatting_functions__ = __webpack_require__("./src/app/misc-functions/formatting-functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_json__ = __webpack_require__("./config.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__config_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as boats from '../../Data/boats.json';






var config = __WEBPACK_IMPORTED_MODULE_6__config_json__;

var AppComponent = (function () {
    // Inject searchService to share variables | and HTTP client to communicate with the backend
    function AppComponent(changeDetector, loadScreenService, searchService, http) {
        this.changeDetector = changeDetector;
        this.loadScreenService = loadScreenService;
        this.searchService = searchService;
        this.http = http;
        this.configObject = config;
        this.title = 'Warship Website';
        this.shipsList = []; // Initially set in ngOnInit getShips function. Has filters applied to it
        this.allShipsList = []; // All the ships
        this.hasGottenShipsOnce = false; // The first time the web page gets the ships, will set to true
        this.searchEntry = ""; // Should probably change this so it gets its initial value from the searchService
        this.sortBy = "displayName"; // Should probably change this so it gets its initial value from the searchService
        this.sortOrder = 1; // Should probably change this so it gets its initial value from the searchService
        this.dialogueState = "inactive";
        this.rangeFilters = searchService.initialRangeFilters;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.currentSearch.subscribe(function (searchEntry) {
            _this.searchEntry = searchEntry;
            _this.getShips(searchEntry, _this.sortBy, _this.sortOrder, _this.rangeFilters);
        });
        this.searchService.sortBy.subscribe(function (sortBy) {
            _this.sortBy = sortBy;
            _this.getShips(_this.searchEntry, sortBy, _this.sortOrder, _this.rangeFilters);
        });
        this.searchService.sortOrder.subscribe(function (sortOrder) {
            _this.sortOrder = sortOrder;
            _this.getShips(_this.searchEntry, _this.sortBy, sortOrder, _this.rangeFilters);
        });
        this.searchService.rangeFilters.subscribe(function (rangeFilters) {
            _this.rangeFilters = rangeFilters;
            _this.getShips(_this.searchEntry, _this.sortBy, _this.sortOrder, rangeFilters);
        });
    };
    AppComponent.prototype.formatString = function (value) {
        value = Object(__WEBPACK_IMPORTED_MODULE_5__misc_functions_formatting_functions__["a" /* capitalizeFirstLetter */])(value);
        return value;
    };
    AppComponent.prototype.getShips = function (shipNeedle, sortBy, sortOrder, rangeFilters) {
        // Start loading while getting ships
        var _this = this;
        var body = {
            shipName: "",
            numberOfShips: 500,
            sort: {
                sortBy: sortBy,
                sortOrder: sortOrder
            },
            filters: {
                shipNeedle: shipNeedle,
                rangeIntFilters: rangeFilters
            }
        };
        var fullIP = Object(__WEBPACK_IMPORTED_MODULE_4__misc_functions_get_ip_function__["a" /* getIP */])(this.configObject);
        this.loadScreenService.activateLoadingWithReason("loading-ships");
        this.http.post(fullIP + '/ships/getShips', body).subscribe(function (data) {
            console.log(data);
            _this.shipsList = data;
            if (!_this.hasGottenShipsOnce) {
                _this.hasGottenShipsOnce = true;
                _this.allShipsList = data; // Unadulterated/unfiltered list of ships.
            }
            _this.changeDetector.detectChanges(); // Updates variables because sometimes the filter changes are made through jquery
            _this.loadScreenService.deactivateLoadingWithReason("loading-ships");
        });
    };
    AppComponent.prototype.getKeysArray = function (object) {
        return Object.keys(object);
    };
    //Will return if the key is already being displayed. Really need to change from array of keys manually entered to something stored in the database by the scraper
    AppComponent.prototype.getsKeysNotInUse = function (ship) {
        var allKeys = this.getKeysArray(ship);
        var keysInUseArray = ["selectedtab", "armor", "armament", "importantdates", "physicalattributes", "pictures", "description", "_id", "name", "displayname", "configuration", "scrapeurl", "class", "type", "complement"];
        for (var keysInUseCounter = 0; keysInUseCounter < keysInUseArray.length; keysInUseCounter++) {
            var keyInUse = keysInUseArray[keysInUseCounter];
            var keyRemoved = false;
            for (var keyCounter = 0; keyCounter < allKeys.length && !keyRemoved; keyCounter++) {
                if (keyInUse == allKeys[keyCounter].toLowerCase()) {
                    allKeys.splice(keyCounter, 1);
                    keyRemoved = true;
                }
            }
        }
        return allKeys;
    };
    AppComponent.prototype.selectShip = function (ship) {
        var _this = this;
        var body = document.getElementsByTagName("body")[0];
        var nonDialogue = document.getElementsByClassName("not-dialogue");
        if (ship == null) {
            body.style.overflowY = "visible";
            for (var domElement = 0; domElement < nonDialogue.length; domElement++) {
                var element = nonDialogue[domElement];
                element.style.transition = ("filter 500ms, transform 300ms"); //Speeds prevent seeing white border
                element.style.webkitFilter = "blur(0px)";
                element.style.transform = "scale(1)";
            }
            this.dialogueState = "inactive";
            this.changeDetector.detectChanges(); // Updates variables because sometimes the filter changes are made through jquery
            setTimeout(function () {
                _this.selectedShip = null;
                _this.changeDetector.detectChanges(); // Updates variables because sometimes the filter changes are made through jquery
            }, 100);
        }
        else {
            //Sets the current tab to the previous tab unless there was no previous tab. Sets to null before loading in so the selectTab method actually triggers all the ngIfs
            var previouslySelectedTab;
            previouslySelectedTab = ship.selectedTab;
            ship.selectedTab = null;
            if (previouslySelectedTab == null) {
                previouslySelectedTab = 0;
            }
            this.selectedShip = ship;
            // console.log("Selected:" + JSON.stringify(ship));
            this.selectTab(previouslySelectedTab);
            body.style.overflowY = "hidden";
            this.dialogueState = "inactive";
            this.changeDetector.detectChanges(); // Updates variables because sometimes the filter changes are made through jquery
            setTimeout(function () {
                for (var domElement = 0; domElement < nonDialogue.length; domElement++) {
                    var element = nonDialogue[domElement];
                    element.style.transition = ("filter 300ms, transform 500ms"); //Speeds prevent seeing white border
                    element.style.webkitFilter = "blur(2px)";
                    element.style.transform = "scale(1.02)";
                }
                _this.dialogueState = "active";
                _this.changeDetector.detectChanges(); // Updates variables because sometimes the filter changes are made through jquery
            }, 0);
        }
    };
    AppComponent.prototype.selectTab = function (tabNumber) {
        var oldTab = this.selectedShip.selectedTab;
        console.log(this.selectedShip.selectedTab + "; new number:" + tabNumber);
        if (tabNumber != oldTab) {
            this.selectedShip.selectedTab = tabNumber; //Must be done the start so code below can modify dom of tab
        }
        this.changeDetector.detectChanges(); // Updates variables because sometimes the filter changes are made through jquery
        if (tabNumber != oldTab && tabNumber == 0) {
            setTimeout(function () {
                initializeProductGallery(); //Same as the animation trigger. I'm pretty sure this block runs asynch or something without the timeout
            }, 0);
        }
    };
    // Only call when switching from one ship view to another
    AppComponent.prototype.switchShips = function (newShip) {
        var _this = this;
        this.selectShip(null);
        if (newShip != null) {
            setTimeout(function () {
                _this.selectShip(newShip);
            }, 400);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/main-viewer/app.component.html"),
        styles: [__webpack_require__("./src/app/main-viewer/app.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["j" /* trigger */])('dialogueState', [
                Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["h" /* style */])({
                    transform: 'scale(1) translate(0, 100vh)',
                    opacity: '1',
                })),
                Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["h" /* style */])({
                    transform: 'scale(1)',
                    opacity: '1',
                })),
                Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["e" /* animate */])('200ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["e" /* animate */])('200ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__utilities_load_screen_load_screen_service__["a" /* LoadScreenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utilities_load_screen_load_screen_service__["a" /* LoadScreenService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__navbar_app_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__navbar_app_search_service__["a" /* SearchService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/main-viewer/armament-list/app.armament-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArmamentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_functions_formatting_functions__ = __webpack_require__("./src/app/misc-functions/formatting-functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArmamentListComponent = (function () {
    function ArmamentListComponent() {
    }
    ArmamentListComponent.prototype.formatString = function (value) {
        value = Object(__WEBPACK_IMPORTED_MODULE_1__misc_functions_formatting_functions__["a" /* capitalizeFirstLetter */])(value);
        return value;
    };
    return ArmamentListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('armament-object'),
    __metadata("design:type", Object)
], ArmamentListComponent.prototype, "armament", void 0);
ArmamentListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-armament-list',
        template: __webpack_require__("./src/app/main-viewer/armament-list/app.armament-list.html"),
        styles: [__webpack_require__("./src/app/main-viewer/armament-list/armament-list-styles.css")]
    })
], ArmamentListComponent);

//# sourceMappingURL=app.armament-list.component.js.map

/***/ }),

/***/ "./src/app/main-viewer/armament-list/app.armament-list.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"info-section primary-weapons\">\r\n  <h4 class=\"title-font blue-underline\">Statistics:</h4>\r\n  <div *ngIf=\"armament.normalGun.armaments.length > 0 && !armament.normalGun.sizeCalculate.noValues\" class=\"info-section primary-weapons\">\r\n    <h5 class=\"title-font blue-underline\">Normal Guns Stats:</h5>\r\n    <div class=\"info-box\">\r\n      <p><b>Total number of Barrels:</b> {{armament.normalGun.sizeCalculate.numberOfValues}}\r\n      <p><b>Sums of Barrel Widths:</b> {{armament.normalGun.sizeCalculate.sum}} mm<p>\r\n      <p><b>Average Barrel Width:</b> {{armament.normalGun.sizeCalculate.average}} mm</p>\r\n      <p><b>Median Barrel Width:</b> {{armament.normalGun.sizeCalculate.median}} mm</p>\r\n      <p><b>Mode Barrel Width:</b> {{armament.normalGun.sizeCalculate.mode.value}} mm guns with a frequency of {{armament.normalGun.sizeCalculate.mode.frequency}}</p>\r\n      <p><b>Range of Barrel Widths:</b> {{armament.normalGun.sizeCalculate.minValue}}-{{armament.normalGun.sizeCalculate.maxValue}} mm</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"armament.normalGun.armaments.length > 0\" class=\"info-section primary-weapons\">\r\n    <h4 class=\"title-font blue-underline\">Normal Guns:</h4>\r\n    <div *ngFor=\"let armament of armament.normalGun.armaments\" class=\"info-box icon-info-box\">\r\n      <div *ngIf=\"armament.pictures[0]\">\r\n          <img  src=\"{{armament.pictures[0].src}}\">\r\n      </div>\r\n      <div>\r\n          <p><b>Armament:</b> {{formatString(armament.fullName)}}</p>\r\n          <p><b>Number of Armament(s):</b> {{armament.quantity}}</p>\r\n          <p><b>Width of Barrel:</b> {{armament.size}} {{armament.unit}}</p>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"armament.torpedo.armaments.length > 0\" class=\"info-section primary-weapons\">\r\n    <h4 class=\"title-font blue-underline\">Torpedoes:</h4>\r\n    <div *ngFor=\"let armament of armament.torpedo.armaments\" class=\"info-box icon-info-box\">\r\n      <div *ngIf=\"armament.pictures[0]\">\r\n          <img  src=\"{{armament.pictures[0].src}}\">\r\n      </div>\r\n      <div>\r\n          <p><b>Armament:</b> {{armament.fullName}}</p>\r\n          <p><b>Number of Armament(s):</b> {{armament.quantity}}</p>\r\n          <p><b>Length of Torpedo:</b> {{armament.size}} {{armament.unit}}</p>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"armament.missile.armaments.length > 0\" class=\"info-section primary-weapons\">\r\n    <h4 class=\"title-font blue-underline\">Missiles:</h4>\r\n    <div *ngFor=\"let armament of armament.missile.armaments\" class=\"info-box icon-info-box\">\r\n      <div *ngIf=\"armament.pictures[0]\">\r\n          <img  src=\"{{armament.pictures[0].src}}\">\r\n      </div>\r\n      <div>\r\n          <p><b>Armament:</b> {{armament.fullName}}</p>\r\n          <p><b>Number of Armament(s):</b> {{armament.quantity}}</p>\r\n          <p><b>Length of Missile:</b> {{armament.size}} {{armament.unit}}</p>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"armament.cannon.armaments.length > 0\" class=\"info-section primary-weapons\">\r\n    <h4 class=\"title-font blue-underline\">Cannons:</h4>\r\n    <div *ngFor=\"let armament of armament.cannon.armaments\" class=\"info-box icon-info-box\">\r\n      <div *ngIf=\"armament.pictures[0]\">\r\n          <img  src=\"{{armament.pictures[0].src}}\">\r\n      </div>\r\n      <div>\r\n          <p><b>Armament:</b> {{armament.fullName}}</p>\r\n          <p><b>Number of Armament(s):</b> {{armament.quantity}}</p>\r\n          <p><b>Size of Cannon:</b> {{armament.size}} {{armament.unit}}</p>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-viewer/armament-list/armament-list-styles.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-viewer/ship-graph/ship-graph.component.css":
/***/ (function(module, exports) {

module.exports = "button {\r\n  background-color: #ffc107;\r\n}\r\n#ship-graph {\r\n  height: 100%;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 0;\r\n}\r\n#button-panel {\r\n  display: inline-block;\r\n  padding: 5px;\r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n#info-panel {\r\n  background-color: rgba(200, 200, 200, .9);\r\n  height: 100%;\r\n  min-width: 150px;\r\n  overflow-y: scroll;\r\n  padding: 20px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 30%;\r\n  z-index: 1;\r\n}\r\n#info-panel img {\r\n  height: 100%;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  width: 100%;\r\n}\r\n.btn-constant { /*Constant button size*/\r\n  width: 50px;\r\n}\r\n.edge {\r\n  display: block;\r\n  padding-bottom: 10px;\r\n  width: 100%;\r\n}\r\n.edge-header {\r\n  background-color: rgb(100, 100, 100);\r\n  -webkit-box-sizing: content-box;\r\n          box-sizing: content-box;\r\n  padding: 5px;\r\n  position: relative;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  width: 100%;\r\n  line-height: 30px;\r\n}\r\n.edge-header h5 {\r\n  display: inline-block;\r\n  margin: 0;\r\n  padding: 0;\r\n  vertical-align: middle;\r\n}\r\n.edge-header span {\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 100%;\r\n  line-height: 100%;\r\n  position: absolute;\r\n  right: 5px;\r\n  top: 0;\r\n}\r\n.edge-header:hover {\r\n  cursor:pointer;\r\n}\r\n.edge {\r\n  width: 100%;\r\n}\r\n.edge-info {\r\n  border-left: 2px solid rgb(100, 100, 100);\r\n  margin-top: 5px;\r\n  padding-left: 10px;\r\n  -webkit-transition: visibility;\r\n  transition: visibility\r\n}\r\n.graph-wrapper {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n/*styles in angular compiled style sheets are only applied when the element is not dyanmically added. the #ship-graph > svg style can be in the styles.css (which is not compiled through angular)*/\r\n"

/***/ }),

/***/ "./src/app/main-viewer/ship-graph/ship-graph.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"graph-wrapper\">\r\n  <div id=\"button-panel\">\r\n    <button (click)=\"toggleRender()\" class=\"btn btn-constant\" title=\"{{getPauseText(layoutRunning)}} graph\"><i [ngClass]=\"layoutRunning ? 'fa-pause' : 'fa-play'\" class=\"fa\"></i></button>\r\n  </div>\r\n  <div id=\"ship-graph\">\r\n    <svg style=\"display: none;\"></svg>\r\n  </div>\r\n  <div id=\"info-panel\">\r\n    <div>\r\n      <img src=\"{{ship.pictures[0].src}}\">\r\n      <h5>Connection info for <b>{{ship.displayName}}:</b></h5>\r\n      <div class=\"edges\">\r\n        <div *ngFor = \"let edge of shipEdges\" id=\"{{edge.edgeId}}\" class=\"edge\">\r\n          <div (click)=\"edge.display = !edge.display\" class=\"edge-header\">\r\n            <h5>{{edge.view}}</h5><span><i class=\"fa\" [ngClass]=\"edge.display ? 'fa-minus' : 'fa-plus'\"></i></span>\r\n          </div>\r\n          <div class=\"edge-info\" [hidden]=\"!edge.display\">\r\n            <p><b>Ship:</b> {{edge.view}}</p>\r\n            <p><b>Direct Connection Strength:</b> {{edge.magnitude}}</p>\r\n            <div>\r\n              <p><b>Reasons</b>:</p>\r\n              <ul>\r\n                <li *ngFor = \"let reason of edge.reasons\">{{reason}}</li>\r\n              </ul>\r\n            </div>\r\n            <button (click)=\"switchShip(shipMap[edge.viewURL])\" class=\"btn\">View Ship</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-viewer/ship-graph/ship-graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_load_screen_load_screen_service__ = __webpack_require__("./src/app/utilities/load-screen/load-screen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__misc_functions_edges_functions_functions__ = __webpack_require__("./src/app/misc-functions/edges-functions.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__misc_functions_ships_functions_functions__ = __webpack_require__("./src/app/misc-functions/ships-functions.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__misc_functions_get_ip_function__ = __webpack_require__("./src/app/misc-functions/get-ip.function.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_json__ = __webpack_require__("./config.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__config_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var config = __WEBPACK_IMPORTED_MODULE_6__config_json__;
var ShipGraphComponent = (function () {
    // Inject HTTP client
    function ShipGraphComponent(http, loadScreenService) {
        this.http = http;
        this.loadScreenService = loadScreenService;
        this.switchShips = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.configObject = config;
        console.log(this.configObject.mongoIP);
    }
    ShipGraphComponent.prototype.ngOnChanges = function () {
        this.shipMap = Object(__WEBPACK_IMPORTED_MODULE_4__misc_functions_ships_functions_functions__["a" /* arrayToMap */])(this.allShips);
    };
    ShipGraphComponent.prototype.ngAfterContentInit = function () {
        this.loadScreenService.activateLoadingWithReason("loading-graph"); // activate loading
        this.shipEdges = []; // The edges directly connected to the main ship. Edges add to this list in drawEntireGraph
        this.graphContainer = document.getElementById("ship-graph");
        this.graph = Viva.Graph.graph();
        this.drawEntireGraph();
        // Layout ensures stronger edges are, the shorter the edge
        var maximumLength = 90; // The maximum link length
        var maximumMagnitude = 40; // The maximum possible magnitude or at least treat is as the maximum
        var layout = Viva.Graph.Layout.forceDirected(this.graph, {
            springLength: maximumLength,
            springCoeff: 0.0008,
            gravity: -10,
            // This is the main part of this example. We are telling force directed
            // layout, that we want to change length of each physical spring
            // by overriding `springTransform` method:
            springTransform: function (link, spring) {
                var linkMagnitude = link.data.magnitude;
                if (linkMagnitude > maximumMagnitude) {
                    linkMagnitude = 0; // If the link is stronger than the maximum magnitude, treat it as the maximum magnitude
                    console.log("A link has a greater magnitude than the pre-configured magnitude of " + maximumMagnitude + " in the graph");
                }
                spring.length = maximumLength * (1 - linkMagnitude);
            }
        });
        this.graphics = this.getSvgGraphics();
        // specify where it should be rendered:
        var renderer = Viva.Graph.View.renderer(this.graph, {
            container: this.graphContainer,
            graphics: this.graphics,
            layout: layout
        });
        this.layoutRunning = true;
        this.renderer = renderer;
        renderer.run();
        this.loadScreenService.deactivateLoadingWithReason("loading-graph"); // activate loading
    };
    ShipGraphComponent.prototype.addAllNodes = function () {
        for (var shipCounter = 0; shipCounter < this.allShips.length; shipCounter++) {
            var ship = this.allShips[shipCounter];
            var node = {
                imageURL: ship.pictures[0].src,
                name: ship.displayName,
                scrapeURL: ship.scrapeURL,
            };
            this.addNode(node);
        }
    };
    ShipGraphComponent.prototype.addEdge = function (edge) {
        var edgeData = { magnitude: edge.magnitude };
        this.graph.addLink(edge.source, edge.target, edgeData);
    };
    ShipGraphComponent.prototype.addNode = function (node) {
        // Will only add nodes that haven't already been added
        if (this.graph.getNode(node.scrapeURL) == null || node.angularEdge != null) {
            // angularEdge: An object references by angular that is displayed on ther right. if the node contains angular object, it should OVERRIDE the node object already graphed.
            var nodeData = { imageURL: node.imageURL, name: node.name };
            if (node.angularEdge != null) {
                nodeData['angularEdge'] = node.angularEdge; // The shared edge object that angular has access to
            }
            this.graph.addNode(node.scrapeURL, nodeData);
        }
    };
    ShipGraphComponent.prototype.drawEntireGraph = function () {
        var _this = this;
        // Add edges (Edges also contain the image URL which at this point is unecessary)
        var body = {};
        var fullIP = Object(__WEBPACK_IMPORTED_MODULE_5__misc_functions_get_ip_function__["a" /* getIP */])(this.configObject);
        this.http.post(fullIP + '/graphs/getAllEdges', body).subscribe(function (edgesRes) {
            var edges = edgesRes;
            console.log(edges);
            for (var edgeCounter = 0; edgeCounter < edges.length; edgeCounter++) {
                var edge = edges[edgeCounter];
                var sourceNode = {
                    imageURL: edge.sourceImage.src,
                    name: edge.sourceName,
                    scrapeURL: edge.source,
                };
                var targetNode = {
                    imageURL: edge.targetImage.src,
                    name: edge.targetName,
                    scrapeURL: edge.target
                };
                // If the ship being viewed is a target or source in the edge, add it to the array
                if (edge.source == _this.ship.scrapeURL) {
                    targetNode['angularEdge'] = edge; // References to the edge object that this node shared with the main ship being viewed
                    edge.view = edge.targetName;
                    edge.viewURL = edge.target;
                    edge.display = false; // for the accordion/hidden effect
                    _this.shipEdges.push(edge);
                }
                else if (edge.target == _this.ship.scrapeURL) {
                    sourceNode['angularEdge'] = edge; // References to the edge object that this node shared with the main ship being viewed
                    edge.view = edge.sourceName;
                    edge.viewURL = edge.source;
                    edge.display = false; // for the accordion/hidden effect
                    _this.shipEdges.push(edge);
                }
                // Add nodes first
                _this.addNode(sourceNode);
                _this.addNode(targetNode);
                // Add edge
                _this.addEdge(edge);
            }
            Object(__WEBPACK_IMPORTED_MODULE_3__misc_functions_edges_functions_functions__["a" /* sortEdges */])(_this.shipEdges); // Sorts shipEdges by magnitude . COuld be done through binary add, but I'm not going to implement that right now
            _this.shipEdges = _this.shipEdges.reverse();
        });
        this.addAllNodes(); // Adds all the ships as nodes. Since nodes that have already been added aren't added again, this needs to be run last. Otherwise, the above edges code will be overriden when it makes nodes with angularEdge
    };
    // If the edge is on the main ship's edge's list, the edge info panel will be expanded
    ShipGraphComponent.prototype.expandEdgeInfo = function (edge, scrollTo) {
        edge.display = true;
        if (scrollTo) {
            document.getElementById(edge.edgeId).scrollIntoView();
        }
    };
    ShipGraphComponent.prototype.getPauseText = function (state) {
        var returnString = null;
        state ? returnString = "Pause" : returnString = "Resume";
        return returnString;
    };
    ShipGraphComponent.prototype.getSvgGraphics = function () {
        var _this = this;
        var graphics = Viva.Graph.View.svgGraphics();
        var component = this;
        graphics.highlightEdge = function (ui, color) {
            ui.attr('stroke', color);
        };
        graphics.node(function (node) {
            // The function is called every time renderer needs a ui to display node
            var ui = Viva.Graph.svg('g');
            var label = Viva.Graph.svg('text').attr('y', '-4px').text(node.data.name);
            var image = Viva.Graph.svg('image')
                .attr('width', 24)
                .attr('height', 24)
                .link(node.data.imageURL); // node.data holds custom object passed to graph.addNode();
            ui.append(label);
            ui.append(image);
            if (node.id == component.ship.scrapeURL) {
                // Do nothing right now
            }
            else {
                var angularEdge_1 = node.data.angularEdge; // If not null, then this node shares an edge with the main node being viewed and the angularEdge is the object angular has access to
                if (angularEdge_1 != null) {
                    ui.addEventListener("click", function () {
                        component.expandEdgeInfo(angularEdge_1, true);
                    });
                }
                ui.addEventListener("mouseover", function () {
                    component.highlightConnectedNodes(node.id, true);
                });
                ui.addEventListener("mouseout", function () {
                    component.highlightConnectedNodes(node.id, false);
                });
            }
            return ui;
        });
        graphics.placeNode(function (nodeUI, pos) {
            // Shift image to let links go to the center:
            var translate = 'translate(' + (pos.x - 24 / 2) + ',' + (pos.y - 24 / 2) + ')'; // 24/2 is size
            nodeUI.attr('transform', translate);
        });
        graphics.link(function (edge) {
            var ui = Viva.Graph.svg('path');
            var mainNodeId;
            if (edge.fromId == _this.ship.scrapeURL || edge.toId == _this.ship.scrapeURL) {
                graphics.highlightEdge(ui, "red");
            }
            else {
                graphics.highlightEdge(ui, "grey");
            }
            return ui;
        });
        graphics.placeLink(function (linkUI, fromPos, toPos) {
            var data = 'M' + fromPos.x + ',' + fromPos.y + 'L' + toPos.x + ',' + toPos.y;
            linkUI.attr('d', data);
        });
        return graphics;
    };
    ShipGraphComponent.prototype.highlightConnectedNodes = function (nodeID, state) {
        var _this = this;
        this.graph.forEachLinkedNode(nodeID, function (node, edge) {
            if (node.id != _this.ship.scrapeURL) {
                var linkUI = _this.graphics.getLinkUI(edge.id);
                if (linkUI) {
                    linkUI.attr('stroke', state ? 'red' : 'grey');
                }
                else {
                    console.log('Can\'t highlight edge for ' + nodeID + ' because it\'s null');
                }
            }
        });
    };
    ShipGraphComponent.prototype.switchShip = function (ship) {
        this.switchShips.emit(ship);
    };
    ShipGraphComponent.prototype.toggleRender = function () {
        if (this.renderer != null) {
            if (this.layoutRunning) {
                this.renderer.pause();
            }
            else {
                this.renderer.resume();
            }
            this.layoutRunning = !this.layoutRunning; // Switch states
        }
    };
    return ShipGraphComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ShipGraphComponent.prototype, "ship", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ShipGraphComponent.prototype, "allShips", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], ShipGraphComponent.prototype, "switchShips", void 0);
ShipGraphComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ship-graph',
        template: __webpack_require__("./src/app/main-viewer/ship-graph/ship-graph.component.html"),
        styles: [__webpack_require__("./src/app/main-viewer/ship-graph/ship-graph.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__utilities_load_screen_load_screen_service__["a" /* LoadScreenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utilities_load_screen_load_screen_service__["a" /* LoadScreenService */]) === "function" && _b || Object])
], ShipGraphComponent);

var _a, _b;
//# sourceMappingURL=ship-graph.component.js.map

/***/ }),

/***/ "./src/app/main-viewer/ship-rankings/ship-rankings.component.css":
/***/ (function(module, exports) {

module.exports = "button {\r\n  background-color: #ffc107;\r\n}\r\n.ship-preview {\r\n  height: 300px;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  width: 300px;\r\n}\r\n.rank-header {\r\n  background-color: rgba(20, 44, 81, 1);\r\n  -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);\r\n          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);\r\n  padding-left: 20px;\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main-viewer/ship-rankings/ship-rankings.component.html":
/***/ (function(module, exports) {

module.exports = "<h5>Ship Rankings List</h5>\r\n<p>The higher up on the ship rankings list, the more related the ship is to the {{ship.displayName}}</p>\r\n<div *ngIf=\"allShipsMap != null\">\r\n  <div *ngFor=\"let distance of ship.distances; index as index\">\r\n    <div *ngIf=\"inMap(distance.scrapeURL)\" class=\"info-box\">\r\n      <div class=\"rank-header\">\r\n        <h1 class=\"title-font metallic-text\">{{index+1}}. {{allShipsMap[distance.scrapeURL].displayName}}</h1>\r\n      </div>\r\n      <div class=\"icon-info-box\">\r\n        <div *ngIf=\"allShipsMap[distance.scrapeURL].pictures[0]\">\r\n            <img class=\"ship-preview\" src=\"{{allShipsMap[distance.scrapeURL].pictures[0].src}}\">\r\n        </div>\r\n        <div>\r\n          <p><b>Relatedness:</b> {{convertDistance(distance.distance)}}</p>\r\n          <button (click)=\"switchShip(allShipsMap[distance.scrapeURL])\" class=\"btn\">View Ship</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-viewer/ship-rankings/ship-rankings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipRankings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_functions_ship_ranking_functions_functions__ = __webpack_require__("./src/app/misc-functions/ship-ranking-functions.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_functions_ships_functions_functions__ = __webpack_require__("./src/app/misc-functions/ships-functions.functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShipRankings = (function () {
    function ShipRankings() {
        this.selectShip = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ShipRankings.prototype.ngOnChanges = function () {
        this.allShipsMap = Object(__WEBPACK_IMPORTED_MODULE_2__misc_functions_ships_functions_functions__["a" /* arrayToMap */])(this.allShips); // Converts the allShips list to a map, so that way information on each ship can be easily acccessed in the rankings list
    };
    ShipRankings.prototype.convertDistance = function (distance) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__misc_functions_ship_ranking_functions_functions__["a" /* convertDistance */])(distance);
    };
    ShipRankings.prototype.inMap = function (scrapeURL) {
        var inMap;
        this.allShipsMap[scrapeURL] != null ? inMap = true : (console.log("ERROR: " + scrapeURL + " is not in the allShipsMap. This shouldn't be the case."), inMap = false);
        return inMap;
    };
    ShipRankings.prototype.switchShip = function (ship) {
        this.selectShip.emit(ship);
    };
    return ShipRankings;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ShipRankings.prototype, "ship", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ShipRankings.prototype, "allShips", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], ShipRankings.prototype, "selectShip", void 0);
ShipRankings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ship-rankings',
        template: __webpack_require__("./src/app/main-viewer/ship-rankings/ship-rankings.component.html"),
        styles: [__webpack_require__("./src/app/main-viewer/ship-rankings/ship-rankings.component.css")]
    })
], ShipRankings);

//# sourceMappingURL=ship-rankings.component.js.map

/***/ }),

/***/ "./src/app/misc-functions/edges-functions.functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sortEdges;
function sortEdges(edges) {
    sortEdgesRec(edges, 0, edges.length - 1);
}
function sortEdgesRec(edges, startingIndex, endIndex) {
    if (startingIndex < endIndex) {
        var pivotValue = edges[startingIndex].magnitude;
        var lastEmptyLowIndex = startingIndex;
        // console.log(startingIndex + "-" + endIndex + ":" + pivotValue);
        for (var edgeCounter = startingIndex + 1; edgeCounter < edges.length; edgeCounter++) {
            var magnitude = edges[edgeCounter].magnitude;
            if (magnitude < pivotValue) {
                lastEmptyLowIndex += 1; // Things that have already been swapped can't be swapped out again because of increment
                swapInArray(edges, lastEmptyLowIndex, edgeCounter);
            }
        }
        swapInArray(edges, startingIndex, lastEmptyLowIndex); // Put pivot point in middle (the element at lastEmptyLowIndex is already below pivot, so putting it farther below shouldn't effect it)
        sortEdgesRec(edges, startingIndex, lastEmptyLowIndex); // right before pivot point
        sortEdgesRec(edges, lastEmptyLowIndex + 1, endIndex);
    }
}
function swapInArray(array, swapIndex0, swapIndex1) {
    // Swap
    var tempSwapHolder = array[swapIndex1];
    array[swapIndex1] = array[swapIndex0];
    array[swapIndex0] = tempSwapHolder;
}
//# sourceMappingURL=edges-functions.functions.js.map

/***/ }),

/***/ "./src/app/misc-functions/formatting-functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = capitalizeFirstLetter;
function capitalizeFirstLetter(value) {
    value = value + ""; // Convert value to a string a if it is a number
    if (value.length > 0) {
        var firstLetter = value.substring(0, 1).toUpperCase();
        var restOfString = "";
        if (value.length > 1) {
            restOfString = value.substring(1);
        }
        value = firstLetter + restOfString;
    }
    return value;
}
//# sourceMappingURL=formatting-functions.js.map

/***/ }),

/***/ "./src/app/misc-functions/get-ip.function.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getIP;
function getIP(configObject) {
    var fullIP;
    if (configObject.backendIP == null || configObject.backendIP.length === 0) {
        fullIP = ''; // the ip has been been dynamically set. hopefully the frontend is on the same server as the backend
    }
    else {
        fullIP = 'http://' + configObject.backendIP + ':' + configObject.port;
    }
    return fullIP;
}
//# sourceMappingURL=get-ip.function.js.map

/***/ }),

/***/ "./src/app/misc-functions/ship-ranking-functions.functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = convertDistance;
function convertDistance(distance) {
    // The function will convert distance (lower, the more related) to a relatedness factor (higher, the more related)
    var factor = null;
    var distanceString = "" + distance;
    // for some reason if the distance is infinity in the database, it gets converted to null at some point. so if it's null (infinity), the relatedness should be 0
    if (distance == null || distanceString.toLowerCase() == "infinity") {
        factor = 0;
    }
    else {
        factor = roundValue(1 / distance);
    }
    return factor;
}
function roundValue(value) {
    value = Math.round(value * 100) / 100; // Math.Round rounds to the nearest integer
    var valueString = "" + value; // Sometimes Math.Round does not round to two digits because of the /100. Converting to string automatically rounds
    valueString = valueString.substr(0, 4); // Because of commas
    value = parseFloat(valueString);
    return value;
}
//# sourceMappingURL=ship-ranking-functions.functions.js.map

/***/ }),

/***/ "./src/app/misc-functions/ships-functions.functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = arrayToMap;
function arrayToMap(shipsArray) {
    var shipsMap = {};
    for (var shipCounter = 0; shipCounter < shipsArray.length; shipCounter++) {
        var ship = shipsArray[shipCounter];
        shipsMap[ship.scrapeURL] = ship;
    }
    return shipsMap;
}
//# sourceMappingURL=ships-functions.functions.js.map

/***/ }),

/***/ "./src/app/navbar/app.navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* unused harmony export Option */
/* unused harmony export Range */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_search_service__ = __webpack_require__("./src/app/navbar/app.search-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(changeDetector, searchService) {
        this.changeDetector = changeDetector;
        this.searchService = searchService;
        this.searchEntry = "";
        this.sortBy = "displayName";
        this.sortOrder = "1";
        this.sortByList = this.generateSortBy();
        this.rangeComplement = new Range(0, 0);
        this.rangeFilters = searchService.initialRangeFilters;
    }
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $(document).ready(function () {
            _this.addRangeFilters(_this.rangeFilters); // this.rangeFilters Instantiated in constructor
        });
    };
    NavbarComponent.prototype.addShipButtonClicked = function () {
        this.searchService.toggleAddShip(true);
        console.log(this.rangeComplement);
    };
    NavbarComponent.prototype.addRangeFilters = function (rangeFilters) {
        var navbar = this;
        var _loop_1 = function () {
            var rangeFilter = rangeFilters[filterCounter]; // We don't want this variable to change as the loop changes. Otherwise, all the sliders will have the same key (the key of the final rangeFilter in the array)
            $('#' + rangeFilter.idInDom).ionRangeSlider({
                type: "double",
                grid: true,
                min: rangeFilter.displayMin,
                max: rangeFilter.displayMax,
                from: rangeFilter.minValue,
                to: rangeFilter.maxValue,
                onChange: function (data) {
                },
                onFinish: function (data) {
                    // console.log(data);
                    navbar.changeRangeValue(rangeFilter.key, data.from, data.to);
                }
            });
        };
        for (var filterCounter = 0; filterCounter < rangeFilters.length; filterCounter++) {
            _loop_1();
        }
    };
    // Used to change the values of range complement. Force change detection because the change is made outside of the normal life cycle
    NavbarComponent.prototype.changeRangeValue = function (key, from, to) {
        this.searchService.changeRangeFilter(key, from, to);
    };
    // Generate sortby options
    NavbarComponent.prototype.generateSortBy = function () {
        var sortByList = [];
        var sortBy = [
            { value: "displayName", text: "Name" },
            { value: "complement", text: "Complement" },
            { value: "armament.normalGun.sizeCalculate.numberOfValues", text: "Number of Guns" },
            { value: "armament.normalGun.sizeCalculate.average", text: "Average Size of Guns" },
            { value: "armament.normalGun.sizeCalculate.maxValue", text: "Largest Gun" },
            { value: "armament.normalGun.sizeCalculate.minValue", text: "Smallest Gun" },
            { value: "armament.normalGun.sizeCalculate.sum", text: "Sum of All Guns" },
            { value: "armament.normalGun.sizeCalculate.mode.value", text: "Mode Gun Size" },
            { value: "physicalAttributes.speed.value", text: "Speed" },
        ];
        sortBy.forEach(function (sortByObject) {
            var option = new Option(sortByObject.value, sortByObject.text);
            sortByList.push(option);
        });
        return sortByList;
    };
    //Called whenever the search input changes. the search input is also saved to the searchEntry through the [(ngModel)] property
    NavbarComponent.prototype.searchChange = function (change) {
        this.searchService.changeSearch(this.searchEntry);
        this.searchService.changeSortBy(this.sortBy);
        this.searchService.changeSortOrder(parseInt(this.sortOrder));
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("./src/app/navbar/app.navbar.html"),
        styles: [__webpack_require__("./src/app/navbar/navbar-styles.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_search_service__["a" /* SearchService */]) === "function" && _b || Object])
], NavbarComponent);

var Option = (function () {
    function Option(value, text) {
        this.optionValue = value;
        this.optionText = text;
    }
    return Option;
}());

var Range = (function () {
    function Range(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }
    return Range;
}());

var _a, _b;
//# sourceMappingURL=app.navbar.component.js.map

/***/ }),

/***/ "./src/app/navbar/app.navbar.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"not-dialogue nav-wrapper\">\r\n    <div class=\"brand-wrapper\">\r\n        <div class=\"wrapper-content\">\r\n            <img src=\"/Pictures/Logos/game.png\">\r\n            <h5 class=\"navbar-brand\" href=\"#\">Σ Ship</h5>\r\n            <div class=\"wrapper-background\">\r\n            </div>\r\n        </div>\r\n\r\n        <nav class=\"navbar navbar-expand navbar-light bg-faded\">\r\n              <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n\r\n              </button>\r\n              <div class=\"collapse navbar-collapse tri-container\" id=\"navbarSupportedContent\">\r\n                <ul id=\"left-nav\" class=\"navbar-nav mr-auto\">\r\n                  <li style=\"visibility: hidden;\" id=\"add-ship-button\" class=\"yellow-button\">\r\n                    <a (click) = \"addShipButtonClicked()\">Add Ship</a>\r\n                  </li>\r\n                </ul>\r\n                <ul id=\"middle-nav\" class=\"navbar-nav mr-auto\">\r\n                  <div class=\"tri-container \">\r\n                    <div class=\"tri-left\">\r\n                    </div>\r\n                    <div class=\"tri-middle\">\r\n                      <li class=\"nav-item active\">\r\n                        <input  type=\"text\" placeholder=\"Search...\" [(ngModel)]=\"searchEntry\" (ngModelChange)=\"searchChange($event)\">\r\n                      </li>\r\n                    </div>\r\n                    <div class=\"tri-right\">\r\n                      <div class=\"dropdown\">\r\n                        <div class=\"dropdown-button\">\r\n                          <li class=\"yellow-button\">\r\n                            <a>Sort By</a>\r\n                          </li>\r\n                        </div>\r\n                        <div class=\"dropdown-content\">\r\n                          <div style=\"padding: 10px;\">\r\n                            <select [(ngModel)]=\"sortBy\" (ngModelChange)=\"searchChange($event)\">\r\n                              <option *ngFor=\"let sortByOption of sortByList\" value=\"{{sortByOption.optionValue}}\">{{sortByOption.optionText}}</option>\r\n                            </select>\r\n                            <select [(ngModel)]=\"sortOrder\" (ngModelChange)=\"searchChange($event)\">\r\n                              <option value=\"1\">Ascending</option>\r\n                              <option value=\"-1\">Descending</option>\r\n                            </select>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"dropdown\">\r\n                        <div class=\"dropdown-button\">\r\n                          <li class=\"yellow-button\">\r\n                            <a>More Filters</a>\r\n                          </li>\r\n                        </div>\r\n                        <div class=\"dropdown-content\">\r\n                          <div *ngFor=\"let rangeFilter of rangeFilters\">\r\n                            <label class=\"range-label\">{{rangeFilter.displayName}}</label>\r\n                            <input id=\"{{rangeFilter.idInDom}}\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ul>\r\n                <ul id=\"right-nav\" class=\"navbar-nav mr-auto\">\r\n                  <li id=\"add-ship-button\" class=\"yellow-button\">\r\n                    <a (click) = \"addShipButtonClicked()\">Add Ship</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n        </nav>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/navbar/app.search-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* unused harmony export RangeFilter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Used to share data between the two SIBLING (unrelated) components: navbar and ship-creation
var SearchService = (function () {
    function SearchService() {
        this.searchEntrySource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.sortBySource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("displayName");
        this.sortOrderSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](1);
        this.addShipSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.currentSearch = this.searchEntrySource.asObservable(); // Gets the value of the searchEntrySource object as a dyanimc variable
        this.sortBy = this.sortBySource.asObservable();
        this.sortOrder = this.sortOrderSource.asObservable();
        this.addShip = this.addShipSource.asObservable(); //Get the value of addShp as a dyanimc variable
        this.rangeFiltersSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.generateRangeFilters());
        this.rangeFilters = this.rangeFiltersSource.asObservable();
        this.initialRangeFilters = this.rangeFiltersSource.value;
    }
    SearchService.prototype.changeSearch = function (newSearch) {
        if (newSearch != this.searchEntrySource.value) {
            this.searchEntrySource.next(newSearch);
        }
    };
    SearchService.prototype.changeSortBy = function (newSortBy) {
        if (newSortBy != this.sortBySource.value) {
            this.sortBySource.next(newSortBy);
        }
    };
    SearchService.prototype.changeSortOrder = function (newOrder) {
        if (newOrder != this.sortOrderSource.value) {
            this.sortOrderSource.next(newOrder);
        }
    };
    SearchService.prototype.changeRangeFilter = function (key, minValue, maxValue) {
        var rangeFilters = this.rangeFiltersSource.value;
        var updateMade = false;
        for (var filterCounter = 0; filterCounter < rangeFilters.length && !updateMade; filterCounter++) {
            var filter = rangeFilters[filterCounter];
            if (key == filter.key) {
                // Update values
                filter.minValue = minValue;
                filter.maxValue = maxValue;
                // console.log(key + " updated");
            }
        }
        this.rangeFiltersSource.next(rangeFilters); // The rangeFilters object was updated in the code above
    };
    SearchService.prototype.forceShipUpdate = function () {
        this.sortBySource.next(this.sortBySource.value);
    };
    SearchService.prototype.generateRangeFilters = function () {
        var rangeFilters = [];
        var complementFilter = new RangeFilter('complement', 'Complement', 'complement-range', 0, 5000);
        rangeFilters.push(complementFilter);
        var numberOfGunsFilter = new RangeFilter('armament.normalGun.sizeCalculate.numberOfValues', 'Number of Guns', 'number-of-guns-range', 0, 200);
        rangeFilters.push(numberOfGunsFilter);
        var numberOfGunsFilter = new RangeFilter('armament.normalGun.sizeCalculate.average', 'Average Size of guns (mm)', 'avg-size-range', 0, 350);
        rangeFilters.push(numberOfGunsFilter);
        var numberOfGunsFilter = new RangeFilter('armament.normalGun.sizeCalculate.sum', 'Sum of all Barrels (mm)', 'sum-size-range', 0, 10000);
        rangeFilters.push(numberOfGunsFilter);
        return rangeFilters;
    };
    SearchService.prototype.toggleAddShip = function (newState) {
        this.addShipSource.next(newState);
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SearchService);

var RangeFilter = (function () {
    function RangeFilter(filterKey, displayNameString, id, rangeMin, rangeMax) {
        this.key = filterKey;
        this.displayName = displayNameString;
        // The initial values should just be the minimum and maximum possible of the range slider
        this.minValue = rangeMin;
        this.maxValue = rangeMax;
        this.idInDom = id;
        this.displayMin = rangeMin;
        this.displayMax = rangeMax;
    }
    return RangeFilter;
}());

//# sourceMappingURL=app.search-service.js.map

/***/ }),

/***/ "./src/app/navbar/navbar-styles.css":
/***/ (function(module, exports) {

module.exports = "#left-nav{\r\n\t-ms-flex-preferred-size: 0;\r\n\t    flex-basis: 0;\r\n}\r\n#middle-nav{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\t-ms-flex-preferred-size: 1;\r\n\t    flex-basis: 1;\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex-positive: 1;\r\n\t        flex-grow: 1;\r\n\r\n}\r\n#right-nav{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: end;\r\n\t    -ms-flex-pack: end;\r\n\t        justify-content: flex-end;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\t-ms-flex-preferred-size: 0;\r\n\t    flex-basis: 0;\r\n}\r\n.dropdown {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tmargin-left: 10px;\r\n}\r\n.dropdown:hover .dropdown-content {\r\n\tdisplay: block;\r\n}\r\n.dropdown-content {\r\n\tborder: 1px solid #ffc107;\r\n\t-webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n\t        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\tbackground-color: white;\r\n\twidth: 20vw;\r\n\tmin-width: 100px;\r\n\tpadding: 10px;\r\n}\r\n.nav-wrapper{\r\n\tposition: fixed;\r\n\tz-index: 1;\r\n\twidth: 100vw;\r\n}\r\n.navbar{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\tborder-top: solid 2px rgba(1, 74, 191, .7);\r\n\tborder-bottom: solid 2px rgba(1, 74, 191, .7);\r\n\tbackground:  -webkit-gradient(linear, right top, left top, from(rgba(1, 74, 191, .6)) , to(rgba(20, 44, 81, .6)));\r\n\tbackground:  linear-gradient(to left, rgba(1, 74, 191, .6) , rgba(20, 44, 81, .6));\r\n\tpadding: 0pt;\r\n}\r\n.nav-link-metal{\r\n\tbackground: -webkit-gradient(linear, left top, right top, from(#ada996), color-stop(#f2f2f2), color-stop(#dbdbdb), to(#eaeaea)) !important;\r\n\tbackground: linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea) !important;\r\n\t-webkit-background-clip: text !important;\r\n\t-webkit-text-fill-color: transparent !important;\r\n}\r\n.navbar-brand{\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n\tfont-family: 'Russo One', sans-serif;\r\n\tcolor: rgba(147, 154, 165, 1);\r\n\tfont-size: 35pt;\r\n\tposition: relative;\r\n\tz-index: 2;\r\n\tfont-size: 40pt;\r\n\tcolor: linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea);\r\n}\r\n.navbar-collapse{\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex: 1;\r\n\t        flex: 1;\r\n\twidth: 100%;\r\n\tpadding-left: 5%;\r\n\tpadding-right: 5%;\r\n\tpadding-top: 5px;\r\n\tpadding-bottom: 5px;\r\n}\r\n.navbar-nav{\r\n\twidth: 100%;\r\n\tposition: relative;\r\n}\r\n.range-label {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t    -ms-user-select: none;\r\n\t        user-select: none;\r\n}\r\n.tri-left {\r\n\t-ms-flex-preferred-size: 1;\r\n\t    flex-basis: 1;\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex: 1;\r\n\t        flex: 1;\r\n}\r\n.tri-middle {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n}\r\n.tri-right {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: row;\r\n\t        flex-direction: row;\r\n\t-ms-flex-preferred-size: 1;\r\n\t    flex-basis: 1;\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex: 1;\r\n\t        flex: 1;\r\n}\r\n.tri-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  width: 100%;\r\n}\r\n.yellow-button {\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tbackground-color: #ffc107;\r\n\tborder-top-left-radius: 3px;\r\n\tborder-top-right-radius: 3px;\r\n\tcursor: pointer;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t    -ms-user-select: none;\r\n\t        user-select: none;\r\n  white-space: nowrap;\r\n}\r\n"

/***/ }),

/***/ "./src/app/ship-creation/app.ship-creation-placeholder.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceHolderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Apparently directives' selectors aren't case sensitive?
var PlaceHolderDirective = (function () {
    function PlaceHolderDirective(el) {
        this.el = el;
    }
    PlaceHolderDirective.prototype.ngOnInit = function () {
        this.urlInput = this.el.nativeElement.getElementsByTagName("input")[0];
        this.setPlaceHolder(this.shipURL);
    };
    // Deals with changes to @Inputs
    PlaceHolderDirective.prototype.ngOnChanges = function (changes) {
        this.setPlaceHolder(this.shipURL);
    };
    PlaceHolderDirective.prototype.setPlaceHolder = function (placeHolder) {
        if (placeHolder.length != 0) {
            this.el.nativeElement.setAttribute('value', placeHolder);
        }
    };
    return PlaceHolderDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('creation-input-verify'),
    __metadata("design:type", String)
], PlaceHolderDirective.prototype, "shipURL", void 0);
PlaceHolderDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[creation-input-verify]'
    })
    // Sets the value of an input to the value of an object. If the value of the object changes, the value of the input changes. Relevant if inputs are placed loop, where they are "recreated" whenever the # of loop iterations changes
    // Not really necessary
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], PlaceHolderDirective);

var _a;
//# sourceMappingURL=app.ship-creation-placeholder.directive.js.map

/***/ }),

/***/ "./src/app/ship-creation/app.ship-creation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipCreationComponent; });
/* unused harmony export Ship */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_load_screen_load_screen_service__ = __webpack_require__("./src/app/utilities/load-screen/load-screen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_app_search_service__ = __webpack_require__("./src/app/navbar/app.search-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json__ = __webpack_require__("./config.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__misc_functions_get_ip_function__ = __webpack_require__("./src/app/misc-functions/get-ip.function.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var config = __WEBPACK_IMPORTED_MODULE_4__config_json__;
var ShipCreationComponent = (function () {
    // Inject searchService to share variables and HTTP client to communicate with the backend
    function ShipCreationComponent(loadScreen, searchService, http) {
        this.loadScreen = loadScreen;
        this.searchService = searchService;
        this.http = http;
        this.configObject = config;
    }
    ShipCreationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.currentSearch.subscribe(function (searchEntry) { return _this.searchEntry = searchEntry; });
        this.searchService.addShip.subscribe(function (newState) { return _this.addShipState = newState; });
        this.shipsToAdd = [];
        this.shipsToAdd.push(new Ship("", 0)); // shipsToAdd will have a minimum of one ship
    };
    ShipCreationComponent.prototype.closeCreation = function () {
        this.searchService.toggleAddShip(false);
    };
    ShipCreationComponent.prototype.changeAddShipCount = function (change) {
        if (this.shipsToAdd.length + change >= 1) {
            if (change < 0) {
                change = change * -1;
                this.shipsToAdd.splice(this.shipsToAdd.length - change, change); //Removes change number of ships from shipsToAdd
            }
            else {
                while (change > 0) {
                    this.shipsToAdd.push(new Ship("", 0));
                    change -= 1;
                }
            }
        }
    };
    ShipCreationComponent.prototype.submitShipsToAdd = function () {
        var _this = this;
        this.loadScreen.activateLoadingWithReason("scraping ship");
        var body = {
            ships: this.shipsToAdd
        };
        var fullIP = Object(__WEBPACK_IMPORTED_MODULE_5__misc_functions_get_ip_function__["a" /* getIP */])(this.configObject);
        this.http.post(fullIP + '/ships/scrapeShips', body).subscribe(function (data) {
            console.log("Scrape End Status:" + data);
            _this.searchService.forceShipUpdate();
            _this.loadScreen.deactivateLoadingWithReason("scraping ship");
            _this.closeCreation();
        });
    };
    ShipCreationComponent.prototype.getKeysArray = function (object) {
        return Object.keys(object);
    };
    return ShipCreationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChildren */])('shipURL'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* QueryList */]) === "function" && _a || Object)
], ShipCreationComponent.prototype, "shipURLS", void 0);
ShipCreationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-ship-creation',
        template: __webpack_require__("./src/app/ship-creation/app.ship-creation.html"),
        styles: [__webpack_require__("./src/app/ship-creation/ship-creation-styles.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__utilities_load_screen_load_screen_service__["a" /* LoadScreenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utilities_load_screen_load_screen_service__["a" /* LoadScreenService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__navbar_app_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__navbar_app_search_service__["a" /* SearchService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object])
], ShipCreationComponent);

var Ship = (function () {
    function Ship(urlString, configurationNumber) {
        this.url = urlString;
        this.configuration = configurationNumber;
    }
    return Ship;
}());

var _a, _b, _c, _d;
//# sourceMappingURL=app.ship-creation.component.js.map

/***/ }),

/***/ "./src/app/ship-creation/app.ship-creation.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"addShipState\">\r\n  <div class=\"selected-dialogue\">\r\n      <div class=\"selected-box\">\r\n          <div class=\"selected-frame\">\r\n              <div class=\"selected-box-header\">\r\n                <h1 class=\"title-font metallic-text\">Add Ship</h1>\r\n              </div>\r\n              <div class=\"selected-box-main\">\r\n                <div class=\"allow-y-scroll\">\r\n                  <form>\r\n                    <h4>Add Ships to Database</h4>\r\n                    <div *ngFor=\"let key of getKeysArray(shipsToAdd)\" [creation-input-verify] = \"shipsToAdd[key].url\" >\r\n                      <!-- For some hellish reason, if you make name an array, angular doesn't treat it like an array. SO if one url input was filled it, it validated both as completed --->\r\n                      <input  id=\"{{key}}URL\" [(ngModel)]=\"shipsToAdd[key].url\" name=\"url{{key}}\"  placeHolder=\"Wikipedia URL\"  #shipURL=\"ngModel\" createShipValidator required>\r\n                      <input [(ngModel)]=\"shipsToAdd[key].configuration\" name=\"configuration{{key}}\" placeholder=\"0\" type=\"number\" min=\"0\" required>\r\n                      <div *ngIf = \"!shipURL.valid && !shipURL.pristine\" id=\"{{key}}URL-error\" class=\"alert alert-danger\" >\r\n                        <p *ngIf = \"shipURL.errors.required\">A URL is required </p>\r\n                        <p *ngIf = \"(shipURL.errors.containsWikipediaLink != null) && !shipURL.errors.required\">The URL must direct to a Wikipedia page </p>\r\n                      </div>\r\n                    </div>\r\n                    <button type=\"button\" (click) = \"changeAddShipCount(1)\">Add one more ship</button>\r\n                    <button type=\"button\" (click) = \"changeAddShipCount(-1)\">Remove ship</button>\r\n                    <button type=\"button\" (click) =\"submitShipsToAdd()\">Add Ships</button>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"wrapper-background\">\r\n          </div>\r\n      </div>\r\n      <div class=\"glass-pane\" (click)=\"closeCreation()\">\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ship-creation/ship-creation-styles.css":
/***/ (function(module, exports) {

module.exports = ".ng-invalid:not(form) {\r\n  border-right: 5px solid #a94442;\r\n}\r\n"

/***/ }),

/***/ "./src/app/utilities/load-screen/load-screen.component.css":
/***/ (function(module, exports) {

module.exports = ".load-active {\r\n  display: block !important;\r\n}\r\n.load-content {\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 100%;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  width: 100%;\r\n}\r\n.load-wrapper {\r\n  background-color: rgba(100, 100, 100, .5);\r\n  display: none;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n"

/***/ }),

/***/ "./src/app/utilities/load-screen/load-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"load-wrapper\" class=\"load-wrapper\">\r\n  <div class=\"load-content\">\r\n    <div>\r\n      <img class=\"load-icon fa-spin\" src=\"/Pictures/Icons/load.png\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/utilities/load-screen/load-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__load_screen_service__ = __webpack_require__("./src/app/utilities/load-screen/load-screen.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadScreen = (function () {
    function LoadScreen(loadScreenService) {
        var _this = this;
        this.loadScreenService = loadScreenService;
        loadScreenService.activateObservable.subscribe(function (reason) {
            _this.activateLoadingWithReason(reason);
        });
        loadScreenService.deactivateObservable.subscribe(function (reason) {
            _this.deactivateLoadingWithReason(reason);
        });
    }
    LoadScreen.prototype.ngOnInit = function () {
        this.loading = false;
        this.loadingReasons = {};
    };
    // General Functions
    // Get loading reasons in the form of an array
    LoadScreen.prototype.getLoadingReasons = function () {
        return Object.keys(this.loadingReasons);
    };
    // Will completely reset loading. Will essentially deactive loading no matter how many reasons there are
    LoadScreen.prototype.resetLoading = function () {
        this.loadingReasons = {};
        this.deactivateLoading();
    };
    // General Functions End
    // Load Screen Toggle Functions
    LoadScreen.prototype.activateLoadingWithReason = function (reason) {
        if (reason.length > 0) {
            if (this.loadingReasons[reason] == null) {
                this.loadingReasons[reason] = true; // Add it to the "reasons" HashMap
                this.activateLoading();
            }
        }
    };
    LoadScreen.prototype.deactivateLoadingWithReason = function (reason) {
        if (reason.length > 0) {
            if (this.loadingReasons[reason] != null) {
                delete this.loadingReasons[reason]; // Remove it from the "reasons" HashMap
            }
            if (Object.keys(this.loadingReasons).length == 0) {
                this.deactivateLoading();
            }
        }
    };
    // Load Screen Toggle Functions End
    // Private Functions Begin
    // Toggle functions Begin
    LoadScreen.prototype.activateLoading = function () {
        if (!this.loading) {
            this.loading = true;
            var loadWrapper = document.getElementById("load-wrapper");
            loadWrapper.classList.add("load-active");
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
        }
    };
    LoadScreen.prototype.deactivateLoading = function () {
        if (this.loading) {
            this.loading = false;
            var loadWrapper = document.getElementById("load-wrapper");
            loadWrapper.classList.remove("load-active");
            document.getElementsByTagName("body")[0].style.overflow = "auto";
        }
    };
    return LoadScreen;
}());
LoadScreen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'load-screen',
        template: __webpack_require__("./src/app/utilities/load-screen/load-screen.component.html"),
        styles: [__webpack_require__("./src/app/utilities/load-screen/load-screen.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__load_screen_service__["a" /* LoadScreenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__load_screen_service__["a" /* LoadScreenService */]) === "function" && _a || Object])
], LoadScreen);

var _a;
//# sourceMappingURL=load-screen.component.js.map

/***/ }),

/***/ "./src/app/utilities/load-screen/load-screen.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadScreenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");

var LoadScreenService = (function () {
    function LoadScreenService() {
        this.activateLoadingReasonSource = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.deactivateLoadingReasonSource = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        // observables for other classes
        this.activateObservable = this.activateLoadingReasonSource.asObservable();
        this.deactivateObservable = this.deactivateLoadingReasonSource.asObservable();
    }
    LoadScreenService.prototype.activateLoadingWithReason = function (reason) {
        this.activateLoadingReasonSource.next(reason);
    };
    LoadScreenService.prototype.deactivateLoadingWithReason = function (reason) {
        this.deactivateLoadingReasonSource.next(reason);
    };
    return LoadScreenService;
}());

//# sourceMappingURL=load-screen.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map