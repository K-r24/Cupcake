import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CakeComponent } from './cake/cake.component';
import { ContactComponent } from './contact/contact.component';
import { SpecialsComponent } from './specials/specials.component';
import { SitemapsComponent } from './sitemaps/sitemaps.component';
import { NewproductsComponent } from './newproducts/newproducts.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'blog', component: BlogComponent},
  { path: 'cake', component: CakeComponent },
  { path:'contact', component: ContactComponent},
  { path: 'specials', component: SpecialsComponent },
  { path:'sitemaps', component: SitemapsComponent},
  { path: 'newproducts', component: NewproductsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'cart', component: CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
