webpackJsonp([9],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Ero\Desktop\TDD\TDD\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar color="danger">\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Ero\Desktop\TDD\TDD\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TodayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TodayPage = (function () {
    function TodayPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TodayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TodayPage');
    };
    return TodayPage;
}());
TodayPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-today',template:/*ion-inline-start:"C:\Users\Ero\Desktop\TDD\TDD\src\pages\today\today.html"*/'<!--\n\n  Generated template for the TodayPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>today</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-content >\n\n    <ion-fab top right edge>\n\n      <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n\n      \n\n    </ion-fab>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Ero\Desktop\TDD\TDD\src\pages\today\today.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TodayPage);

//# sourceMappingURL=today.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/filter/filter.module": [
		289,
<<<<<<< HEAD
		8
	],
	"../pages/login/login.module": [
		281,
		7
	],
	"../pages/masterplan/masterplan.module": [
		287,
		6
	],
	"../pages/newproject/newproject.module": [
		286,
		5
	],
	"../pages/nextweek/nextweek.module": [
		283,
		4
	],
	"../pages/parents/parents.module": [
		288,
		3
	],
	"../pages/teacherlist/teacherlist.module": [
		285,
		2
	],
	"../pages/teacherselect/teacherselect.module": [
		284,
		1
	],
	"../pages/today/today.module": [
		282,
		0
=======
		17
	],
	"../pages/login/login.module": [
		281,
		16
	],
	"../pages/newproject/newproject.module": [
		286,
		15
	],
	"../pages/nextweek/nextweek.module": [
		285,
		14
	],
	"../pages/teacherlist/teacherlist.module": [
		283,
		13
	],
	"../pages/teacherselect/teacherselect.module": [
		282,
		12
	],
	"../pages/today/today.module": [
		284,
		11
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherselectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(100);
=======
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeacherselectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TeacherselectPage = (function () {
    function TeacherselectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
<<<<<<< HEAD
        this.filter = 'projects';
        this.category = [];
        var data = {
            name: 'หมวดหมู่ใหญ่',
            showSubmenu: false,
            sub: [{
                    name: 'หมวดหมู่ย่อยv1',
                    showSubmenu: false,
                    sub: [{
                            name: 'หมวดหมู่ย่อยv2',
                            showSubmenu: false,
                            sub: [{
                                    name: 'หมวดหมู่ย่อยv3',
                                    showSubmenu: false
                                }]
                        }]
                },
                {
                    name: 'หมวดหมู่ย่อย'
                },
                {
                    name: 'หมวดหมู่ย่อย'
                }]
        };
        this.category.push(data);
    }
    HomePage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.menuItemHandler = function (item, object) {
        item.showSubmenu = item.showSubmenu ? false : true;
=======
        this.navParams = navParams;
    }
    TeacherselectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherselectPage');
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
    };
    return TeacherselectPage;
}());
TeacherselectPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-home',template:/*ion-inline-start:"D:\C@net\TDD\TDD\src\pages\home\home.html"*/'<ion-header>\n  <ion-toolbar color="danger">\n    <ion-buttons start>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="ios-notifications-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3>\n            <img class="image-profile" src="assets/userprofile.jpg" alt="">\n          </ion-col>\n          <ion-col col-9>Kanitthakan</ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="gotoLogin()">\n        <ion-icon name="ios-settings-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-icon name="ios-calendar-outline" item-start></ion-icon>\n      Today\n      <p item-end>1</p>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-calendar-outline" item-start>\n        <p class="custom-next7day">+7</p>\n      </ion-icon>\n      Next 7 Days\n      <p item-end>7</p>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <ion-segment [(ngModel)]="filter">\n      <ion-segment-button value="projects">\n        <label class="font-black">Projects</label>\n      </ion-segment-button>\n      <ion-segment-button class="font-black" value="filters">\n        <label class="font-black">Filters</label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="filter">\n    <ion-list *ngSwitchCase="\'projects\'">\n      <!-- <ion-item>\n        <ion-icon name="ios-paper" item-start></ion-icon>\n        Herbology\n      </ion-item> -->\n      <!-- <ul> -->\n      <!-- <ion-icon name="ios-paper" item-start></ion-icon> -->\n      <div *ngFor="let object of category; let index = index;">\n        <button ion-item (click)="menuItemHandler(object,object)" [ngClass]="{\'active\' : showSubmenu === index}"><ion-icon name="ios-paper" item-start></ion-icon> {{object.name}}\n        </button>\n        <ion-item-group submenu [class.visible]="object.showSubmenu === true" *ngFor="let sub of object.sub">\n          <ion-item submenu-item menuClose (click)="menuItemHandler(sub,object)">\n            <ion-icon name="ios-paper" item-start></ion-icon> {{sub.name}}</ion-item>\n          <ion-item-group submenu [class.visible]="sub.showSubmenu === true" *ngFor="let v1 of sub.sub">\n            <ion-item submenu-item menuClose (click)="menuItemHandler(v1,object)">\n              <ion-icon name="ios-paper" item-start></ion-icon> {{v1.name}}</ion-item>\n            <ion-item-group submenu [class.visible]="v1.showSubmenu === true" *ngFor="let v2 of v1.sub">\n              <ion-item submenu-item menuClose>\n                <ion-icon name="ios-paper" item-start></ion-icon> {{v2.name}}</ion-item>\n            </ion-item-group>\n          </ion-item-group>\n        </ion-item-group>\n      </div>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'filters\'">\n      <ion-item>\n        <ion-icon name="ios-clipboard-outline" item-start></ion-icon>\n        Assigned to me\n      </ion-item>\n      <ion-item>\n        <ion-icon name="ios-clipboard-outline" item-start></ion-icon>\n        Assigned to others\n      </ion-item>\n      <ion-item>\n        <ion-icon name="ios-clipboard-outline" item-start></ion-icon>\n        Priority 1\n      </ion-item>\n      <ion-item>\n        <ion-icon name="ios-clipboard-outline" item-start></ion-icon>\n        Priority 2\n      </ion-item>\n      <ion-item>\n        <ion-icon name="ios-clipboard-outline" item-start></ion-icon>\n        Priority 3\n      </ion-item>\n      <ion-item>\n        <ion-icon name="ios-clipboard-outline" item-start></ion-icon>\n        Priority 4\n      </ion-item>\n      <ion-item>\n        <ion-icon name="ios-clipboard-outline" item-start></ion-icon>\n        Priority 5\n      </ion-item>\n      <ion-item>\n        <ion-icon name="ios-clipboard-outline" item-start></ion-icon>\n        View all\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\C@net\TDD\TDD\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TodayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TodayPage = (function () {
    function TodayPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TodayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TodayPage');
    };
    return TodayPage;
}());
TodayPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-today',template:/*ion-inline-start:"D:\C@net\TDD\TDD\src\pages\today\today.html"*/'<!--\n  Generated template for the TodayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>today</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\C@net\TDD\TDD\src\pages\today\today.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TodayPage);

