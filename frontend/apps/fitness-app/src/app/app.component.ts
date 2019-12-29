import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSidenav } from '@angular/material/sidenav';
import { environment } from '../environments/environment';

export interface Message {
  message: string;
}

@Component({
  selector: 'fitness-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>(environment.backendURL + '/api/HelloWorld');
  constructor(private http: HttpClient) {
  }

  @ViewChild('sidenav', {static: false}) Sidenav: MatSidenav;

  close() {
    this.Sidenav.close();
  }
}
