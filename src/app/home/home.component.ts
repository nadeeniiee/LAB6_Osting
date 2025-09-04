import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'LAB6_Osting';
}

