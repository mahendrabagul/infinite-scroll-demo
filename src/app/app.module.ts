import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImagePaginationComponent } from './image-pagination/image-pagination.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DeviceDetailComponent,
    HeaderComponent,
    FooterComponent,
    ImagePaginationComponent
  ],
  imports: [
    BrowserModule, NgxPaginationModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
