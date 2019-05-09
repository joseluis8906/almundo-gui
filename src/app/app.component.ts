import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo almundo.com';
  terminos = false;
  screenSize: any = {width: null, heigth: null};

  @HostListener("window:resize", ["$event"])
  onResize(event?) {
    this.screenSize.width = window.innerWidth;
    this.screenSize.heigth = window.innerHeight;
  }

  @HostListener("window:load", ["$event"])
  onLoad(event?) {
    this.screenSize.width = window.innerWidth;
    this.screenSize.heigth = window.innerHeight;
  }
}