//# sourceMappingURL=today.js.map
=======
        selector: 'page-teacherselect',template:/*ion-inline-start:"C:\Users\Ero\Desktop\TDD\TDD\src\pages\teacherselect\teacherselect.html"*/'<!--\n\n  Generated template for the TeacherselectPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>teacherselect</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n \n\n <ion-list inset>\n\n  <button ion-item>\n\n  Add from Project\n\n  </button> \n\n  <button ion-item>\n\n   Add from  Contact\n\n  </button>\n\n</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ero\Desktop\TDD\TDD\src\pages\teacherselect\teacherselect.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TeacherselectPage);

//# sourceMappingURL=teacherselect.js.map
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextweekPage; });
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherlistPage; });
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
<<<<<<< HEAD
 * Generated class for the NextweekPage page.
=======
 * Generated class for the TeacherlistPage page.
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
<<<<<<< HEAD
var NextweekPage = (function () {
    function NextweekPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NextweekPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NextweekPage');
    };
    return NextweekPage;
}());
NextweekPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-nextweek',template:/*ion-inline-start:"D:\C@net\TDD\TDD\src\pages\nextweek\nextweek.html"*/'<!--\n  Generated template for the NextweekPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>nextweek</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\C@net\TDD\TDD\src\pages\nextweek\nextweek.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], NextweekPage);

