webpackJsonp([0,3],{

/***/ 422:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 422;


/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(542);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/main.js.map

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Thuan\'s App!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(718),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/app.component.js.map

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__test_cmp_test_cmp_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hero_form_hero_form_component__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__switch_test_switch_test_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__clock_test_clock_test_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__read_text_file_test_read_text_file_test_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__countdown_test_countdown_test_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__trello_trello_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__snake_test_snake_test_component__ = __webpack_require__(552);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__test_cmp_test_cmp_component__["a" /* TestCmpComponent */],
                __WEBPACK_IMPORTED_MODULE_7__hero_form_hero_form_component__["a" /* HeroFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__switch_test_switch_test_component__["a" /* SwitchTestComponent */],
                __WEBPACK_IMPORTED_MODULE_9__clock_test_clock_test_component__["a" /* ClockTestComponent */],
                __WEBPACK_IMPORTED_MODULE_10__read_text_file_test_read_text_file_test_component__["a" /* ReadTextFileTestComponent */],
                __WEBPACK_IMPORTED_MODULE_11__countdown_test_countdown_test_component__["a" /* CountdownTestComponent */],
                __WEBPACK_IMPORTED_MODULE_12__trello_trello_component__["a" /* TrelloComponent */],
                __WEBPACK_IMPORTED_MODULE_13__snake_test_snake_test_component__["a" /* SnakeTestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: 'clock',
                        component: __WEBPACK_IMPORTED_MODULE_9__clock_test_clock_test_component__["a" /* ClockTestComponent */]
                    },
                    {
                        path: 'countdown',
                        component: __WEBPACK_IMPORTED_MODULE_11__countdown_test_countdown_test_component__["a" /* CountdownTestComponent */]
                    },
                    {
                        path: 'test',
                        component: __WEBPACK_IMPORTED_MODULE_6__test_cmp_test_cmp_component__["a" /* TestCmpComponent */]
                    },
                    {
                        path: 'trello',
                        component: __WEBPACK_IMPORTED_MODULE_12__trello_trello_component__["a" /* TrelloComponent */]
                    },
                    {
                        path: 'snake',
                        component: __WEBPACK_IMPORTED_MODULE_13__snake_test_snake_test_component__["a" /* SnakeTestComponent */]
                    }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/app.module.js.map

/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_functions__ = __webpack_require__(547);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ClockTestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClockTestComponent = (function () {
    function ClockTestComponent() {
        var _this = this;
        this.time = 'loading....';
        this.testChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].interval(1000);
        timer.subscribe(function (t) {
            var new_time = new Date();
            console.log(new_time);
            _this.time = __WEBPACK_IMPORTED_MODULE_2__my_functions__["a" /* ThuanMethods */].HHMMSSGMT(new_time);
        });
        //var self = this;
        // setInterval(function(){
        //     let new_time = new Date();
        //     console.log(new_time);
        //     self.testChange.emit(ThuanMethods.HHMMSSGMT(new_time));
        // },1000);
        // var self = this;
        // setInterval(function(){
        //   let new_time = new Date();
        //   self.time = ThuanMethods.HHMMSSGMT(new_time);
        // },1000)
        // setInterval(function(){self.getTime(self)},1000);
        // this.testChange.subscribe(value=> {this.time = value; console.log(value)});
    }
    ClockTestComponent.prototype.getTime = function (obj) {
        // console.log(obj);
        // console.log('ahihi');
        // console.log(this.testChange);
        var new_time = new Date();
        console.log(new_time);
        //console.log(obj.testChange);
        obj.testChange.emit(__WEBPACK_IMPORTED_MODULE_2__my_functions__["a" /* ThuanMethods */].HHMMSSGMT(new_time));
        //console.log('ahihi',obj.testChange);
    };
    ClockTestComponent.prototype.ngOnInit = function () {
    };
    ClockTestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-clock-test',
            template: "\n    <div style=\"margin:30px;\">\n    <h1>{{ time }}</h1>\n    </div>\n\n  ",
            styles: [__webpack_require__(711)]
        }), 
        __metadata('design:paramtypes', [])
    ], ClockTestComponent);
    return ClockTestComponent;
}());
//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/clock-test.component.js.map

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CountdownTestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountdownTestComponent = (function () {
    function CountdownTestComponent() {
        this.minute_A = 0;
        this.minute_B = 0;
        this.second_A = 0;
        this.second_B = 0;
        this.is_finish = false;
    }
    CountdownTestComponent.prototype.ngOnInit = function () {
    };
    CountdownTestComponent.prototype.startCountDown = function () {
        var _this = this;
        this.is_finish = false;
        var time = (this.get_minute() * 60 + this.get_second()) * 1000;
        var x = setInterval(function () {
            _this.second_B -= 1;
            if (_this.second_B < 0) {
                _this.second_A -= 1;
                _this.second_B = 9;
            }
            if (_this.second_A < 0) {
                _this.minute_B -= 1;
                _this.second_A = 5;
                _this.second_B = 9;
            }
            if (_this.minute_B < 0) {
                _this.minute_A -= 1;
                _this.minute_B = 9;
                _this.second_A = 5;
                _this.second_B = 9;
            }
        }, 1000);
        setTimeout(function () {
            clearInterval(x);
            //console.log('finished')
            _this.is_finish = true;
        }, time);
    };
    CountdownTestComponent.prototype.get_minute = function () {
        // +string -> number (unary operator)
        return +(this.minute_A + this.minute_B);
    };
    CountdownTestComponent.prototype.get_second = function () {
        // +string -> number (unary operator)
        return +(this.second_A + this.second_B);
    };
    CountdownTestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-countdown-test',
            template: __webpack_require__(719),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [])
    ], CountdownTestComponent);
    return CountdownTestComponent;
}());
//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/countdown-test.component.js.map

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_hero__ = __webpack_require__(546);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeroFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroFormComponent = (function () {
    function HeroFormComponent() {
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = new __WEBPACK_IMPORTED_MODULE_1__models_hero__["a" /* Hero */](18, 'Dr IQ', this.powers[2], 'Chuck Overstreet');
        this.submitted = false;
    }
    HeroFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    HeroFormComponent.prototype.ngOnInit = function () {
    };
    HeroFormComponent.prototype.newHero = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__models_hero__["a" /* Hero */](42, '', '');
    };
    HeroFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-hero-form',
            template: __webpack_require__(720),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroFormComponent);
    return HeroFormComponent;
}());
//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/hero-form.component.js.map

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Hero; });
var Hero = (function () {
    function Hero(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Hero;
}());
//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/hero.js.map

/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ThuanMethods; });
var ThuanMethods = (function () {
    function ThuanMethods() {
    }
    ThuanMethods.addZero = function (s) {
        return s < 10 ? "0" + s : "" + s;
    };
    ThuanMethods.getTimeZone = function (s) {
        // format: GMT +-X
        s = s / 60;
        return s < 0 ? "GMT +" + -s : "GMT -" + s;
    };
    ThuanMethods.HHMMSSGMT = function (date) {
        var hours = this.addZero(date.getHours());
        var minutes = this.addZero(date.getMinutes());
        var seconds = this.addZero(date.getSeconds());
        var timeZone = this.getTimeZone(date.getTimezoneOffset());
        return hours + ":" + minutes + ":" + seconds + "   " + timeZone;
    };
    return ThuanMethods;
}());
//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/my-functions.js.map

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReadTextFileTestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReadTextFileTestComponent = (function () {
    function ReadTextFileTestComponent() {
        this.test2 = '<script>alert(123)</script>';
    }
    ReadTextFileTestComponent.prototype.changeEvent = function (e) {
        var _this = this;
        //console.log('ahihi');
        //console.log(e.target);
        var file = e.target.files[0];
        //console.log('test',file);
        var reader = new FileReader();
        reader.onload = function (e) {
            console.log(e);
            _this.text = reader.result;
        };
        reader.readAsText(file);
    };
    ReadTextFileTestComponent.prototype.saveFile = function (e) {
        var textToWrite = this.spy;
        // console.log(textToWrite);
        var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
        ///////
    };
    ReadTextFileTestComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('textArea'), 
        __metadata('design:type', Object)
    ], ReadTextFileTestComponent.prototype, "textArea", void 0);
    ReadTextFileTestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-read-text-file-test',
            template: __webpack_require__(721),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [])
    ], ReadTextFileTestComponent);
    return ReadTextFileTestComponent;
}());
//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/read-text-file-test.component.js.map

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Apple; });
var Apple = (function () {
    function Apple(ctx, blockSize, cwidth, cheight) {
        this.position = [0, 0];
        this.color = 'blue';
        this.ctx = ctx;
        this.blockSize = blockSize;
        this.cwidth = cwidth;
        this.cheight = cheight;
    }
    Apple.prototype.draw = function () {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        var radius = this.blockSize / 2;
        var x = this.position[0] * this.blockSize + radius;
        var y = this.position[1] * this.blockSize + radius;
        this.ctx.arc(x, y, radius, 0, Math.PI * 2, true);
        this.ctx.fill();
    };
    Apple.prototype.move = function (snake) {
        var check;
        while (true) {
            check = true;
            var newX = Math.floor(Math.random() * (this.cwidth / this.blockSize));
            var newY = Math.floor(Math.random() * (this.cheight / this.blockSize));
            this.position = [newX, newY];
            for (var i = 0; i < snake.posArray.length; i++) {
                if (!snake.posArray) {
                    console.log('debug');
                    console.log(snake);
                    console.log(snake.posArray);
                }
                if (newX === snake.posArray[i][0] && newY === snake.posArray[i][1]) {
                    check = false;
                    break;
                }
            }
            if (check) {
                return;
            }
        }
    };
    return Apple;
}());
//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/apple.js.map

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Player; });
var Player = (function () {
    function Player() {
        this.score = 0;
    }
    Player.prototype.incScore = function (x) {
        this.score += x;
    };
    return Player;
}());
//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/player.js.map

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Snake; });
var Snake = (function () {
    function Snake(ctx, blockSize, cwidth, cheight) {
        this.ctx = ctx;
        this.blockSize = blockSize;
        this.cwidth = cwidth;
        this.cheight = cheight;
        this.color = 'red';
        this.direction = 'right';
        this.posArray = [];
        this.posArray.push([6, 4]);
        this.posArray.push([5, 4]);
        this.posArray.push([4, 4]);
    }
    Snake.prototype.move = function () {
        var nextPosition = this.posArray[0].slice();
        switch (this.direction) {
            case 'left':
                nextPosition[0] -= 1;
                break;
            case 'up':
                nextPosition[1] -= 1;
                break;
            case 'right':
                nextPosition[0] += 1;
                break;
            case 'down':
                nextPosition[1] += 1;
                break;
            default:
                throw ('Invalid direction');
        }
        // in case out of canvas
        //console.log(nextPosition);
        if (nextPosition[0] < 0) {
            nextPosition[0] = (this.cwidth / this.blockSize) - 1;
        }
        if (nextPosition[1] < 0) {
            nextPosition[1] = (this.cheight / this.blockSize) - 1;
        }
        if (nextPosition[0] >= this.cwidth / this.blockSize) {
            //console.log('ahihi');
            nextPosition[0] = 0;
        }
        if (nextPosition[1] >= this.cheight / this.blockSize) {
            nextPosition[1] = 0;
        }
        this.posArray.unshift(nextPosition); // push to the beginning of the array;
        this.posArray.pop();
    };
    Snake.prototype.drawSection = function (pos) {
        var x = pos[0] * this.blockSize;
        var y = pos[1] * this.blockSize;
        this.ctx.fillRect(x, y, this.blockSize, this.blockSize);
    };
    Snake.prototype.draw = function (color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        if (color) {
            this.ctx.fillStyle = color;
        }
        for (var i = 0; i < this.posArray.length; i++) {
            this.drawSection(this.posArray[i]);
        }
    };
    Snake.prototype.setDirection = function (newDirection) {
        var allowedDirections;
        switch (this.direction) {
            case 'left':
            case 'right':
                allowedDirections = ['up', 'down'];
                break;
            case 'up':
            case 'down':
                allowedDirections = ['left', 'right'];
                break;
            default:
                throw ('Invalid direction');
        }
        if (allowedDirections.indexOf(newDirection) > -1) {
            //console.log('ahihi');
            this.direction = newDirection;
        }
    };
    Snake.prototype.checkCollision = function (type, obj) {
        var result = false;
        if (type === 'apple') {
            //console.log('ahihi');
            //console.log(this.posArray[0])
            if (this.posArray[0][0] === obj.position[0] && this.posArray[0][1] == obj.position[1]) {
                //console.log('ahihi');
                return true;
            }
        }
        if (type === 'snake') {
            for (var i = 1; i < this.posArray.length; i++) {
                if (this.posArray[0][0] === this.posArray[i][0] && this.posArray[0][1] === this.posArray[i][1]) {
                    console.log('ahihi');
                    return true;
                }
            }
        }
        return false;
    };
    Snake.prototype.checkPos = function (a1, a2) {
        var x;
        var y;
        if (a1[0] === a2[0] && a1[1] === a2[1] + 1) {
            x = a1[0];
            y = a1[1] + 1;
            return [x, y];
        }
        // a2 is at bottom of a1
        if (a1[0] === a2[0] && a1[1] + 1 === a2[1]) {
            x = a1[0];
            y = a1[1] - 1;
            return [x, y];
        }
        // a2 is at left of a1
        if (a1[0] === a2[0] + 1 && a1[1] === a2[1]) {
            x = a1[0] + 1;
            y = a1[1];
            return [x, y];
        }
        // a2 is at right of a1
        if (a1[0] + 1 === a2[0] && a1[1] === a2[1]) {
            x = a1[0] - 1;
            y = a1[1];
            return [x, y];
        }
    };
    Snake.prototype.grow = function () {
        var last = this.posArray.length - 1;
        this.posArray.push(this.checkPos(this.posArray[last], this.posArray[last - 1]));
    };
    return Snake;
}());
//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/snake.js.map

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_snake__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_apple__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_player__ = __webpack_require__(550);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SnakeTestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SnakeTestComponent = (function () {
    function SnakeTestComponent() {
        this.score = 'Press Space to play';
        this.keysToDirections = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        };
    }
    SnakeTestComponent.prototype.onKeyUp = function (event) {
        // do something meaningful with it
        //console.log(`The user just pressed ${event.keyCode}!`);
        var key = event.keyCode;
        //console.log(this);
        var direction = this.keysToDirections[key];
        if (direction) {
            this.snake.setDirection(direction);
        }
        if (key == 32) {
            this.init();
        }
    };
    SnakeTestComponent.prototype.ngOnInit = function () {
        //console.log(this.canvasRef);
        this.canvas = this.canvasRef.nativeElement;
        this.canvas.width = 300;
        this.canvas.height = 300;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.fillStyle = 'black';
        this.blockSize = 10;
        this.frameLength = 100;
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.eat.nativeElement.load();
        this.losing.nativeElement.load();
        // models
        // this.snake = new Snake(this.ctx, this.blockSize, this.canvas.width, this.canvas.height);
        // this.apple = new Apple(this.ctx, this.blockSize, this.canvas.width, this.canvas.height);
        // this.player = new Player();
        // this.timer = setInterval(this.gameLoop.bind(this),this.frameLength);
    };
    SnakeTestComponent.prototype.init = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.snake = new __WEBPACK_IMPORTED_MODULE_1__models_snake__["a" /* Snake */](this.ctx, this.blockSize, this.canvas.width, this.canvas.height);
        this.apple = new __WEBPACK_IMPORTED_MODULE_2__models_apple__["a" /* Apple */](this.ctx, this.blockSize, this.canvas.width, this.canvas.height);
        this.player = new __WEBPACK_IMPORTED_MODULE_3__models_player__["a" /* Player */]();
        this.timer = setInterval(this.gameLoop.bind(this), this.frameLength);
    };
    SnakeTestComponent.prototype.gameLoop = function () {
        //console.log(this);
        if (this.is_winner()) {
            this.score = 'You win';
            clearInterval(this.timer);
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.snake.move();
        this.snake.draw(false);
        this.apple.draw();
        this.score = this.player.score;
        if (this.snake.checkCollision('apple', this.apple)) {
            //console.log('ahihi');
            this.player.incScore(10);
            //this.eat.nativeElement.play();
            this.snake.grow();
            this.apple.move(this.snake);
        }
        if (this.snake.checkCollision('snake', {})) {
            //console.log('ahah');
            this.score = 'You lose. Your score is: ' + this.score;
            //this.losing.nativeElement.play();
            this.snake.draw('blue');
            clearInterval(this.timer);
        }
    };
    SnakeTestComponent.prototype.is_winner = function () {
        return this.snake.posArray.length === (this.canvas.width / this.blockSize) * (this.canvas.height / this.blockSize);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('mycanvas'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === 'function' && _a) || Object)
    ], SnakeTestComponent.prototype, "canvasRef", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('eat'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === 'function' && _b) || Object)
    ], SnakeTestComponent.prototype, "eat", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('losing'), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === 'function' && _c) || Object)
    ], SnakeTestComponent.prototype, "losing", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* HostListener */])('document:keyup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], SnakeTestComponent.prototype, "onKeyUp", null);
    SnakeTestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-snake-test',
            template: __webpack_require__(722),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [])
    ], SnakeTestComponent);
    return SnakeTestComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/snake-test.component.js.map

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SwitchTestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwitchTestComponent = (function () {
    function SwitchTestComponent() {
        this.hero = 'Miney';
    }
    SwitchTestComponent.prototype.ngOnInit = function () {
    };
    SwitchTestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-switch-test',
            template: __webpack_require__(723),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [])
    ], SwitchTestComponent);
    return SwitchTestComponent;
}());
//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/switch-test.component.js.map

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TestCmpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestCmpComponent = (function () {
    function TestCmpComponent() {
        this.display = 0;
        this.numCount = 0;
        this.numCountChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        var self = this;
        // setInterval(function() {
        //   console.log(this);
        //   self.display += 1;
        // }, 1000);
        //this.numCountChange.subscribe(value=> {this.display = value;});
    }
    TestCmpComponent.prototype.inc = function () {
        this.display += 1;
    };
    TestCmpComponent.prototype.dec = function () {
        this.display -= 1;
    };
    TestCmpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-test-cmp',
            template: "\n    {{display}}\n    <button (click)=\"inc()\"> inc </button>\n    <button (click)=\"dec()\"> dec </button>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TestCmpComponent);
    return TestCmpComponent;
}());
//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/test-cmp.component.js.map

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TrelloComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrelloComponent = (function () {
    function TrelloComponent() {
    }
    TrelloComponent.prototype.ngOnInit = function () {
    };
    TrelloComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-trello',
            template: __webpack_require__(724),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [])
    ], TrelloComponent);
    return TrelloComponent;
}());
//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/trello.component.js.map

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/environment.js.map

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(990);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/macbook/Desktop/angular/test-node/src/polyfills.js.map

