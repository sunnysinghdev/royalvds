import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http: HttpClient) { }

  sendMail(subject, message): Promise<any> {
    let body = {
      "from": "Interior Query<user@sunnysingh.in>",
      "to": "sunnysingh.vpcoe@gmail.com",
      "cc": "sunny.epicor@gmail.com",
      "subject": subject,
      "message": message
    }
    return new Promise((resolve)=>{
      //this.http.post("http://localhost:8080/sendmail", body).subscribe((res: any)=>{
      this.http.post("https://mailwaala.herokuapp.com/sendmail", body).subscribe((res: any) => {
        console.log(res);
        resolve(res);
      });
    });
    
  }
}
