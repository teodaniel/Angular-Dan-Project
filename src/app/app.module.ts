import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';
import { CardComponent } from './card/card.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { FormV1Component } from './form-v1/form-v1.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      // configure the path with a parameter
      { path: 'products/:productId', component: CardDetailsComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    MainComponent,
    BannerComponent,
    CardComponent,
    FormV1Component,
    CarouselComponent,
    CardDetailsComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
