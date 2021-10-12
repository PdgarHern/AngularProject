import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public home: number;
  public contact: number;
  public config: number;

  constructor() {
    this.home = 1;
    this.contact = 0;
    this.config = 1;
  }

  ngOnInit(): void {
  }

}
