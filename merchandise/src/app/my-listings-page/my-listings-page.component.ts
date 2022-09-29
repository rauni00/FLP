import { Component, OnInit } from "@angular/core";
// import { fakeListings } from "../fake-data";
import { Listing } from "../type";
import { ListingsService } from "../listings.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-my-listings-page",
  templateUrl: "./my-listings-page.component.html",
  styleUrls: ["./my-listings-page.component.css"],
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = [];
  message = null;
  // ! Initialising object of another class  in the construction of another class
  constructor(
    private listingService: ListingsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listingService
      .getListingsForUser()
      .subscribe((ulisting) => (this.listings = ulisting));
  }
  onDeleteClicked(listingId: string) {
    this.listingService.deleteListing(listingId).subscribe(() => {
      this.listings = this.listings.filter(
        (listing) => listing.id != listingId
      );
      this.router.navigateByUrl("/my-listing");
    });

    this.message = `Item is Successfully Deleted...`;
  }
}

// !

// !
