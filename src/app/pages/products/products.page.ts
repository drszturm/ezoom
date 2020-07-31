import { Component, OnInit } from '@angular/core';

import {CourseService} from 'src/app/services/course.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: any;
  constructor(private CC: CourseService) { }

  ngOnInit() {
    this.CC.getAllStoreProducts().subscribe((data) => {
      this.products = data;
      console.log('Cursos: ', this.products);
    });
  }

}
