import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { AllTicketComponent } from './component/all-ticket/all-ticket.component';
import { HomeComponent } from './component/home/home.component';
import { AddTicketComponent } from './component/add-ticket/add-ticket.component';
import { EditTicketComponent } from './component/edit-ticket/edit-ticket.component';
import { SearchPipe } from './Pipes/search.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ViewTicketComponent } from './component/view-ticket/view-ticket.component';

const routes:Routes = [
  {path:"",redirectTo:"Home" ,pathMatch:'full'},
  {path:"Home",component:HomeComponent},
  {path:"Ticket/All",component:AllTicketComponent},
  {path:"Ticket/Add",component:AddTicketComponent},
  {path:"Ticket/Edit/:id",component:EditTicketComponent},
  {path:"Ticket/View/:id",component:ViewTicketComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AllTicketComponent,
    HomeComponent,
    AddTicketComponent,
    EditTicketComponent,
    SearchPipe,
    ViewTicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
