import { Injectable } from "@angular/core";
import { Listing } from "./type";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};
@Injectable({
  providedIn: "root",
})
export class ListingsService {
  constructor(private http: HttpClient) {}

  getListing(): Observable<Listing[]> {
    return this.http.get<Listing[]>("api/listings");
  }
  getListingById(id: string): Observable<Listing> {
    return this.http.get<Listing>(`api/listings/${id}`);
  }
  getListingsForUser(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`api/user/12345/listings`);
  }

  deleteListing(id: string): Observable<any> {
    return this.http.delete(`/api/listings/${id}`);
  }
  createListing(
    name: string,
    description: string,
    price: number
  ): Observable<Listing> {
    return this.http.post<Listing>(
      "/api/create/listings",
      { name, description, price },
      httpOptions
    );
  }
  editListing(
    id: string,
    name: string,
    description: string,
    price: number
  ): Observable<Listing> {
    return this.http.post<Listing>(
      `/api/listings/${id}`,
      { name, description, price },
      httpOptions
    );
  }
  getListingContactById(id: string): Observable<Listing> {
    return this.http.get<Listing>(`api/contact/${id}`);
  }
}
