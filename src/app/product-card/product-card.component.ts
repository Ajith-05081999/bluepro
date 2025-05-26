import { Component, Input } from '@angular/core';
import { ContactComponent } from '../pages/contact/contact.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() range: string = '';

  @Input() image: string = '/assets/images/product-default.jpg';
  @Input() name: string = 'Stabilizer';
  @Input() capacity: string = '';
  @Input() description: string = '';
  @Input() features: string[] = [];
  @Input() variants: any[] = [];

  
}
