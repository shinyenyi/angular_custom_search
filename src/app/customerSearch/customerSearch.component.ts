import { Component, OnInit, Input } from "@angular/core";
import { Customer } from '../app.component';

@Component({
  selector: "customer-search",
  templateUrl: "./customerSearch.component.html",
  styleUrls: ["./customerSearch.component.scss"]
})
export class CustomerSearch implements OnInit {
  @Input() customers: Customer[];

  constructor() {
  }

  ngOnInit() {

  }
}
