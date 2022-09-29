import { NewListingPageComponent } from "./new-listing-page/new-listing-page.component";
import { MyListingsPageComponent } from "./my-listings-page/my-listings-page.component";
import { EditListingPageComponent } from "./edit-listing-page/edit-listing-page.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { ListingDetailComponent } from "./listing-detail/listing-detail.component";
import { ListingsPageComponent } from "./listings-page/listings-page.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// Routes is the data type
const routes: Routes = [
  {
    path: "",
    redirectTo: "/listings",
    pathMatch: "full",
  },
  {
    path: "listings", // ! when it call then the component is call
    component: ListingsPageComponent,
    pathMatch: "full", // ! it is match the full path
  },
  // localhost:4200/listings/123
  { path: "listings/:id", component: ListingDetailComponent },
  { path: "contact/:id", component: ContactPageComponent },
  { path: "edit-listing/:id", component: EditListingPageComponent },
  { path: "my-listing", component: MyListingsPageComponent },
  { path: "new-listing", component: NewListingPageComponent },
];

// ! @NgModule decoration function is
// ! meta data and meta data is  Data about data

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
