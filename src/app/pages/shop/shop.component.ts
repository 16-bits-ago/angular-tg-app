import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html'
})
export class ShopComponent {
  private telegram = inject(TelegramService);
  
  constructor() {
    this.telegram.MainButton.show();
  }

}
