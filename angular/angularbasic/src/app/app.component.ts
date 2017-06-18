import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
 template:`
 <ul>
 <li> <a routerLink="/user" routerLinkActive="active">Home</a></li>
 <li> <a routerLink="/about" routerLinkActive="active">About</a></li>
 </ul>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
}
