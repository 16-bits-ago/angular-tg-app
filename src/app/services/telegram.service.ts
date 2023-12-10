import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

interface TgMainButton {
  show(): void;
  hide(): void;
  setText(text: string): void;
}

interface TgBackButton {
  show(): void;
  hide(): void;
  onClick(fn: Function): void;
  offClick(fn: Function): void;
}

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private window: Window | null;
  private tg: any;

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) { 
    this.window = this._document.defaultView;
    this.tg = (this.window as any)?.Telegram.WebApp;
  }

  public get MainButton(): TgMainButton {
    return this.tg.MainButton;
  }

  public get BackButton(): TgBackButton {
    return this.tg.BackButton;
  }

  public ready(): void {
    this.tg.ready();
  }
}
