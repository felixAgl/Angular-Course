import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prucduct-list',
  templateUrl: './prucduct-list.component.html',
  styleUrls: ['./prucduct-list.component.scss'],
})
export class PrucductListComponent implements OnInit {
  public products = [
    {
      id: 1,
      name: 'egg',
      category: 'Food',
      description: 'Lorem egg',
      price: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