/***/ },

/***/ 710:
/***/ function(module, exports) {

module.exports = "nav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\n"

/***/ },

/***/ 711:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 712:
/***/ function(module, exports) {

module.exports = "input {\n  text-align: right;\n}\n"

/***/ },

/***/ 713:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 714:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 715:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 716:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 717:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 718:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>\n    {{title}}\n  </h1>\n  <nav>\n\n    <a routerLink=\"/snake\">Snake</a>\n    <a routerLink=\"/clock\">Clock</a>\n    <a routerLink=\"/countdown\">Coutdown Timer</a>\n    <a routerLink=\"/test\">Test</a>\n\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ },

/***/ 719:
/***/ function(module, exports) {

module.exports = "<p>\n  countdown-test works!\n</p>\n<input type=\"text\" size=\"4\" [(ngModel)]=\"minute_A\"/>\n<input type=\"text\" size=\"4\" [(ngModel)]=\"minute_B\"/>\n:\n<input type=\"text\" size=\"4\" [(ngModel)]=\"second_A\" />\n<input type=\"text\" size=\"4\" [(ngModel)]=\"second_B\" />\n\n<br /> <br />\n<button (click)=\"startCountDown()\">Start the time</button>\n<div *ngIf=\"is_finish\" style=\"color:red;\">\n  <h1>Finished</h1>\n</div>\n"

/***/ },

