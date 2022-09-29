import { ListingsService } from "./../listings.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
// import { fakeListings } from "../fake-data";
import { Listing } from "../type";

// !  ActivatedRoute=> Read the url
@Component({
  selector: "app-listing-detail",
  templateUrl: "./listing-detail.component.html",
  styleUrls: ["./listing-detail.component.css"],
})
export class ListingDetailComponent implements OnInit {
  listing: Listing;
  // id: listing.id;
  constructor(
    private route: ActivatedRoute,
    private listingService: ListingsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.listingService
      .getListingById(id)
      .subscribe((listing) => (this.listing = listing));
    // this.listing = fakeListings.find((listing) => listing.id === id);
  }
}
