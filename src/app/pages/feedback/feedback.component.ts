import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  styles: `
    .form {
      height: 70vh;
      justify-content: center;
    }
  `,
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent implements OnInit, OnDestroy {
  public feedback = signal('');

  constructor( private telegramService: TelegramService) {
    this.sendFeedback = this.sendFeedback.bind(this);
  }

  public ngOnInit(): void {
    this.telegramService.MainButton.setText('Отправить сообщение');
    this.telegramService.MainButton.show();
    this.telegramService.MainButton.disable();
    this.telegramService.MainButton.onClick(this.sendFeedback);
  }
  public sendFeedback(): void {
    this.telegramService.sendFeedback({ feedback: this.feedback() });
  }

  public ngOnDestroy(): void {
    this.telegramService.MainButton.offClick(this.sendFeedback);
  }

  public handleChange(event: any): void {
    this.feedback.set(event.target.value);

    if (this.feedback().trim()) {
      this.telegramService.MainButton.enable();
    } else {
      this.telegramService.MainButton.disable();
    }
  }
}