/***/ 720:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <div [hidden]=\"submitted\">\n    <h1>Hero Form</h1>\n    <form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\"\n               required\n               [(ngModel)]=\"model.name\" name=\"name\"\n               #name=\"ngModel\">\n        <div [hidden]=\"name.valid || name.pristine\"\n             class=\"alert alert-danger\">\n          Name is required\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"alterEgo\">Alter Ego</label>\n        <input type=\"text\" class=\"form-control\" id=\"alterEgo\"\n               [(ngModel)]=\"model.alterEgo\" name=\"alterEgo\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"power\">Hero Power</label>\n        <select class=\"form-control\" id=\"power\"\n                required\n                [(ngModel)]=\"model.power\" name=\"power\"\n                #power=\"ngModel\">\n          <option *ngFor=\"let pow of powers\" [value]=\"pow\">{{pow}}</option>\n        </select>\n        <div [hidden]=\"power.valid || power.pristine\" class=\"alert alert-danger\">\n          Power is required\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroForm.form.valid\">Submit</button>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"newHero(); heroForm.reset()\">New Hero</button>\n    </form>\n  </div>\n  <div [hidden]=\"!submitted\">\n    <h2>You submitted the following:</h2>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Name</div>\n      <div class=\"col-xs-9  pull-left\">{{ model.name }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Alter Ego</div>\n      <div class=\"col-xs-9 pull-left\">{{ model.alterEgo }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Power</div>\n      <div class=\"col-xs-9 pull-left\">{{ model.power }}</div>\n    </div>\n    <br>\n    <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\n  </div>\n</div>\n"