//# sourceMappingURL=nextweek.js.map
=======
var TeacherlistPage = (function () {
    function TeacherlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TeacherlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherlistPage');
    };
    return TeacherlistPage;
}());
TeacherlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-teacherlist',template:/*ion-inline-start:"C:\Users\Ero\Desktop\TDD\TDD\src\pages\teacherlist\teacherlist.html"*/'<!--\n\n  Generated template for the TeacherlistPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>teacherlist</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n  <ion-label>Daenerys Targaryen</ion-label>\n\n  <ion-checkbox color="dark" checked="true"></ion-checkbox>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <ion-label>Arya Stark</ion-label>\n\n  <ion-checkbox ></ion-checkbox>\n\n</ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ero\Desktop\TDD\TDD\src\pages\teacherlist\teacherlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TeacherlistPage);

//# sourceMappingURL=teacherlist.js.map
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherselectPage; });
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextweekPage; });
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
<<<<<<< HEAD
 * Generated class for the TeacherselectPage page.
=======
 * Generated class for the NextweekPage page.
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
<<<<<<< HEAD
var TeacherselectPage = (function () {
    function TeacherselectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TeacherselectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherselectPage');
    };
    return TeacherselectPage;
}());
TeacherselectPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-teacherselect',template:/*ion-inline-start:"D:\C@net\TDD\TDD\src\pages\teacherselect\teacherselect.html"*/'<!--\n  Generated template for the TeacherselectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>teacherselect</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\C@net\TDD\TDD\src\pages\teacherselect\teacherselect.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TeacherselectPage);

//# sourceMappingURL=teacherselect.js.map
=======
var NextweekPage = (function () {
    function NextweekPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NextweekPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NextweekPage');
    };
    return NextweekPage;
}());
NextweekPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-nextweek',template:/*ion-inline-start:"C:\Users\Ero\Desktop\TDD\TDD\src\pages\nextweek\nextweek.html"*/'<!--\n\n  Generated template for the NextweekPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>nextweek</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  <ion-fab top right edge>\n\n      <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n    <ion-list inset>\n\n  <button ion-item>\n\n  Add from Project\n\n  </button> \n\n  <button ion-item>\n\n   Add from  Contact\n\n  </button>\n\n</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ero\Desktop\TDD\TDD\src\pages\nextweek\nextweek.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], NextweekPage);

//# sourceMappingURL=nextweek.js.map
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherlistPage; });
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewprojectPage; });
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
<<<<<<< HEAD
 * Generated class for the TeacherlistPage page.
=======
 * Generated class for the NewprojectPage page.
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
<<<<<<< HEAD
var TeacherlistPage = (function () {
    function TeacherlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TeacherlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherlistPage');
    };
    return TeacherlistPage;
}());
TeacherlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-teacherlist',template:/*ion-inline-start:"D:\C@net\TDD\TDD\src\pages\teacherlist\teacherlist.html"*/'<!--\n  Generated template for the TeacherlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>teacherlist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\C@net\TDD\TDD\src\pages\teacherlist\teacherlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TeacherlistPage);

