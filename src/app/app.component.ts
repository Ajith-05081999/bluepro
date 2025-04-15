import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { ProductCardComponent } from './product-card/product-card.component';
import { ServicesComponent } from './pages/services/services.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,BannerComponent,FooterComponent,HeaderComponent,ProductCardComponent,ServicesComponent, TestimonialComponent, AboutComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bluepro';
}
