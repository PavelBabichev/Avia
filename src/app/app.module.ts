import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MyFormComponent } from './components/my-form/my-form.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import {TicketsListService} from './services/tickets-list.service';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
      FormsModule
  ],
  providers: [TicketsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
