import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-strip',
  templateUrl: './strip.component.html',
  styleUrls: ['./strip.component.scss']
})
export class StripComponent implements OnInit {

  @Input() data = [];
  @Input('class') stripClass = 'strip';
  constructor() { }

  ngOnInit() {
  }

}
