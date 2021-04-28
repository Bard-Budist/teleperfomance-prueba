import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  response:string;
  urlApi:string;
  description:string;
  displayToken:boolean = false;

  constructor(private http:HttpClient) {}

  apiV1() {
    // Work with apiv1
    this.displayToken = false
    this.http.get(environment.apiUrl + '/api/v1/').toPromise().then((res: any) => {
      console.log(res)
      this.urlApi = environment.apiUrl + '/api/v1/'
      this.description = "Return 10 users for an free API"
      this.response = JSON.stringify(res)
    })
    .catch((error: any) => {
      this.response = JSON.stringify(error.error)
    })
  }

  apiV2() {
    // Work with apiv2
    this.displayToken = false;
    this.http.get(environment.apiUrl + '/api/v2/generate-token/').toPromise().then((res: any) => {
      this.urlApi = environment.apiUrl + '/api/v2/generate-token'
      this.description = "Request new token"
      this.response = JSON.stringify(res)
    })
    .catch((error: any) => {
      this.response = JSON.stringify(error.error)
    })
  }

  apiV3() {
    // Work with apiv3 and control request
    this.displayToken = true;
    this.description = "Return 10 users for an free API, but with auth"
    this.urlApi = environment.apiUrl + '/api/v3/'
  }

  apiV4() {
    // Work with apiv3 and control request
    this.displayToken = true;
    this.description = "Return name of database in MoongoDb"
    this.urlApi = environment.apiUrl + '/api/v4/'
  }

  sendApiAutho() {
    // Send request with Autho Bearer
    const token:string = (<HTMLInputElement>document.getElementById("token")).value;
    if (token == "") {
      alert("You will need to provide the token")
    } else {
      this.http.get(this.urlApi, {
        headers: {
          Authorization: 'Bearer ' + token,
        }
      }).toPromise().then((res: any) => {
        this.response = JSON.stringify(res)
      })
      .catch((error: any) => {
        this.response = JSON.stringify(error.error)
      })
    }
  }
}
