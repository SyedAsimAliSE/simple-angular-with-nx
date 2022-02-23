import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Well } from '@angular-nx/api-interfaces';

@Component({
  selector: 'angular-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  wells = this.http.get<Well[]>('/api/');
  constructor(private http: HttpClient) {}
}
