import { Component } from '@angular/core';
import { BannerComponent } from '../../banner/banner.component';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../product-card/product-card.component';
import { RouterModule } from '@angular/router';
// make sure this exists

interface Product {
  id: number;
  name: string;
  category: string;
  capacity: string;
  image: string;
  description: string;
  features: string[];
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
      name: 'AC Voltage Stabilizer - Standard',
      category: 'ac',
      capacity: '4 kVA',
      image: '/assets/images/ac-stabilizer.jpg',
      description: 'Designed for window and split air conditioners up to 1.5 tons.',
      features: ['Wide operating voltage range: 140V-280V', 'Digital display', 'Time delay system', 'Thermal overload protection']
    },
    {
      id: 2,
      name: 'AC Voltage Stabilizer - Premium',
      category: 'ac',
      capacity: '5 kVA',
      image: '/assets/images/ac-stabilizer-premium.jpg',
      description: 'High-capacity stabilizer for 2-ton air conditioners and heavy-duty applications.',
      features: ['Ultra-wide operating range: 130V-290V', 'LCD display with voltage monitoring', 'Advanced surge protection', 'Auto restart with time delay']
    },
    {
      id: 3,
      name: 'Refrigerator Stabilizer - Basic',
      category: 'refrigerator',
      capacity: '500 VA',
      image: '/assets/images/refrigerator-stabilizer.jpg',
      description: 'Compact stabilizer for standard refrigerators and freezers.',
      features: ['High-low voltage cut-off', 'Auto restart feature', 'Wall mountable design', 'LED indicators']
    },
    {
      id: 4,
      name: 'Refrigerator Stabilizer - Advanced',
      category: 'refrigerator',
      capacity: '1 kVA',
      image: '/assets/images/refrigerator-stabilizer-advanced.jpg',
      description: 'Enhanced protection for high-end refrigerators and deep freezers.',
      features: ['Precision voltage regulation', 'Digital display', 'Energy-saving mode', 'Noise filtration']
    },
    {
      id: 5,
      name: 'TV & Electronics Stabilizer - Mini',
      category: 'tv',
      capacity: '100 VA',
      image: '/assets/images/tv-stabilizer.jpg',
      description: 'Compact stabilizer for LED',
      features: ['Precision voltage regulation', 'Digital display', 'Energy-saving mode', 'Noise filtration']
    },
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
