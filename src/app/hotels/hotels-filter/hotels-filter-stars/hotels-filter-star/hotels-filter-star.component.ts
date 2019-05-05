import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotels-filter-star',
  templateUrl: './hotels-filter-star.component.html',
  styleUrls: ['./hotels-filter-star.component.scss']
})
export class HotelsFilterStarComponent implements OnInit {

  @Input() label: string;
  @Input() stars: number;
  @Input() ngId: string;

  constructor() { }

  ngOnInit() {
  }

  iterations(it: number): Array<number> {
    return Array(it);
  }
}
