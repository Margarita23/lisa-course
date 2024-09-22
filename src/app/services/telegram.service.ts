import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private botToken = environment.GRAM;
  private chatId = environment.CHAT;
  private apiUrl = `https://api.telegram.org/bot${this.botToken}/sendMessage`;

  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    return this.http.post(this.apiUrl, {
      chat_id: this.chatId,
      text: message,
      parse_mode: 'HTML'
    });
  }
}
