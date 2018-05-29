"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent02for = /** @class */ (function () {
    function AppComponent02for() {
        this.title = '站点列表';
        this.sites = ['菜鸟教程', 'Google', 'Taobao', 'Facebook'];
        this.mySite = this.sites[0];
    }
    AppComponent02for = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>\u6211\u559C\u6B22\u7684\u7F51\u7AD9: {{mySite}}</h2>\n    <p>\u7F51\u7AD9\u5217\u8868:</p>\n    <ul>\n      <li *ngFor=\"let site of sites\">\n        {{ site }}\n      </li>\n    </ul>\n    "
        })
    ], AppComponent02for);
    return AppComponent02for;
}());
exports.AppComponent02for = AppComponent02for;
//# sourceMappingURL=app.component02for.js.map