import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-upload-property',
  imports: [],
  templateUrl: './upload-property.component.html',
  styleUrl: './upload-property.component.css'
})
export class UploadPropertyComponent implements OnInit {
  private map!: L.Map;
  pinImagePath = "frontend/src/assets/pin-1.svg";

  ngOnInit() {
    this.initializeMap();
  }

  private initializeMap() {
    this.map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    const customIcon = L.icon({
      iconUrl: this.pinImagePath,
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -38]
    });

    this.getUserLocation(customIcon);

    this.setupManualLocationInput(customIcon);
  }

  private getUserLocation(customIcon: L.Icon) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // console.log("Detected location:", latitude, longitude);
          // this.setUserLocation(latitude, longitude, customIcon);
          this.setUserLocation(10.31002285, 123.89921158355281, customIcon);
        },
        (error) => {
          console.error("Geolocation error:", error);
          alert("Error: " + error.message + "\nUsing default location.");
          this.setFallbackLocation(customIcon);
        }
      );
    } else {
      alert("Geolocation not supported by your browser.");
      this.setFallbackLocation(customIcon);
    }
  }

  private setFallbackLocation(customIcon: L.Icon) {
    const address = "Sacred Heart Center Cabu City";
    this.setUserLocation(10.31002285, 123.89921158355281, customIcon);
  }

  private setupManualLocationInput(customIcon: L.Icon) {
    const locateBtn = document.getElementById('locateBtn');
    const addressInput = document.getElementById('address') as HTMLInputElement;

    if (locateBtn && addressInput) {
      locateBtn.addEventListener('click', () => {
        const address = addressInput.value;
        this.fetchLocation(address).then(coords => {
          if (coords) {
            console.log("Pinned location: " + coords.lat + " " + coords.lon);
            this.setUserLocation(coords.lat, coords.lon, customIcon);
          }
        });
      });
    }
  }

  private fetchLocation(address: string): Promise<{ lat: number, lon: number } | null> {
    return fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
        } else {
          alert("Location not found. Please try again.");
          return null;
        }
      })
      .catch(err => {
        console.error("Error fetching location:", err);
        alert("An error occurred while fetching the location.");
        return null;
      });
  }

  private setUserLocation(latitude: number, longitude: number, customIcon: L.Icon) {
    this.map.setView([latitude, longitude], 15);

    L.marker([latitude, longitude], { icon: customIcon })
      .addTo(this.map)
      .bindPopup("You are here!")
      .openPopup();
  }
}
