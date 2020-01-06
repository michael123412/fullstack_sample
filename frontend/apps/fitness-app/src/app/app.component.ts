import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSidenav } from '@angular/material/sidenav';
import { environment } from '../environments/environment';
import { TranslateService } from '@ngx-translate/core';

export interface Message {
  message: string;
}

@Component({
  selector: 'fitness-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hello$ = this.http.get<Message>(environment.backendURL + '/HelloWorld');
  constructor(
    private http: HttpClient,
    private translateService: TranslateService
  ) {}

  @ViewChild('sidenav', { static: false }) Sidenav: MatSidenav;

  ngOnInit(): void {
    this.translateService.use('deAT');
  }

  close() {
    this.Sidenav.close();
  }
}
