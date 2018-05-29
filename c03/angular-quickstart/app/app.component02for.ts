import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>我喜欢的网站: {{mySite}}</h2>
    <p>网站列表:</p>
    <ul>
      <li *ngFor="let site of sites">
        {{ site }}
      </li>
    </ul>
    `
})
export class AppComponent02for {

    title = '站点列表';
    sites = ['菜鸟教程', 'Google', 'Taobao', 'Facebook'];
    mySite = this.sites[0];
}
