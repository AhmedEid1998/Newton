import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedMobilesComponent } from './featured-mobiles/featured-mobiles.component';
import { BrowseCategoriesComponent } from './browse-categories/browse-categories.component';


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    HeaderComponent,
    FeaturedMobilesComponent,
    BrowseCategoriesComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule,
  ],
  exports:[
    NavComponent,
    FooterComponent,
    HeaderComponent,
    FeaturedMobilesComponent,
    BrowseCategoriesComponent
  ]
})
export class SharedModule { }