//# sourceMappingURL=teacherlist.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewprojectPage; });
=======
var NewprojectPage = (function () {
    function NewprojectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewprojectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewprojectPage');
    };
    return NewprojectPage;
}());
NewprojectPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-newproject',template:/*ion-inline-start:"C:\Users\Ero\Desktop\TDD\TDD\src\pages\newproject\newproject.html"*/'<!--\n\n  Generated template for the NewprojectPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Newproject</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n  <ion-item >\n\n    <ion-label stacked color="danger" >Name</ion-label>\n\n    <ion-input type="text" color="danger"></ion-input>\n\n  </ion-item>\n\n\n\n  <!-- MasterPlan -->\n\n  <ion-item>\n\n   <ion-label stacked color="danger">MasterPlan</ion-label>\n\n  <ion-select [(ngModel)]="MasterPlan">\n\n    <ion-option value="f">1</ion-option>\n\n    <ion-option value="m">2</ion-option>\n\n    <ion-option value="n">3</ion-option>\n\n  </ion-select>\n\n  </ion-item>\n\n\n\n  <!-- Teacher -->\n\n<ion-item>\n\n   <ion-label stacked color="danger">Teacher</ion-label>\n\n  <ion-select [(ngModel)]="Teacher">\n\n    <ion-option value="f">บ๊วย</ion-option>\n\n    <ion-option value="m">พิ้งค์</ion-option>\n\n    <ion-option value="n">แหม่ม</ion-option>\n\n  </ion-select>\n\n  </ion-item>\n\n\n\n  <!--Add collaborators  -->\n\n<ion-item>\n\n   <ion-label stacked color="danger" >Collaborators</ion-label>\n\n    <ion-input type="text" color="danger"></ion-input>\n\n</ion-item>\n\n\n\n\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ero\Desktop\TDD\TDD\src\pages\newproject\newproject.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], NewprojectPage);

//# sourceMappingURL=newproject.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
<<<<<<< HEAD
 * Generated class for the NewprojectPage page.
=======
 * Generated class for the FilterPage page.
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
<<<<<<< HEAD
var NewprojectPage = (function () {
    function NewprojectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewprojectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewprojectPage');
    };
    return NewprojectPage;
}());
NewprojectPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-newproject',template:/*ion-inline-start:"D:\C@net\TDD\TDD\src\pages\newproject\newproject.html"*/'<!--\n  Generated template for the NewprojectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>newproject</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\C@net\TDD\TDD\src\pages\newproject\newproject.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], NewprojectPage);

//# sourceMappingURL=newproject.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterplanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MasterplanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MasterplanPage = (function () {
    function MasterplanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MasterplanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MasterplanPage');
    };
    return MasterplanPage;
}());
MasterplanPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-masterplan',template:/*ion-inline-start:"D:\C@net\TDD\TDD\src\pages\masterplan\masterplan.html"*/'<!--\n  Generated template for the MasterplanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>masterplan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\C@net\TDD\TDD\src\pages\masterplan\masterplan.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], MasterplanPage);

//# sourceMappingURL=masterplan.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
=======
var FilterPage = (function () {
    function FilterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterPage');
    };
    return FilterPage;
}());
FilterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filter',template:/*ion-inline-start:"C:\Users\Ero\Desktop\TDD\TDD\src\pages\filter\filter.html"*/'<!--\n\n  Generated template for the FilterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>filter</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-list>\n\n\n\n\n\n  <!-- item1 -->\n\n  <ion-item>\n\n    <ion-avatar item-start>\n\n      <img src="img/avatar-finn.png">\n\n    </ion-avatar>\n\n    <h2>test projectI</h2>\n\n    <h3>descriptionI</h3>\n\n    <p>times</p>\n\n  </ion-item>\n\n\n\n<!-- item2 -->\n\n   <ion-item>\n\n    <ion-avatar item-start>\n\n      <img src="img/avatar-finn.png">\n\n    </ion-avatar>\n\n    <h2>test projectII</h2>\n\n    <h3>descriptionII</h3>\n\n    <p>times</p>\n\n  </ion-item>\n\n\n\n\n\n \n\n\n\n\n\n\n\n</ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ero\Desktop\TDD\TDD\src\pages\filter\filter.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], FilterPage);

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_today_today__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_nextweek_nextweek__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_teacherselect_teacherselect__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_teacherlist_teacherlist__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_newproject_newproject__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_filter_filter__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_today_today_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_nextweek_nextweek_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_teacherselect_teacherselect_service__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_teacherlist_teacherlist_service__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_newproject_newproject_service__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_filter_filter_service__ = __webpack_require__(280);
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


