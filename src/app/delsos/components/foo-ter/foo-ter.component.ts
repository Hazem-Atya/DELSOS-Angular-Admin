import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo-ter',
  templateUrl: './foo-ter.component.html',
  styleUrls: ['./foo-ter.component.scss']
})
export class FooTerComponent implements OnInit {

  constructor() { }
  test: Date = new Date();

  ngOnInit(): void {
  }

}
