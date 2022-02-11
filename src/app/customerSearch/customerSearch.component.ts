import { Component, OnInit, Input } from "@angular/core";
import { Customer } from '../app.component';

@Component({
  selector: "customer-search",
  templateUrl: "./customerSearch.component.html",
  styleUrls: ["./customerSearch.component.scss"]
})
export class CustomerSearch implements OnInit {
  @Input() customers: Customer[];
  searchedCustomers: Customer[];
  searchString: string;

  constructor() {
  }

  ngOnInit() {

  }

  searchForCustomer(searchString: string) {

    this.searchedCustomers = this.customers.filter(o =>
      o.name.toLowerCase().includes(searchString.toLowerCase()) ||
      o.location.toLowerCase().includes(searchString.toLowerCase()) ||
      o.gender.toLowerCase().includes(searchString.toLowerCase()) ||
      o.age.toLowerCase().includes(searchString.toLowerCase()) ||
      o.income.toLowerCase().includes(searchString.toLowerCase())
    );
  }
}
