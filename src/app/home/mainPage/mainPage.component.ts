import { CartService } from './../cart.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import  {MediaObserver, MediaChange} from '@angular/flex-layout';
import  { Subscription } from 'rxjs';

@Component({
  selector: 'app-mainPage',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.scss']
})
export class MainPageComponent implements OnInit {
products = []
  constructor(public mediaObserver:MediaObserver,
    public productService:ProductService,
    public cartService:CartService
    ) { }
  mediaSub:Subscription
  deviceXs:boolean;
  deviceLg:boolean;
  deviceMd:boolean;
  deviceSm:boolean;
  imageObject: Array<object> = [{

    thumbImage: 'assets/images/vegPage.jpg',
    alt: 'alt of image',
    title: 'Dairy',

}, {

    thumbImage: 'assets/images/snacks.jpg',
    title: 'Bakery & Pastry',
    alt: 'Image alt'
},{
thumbImage: 'assets/images/veg1.jpg',
alt: 'alt of image',
title: 'Vegetables'
}, {
thumbImage: 'assets/images/bakery.jpg',
title: 'Image title',
alt: 'Image alt'
},{
thumbImage: 'assets/images/veg1.jpg',
alt: 'alt of image',
title: 'Fish & Meat'
}, {
thumbImage: 'assets/images/snacks.jpg',
title: 'Organic',
alt: 'Image alt'
},{
thumbImage: 'assets/images/veg1.jpg',
alt: 'alt of image',
title: 'Snakes & Beverages'
}, {
thumbImage: 'assets/images/snacks.jpg',
title: 'Dairy',
alt: 'Image alt'
},

];
imageObject2: Array<object> = [{

  thumbImage: 'assets/images/slide1.png',
  title:'NE iamge'

},{
thumbImage: 'assets/images/slide3.png',
},{

thumbImage: 'assets/images/slide1.png',
},{
thumbImage: 'assets/images/slide3.png',
}
];

  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias)
      this.deviceXs = result.mqAlias === 'xs'
      this.deviceSm = result.mqAlias ==='sm'
      this.deviceLg = result.mqAlias === 'lg'
      this.deviceMd = result.mqAlias === 'md'

    })
    this.getproducts()
  }
  getproducts(){
   this.products = this.productService.getProducts();
  }
  addProduct(item){
this.cartService.addProduct(item);
  }
}
