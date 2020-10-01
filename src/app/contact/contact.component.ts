import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name = '';
  phone = '';
  email = '';
  message = 'Hi Team, I would like to know more about interior design and estimate cost.';

  nameError = false;
  phoneError = false;
  emailError = false;
  messageError = false;
  successSendMail = false;
  errorMessage = "";
  constructor(private appService: AppService) {

  }

  ngOnInit() {
  }
  sendMail() {
    this.nameError = false;
    this.phoneError = false;
    this.emailError = false;
    this.messageError = false;
    this.successSendMail = false;
    if (this.name == '') {
      this.nameError = true;
      this.errorMessage = "Name required";
      return;
    }
    if (this.phone == '') {
      this.phoneError = true;
      this.errorMessage = "Phone number required";
      return;
    }
    if (this.email == '') {
      this.emailError = true;
      this.errorMessage = "Email address required";
      return;
    }
    if (this.message == '') {
      this.messageError = true;
      this.errorMessage = "Messge required required";
      return;
    }
    let emailMsg = this.emailFormat(this.name, this.phone, this.email, this.message);
    this.appService.sendMail("Customer Query", emailMsg).then((res) => {
      this.nameError = false;
      this.phoneError = false;
      this.emailError = false;
      this.messageError = false;
      this.successSendMail = true;
      this.name = '';
      this.phone = '';
      this.email = '';
      this.message = 'Hi Team, I would like to know more about interior design and estimate cost.';
      this.errorMessage = "Email sent successfully!!! Thank you for contacting us.";

    });
  }
  emailFormat(name, phone, email, msg) {
    return `<html>
    <body style="text-align:-webkit-center;">
	
		<div id="main" style="width:420px; background-color:gold;">
			<h2 style="padding: 10px; color:gold; background-color:black;">ROYALVDS</h2>
			
			<table style="font-family: system-ui !important; padding: 10px; margin-left: 20px; margin-right: 20px; border: 1px solid white; background-color:white; border-radius: 5px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
				<tr>
				  <td style="padding: 10px; vertical-align: initial;">Name</td>
				  <td style="padding: 10px; vertical-align: initial;">${name}</td>
				</tr>
				<tr>
				  <td style="padding: 10px; vertical-align: initial;">Phone</td>
				  <td style="padding: 10px; vertical-align: initial;"><a href="tel:${phone}">${phone}</a></td>
				</tr>
				<tr>
				  <td style="padding: 10px; vertical-align: initial;">Email</td>
				  <td style="padding: 10px; vertical-align: initial;"><a href="mailto:${email}">${email}</a></td>
				</tr>
				<tr>
				  <td style="padding: 10px; vertical-align: initial;">Message</td>
				  <td style="padding: 10px; vertical-align: initial;">${msg}</td>
				</tr>
			</table>
			
			<h2 style="padding: 10px; color:gold; background-color:black;">ROYALVDS</h2>
		</div>
	</body>
  </html>`;
  }
}
