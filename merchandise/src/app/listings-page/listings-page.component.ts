import { Listing } from "./../type";
import { Component, OnInit } from "@angular/core";
// import { fakeListings } from "../fake-data";
import { ListingsService } from "../listings.service";

@Component({
  selector: "app-listings-page",
  templateUrl: "./listings-page.component.html",
  styleUrls: ["./listings-page.component.css"],
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];
  // !service injectable
  constructor(private listingService: ListingsService) {}

  ngOnInit(): void {
    this.listingService
      .getListing()
      .subscribe((plist) => (this.listings = plist));
  }
}
