import { Component } from '@angular/core';
import { BannerComponent } from '../../banner/banner.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

}
