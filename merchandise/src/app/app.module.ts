import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListingsPageComponent } from "./listings-page/listings-page.component";
import { ListingDetailComponent } from "./listing-detail/listing-detail.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { MyListingsPageComponent } from "./my-listings-page/my-listings-page.component";
import { EditListingPageComponent } from "./edit-listing-page/edit-listing-page.component";
import { NewListingPageComponent } from "./new-listing-page/new-listing-page.component";
import { FormsModule } from "@angular/forms";
import { ListingDataFormComponent } from "./listing-data-form/listing-data-form.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ListingDetailComponent,
    ContactPageComponent,
    MyListingsPageComponent,
    EditListingPageComponent,
    NewListingPageComponent,
    ListingDataFormComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
