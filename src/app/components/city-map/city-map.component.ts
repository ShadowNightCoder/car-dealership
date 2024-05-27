import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, NavigationControl } from 'maplibre-gl';


@Component({
  selector: 'app-city-map',
  templateUrl: './city-map.component.html',
  styleUrls: ['./city-map.component.scss']
})
export class CityMapComponent {
  @ViewChild('map') private mapContainer!: ElementRef<HTMLElement>;
  @Input() cityName: string = 'tel-aviv';
  map: Map | null = null;
  myAPIKey = 'a2d6b1442385490e947422e6cbcd8b74';
  mapStyle = 'https://maps.geoapify.com/v1/styles/positron/style.json';
  latitude: any;
  longitude: any;
  constructor(private http: HttpClient) { }

  ngAfterViewInit() {
    const geocodingUrl = `https://nominatim.openstreetmap.org/search?q=${this.cityName}&format=json`;

    this.http.get<any>(geocodingUrl).subscribe(data => {
      if (data.length > 0) {
        const firstResult = data[0];
        this.latitude = firstResult.lat;
        this.longitude = firstResult.lon;

        const initialState = {
          lng: this.longitude,
          lat: this.latitude,
          zoom: 11
        };

        this.map = new Map({
          container: this.mapContainer.nativeElement,
          style: `${this.mapStyle}?apiKey=${this.myAPIKey}`,
          center: [initialState.lng, initialState.lat],
          zoom: initialState.zoom
        });

        this.map.addControl(new NavigationControl());

        
      } else {
        console.error('City not found by Nominatim API.');
      }
    }, error => {
      console.error('Error during Nominatim API call:', error);
    });


  }


}
