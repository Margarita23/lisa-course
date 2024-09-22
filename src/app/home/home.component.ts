import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TelegramService } from '../services/telegram.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  orderForm: FormGroup;

  constructor(private fb: FormBuilder, private telegramService: TelegramService) {
    this.orderForm = this.fb.group({
      name: [''],
      phone: [''],
      message: ['']
    });
  }

  submitForm() {
    const { name, phone, message } = this.orderForm.value;
    const text = `📌 Нове замовлення:\n👤 Ім'я: ${name}\n📞 Телефон: ${phone}\n📩 Повідомлення: ${message}`;

    this.telegramService.sendMessage(text).subscribe(response => {
      console.log('Message sent:', response);
      this.orderForm.reset();
    });
  }
  
}
