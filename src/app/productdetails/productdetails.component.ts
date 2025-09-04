import { Component } from '@angular/core';
import { RouterOutlet,RouterModule,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  productId: number | null = null;
  product: any;

  products = [
  {
    id: 1,
    name: "iPhone 6",
    price: 4000,
    location: "SM Baguio",
    condition: "Fair",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone6-select-2014?wid=470&hei=556&fmt=png-alpha&.v=1617131312000"
  },
  {
    id: 2,
    name: "iPhone 6s",
    price: 5000,
    location: "SM Rosales",
    condition: "Good",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone6s-silver-select-2015?wid=470&hei=556&fmt=png-alpha&.v=1597687335000"
  },
  {
    id: 3,
    name: "iPhone 7",
    price: 7000,
    location: "SM Pampanga",
    condition: "Slight Scratches",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone7-black-select-2016?wid=470&hei=556&fmt=png-alpha&.v=1597687293000"
  },
  {
    id: 4,
    name: "iPhone 7 Plus",
    price: 9000,
    location: "SM Cebu",
    condition: "Good",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone7-plus-black-select-2016?wid=470&hei=556&fmt=png-alpha&.v=1597687201000"
  },
  {
    id: 5,
    name: "iPhone 8",
    price: 10000,
    location: "SM Manila",
    condition: "Like New",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-gold-select-2017?wid=470&hei=556&fmt=png-alpha&.v=1597687234000"
  },
  {
    id: 6,
    name: "iPhone 8 Plus",
    price: 12000,
    location: "SM Tarlac",
    condition: "Excellent",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-plus-gold-select-2017?wid=470&hei=556&fmt=png-alpha&.v=1597687244000"
  },
  {
    id: 7,
    name: "iPhone X",
    price: 14000,
    location: "SM San Fernando",
    condition: "Good",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-x-select-2017?wid=470&hei=556&fmt=png-alpha&.v=1550795423132"
  },
  {
    id: 8,
    name: "iPhone Xs",
    price: 15000,
    location: "SM Baguio",
    condition: "Like New",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-select-2018?wid=470&hei=556&fmt=png-alpha&.v=1550795424616"
  },
  {
    id: 9,
    name: "iPhone Xs Max",
    price: 18000,
    location: "SM Rosales",
    condition: "Excellent",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-max-gold-select-2018?wid=470&hei=556&fmt=png-alpha&.v=1601595209000"
  },
  {
    id: 10,
    name: "iPhone XR",
    price: 16000,
    location: "SM Makati",
    condition: "Slight Scratches",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-select-2018?wid=470&hei=556&fmt=png-alpha&.v=1550795419837"
  },
  {
    id: 11,
    name: "iPhone 11",
    price: 20000,
    location: "SM Pampanga",
    condition: "Good",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-black-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1567021766428"
  },
  {
    id: 12,
    name: "iPhone 11 Pro",
    price: 25000,
    location: "SM Clark",
    condition: "Excellent",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-space-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566842343098"
  },
  {
    id: 13,
    name: "iPhone 11 Pro Max",
    price: 27000,
    location: "SM Cebu",
    condition: "Like New",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-space-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956145928"
  },
  {
    id: 14,
    name: "iPhone SE (2020)",
    price: 15000,
    location: "SM Tarlac",
    condition: "Fair",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-black-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1586574260319"
  },
  {
    id: 15,
    name: "iPhone 12",
    price: 30000,
    location: "SM Baguio",
    condition: "Excellent",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343705000"
  },
  {
    id: 16,
    name: "iPhone 12 Mini",
    price: 28000,
    location: "SM Rosales",
    condition: "Good",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-blue-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343704000"
  },
  {
    id: 17,
    name: "iPhone 12 Pro",
    price: 40000,
    location: "SM Pampanga",
    condition: "Like New",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604021661000"
  },
  {
    id: 18,
    name: "iPhone 12 Pro Max",
    price: 42000,
    location: "SM Manila",
    condition: "Excellent",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-pacific-blue-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604021660000"
  },
  {
    id: 19,
    name: "iPhone 13",
    price: 45000,
    location: "SM Cebu",
    condition: "Brand New",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-blue-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1645572386476"
  },
  {
    id: 20,
    name: "iPhone 13 Mini",
    price: 42000,
    location: "SM Makati",
    condition: "Like New",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-pink-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1645572386476"
  },
  {
    id: 21,
    name: "iPhone 13 Pro",
    price: 50000,
    location: "SM San Fernando",
    condition: "Excellent",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-graphite-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1631652955000"
  },
  {
    id: 22,
    name: "iPhone 13 Pro Max",
    price: 52000,
    location: "SM Clark",
    condition: "Brand New",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1631652956000"
  },
  {
    id: 23,
    name: "iPhone 14",
    price: 60000,
    location: "SM Baguio",
    condition: "Brand New",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue-select-202209?wid=470&hei=556&fmt=png-alpha&.v=1661958176094"
  },
  {
    id: 24,
    name: "iPhone 14 Plus",
    price: 65000,
    location: "SM Pampanga",
    condition: "Excellent",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-plus-blue-select-202209?wid=470&hei=556&fmt=png-alpha&.v=1661958176094"
  },
  {
    id: 25,
    name: "iPhone 14 Pro",
    price: 70000,
    location: "SM Tarlac",
    condition: "Like New",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-deep-purple-select-202209?wid=470&hei=556&fmt=png-alpha&.v=1663703840288"
  },
  {
    id: 26,
    name: "iPhone 14 Pro Max",
    price: 75000,
    location: "SM Rosales",
    condition: "Brand New",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-deep-purple-select-202209?wid=470&hei=556&fmt=png-alpha&.v=1663703882366"
  },
  {
    id: 27,
    name: "iPhone 15",
    price: 80000,
    location: "SM Cebu",
    condition: "Brand New",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-blue-select-202309?wid=470&hei=556&fmt=png-alpha&.v=1693011167050"
  },
  {
    id: 28,
    name: "iPhone 15 Plus",
    price: 85000,
    location: "SM Manila",
    condition: "Brand New",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-plus-blue-select-202309?wid=470&hei=556&fmt=png-alpha&.v=1693011186868"
  },
  {
    id: 29,
    name: "iPhone 15 Pro",
    price: 95000,
    location: "SM Makati",
    condition: "Brand New",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-blue-titanium-select-202309?wid=470&hei=556&fmt=png-alpha&.v=1692829090559"
  },
  {
    id: 30,
    name: "iPhone 15 Pro Max",
    price: 105000,
    location: "SM Clark",
    condition: "Brand New",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-blue-titanium-select-202309?wid=470&hei=556&fmt=png-alpha&.v=1692829090559"
  }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === this.productId);
  }
}
