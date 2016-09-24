import { Component } from '@angular/core';

@Component({
    selector: 'country-app',
    template: 
    `<div class="titleBar">
    <h1>Country Info</h1>
    </div>
    <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/countries">Countries</a>
    </nav>
   <router-outlet></router-outlet>
    `,
    styleUrls: [ 'app/styles.css']
})

export class AppComponent {
    
}