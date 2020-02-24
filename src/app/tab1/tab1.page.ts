import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

  ngOnInit() {
    let numero = 10;

    // tslint:disable-next-line: no-debugger
    debugger;

    numero += 20;

    numero += 40;

    numero -= 20;

    console.log({numero});
  }

}
