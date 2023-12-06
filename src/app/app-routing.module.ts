import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './MyComponent/login/login.component';
import { HeaderComponent } from './MyComponent/header/header.component';

import { CampaignComponent } from './MyComponent/campaign/campaign.component';
import { DashboardComponent } from './MyComponent/dashboard/dashboard.component';
import { AdddataComponent } from './MyComponent/adddata/adddata.component';
import { StockComponent } from './MyComponent/stock/stock.component';
import { MouseComponent } from './MyComponent/mouse/mouse.component';
import { UpdateComponent } from './MyComponent/update/update.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login page on startup
  { path: 'login', component: LoginComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inventory', component: CampaignComponent },
  { path: 'adddata', component: AdddataComponent },
  { path: 'stock', component:StockComponent },
  { path: 'mouse', component:MouseComponent },
  { path: 'update/:sno', component: UpdateComponent },
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
