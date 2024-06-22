import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgFor } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [NavbarComponent, NgFor],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  images = ['assets/img/1.png', 'assets/img/2.png', 'assets/img/3.png']; // Reemplaza con tus URLs
  currentImage = 0;
  img="assets/img/5.png"
  constructor(){

  }

  ngOnInit(): void {
    
  }

  nextImage() {
    this.currentImage = (this.currentImage + 1) % this.images.length;
  }

  previousImage() {
    this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
  }



}


