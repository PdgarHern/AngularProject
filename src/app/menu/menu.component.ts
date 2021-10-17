import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __await } from 'tslib';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public home: number;
  public contact: number;
  public config: number;
  public login: number;
  public logout: number;

  constructor(private router: Router) {


    this.home = 1;
    this.contact = 0;
    this.config = 1;
    this.login = 0;
    this.logout = 1;

  }

  ngOnInit(): void {
    if (window.location.pathname == "") {
      this.home = 1;
      this.contact = 0;
      this.config = 1;
      this.login = 0;
      this.logout = 1;
    }
    if (window.location.pathname == "/home") {
      this.home = 1;
      this.contact = 0;
      this.config = 1;
      this.login = 0;
      this.logout = 1;
    }
    if (window.location.pathname == "/contact") {
      this.home = 0;
      this.contact = 1;
      this.config = 1;
      this.login = 0;
      this.logout = 1;
    }
    if (window.location.pathname == "/login") {
      this.home = 0;
      this.contact = 0;
      this.config = 1;
      this.login = 1;
      this.logout = 1;
    }
    if (window.location.pathname == "/personal-zone") {
      this.home = 1;
      this.contact = 0;
      this.config = 0;
      this.login = 1;
      this.logout = 0;
    }

  }

}
