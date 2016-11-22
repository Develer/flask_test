import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/store" routerLinkActive="active">/store/json</a>
      <a routerLink="/list" routerLinkActive="active">/list/json</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css']
})

export class AppComponent {
  title = 'Worksample';
}
