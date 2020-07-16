import { FinancesService } from './../../shared/services/finances.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  currentKey: any;
  currentData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private financeService: FinancesService
  ) { }

  async ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.currentKey = params.key;
    }, (err) => {
      console.log('Err', err);
    });

    await this.initDate(this.currentKey);
  }

  async initDate(key) {
    this.financeService.getMetricsByKey(key).subscribe((result) => {
      console.log(result);
      this.currentData = result;
    }, (err) => {
      console.error('[Error by key]: ', err);
    });
  }


  transformDate(date) {
    return moment.unix(date).format('L');
  }
}
