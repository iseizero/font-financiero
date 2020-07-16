import { FinancesService } from './../../shared/services/finances.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  getDataFinance: any;

  constructor(
    private financeService: FinancesService
  ) { }

  async ngOnInit() {

    this.financeService.getAllMetrics().subscribe((result) => {
      this.getDataFinance = result;
      console.log(this.getDataFinance);
    }, (err) => {
      console.log('ERR', err);
    });
  }

}
