import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
    private botToken: string;
  private chatId: string;
  private apiUrl: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.botToken = this.configService.get('GRAM');
    this.chatId = this.configService.get('CHAT');
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
