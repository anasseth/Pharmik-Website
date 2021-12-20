import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BlogComponent } from './blog/blog.component';
import { ShopComponent } from './shop/shop.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ModalModule } from 'ngb-modal';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    DashboardComponent,
    AboutusComponent,
    ContactusComponent,
    BlogComponent,
    ShopComponent,
    FaqsComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    // MatToolbarModule,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatGridListModule,
    CarouselModule,
    ModalModule,
    


    // RouterModule.forRoot([
    //   { path: 'Dashboard', component: DashboardComponent },
    // ])
  ],
  // exports: [
  //   MatToolbarModule,

  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
