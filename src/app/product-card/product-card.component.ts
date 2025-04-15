import { Component, Input } from '@angular/core';
import { ContactComponent } from '../pages/contact/contact.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() image: string = '/assets/images/product-default.jpg';
  @Input() name: string = 'Stabilizer';
  @Input() capacity: string = '';
  @Input() description: string = '';
  @Input() features: string[] = [];
}
