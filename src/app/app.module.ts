import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { HomeComponent } from './home/home.component';
import { ThreecardcarouselComponent } from './threecardcarousel/threecardcarousel.component';
import { SinglecoursepageComponent } from './singlecoursepage/singlecoursepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    CardCarouselComponent,
    ListCoursesComponent,
    HomeComponent,
    ThreecardcarouselComponent,
    SinglecoursepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
