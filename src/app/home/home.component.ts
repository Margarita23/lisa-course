import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TelegramService } from '../services/telegram.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  orderForm: FormGroup;
  orderFormMain: FormGroup;

  constructor(private fb: FormBuilder, private telegramService: TelegramService) {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]]
    });

    this.orderFormMain = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]]
    });
  }

  submitFormMain() {
    if (this.orderFormMain.invalid) {
      this.orderFormMain.markAllAsTouched();
      return;
    }

    const { name, phone } = this.orderFormMain.value;
    const text = `📌 Нове замовлення:\n👤 Ім'я: ${name}\n📞 Телефон: ${phone}\n📩`;

    this.telegramService.sendMessage(text).subscribe(response => {
      console.log('Message sent:', response);
      this.orderFormMain.reset();
    });
  }

  submitForm() {
    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }

    const { name, phone } = this.orderForm.value;
    const text = `📌 Нове замовлення:\n👤 Ім'я: ${name}\n📞 Телефон: ${phone}\n📩`;

    this.telegramService.sendMessage(text).subscribe(response => {
      console.log('Message sent:', response);
      this.orderForm.reset();
    });
  }
  
}
