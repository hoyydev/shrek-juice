import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuComponent } from './menu/menu.component';
import { LocationComponent } from './location/location.component';
import { CartComponent } from './cart/cart.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'homepage', component: HomepageComponent},
  {path:'menu',     component: MenuComponent},
  {path:'location', component: LocationComponent},
  {path:'cart',     component: CartComponent},
  {path:'feedback', component: FeedbackComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    LocationComponent,
    CartComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
