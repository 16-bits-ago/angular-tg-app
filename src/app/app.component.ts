import { TelegramService } from './services/telegram.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  // In console u can use (window.Telegram) call for checking necessary TG stuff
  constructor(
    private telegramService: TelegramService
  ) {
    this.telegramService.ready();
  }
}