import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqsComponent } from './faqs/faqs.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: LoginpageComponent },
  { path: 'Contactus', component: ContactusComponent },
  { path: 'Aboutus', component: AboutusComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'Shop', component: ShopComponent },
  { path: 'Faqs', component: FaqsComponent },
  { path: 'Shoppingcart', component: ShoppingCartComponent },
  { path: 'Checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
