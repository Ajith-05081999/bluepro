import { Component } from '@angular/core';
import { BannerComponent } from '../../banner/banner.component';
import { ProductCardComponent } from '../../product-card/product-card.component';
import { TestimonialComponent } from '../../testimonial/testimonial.component';
import { HeaderComponent } from '../../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent,ProductCardComponent,TestimonialComponent,HeaderComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
