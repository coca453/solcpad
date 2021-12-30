import { ContactoService } from './../../services/contacto.service';
import { Component } from '@angular/core';

@Component({
  selector: 'scp-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  response: any = {};
  cr: string = "";

  constructor(private service: ContactoService) { }

  submit(form) {
    this.service.post({ contacto: form.value, cr: this.cr }).subscribe(
      response => {
        this.response = response;
        this.reset(form);
      },
      error => {
        console.log(error);
        this.response = error.json();
      }
    );
  }

  reset(form) {
    form.reset();
  }

  resolved(captchaResponse: string) {
    this.cr = captchaResponse;
  }

}
