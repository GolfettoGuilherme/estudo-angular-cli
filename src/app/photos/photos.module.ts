import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //sempre importe junto,necessario porque sim
import { HttpClientModule } from '@angular/common/http';


import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { SearchComponent } from './photo-list/search/search.component';


@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule
    ]
})
export class PhotosModule { }