import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import * as L from 'leaflet';

@Component({
  selector: 'app-upload-property',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './upload-property.component.html',
  styleUrl: './upload-property.component.css'
})
export class UploadPropertyComponent implements OnInit {
  private map!: L.Map;
  propertyForm!: FormGroup;
  pinImagePath = "/pin-1.svg";

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeMap();
    this.initializeForm();
  }

  get form(): FormGroup {
    return this.propertyForm;
  }

  get amenitiesFormGroup(): FormGroup {
    return this.propertyForm.get('amenities') as FormGroup;
  }

  private initializeForm() {
    this.propertyForm = this.fb.group({
      propertyTitle: ['Spacious Modern Apartment', Validators.required],
      propertyType: ['Apartment', Validators.required],
      listingType: ['For Sale', Validators.required],
      price: [150000, [Validators.required, Validators.min(0)]],
      bedrooms: [3, [Validators.required, Validators.min(0)]],
      bathrooms: [2, [Validators.required, Validators.min(0)]],
      floorArea: [120, [Validators.required, Validators.min(0)]],
      amenities: this.fb.group({
      wifi: [true],
      parking: [true],
      pool: [false],
      gym: [true],
      security: [false]
      }),
      condition: ['New', Validators.required],
      description: ['A spacious and modern apartment located in the heart of the city, featuring 3 bedrooms, 2 bathrooms, and a large living area. Perfect for families or professionals seeking comfort and convenience.', Validators.required],
      address: ['456 Modern Avenue', Validators.required],
      region: ['Region VII', Validators.required],
      province: ['Cebu', Validators.required],
      municipality: ['Cebu City', Validators.required]
    });
  }

  onSubmit() {
    if (this.propertyForm.valid) {
      console.log('Form submitted successfully:', this.propertyForm.value);
      alert('Property details submitted successfully!');
    } else {
      alert('Please fill out all required fields.');
    }
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