<<<<<<< HEAD
/**
 * Generated class for the ParentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ParentsPage = (function () {
    function ParentsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ParentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParentsPage');
    };
    return ParentsPage;
}());
ParentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-parents',template:/*ion-inline-start:"D:\C@net\TDD\TDD\src\pages\parents\parents.html"*/'<!--\n  Generated template for the ParentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>parents</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\C@net\TDD\TDD\src\pages\parents\parents.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ParentsPage);

//# sourceMappingURL=parents.js.map
=======



>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5


<<<<<<< HEAD
/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FilterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FilterPage = (function () {
    function FilterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterPage');
    };
    return FilterPage;
}());
FilterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filter',template:/*ion-inline-start:"D:\C@net\TDD\TDD\src\pages\filter\filter.html"*/'<!--\n  Generated template for the FilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>filter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\C@net\TDD\TDD\src\pages\filter\filter.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], FilterPage);

//# sourceMappingURL=filter.js.map
=======






>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5


<<<<<<< HEAD
/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_today_today__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_nextweek_nextweek__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_teacherselect_teacherselect__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_teacherlist_teacherlist__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_newproject_newproject__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_masterplan_masterplan__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_parents_parents__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_filter_filter__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_today_today_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_nextweek_nextweek_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_teacherselect_teacherselect_service__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_teacherlist_teacherlist_service__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_newproject_newproject_service__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_masterplan_masterplan_service__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_parents_parents_service__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_filter_filter_service__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
=======


>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5




<<<<<<< HEAD





















=======
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_today_today__["a" /* TodayPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_nextweek_nextweek__["a" /* NextweekPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_teacherselect_teacherselect__["a" /* TeacherselectPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_teacherlist_teacherlist__["a" /* TeacherlistPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_newproject_newproject__["a" /* NewprojectPage */],
<<<<<<< HEAD
            __WEBPACK_IMPORTED_MODULE_13__pages_masterplan_masterplan__["a" /* MasterplanPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_parents_parents__["a" /* ParentsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_filter_filter__["a" /* FilterPage */]
=======
            __WEBPACK_IMPORTED_MODULE_13__pages_filter_filter__["a" /* FilterPage */]
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                mode: 'md'
            }, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
