import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { SocioService } from '../../services/socio.service';
import { FileUploader } from 'ng2-file-upload';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'scp-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  response: any = {};
  cr: string = "";
  archivo: string = "";

  constructor(private service: SocioService, private spinner: NgxSpinnerService) { }

  public uploader :FileUploader = new FileUploader({
    url: environment.apiURL + "socio/upload",
    autoUpload: true
  });

  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (file, response) => { this.archivo = JSON.parse(response).archivo; };
  }

  submit(form) {
    this.spinner.show();

    this.service.post({ socio: form.value,  cr: this.cr, archivo: this.archivo }).subscribe(
      response => {
        this.response = response;
        this.reset(form);
        this.spinner.hide();
      },
      error => {
        this.response = error.json().message;
        this.spinner.hide();
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
