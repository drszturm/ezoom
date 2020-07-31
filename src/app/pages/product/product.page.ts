import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

import {CourseService} from 'src/app/services/course.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {


  product: any;
  constructor(
    private CC: CourseService,
    private activatedRoute: ActivatedRoute,
    private storage: Storage

    ) {

  
     }

  ngOnInit() {



    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const pId = paramMap.get('pId');
      console.log('Product ID found: ', pId);
      this.CC.getSingleProduct(pId).subscribe((data) => {
        this.product = data;
        console.log('Single Product: ',this.product);
      });
    });
  }


}
