import { Component, Input } from "@angular/core";

@Component({
    selector: "ap-photo",
    templateUrl : "photo.component.html"
})
export class PhotoComponent{

    @Input() //isso é para falar que isso veio de quem criou o componente no HTML
    description = "";

    @Input() 
    url = "";  
}