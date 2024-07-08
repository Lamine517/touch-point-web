import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportingRoutingModule } from './reporting-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { SingleTransactionComponent } from './single-transaction/single-transaction.component';
import { DialogComponent } from './dialog/dialog.component';
import { CoreModule } from "../core/core.module";


@NgModule({
    declarations: [
        TransactionsComponent,
        SingleTransactionComponent,
        DialogComponent
    ],
    exports: [
        SingleTransactionComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ReportingRoutingModule,
        CoreModule
    ]
})
export class ReportingModule { }
