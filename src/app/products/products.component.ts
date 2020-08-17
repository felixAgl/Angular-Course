import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public users = [
    { name: 'David', city: 'Barcelona'},
    { name: 'Otro', city: ''},
    { name: 'Otro2', city: 'Madrid'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
