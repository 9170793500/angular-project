import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 

import { AppComponent } from './app.component';
import { LoginComponent } from './MyComponent/login/login.component';

import { NavbarComponent } from './MyComponent/navbar/navbar.component';
import { HeaderComponent } from './MyComponent/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CampaignComponent } from './MyComponent/campaign/campaign.component';
import { DashboardComponent } from './MyComponent/dashboard/dashboard.component';
import { AdddataComponent } from './MyComponent/adddata/adddata.component';
import { StockComponent } from './MyComponent/stock/stock.component';
import { MouseComponent } from './MyComponent/mouse/mouse.component';
import { RegisterComponent } from './MyComponent/register/register.component'; 
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { NgxSearchPipeModule } from 'ngx-search-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UpdateComponent } from './MyComponent/update/update.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    CampaignComponent,
    DashboardComponent,
    AdddataComponent,
    StockComponent,
    MouseComponent,
    RegisterComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSearchPipeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatPaginatorModule
  ],
  providers: [ApiService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
