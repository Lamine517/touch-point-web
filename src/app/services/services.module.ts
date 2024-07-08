import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { AirtimeComponent } from './airtime/airtime.component';
import { SharedModule } from '../shared/shared.module';
import { DetailAirtimeComponent } from './detail-airtime/detail-airtime.component';
import { SingleFormServiceComponent } from './single-form-service/single-form-service.component';
import { CoreModule } from "../core/core.module";


@NgModule({
    declarations: [
        AirtimeComponent,
        DetailAirtimeComponent,
        SingleFormServiceComponent
    ],
    exports: [
        SingleFormServiceComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ServicesRoutingModule,
        CoreModule
    ]
})
export class ServicesModule { }
