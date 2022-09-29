import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Listing } from "../type";

@Component({
  selector: "app-listing-data-form",
  templateUrl: "./listing-data-form.component.html",
  styleUrls: ["./listing-data-form.component.css"],
})
export class ListingDataFormComponent implements OnInit {
  // ! Input Attribute : Parent component can pass data to child component using input attribute
  @Input() buttonText;
  @Input() currentName = "";
  @Input() currentDescription = "";
  @Input() currentPrice = "";
  // !  Output  Event
  @Output() onSubmit = new EventEmitter<Listing>();
  // ! Data members
  name: string = "";
  description: string = "";
  price: string = "";
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }
  onButtonClicked() {
    this.onSubmit.emit({
      id: null,
      name: this.name,
      description: this.description,
      price: Number(this.price),
    });
  }
}
