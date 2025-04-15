import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgClass } from '@angular/common';

interface RealEstateListing {
  name: string;
  propertyType: string;
  propertySubType: string;
  verification: string;
  location: string;
  price: number;
  squareArea: number;
  bed: number;
  bath: number;
  agentAssigned: string;
  isHearted: boolean; // Add this property
  img: string;
}

@Component({
  selector: 'app-view-prop-list',
  imports: [NgFor, NgClass],
  templateUrl: './view-prop-list.component.html',
  styleUrl: './view-prop-list.component.css'
})
export class ViewPropListComponent {
  constructor(private router: Router) { }

  isHearted: boolean = false;
  realEstateListings: RealEstateListing[] = [
    {
      propertyType: "Residential",
      propertySubType: "Single Family Home",
      price: 450000,
      name: "Sunset Hills Estate",
      location: "123 Maple Drive, Springfield",
      bed: 4,
      bath: 2.5,
      squareArea: 2800,
      agentAssigned: "Sarah Johnson",
      verification: "AI Verified",
      isHearted: false,
      img: "/prop1.jpg",
    },
    {
      propertyType: "Residential",
      propertySubType: "Condo",
      price: 235000,
      name: "The Urban Lofts",
      location: "456 Downtown Ave, Metropolis",
      bed: 2,
      bath: 2,
      squareArea: 1200,
      agentAssigned: "Michael Chen",
      verification: "Verified by Appraisers",
      isHearted: false,
      img: "/prop1.jpg",
    },
    {
      propertyType: "Commercial",
      propertySubType: "Office Space",
      price: 1200000,
      name: "Central Business Plaza",
      location: "789 Commerce Street, Capital City",
      bed: 0,
      bath: 3,
      squareArea: 5000,
      agentAssigned: "Robert Williams",
      verification: "AI Verified",
      isHearted: false,
      img: "/prop1.jpg",
    },
    {
      propertyType: "Residential",
      propertySubType: "Townhouse",
      price: 325000,
      name: "Garden Villas",
      location: "321 Oak Lane, Rivertown",
      bed: 3,
      bath: 2,
      squareArea: 1800,
      agentAssigned: "Emily Rodriguez",
      verification: "Verified by Appraisers",
      isHearted: false,
      img: "/prop1.jpg",
    },
    {
      propertyType: "Land",
      propertySubType: "Residential Lot",
      price: 85000,
      name: "Pine Ridge Acres",
      location: "555 Forest Road, Lakeside",
      bed: 0,
      bath: 0,
      squareArea: 10000,
      agentAssigned: "David Thompson",
      verification: "AI Verified",
      isHearted: false,
      img: "/prop1.jpg",
    },
    {
      propertyType: "Residential",
      propertySubType: "Apartment",
      price: 195000,
      name: "Harbor View Apartments",
      location: "888 Bay Street, Coastal City",
      bed: 1,
      bath: 1,
      squareArea: 850,
      agentAssigned: "Jessica Lee",
      verification: "Verified by Appraisers",
      isHearted: false,
      img: "/prop1.jpg",
    },
    {
      propertyType: "Commercial",
      propertySubType: "Retail Space",
      price: 675000,
      name: "Main Street Shops",
      location: "246 Commerce Avenue, Downtown",
      bed: 0,
      bath: 2,
      squareArea: 2500,
      agentAssigned: "James Wilson",
      verification: "AI Verified",
      isHearted: false,
      img: "/prop1.jpg",
    },
    {
      propertyType: "Residential",
      propertySubType: "Villa",
      price: 1250000,
      name: "Palm Beach Villas",
      location: "777 Ocean Boulevard, Seaside",
      bed: 5,
      bath: 4.5,
      squareArea: 4200,
      agentAssigned: "Amanda Carter",
      verification: "Verified by Appraisers",
      isHearted: false,
      img: "/prop1.jpg",
    }
  ];

  

  toggleHeart(listing: RealEstateListing) {
    listing.isHearted = !listing.isHearted;
  }


  viewDetails(){
    this.router.navigate(['buyer/view-properties/view-prop-details']);
  }
}
