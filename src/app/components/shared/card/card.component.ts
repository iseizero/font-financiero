import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  transformDate(timestamp) {
    return moment.unix(timestamp).format('L');
  }

  goToDetail(item){
    this.router.navigate(['/detail'], { replaceUrl: true , queryParams: {
      key: item.key
    }});
  }

}
