import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from '../app/components/top-bar/top-bar.component';
import { ProductListComponent } from '../app/components/product-list/product-list.component';
import { ProductAlertsComponent } from '../app/components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from '../app/components/product-details/product-details.component';
import { CartProductsComponent } from './components/cart-products/cart-products.component';
import { ShippingComponent } from './components/shipping/shipping.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartProductsComponent},
      { path: 'shipping', component: ShippingComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartProductsComponent,
    ShippingComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
