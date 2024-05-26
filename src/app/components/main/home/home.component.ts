import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  images = [
  {
    src: 'https://img.sm360.ca/images/article/dilawri-group-of-companies/119082//2024-bmw-x5-now-delivers-more-power1693858913100.jpg',
    alt: 'BMW X5 xDrive40i',
    title: 'BMW X5 xDrive40i',
    description: 'The 2024 BMW X5 xDrive40i boasts a powerful 3.0L turbocharged inline-6 engine delivering 335 horsepower and 330 lb-ft of torque. Experience a thrilling and refined driving experience with its smooth 8-speed automatic transmission and standard all-wheel drive.'
  },
  {
    src: 'https://cdn.jdpower.com/JDP_2024%20BMW%20X5%20M%20Competition%20Front%20Seats.jpg',
    alt: 'BMW X5 M Competition',
    title: 'BMW X5 M Competition',
    description: 'Unleash the ultimate performance beast with the 2024 BMW X5 M Competition. Its monstrous 4.4L twin-turbo V8 engine unleashes a staggering 617 horsepower and 553 lb-ft of torque, propelling you from 0 to 60 mph in a heart-stopping 3.3 seconds. Immerse yourself in the luxurious and supportive sport seats designed for maximum control and comfort during exhilarating drives.'
  },
  {
    src: 'https://di-uploads-pod20.dealerinspire.com/sewickleybmw/uploads/2023/08/2308-BMW-X5-Styling.jpg',
    alt: 'BMW X5 Design',
    title: 'BMW X5 - Striking Design',
    description: 'Turn heads wherever you go with the BMW X5’s captivating design. The bold front grille, sharp character lines, and muscular stance exude a sense of power and sophistication. The available panoramic sunroof bathes the interior in natural light, creating a spacious and airy ambiance.'
  },
  {
    src: 'https://di-uploads-pod24.dealerinspire.com/bmwofgwinnettplace/uploads/2020/03/The-luxurious-2020-BMW-X5-interior.png',
    alt: 'BMW X5 Interior',
    title: 'BMW X5 - Luxurious Interior',
    description: 'Step inside the BMW X5 and experience a haven of luxury and technology. The spacious cabin features premium materials like leather seats and a panoramic sunroof. The state-of-the-art infotainment system with a large touchscreen and intuitive controls keeps you connected and entertained on every journey.'
  },
  {
    src: 'https://hips.hearstapps.com/hmg-prod/images/2021-bmw-x5-xdrive45e-293-edit-1616444519.jpg?crop=0.790xw:0.590xh;0.168xw,0.393xh&resize=1200:*',
    alt: 'BMW X5 xDrive45e',
    title: 'BMW X5 xDrive45e Plug-in Hybrid',
    description: 'Embrace sustainable luxury with the 2024 BMW X5 xDrive45e plug-in hybrid. This innovative powertrain combines a powerful 3.0L turbocharged inline-6 engine with an electric motor, delivering a total of 389 horsepower and an impressive electric range. Enjoy the benefits of both electric and gasoline power, making the X5 xDrive45e a perfect choice for environmentally conscious drivers.'
  },
  {
    src: 'https://mediapool.bmwgroup.com/cache/P9/202301/P90493562/P90493562-the-new-bmw-x5-xdrive50e-04-23-highlights-600px.jpg',
    alt: 'BMW X5 Technology',
    title: 'BMW X5 - Advanced Technology',
    description: 'The 2024 BMW X5 is packed with cutting-edge technology to enhance your driving experience. The available 12.3-inch digital instrument cluster delivers vital information at a glance. The innovative driver assistance features, including lane departure warning and automatic emergency braking, provide an extra layer of safety and confidence on the road.'
  }]
  selectedImage: any = null;

  ngOnInit(): void {
    this.selectedImage = this.images[0];
  }

  selectImage(image: any) {
    this.selectedImage = image;
  }
}
