import {Component, DoCheck, TemplateRef} from '@angular/core';
import {TicketsListService} from '../../services/tickets-list.service';
import {Ticket} from '../../services/ticket';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements  DoCheck {
  items: Ticket[] = [];
    modalRef: BsModalRef;
    sum: number;
    quontity = 0;
    currency = '';

  constructor(private ticetslist: TicketsListService, private modalService: BsModalService) {}
  ngDoCheck() {
         this.items = this.ticetslist.getData1();
         this.currency = this.ticetslist.getCurrency();
    }
    openModal(template: TemplateRef<any>, value: number) {
        this.sum = value;
        this.modalRef = this.modalService.show(template);
    }
}
