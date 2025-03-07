import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
    private botToken: string;
  private chatId: string;
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.botToken = environment.GRAM;
    this.chatId = environment.CHAT;
    this.apiUrl = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
  }

  sendMessage(message: string) {
    return this.http.post(this.apiUrl, {
      chat_id: this.chatId,
      text: message,
      parse_mode: 'HTML'
    });
  }
}
