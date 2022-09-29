import { ListingsService } from "./../listings.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Listing } from "../type";
@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.css"],
})
export class ContactPageComponent implements OnInit {
  email: string = "";
  message: string = "";
  listing: Listing;
  // !Dependency injection
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingsService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.listingService
      .getListingContactById(id)
      .subscribe((listing) => (this.listing = listing));
    // this.listing = fakeListings.find((listing) => listing.id === id);
    this.message = `Hi I'm interested in your ${this.listing.name.toLocaleLowerCase()}`;
  }
  sendMessage() {
    alert("Your message send to the seller");
    // !Router define in the ts for navigating to another page
    this.router.navigateByUrl("/listings");
  }
}
