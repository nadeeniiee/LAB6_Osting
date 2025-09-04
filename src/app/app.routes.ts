import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';


export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'productlist',component: ProductlistComponent},
    {path: 'productdetails/:id',component: ProductdetailsComponent},
];
