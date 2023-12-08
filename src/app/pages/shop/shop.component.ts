import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html'
})
export class ShopComponent {
  private telegram: TelegramService = inject(TelegramService);
  public products: ProductsService = inject(ProductsService);

  constructor() {
    this.telegram.MainButton.show();
    console.log(this.products.byGroup);
  }

}