<<<<<<< HEAD
                    { loadChildren: '../pages/today/today.module#TodayPageModule', name: 'TodayPage', segment: 'today', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/nextweek/nextweek.module#NextweekPageModule', name: 'NextweekPage', segment: 'nextweek', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/teacherselect/teacherselect.module#TeacherselectPageModule', name: 'TeacherselectPage', segment: 'teacherselect', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/teacherlist/teacherlist.module#TeacherlistPageModule', name: 'TeacherlistPage', segment: 'teacherlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newproject/newproject.module#NewprojectPageModule', name: 'NewprojectPage', segment: 'newproject', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/masterplan/masterplan.module#MasterplanPageModule', name: 'MasterplanPage', segment: 'masterplan', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/parents/parents.module#ParentsPageModule', name: 'ParentsPage', segment: 'parents', priority: 'low', defaultHistory: [] },
=======
                    { loadChildren: '../pages/teacherselect/teacherselect.module#TeacherselectPageModule', name: 'TeacherselectPage', segment: 'teacherselect', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/teacherlist/teacherlist.module#TeacherlistPageModule', name: 'TeacherlistPage', segment: 'teacherlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/today/today.module#TodayPageModule', name: 'TodayPage', segment: 'today', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/nextweek/nextweek.module#NextweekPageModule', name: 'NextweekPage', segment: 'nextweek', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newproject/newproject.module#NewprojectPageModule', name: 'NewprojectPage', segment: 'newproject', priority: 'low', defaultHistory: [] },
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
                    { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_today_today__["a" /* TodayPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_nextweek_nextweek__["a" /* NextweekPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_teacherselect_teacherselect__["a" /* TeacherselectPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_teacherlist_teacherlist__["a" /* TeacherlistPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_newproject_newproject__["a" /* NewprojectPage */],
<<<<<<< HEAD
            __WEBPACK_IMPORTED_MODULE_13__pages_masterplan_masterplan__["a" /* MasterplanPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_parents_parents__["a" /* ParentsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_filter_filter__["a" /* FilterPage */]
=======
            __WEBPACK_IMPORTED_MODULE_13__pages_filter_filter__["a" /* FilterPage */]
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
<<<<<<< HEAD
            __WEBPACK_IMPORTED_MODULE_16__pages_login_login_service__["a" /* LoginServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_17__pages_today_today_service__["a" /* TodayServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_18__pages_nextweek_nextweek_service__["a" /* NextweekServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_19__pages_teacherselect_teacherselect_service__["a" /* TeacherselectServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_20__pages_teacherlist_teacherlist_service__["a" /* TeacherlistServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_21__pages_newproject_newproject_service__["a" /* NewprojectServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_22__pages_masterplan_masterplan_service__["a" /* MasterplanServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_23__pages_parents_parents_service__["a" /* ParentsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_24__pages_filter_filter_service__["a" /* FilterServiceProvider */]
=======
            __WEBPACK_IMPORTED_MODULE_14__pages_login_login_service__["a" /* LoginServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_15__pages_today_today_service__["a" /* TodayServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_16__pages_nextweek_nextweek_service__["a" /* NextweekServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_17__pages_teacherselect_teacherselect_service__["a" /* TeacherselectServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_18__pages_teacherlist_teacherlist_service__["a" /* TeacherlistServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_19__pages_newproject_newproject_service__["a" /* NewprojectServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_20__pages_filter_filter_service__["a" /* FilterServiceProvider */]
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 271:
=======
/***/ 270:
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(271);
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


<<<<<<< HEAD



var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\C@net\TDD\TDD\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\C@net\TDD\TDD\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map
=======
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5


<<<<<<< HEAD
/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LoginServiceProvider = (function () {
    function LoginServiceProvider(http) {
        this.http = http;
        console.log('Hello LoginServiceProvider Provider');
    }
    return LoginServiceProvider;
}());
LoginServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], LoginServiceProvider);

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodayServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
=======

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Ero\Desktop\TDD\TDD\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Ero\Desktop\TDD\TDD\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
], MyApp);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(100);
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



