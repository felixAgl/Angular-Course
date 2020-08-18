
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  public products = [];
  constructor(private dtaSvc: DataService) {}

  ngOnInit(): void {
    this.products = this.dtaSvc.getAllProducts();
  }
}``
