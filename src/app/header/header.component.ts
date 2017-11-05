import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styleUrls: ['./header.css']
})
export class HeaderComponent {
    headerContent: string;

    constructor(){
        this.headerContent = "This is a header";
    }
}