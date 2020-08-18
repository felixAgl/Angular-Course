import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products = [
    {
      id: 1,
      name: 'egg',
      category: 'Food',
      description: 'Lorem egg',
      price: 1,
    },
    {
      id: 2,
      name: 'Coca Cola',
      category: 'Drink',
      description: 'Lorem Drink',
      price: 1,
    },
    {
      id: 3,
      name: 'Biscoff Cookies',
      category: 'Food',
      description: 'Lorem Cookie',
      price: 2,
    },
  ];

  getAllProducts(){
    return this.products;
  }

  getProductById(id){
    return this.products.filter((product) => product.id == id);
  }

}
