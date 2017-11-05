import { Component } from '@angular/core';
@Component({
    selector: "my-app",
    template: `
        <app-header></app-header>
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
        <app-footer></app-footer>
    `,
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Tour of Heroes';
    
}