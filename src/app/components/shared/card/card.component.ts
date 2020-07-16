import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

  transformDate(timestamp) {
    return moment.unix(timestamp).format('L');
  }

}
