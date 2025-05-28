import { Component } from '@angular/core';
import { BannerComponent } from '../../banner/banner.component';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../product-card/product-card.component';
import { RouterModule } from '@angular/router';
// make sure this exists

interface ProductVariant {
  name: string;
  capacity?: string;
  range?: string;
}

interface Product {
  id: number;
  name: string;
  head: string;
  category: string;
  capacity: string;
  image: string;
  
  features: string[];
  variants?: { name: string; capacity?: string; range?: string; image?: string }[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, BannerComponent, ProductCardComponent,RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  selectedCategory: string = 'all';

  products: Product[] = [
    {
      id: 1,
      name: 'Standard Stabilizers',
      head: 'Window AC Stabilizer',
      category: 'window-ac',
      capacity: '4 KVA / 5 KVA',
      image: '../../assets/365A8851.JPG',
      
      features: [ 'Digital display', 'Time delay system', 'Thermal overload protection','3 Years Warranty '],
      variants: [
        { name: 'Standard', capacity: '4kva 1.5 Ton AC', range: '175V-270V' },
        { name: 'Standard', capacity: '5kva 2 Ton AC', range: '175V-270V' },
        { name: 'Deluxe', capacity: '4kva 1.5 Ton AC', range: '165V-270V', image: '../../assets/365A8894.JPG' },
        { name: 'Deluxe', capacity: '5kva 2 Ton AC', range: '165V-270V', image: '../../assets/365A8894.JPG' }
      ]
    },
    {
      id: 2,
      name: 'Double boost Stabilizers',
      head: 'Double boost Stabilizers',
      category: 'split-ac',
      capacity: '4 KVA/5 KVA',
      image: '../../assets/365A8894.JPG',
    
      features: ['Wide input range', 'Advanced surge protection', 'Wall mountable', ' 3 Years Warranty '],
      variants: [
        { name: 'Supreme', capacity: '4kva 1.5 Ton AC', range: '150V-280V' },
        { name: 'Supreme', capacity: '5kva 2 Ton AC', range: '150V-280V' },
        { name: 'Majestic', capacity: '4kva 1.5 Ton AC', range: '130V-280V' },
        { name: 'Majestic', capacity: '5kva 2 Ton AC', range: '130V-280V' }
      ]
    },
    {
      id: 3,
      name: 'Triple boost Stabilizers',
      head: 'Triple boost Stabilizers',
      category: 'inverter-ac',
      capacity: '4 KVA/5 KVA',
      image: '../../assets/365A8894.JPG',
     
      features: ['High Voltage cut-off', 'Energy efficient', 'Digital display', 'Silent operation','3 Years Warranty '],
      variants: [
        { name: 'Diamond', capacity: '4kva 1.5 Ton AC', range: '100V-280V' },
        { name: 'Diamond', capacity: '5kva 2 Ton AC', range: '100V-280V' },
        { name: 'Platinum', capacity: '4kva 1.5 Ton AC', range: '90V-280V' },
        { name: 'Platinum', capacity: '5kva 2 Ton AC', range: '90V-280V' },
      ]
    },
    {
      id: 4,
      name: 'Deep freezer Stabilizers',
      head: 'Deep freezer Stabilizers',
      category: 'heavy-duty-ac',
      capacity: '1 KVA/ 2 KVA',
      image: '../../assets/365A8894.JPG',

      features: ['Ultra-wide operating range','Digital display', 'Auto restart', 'Heavy load support','3 Years Warranty '],
      variants: [
        { name: '130V', capacity: '1KVA' },
        { name: '130V', capacity: '2KVA' }
      ]
    }
  ];

  filteredProducts: Product[] = [...this.products]; // Initialize with all products

  filterProducts(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
  }
}
