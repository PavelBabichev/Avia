import {Ticket} from './ticket';



export class TicketsListService {
    private oldCurrency = 'RUB';
    private currency = 'Руб';
    private arr;
    private tickets: Ticket[] = [
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '16:20', arrivalDate: '12.05.18', arrivalTime: '22:10', carrier: 'TK', stops: 3, price: 12400},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '17:20', arrivalDate: '12.05.18', arrivalTime: '23:50', carrier: 'S7', stops: 1, price: 13100},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '12:10', arrivalDate: '12.05.18', arrivalTime: '18:10', carrier: 'SU', stops: 0, price: 15300},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '17:00', arrivalDate: '12.05.18', arrivalTime: '23:30', carrier: 'TK', stops: 2, price: 11000},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '12:10', arrivalDate: '12.05.18', arrivalTime: '20:15', carrier: 'BA', stops: 3, price: 13400},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '9:40', arrivalDate: '12.05.18', arrivalTime: '19:25', carrier: 'SU', stops: 3, price: 12450},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '17:10', arrivalDate: '12.05.18', arrivalTime: '23:45', carrier: 'TK', stops: 1, price: 13600},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '6:10', arrivalDate: '12.05.18', arrivalTime: '15:25', carrier: 'TK', stops: 0, price: 14250},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '16:50', arrivalDate: '12.05.18', arrivalTime: '23:35', carrier: 'SU', stops: 1, price: 16700},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '6:10', arrivalDate: '12.05.18', arrivalTime: '16:15', carrier: 'S7', stops: 0, price: 17400},
    ];
    private tickets1: Ticket[] = [
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '16:20', arrivalDate: '12.05.18', arrivalTime: '22:10', carrier: 'TK', stops: 3, price: 12400},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '17:20', arrivalDate: '12.05.18', arrivalTime: '23:50', carrier: 'S7', stops: 1, price: 13100},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '12:10', arrivalDate: '12.05.18', arrivalTime: '18:10', carrier: 'SU', stops: 0, price: 15300},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '17:00', arrivalDate: '12.05.18', arrivalTime: '23:30', carrier: 'TK', stops: 2, price: 11000},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '12:10', arrivalDate: '12.05.18', arrivalTime: '20:15', carrier: 'BA', stops: 3, price: 13400},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '9:40', arrivalDate: '12.05.18', arrivalTime: '19:25', carrier: 'SU', stops: 3, price: 12450},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '17:10', arrivalDate: '12.05.18', arrivalTime: '23:45', carrier: 'TK', stops: 1, price: 13600},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '6:10', arrivalDate: '12.05.18', arrivalTime: '15:25', carrier: 'TK', stops: 0, price: 14250},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '16:50', arrivalDate: '12.05.18', arrivalTime: '23:35', carrier: 'SU', stops: 1, price: 16700},
        {origin: 'VVO', originName: 'Владивосток', destination: 'TLV', destinationName: 'Тель-Авив', departureDate: '12.05.18',
            departureTime: '6:10', arrivalDate: '12.05.18', arrivalTime: '16:15', carrier: 'S7', stops: 0, price: 17400},
    ];
    private filterTickets: Ticket[] = [];
    private  e = this.tickets;
    constructor() {
        for (const t of this.tickets) {
            this.filterTickets.push(t);
        }
        // const fs = require('fs-access');
       // this.arr = JSON.parse(fs.readFileSync('./tickets.json', 'utf8'));
    }
    getData(): Ticket[] {
       this.tickets.sort((a, b) => (a.arrivalTime > b.arrivalTime) ? 1 : ((b.arrivalTime > a.arrivalTime) ? -1 : 0));
       return this.tickets;
    }

    getCurrency(): string {
        return this.currency;
    }
    getData1(): Ticket[] {
        this.filterTickets.sort((a, b) => (a.arrivalTime > b.arrivalTime) ? 1 : ((b.arrivalTime > a.arrivalTime) ? -1 : 0));
        return this.filterTickets;
    }
    getFilter(arr: boolean[]) {
        this.filterTickets = [];
        if (arr[0] === true) {
            this.filterTickets = [];
            for (const t of this.tickets) {
                this.filterTickets.push(t);
            }
            return;
        }
        if (arr[1] === true) {
            for (const ticket of this.tickets) {
                if (ticket.stops === 0) {
                    this.filterTickets.push(ticket);
                }
            }
        }
        if (arr[2] === true) {
            for (const ticket of this.tickets) {
                if (ticket.stops === 1) {
                    this.filterTickets.push(ticket);
                }
            }
        }
        if (arr[3] === true) {
            for (const ticket of this.tickets) {
                if (ticket.stops === 2) {
                    this.filterTickets.push(ticket);
                }
            }
        }
        if (arr[4] === true) {
            for (const ticket of this.tickets) {
                if (ticket.stops === 3) {
                    this.filterTickets.push(ticket);
                }
            }
        }
        if (arr[0] === false && arr[1] === false && arr[2] === false && arr[3] === false && arr[4] === false) {
            this.filterTickets = [];
            for (const t of this.tickets) {
                this.filterTickets.push(t);
            }
            return;
        }
    }
    getLenght(): number {
        let i = 0;
        for (const t of this.tickets) {
            i++;
        }
        return i;
    }

   output(log: string, arr: boolean[]) {
        let coef = 1;
        if (log === 'RUB') {
          this.currency = 'Руб';
          coef = 1;
        } else if (log === 'USD') {
            this.currency = 'Usd';
            coef = 0.016;
        } else if (log === 'EUR') {
            this.currency = 'Eur';
            coef = 0.014;
        }
        this.filterTickets = this.tickets;
        console.log(this.filterTickets);
        for (let i = 0; i < this.getLenght(); i++) {
                this.filterTickets[i].price = Math.round(this.tickets1[i].price * coef);
            }
        this.getFilter(arr);
   }
}