<<<<<<< HEAD
/*
  Generated class for the TodayServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var TodayServiceProvider = (function () {
    function TodayServiceProvider(http) {
        this.http = http;
        console.log('Hello TodayServiceProvider Provider');
    }
    return TodayServiceProvider;
}());
TodayServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], TodayServiceProvider);

//# sourceMappingURL=today-service.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextweekServiceProvider; });
=======
var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.filter = 'projects';
        this.category = [];
        for (var i = 20; i > 0; i--) {
            var data = {
                name: 'หมวดหมู่',
                showSubmenu: false,
                sub: [{
                        name: 'หมวดหมู่ย่อย'
                    },
                    {
                        name: 'หมวดหมู่ย่อย'
                    },
                    {
                        name: 'หมวดหมู่ย่อย'
                    }]
            };
            this.category.push(data);
        }
    }
    HomePage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.menuItemHandler = function (index) {
        this.showSubmenu = this.showSubmenu === index ? -1 : index;
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Ero\Desktop\TDD\TDD\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-toolbar color="danger">\n\n    <ion-buttons start>\n\n      <button ion-button icon-only color="royal">\n\n        <ion-icon name="ios-notifications-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <img class="image-profile" src="assets/userprofile.jpg" alt="">\n\n          </ion-col>\n\n          <ion-col col-9>Kanitthakan</ion-col>\n\n\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal" (click)="gotoLogin()">\n\n        <ion-icon name="ios-settings-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-icon name="ios-calendar-outline" item-start></ion-icon>\n\n      Today\n\n      <p item-end>1</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="ios-calendar-outline" item-start>\n\n        <p class="custom-next7day">+7</p>\n\n      </ion-icon>\n\n      Next 7 Days\n\n      <p item-end>7</p>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <div padding>\n\n    <ion-segment [(ngModel)]="filter">\n\n      <ion-segment-button value="projects">\n\n        <label class="font-black">Projects</label>\n\n      </ion-segment-button>\n\n      <ion-segment-button class="font-black" value="filters">\n\n        <label class="font-black">Filters</label>\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="filter">\n\n    <ion-list *ngSwitchCase="\'projects\'">\n\n      <!-- <ion-item>\n\n        <ion-icon name="ios-paper" item-start></ion-icon>\n\n        Herbology\n\n      </ion-item> -->\n\n      <!-- <ul> -->\n\n      <!-- <ion-icon name="ios-paper" item-start></ion-icon> -->\n\n      <div *ngFor="let cate of category; let index = index;">\n\n        <button ion-item (click)="menuItemHandler(index)" [ngClass]="{\'active\' : showSubmenu === index}">{{cate.name}}\n\n          <!-- <ion-avatar item-start>\n\n            <img src="./assets/images/category.png">\n\n          </ion-avatar> -->\n\n        </button>\n\n        <ion-item-group submenu [class.visible]="showSubmenu === index" *ngFor="let sub of cate.sub">\n\n          <ion-item submenu-item menuClose> - {{sub.name}}</ion-item>\n\n        </ion-item-group>\n\n      </div>\n\n\n\n       \n\n\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'filters\'">\n\n      <ion-item>\n\n        <ion-icon name="ios-clipboard-outline" item-start></ion-icon>\n\n        Assigned to me\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="ios-clipboard-outline" item-start></ion-icon>\n\n        Assigned to others\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="ios-clipboard-outline" item-start></ion-icon>\n\n        Priority 1\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="ios-clipboard-outline" item-start></ion-icon>\n\n        Priority 2\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="ios-clipboard-outline" item-start></ion-icon>\n\n        Priority 3\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="ios-clipboard-outline" item-start></ion-icon>\n\n        Priority 4\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="ios-clipboard-outline" item-start></ion-icon>\n\n        Priority 5\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="ios-clipboard-outline" item-start></ion-icon>\n\n        View all\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Ero\Desktop\TDD\TDD\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
<<<<<<< HEAD
  Generated class for the NextweekServiceProvider provider.
=======
  Generated class for the LoginServiceProvider provider.
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
<<<<<<< HEAD
var NextweekServiceProvider = (function () {
    function NextweekServiceProvider(http) {
        this.http = http;
        console.log('Hello NextweekServiceProvider Provider');
    }
    return NextweekServiceProvider;
}());
NextweekServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], NextweekServiceProvider);

//# sourceMappingURL=nextweek-service.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherselectServiceProvider; });
=======
var LoginServiceProvider = (function () {
    function LoginServiceProvider(http) {
        this.http = http;
        console.log('Hello LoginServiceProvider Provider');
    }
    return LoginServiceProvider;
}());
LoginServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], LoginServiceProvider);

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodayServiceProvider; });
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
<<<<<<< HEAD
  Generated class for the TeacherselectServiceProvider provider.
=======
  Generated class for the TodayServiceProvider provider.
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
<<<<<<< HEAD
var TeacherselectServiceProvider = (function () {
    function TeacherselectServiceProvider(http) {
        this.http = http;
        console.log('Hello TeacherselectServiceProvider Provider');
    }
    return TeacherselectServiceProvider;
}());
TeacherselectServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], TeacherselectServiceProvider);

//# sourceMappingURL=teacherselect-service.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherlistServiceProvider; });
=======
var TodayServiceProvider = (function () {
    function TodayServiceProvider(http) {
        this.http = http;
        console.log('Hello TodayServiceProvider Provider');
    }
    return TodayServiceProvider;
}());
TodayServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], TodayServiceProvider);

//# sourceMappingURL=today-service.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextweekServiceProvider; });
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
<<<<<<< HEAD
  Generated class for the TeacherlistServiceProvider provider.
=======
  Generated class for the NextweekServiceProvider provider.
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
<<<<<<< HEAD
var TeacherlistServiceProvider = (function () {
    function TeacherlistServiceProvider(http) {
        this.http = http;
        console.log('Hello TeacherlistServiceProvider Provider');
    }
    return TeacherlistServiceProvider;
}());
TeacherlistServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], TeacherlistServiceProvider);

//# sourceMappingURL=teacherlist-service.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewprojectServiceProvider; });
=======
var NextweekServiceProvider = (function () {
    function NextweekServiceProvider(http) {
        this.http = http;
        console.log('Hello NextweekServiceProvider Provider');
    }
    return NextweekServiceProvider;
}());
NextweekServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], NextweekServiceProvider);

//# sourceMappingURL=nextweek-service.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherselectServiceProvider; });
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
<<<<<<< HEAD
  Generated class for the NewprojectServiceProvider provider.
=======
  Generated class for the TeacherselectServiceProvider provider.
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
<<<<<<< HEAD
var NewprojectServiceProvider = (function () {
    function NewprojectServiceProvider(http) {
        this.http = http;
        console.log('Hello NewprojectServiceProvider Provider');
    }
    return NewprojectServiceProvider;
}());
NewprojectServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], NewprojectServiceProvider);

//# sourceMappingURL=newproject-service.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterplanServiceProvider; });
=======
var TeacherselectServiceProvider = (function () {
    function TeacherselectServiceProvider(http) {
        this.http = http;
        console.log('Hello TeacherselectServiceProvider Provider');
    }
    return TeacherselectServiceProvider;
}());
TeacherselectServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], TeacherselectServiceProvider);

//# sourceMappingURL=teacherselect-service.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherlistServiceProvider; });
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
<<<<<<< HEAD
  Generated class for the MasterplanServiceProvider provider.
=======
  Generated class for the TeacherlistServiceProvider provider.
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
<<<<<<< HEAD
var MasterplanServiceProvider = (function () {
    function MasterplanServiceProvider(http) {
        this.http = http;
        console.log('Hello MasterplanServiceProvider Provider');
    }
    return MasterplanServiceProvider;
}());
MasterplanServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], MasterplanServiceProvider);

//# sourceMappingURL=masterplan-service.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentsServiceProvider; });
=======
var TeacherlistServiceProvider = (function () {
    function TeacherlistServiceProvider(http) {
        this.http = http;
        console.log('Hello TeacherlistServiceProvider Provider');
    }
    return TeacherlistServiceProvider;
}());
TeacherlistServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], TeacherlistServiceProvider);

//# sourceMappingURL=teacherlist-service.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewprojectServiceProvider; });
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
<<<<<<< HEAD
  Generated class for the ParentsServiceProvider provider.
=======
  Generated class for the NewprojectServiceProvider provider.
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
<<<<<<< HEAD
var ParentsServiceProvider = (function () {
    function ParentsServiceProvider(http) {
        this.http = http;
        console.log('Hello ParentsServiceProvider Provider');
    }
    return ParentsServiceProvider;
}());
ParentsServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ParentsServiceProvider);

//# sourceMappingURL=parents-service.js.map
=======
var NewprojectServiceProvider = (function () {
    function NewprojectServiceProvider(http) {
        this.http = http;
        console.log('Hello NewprojectServiceProvider Provider');
    }
    return NewprojectServiceProvider;
}());
NewprojectServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], NewprojectServiceProvider);

//# sourceMappingURL=newproject-service.js.map
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FilterServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var FilterServiceProvider = (function () {
    function FilterServiceProvider(http) {
        this.http = http;
        console.log('Hello FilterServiceProvider Provider');
    }
    return FilterServiceProvider;
}());
FilterServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], FilterServiceProvider);

//# sourceMappingURL=filter-service.js.map

/***/ })

<<<<<<< HEAD
},[204]);
=======
},[203]);
>>>>>>> a7dc772beca949fecef966f4cb6566954f9c40c5
//# sourceMappingURL=main.js.map