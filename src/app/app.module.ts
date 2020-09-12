import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
  JulmaFormComponent, JulmaComponent, JulmaRegisterComponent, DashBoardComponent,
  OrdersComponent, ProductsComponent, CustomersComponent,
  ReportsComponent, WalletComponent, ReviewsComponent,
  OffersComponent, HelpUsComponent, SettingsComponent,
  ChatComponent, NotificationComponent, ReportSalesComponent,
  ReportProductsComponent, ReportCustomersComponent,
  ReportVisitorsComponent
} from './components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChartsModule } from 'ng2-charts';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatTabsModule } from '@angular/material/tabs';
import { registerLocaleData } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import localeFr from '@angular/common/locales/fr';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActiveOffersDetalisComponent } from './components/offers/offers-child-components/active-offers-detalis/active-offers-detalis.component';
import { ActivePreviousOffersComponent } from './components/offers/offers-child-components/active-previous-offers/active-previous-offers.component';
import { SettingsBasicInformationComponent } from './components/settings/settings-child-components/settings-basic-information/settings-basic-information.component';
import { SettingsPaymentMethodsComponent } from './components/settings/settings-child-components/settings-payment-methods/settings-payment-methods.component';
import { SettingsUsersComponent } from './components/settings/settings-child-components/settings-users/settings-users.component';
import { SettingsCurrencyComponent } from './components/settings/settings-child-components/settings-currency/currency.component';
import { SettingsPostPaidComponent } from './components/settings/settings-child-components/settings-post-paid/settings-post-paid.component';
import { SettingsRegionComponent } from './components/settings/settings-child-components/settings-region/settings-region.component';
import { ForgetPsswordComponent } from './components/julma-form/form-dialog/forget-pssword/forget-pssword.component';
import { TabletItemComponent } from './components/orders/orders-childs-components/tablet-item/tablet-item.component';

registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    JulmaFormComponent,
    JulmaComponent,
    DashBoardComponent,
    OrdersComponent,
    ProductsComponent,
    CustomersComponent,
    ReportsComponent,
    WalletComponent,
    ReviewsComponent,
    OffersComponent,
    HelpUsComponent,
    SettingsComponent,
    ChatComponent,
    NotificationComponent,
    ReportSalesComponent,
    ReportProductsComponent,
    ReportCustomersComponent,
    ReportVisitorsComponent,
    ActiveOffersDetalisComponent,
    ActivePreviousOffersComponent,
    SettingsBasicInformationComponent,
    SettingsPaymentMethodsComponent,
    SettingsUsersComponent,
    SettingsCurrencyComponent,
    SettingsPostPaidComponent,
    SettingsRegionComponent,
    ForgetPsswordComponent,
    JulmaRegisterComponent,
    TabletItemComponent,
  ],
  imports: [
    BrowserModule,
    MatMomentDateModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    ChartsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    NgCircleProgressModule.forRoot({
      responsive: true,
    }),
    MatTabsModule,
    MatProgressBarModule,
    MatDialogModule

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR',

  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
