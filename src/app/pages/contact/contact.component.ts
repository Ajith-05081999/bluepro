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
    name: 'Rajaraman',
    email: 'blueprocustomercare@gmail.com',
    contact: '+919940184161',
    whatsapp: '+919940184161',
    customerCare: '04443595646',
    address: 'NO.20,kesari nagar main road adambakkam, chennai - 600088'
  };
  googleMapsLink: string;

  constructor() {
    this.googleMapsLink = 'https://www.google.com/maps/search/?api=1&query=' + 
      encodeURIComponent(this.contactInfo.address);
  }
}
