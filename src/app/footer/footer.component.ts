import { Component } from '@angular/core';

@Component({
    templateUrl: "./footer.html",
    styleUrls: ["./footer.css"],
    selector: "app-footer"
}) 
export class FooterComponent {
    footerContent: string;

    constructor(){
        this.footerContent = "Copyright 2017"
    }

}
