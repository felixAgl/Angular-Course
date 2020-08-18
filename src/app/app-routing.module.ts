import { ProductListComponent } from './products/product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsProductComponent } from './products/details-product/details-product.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path: '',  component: HomeComponent},
{path: 'products', component: ProductListComponent},
{path: 'product/:id', component :DetailsProductComponent},
{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
