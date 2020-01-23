import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
    declarations : [ PhotoComponent ], //o que só ele tem (private)
    exports: [PhotoComponent] //o que ele devolve (public)
})
export class PhotosModule { }