import { Component } from '@angular/core';
import { BannerComponent } from '../../banner/banner.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactInfo = {
    name: 'Raja',
    email: 'bluepro@gmail.com',
    contact: '585935987',
    whatsapp: '454556565',
    address: '3rd main road bluepro office 1st floor chennai - 609894'
  };
  googleMapsLink: string;

  constructor() {
    this.googleMapsLink = 'https://www.google.com/maps/search/?api=1&query=' + 
      encodeURIComponent(this.contactInfo.address);
  }
}
