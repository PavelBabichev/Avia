import { Component, OnInit } from '@angular/core';
import {TicketsListService} from '../../services/tickets-list.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
    private filtres: boolean[];
  constructor(private ticetslist: TicketsListService) {
      this.filtres = [false, false, false, false, false];
  }

  ngOnInit() {

}
  btnRub() {
       this.ticetslist.output('RUB', this.filtres);
  }
    btnUsd() {
        this.ticetslist.output('USD', this.filtres);
    }
    btnEur() {
        this.ticetslist.output('EUR', this.filtres);
    }
    changecheck(value) {
        if (value === -1) {
            this.filtres[0] = !this.filtres[0];
        } else if (value === 0) {
            this.filtres[1] = !this.filtres[1];
        } else if (value === 1) {
            this.filtres[2] = !this.filtres[2];
        } else if (value === 2) {
            this.filtres[3] = !this.filtres[3];
        } else {this.filtres[4] = !this.filtres[4]; }
        this.ticetslist.getFilter(this.filtres);
    }
}
