import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels-filter-stars',
  templateUrl: './hotels-filter-stars.component.html',
  styleUrls: ['./hotels-filter-stars.component.scss']
})
export class HotelsFilterStarsComponent implements OnInit {

  isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
