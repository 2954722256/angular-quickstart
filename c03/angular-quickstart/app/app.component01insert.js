"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent01insert = /** @class */ (function () {
    function AppComponent01insert() {
        this.title = '站点列表';
        this.mySite = '菜鸟教程 dodo01';
    }
    AppComponent01insert = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>我的第一个 Angular 应用，<br> c03 <br> dodo 简单修改的 Component ！！</h1>' +
                '<h1>{{title}}</h1>' +
                '<h2>我喜欢的网站: {{mySite}}</h2>'
        })
    ], AppComponent01insert);
    return AppComponent01insert;
}());
exports.AppComponent01insert = AppComponent01insert;
//# sourceMappingURL=app.component01insert.js.map