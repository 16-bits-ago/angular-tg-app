import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IProduct, ProductsService } from '../../services/products.service';
import { TelegramService } from '../../services/telegram.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html'
})
export class ProductComponent {
  public product: IProduct;

  constructor(
    private productService: ProductsService,
    private telegramService: TelegramService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    this.product = this.productService.getById(id!);
  }
}
