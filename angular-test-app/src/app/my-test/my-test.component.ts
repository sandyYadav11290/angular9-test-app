import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent implements OnInit {

  constructor() { }

  count = 0;

  ngOnInit(): void {
  }

  change() {
    this.count = 10;
  }

}
