import { Component, OnInit, OnChanges } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentDate: any;
  currentHour: any;

  constructor() { }

  ngOnInit() {
    this.currentDate = moment().format('L');
    setInterval(() => {
      this.currentHour = moment().format('LTS');
    }, 1000);
  }

}
