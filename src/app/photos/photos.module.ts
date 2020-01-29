import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { HttpClientModule } from '@angular/common/http'; //necessario para usar requests na aplicacao

@NgModule({
    declarations : [ PhotoComponent ], //o que só ele tem (private)
    exports: [PhotoComponent], //o que ele devolve (public)
    imports: [
        HttpClientModule
    ]
})
export class PhotosModule { }