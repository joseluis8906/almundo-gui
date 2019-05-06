import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { ContentComponent } from './content/content.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelsFilterComponent } from './hotels/hotels-filter/hotels-filter.component';
import { HotelsItemsComponent } from './hotels/hotels-items/hotels-items.component';
import { HotelItemComponent } from './hotels/hotels-items/hotel-item/hotel-item.component';
import { HotelsFilterNombreComponent } from './hotels/hotels-filter/hotels-filter-nombre/hotels-filter-nombre.component';
import { HotelsFilterStarsComponent } from './hotels/hotels-filter/hotels-filter-stars/hotels-filter-stars.component';
import { HotelsFilterStarComponent } from './hotels/hotels-filter/hotels-filter-stars/hotels-filter-star/hotels-filter-star.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    ContentComponent,
    HotelsComponent,
    HotelsFilterComponent,
    HotelsItemsComponent,
    HotelItemComponent,
    HotelsFilterNombreComponent,
    HotelsFilterStarsComponent,
    HotelsFilterStarComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AngularSvgIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
