import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {
  @Input() quote: string = '';
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() image: string = '';
}
