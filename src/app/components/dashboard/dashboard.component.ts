import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: any[];

  constructor(private productsService: ProductsService) { }
  params :string;

  ngOnInit() {
    var elems = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(elems);
    this.productsService.getProducts().subscribe(products => {
      this.products = products.products;
  });

  }

  ngAfterViewInit() {
    var elems = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(elems);
  }
}
