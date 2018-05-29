import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>我的第一个 Angular 应用，<br> c03 <br> dodo 简单修改的 Component ！！</h1>' +
    '<h1>{{title}}</h1>' +
    '<h2>我喜欢的网站: {{mySite}}</h2>'
})
export class AppComponent01insert {
    title = '站点列表';
    mySite = '菜鸟教程 dodo01';
}
