import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  images = [
    { src: 'https://img.sm360.ca/images/article/dilawri-group-of-companies/119082//2024-bmw-x5-now-delivers-more-power1693858913100.jpg', alt: 'Image 1' },
    { src: 'https://cdn.jdpower.com/JDP_2024%20BMW%20X5%20M%20Competition%20Front%20Seats.jpg', alt: 'Image 2' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrqnuP4NhTLXIiJ_XKYTCNqRhjITGakn39e8hHj-USg&s', alt: 'Image 3' }
  ];
  selectedImage: any = null;
  
  ngOnInit(): void {
    this.selectedImage = this.images[0];
  }


  selectImage(image: any) {
    this.selectedImage = image;
  }

}
