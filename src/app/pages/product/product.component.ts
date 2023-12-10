import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct, ProductsService } from '../../services/products.service';
import { TelegramService } from '../../services/telegram.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit, OnDestroy {
  public product: IProduct;

  constructor(
    private productService: ProductsService,
    private telegramService: TelegramService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    this.product = this.productService.getById(id!);

    this.goBack = this.goBack.bind(this); // биндим, чтобы когда мы передаем ф-ю как референс THIS не потерялся
  }
  public ngOnInit(): void {
    this.telegramService.BackButton.show();
    this.telegramService.BackButton.onClick(this.goBack)
  }
  public ngOnDestroy(): void {
    this.telegramService.BackButton.offClick(this.goBack)
  }

  private goBack(): void {
    this.router.navigate(['']);
  }
}
