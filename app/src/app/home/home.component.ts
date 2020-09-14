import { Component, OnInit } from '@angular/core';

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
    "./assets/images/carousel/w (1).jpg",
    "./assets/images/carousel/w (2).jpg",
    "./assets/images/carousel/w (3).jpg",
    "./assets/images/carousel/w (4).jpg",
    "./assets/images/carousel/w (5).jpg",
    "./assets/images/carousel/w (6).jpg",
    "./assets/images/carousel/w (7).jpg",
    "./assets/images/carousel/w (8).jpg",
    "./assets/images/carousel/w (9).jpg",
    "./assets/images/carousel/w (10).jpg",
    "./assets/images/carousel/w (11).jpg",

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
      detail: "B/125,BIRLA COLONY,FRONT OF DURGA MANDIR, PHULWARISHARIF, PATNA, PATNA Patna BR 801505 IN"
    },
  ]
  constructor() { }
 
  ngOnInit() {
  }

}