/***/ },

/***/ 721:
/***/ function(module, exports) {

module.exports = "<p>\n  read-text-file-test works!\n</p>\n<div class=\"form-group\">\n  <label for=\"exampleInputFile\">File input</label>\n  <input type=\"file\" (change)=\"changeEvent($event)\" class=\"form-control-file\" id=\"myFile\" aria-describedby=\"fileHelp\">\n  <textarea id=\"myTextArea\" rows=\"4\" columns=\"20\" #textarea [(ngModel)]=\"spy\">{{ text }}</textArea>\n  <small id=\"fileHelp\" class=\"form-text text-muted\">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>\n  <button (click)=\"saveFile($event)\">Save file</button>\n  <h1>{{ spy }}</h1>\n</div>\n"

/***/ },

/***/ 722:
/***/ function(module, exports) {

module.exports = "<p>\n  snake-test works!\n</p>\n<canvas #mycanvas></canvas>\n<h1>{{ score }}</h1>\n<audio #eat src='./app/snake-test/audio/eat.wav'></audio>\n<audio #losing src='./app/snake-test/audio/losing.wav'></audio>\n"

/***/ },

/***/ 723:
/***/ function(module, exports) {

module.exports = "<p>\n  switch-test works!\n</p>\n\n<span [ngSwitch]=\"hero\">\n  <span *ngSwitchCase=\"'Eenie'\">Eenie</span>\n  <span *ngSwitchCase=\"'Meanie'\">Meanie</span>\n  <span *ngSwitchCase=\"'Miney'\">Miney</span>\n  <span *ngSwitchCase=\"'Moe'\">Moe</span>\n  <span *ngSwitchDefault>other</span>\n</span>\n"

/***/ },

/***/ 724:
/***/ function(module, exports) {

module.exports = "<p>\n  trello works!\n</p>\n"

/***/ },

/***/ 991:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(423);


/***/ }

},[991]);
//# sourceMappingURL=main.bundle.map