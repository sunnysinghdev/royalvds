import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featureStripData = [
    {
      icon: 'mdi mdi-flag',
      title: 'HIGHLY TRAINED STAFF',
      detail: "At ROYAL VDS, we are highly trained staffs. Our employees are the ambassadors of the company."
    },
    {
      icon: 'mdi mdi-thumb-up',
      title: 'QUALITY Material provided',
      detail: "To provide best services to our client in all facility services, we are using the quality tools."
    },
    {
      icon: 'mdi mdi-star mdi-spin',
      title: 'FAST & EFFECTIVE SERVICE',
      detail: "We always try to ensure the highest level of consumer delight, focused upon the effective delivery of services to them."
    },
  ];
  slideShowImages = [
    "./assets/images/carousel/1.jpg",
    "./assets/images/carousel/2.jpg",
    "./assets/images/carousel/3.jpg",
    "./assets/images/carousel/4.jpg",
    "./assets/images/carousel/5.jpg",
    "./assets/images/carousel/6.jpg",
    "./assets/images/carousel/7.jpg",
    "./assets/images/carousel/8.jpg",
    "./assets/images/carousel/9.jpg",
    "./assets/images/carousel/10.jpg",
    "./assets/images/carousel/11.jpg",

  ];
  contactStripData = [
    {
      icon: 'mdi mdi-phone',
      title: 'Need help? Contact us',
      detail: "Mobile no: +91 7677306672. Email: SUSHIL.S10M@GMAIL.COM"
    },
    {
      icon: 'mdi mdi-comment-outline',
      title: 'We provide 24x7 service',
      detail: "We are available 24/7. Happy to help you."
    },
    {
      icon: 'mdi mdi-map',
      title: 'Need services? Our Address',
      detail: "B/125,BIRLA COLONY, PHULWARISHARIF, PATNA, BR 801505."
    },
  ];
  msgEmail = "";
  constructor(private http: HttpClient, public appService: AppService) {

  }

  ngOnInit() {

  }
  sendMail() {
    let messsage = this.emailFormat("Sunny", "994994994", "user@xyz.com", "Hi we need interior design.");
    this.msgEmail = messsage;
    this.appService.sendMail("Customer Query", messsage);
  }
  emailFormat(name, phone, email, msg){
    return `<html>
    <body>
      <table>
        <tr style="background-color:lightgrey;">
          <td>Name</td>
          <td>${name}</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>${phone}</td>
        </tr>
        <tr style="background-color:lightgrey;">
          <td>Name</td>
          <td>${email}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>${msg}</td>
        </tr>
      </table>
    </body>
    </html>`;
  }

}
