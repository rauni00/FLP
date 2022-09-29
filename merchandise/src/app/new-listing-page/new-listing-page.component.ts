import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ListingsService } from "../listings.service";

@Component({
  selector: "app-new-listing-page",
  templateUrl: "./new-listing-page.component.html",
  styleUrls: ["./new-listing-page.component.css"],
})
export class NewListingPageComponent implements OnInit {
  name: string = "";
  description: string = "";
  price: string = "";
  constructor(
    private router: Router,
    private listingService: ListingsService
  ) {}
  ngOnInit(): void {}

  onSubmit(event) {
    const name = event.name;
    const description = event.description;
    const price = event.price;
    this.listingService
      .createListing(name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl("/my-listing");
      });
  }
}
