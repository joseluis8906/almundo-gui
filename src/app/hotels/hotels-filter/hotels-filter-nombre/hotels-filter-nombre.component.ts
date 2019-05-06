import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../../hotels.service';

@Component({
  selector: 'app-hotels-filter-nombre',
  templateUrl: './hotels-filter-nombre.component.html',
  styleUrls: ['./hotels-filter-nombre.component.scss']
})
export class HotelsFilterNombreComponent implements OnInit {

  isCollapsed = false;
  name: string;

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
  }

  onBuscar(evt: Event): void {
    this.hotelsService.nameSubject.next(this.name);
  }

}
