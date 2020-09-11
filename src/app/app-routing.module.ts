import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  JulmaFormComponent, JulmaComponent, JulmaRegisterComponent, DashBoardComponent,
  OrdersComponent, ProductsComponent, CustomersComponent,
  ReportsComponent, WalletComponent, ReviewsComponent,
  OffersComponent, HelpUsComponent, SettingsComponent,
  ChatComponent, NotificationComponent, ReportSalesComponent,
  ReportProductsComponent, ReportCustomersComponent,
  ReportVisitorsComponent
} from './components';
import { AuthGuard } from './gouards';

const routes: Routes = [
  { path: '', component: JulmaFormComponent, },
  { path: 'register', component: JulmaRegisterComponent, },
  {
    path: 'julma',
    canActivate: [AuthGuard],
    component: JulmaComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashBoardComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'customers', component: CustomersComponent },
      {
        path: 'reports', component: ReportsComponent, children: [
          { path: '', redirectTo: 'report-sales', pathMatch: 'full' },
          { path: 'report-sales', component: ReportSalesComponent },
          { path: 'report-products', component: ReportProductsComponent },
          { path: 'report-customers', component: ReportCustomersComponent },
          { path: 'report-visitors', component: ReportVisitorsComponent }
        ]
      },
      { path: 'wallet', component: WalletComponent },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'offers', component: OffersComponent },
      { path: 'helpus', component: HelpUsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'notification', component: NotificationComponent }
    ]
  },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
