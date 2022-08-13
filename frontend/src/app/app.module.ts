import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CakeComponent } from './cake/cake.component';
import { ContactComponent } from './contact/contact.component';
import { SpecialsComponent } from './specials/specials.component';
import { SitemapsComponent } from './sitemaps/sitemaps.component';
import { NewproductsComponent } from './newproducts/newproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    BlogComponent,
    CakeComponent,
    ContactComponent,
    SpecialsComponent,
    SitemapsComponent,
    NewproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
