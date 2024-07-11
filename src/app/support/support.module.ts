import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TicketignsComponent } from './ticketigns/ticketigns.component';
import { FormationsComponent } from './formations/formations.component';
import { FaqComponent } from './faq/faq.component';
import { CoreModule } from "../core/core.module";


@NgModule({
    declarations: [
        TicketignsComponent,
        FormationsComponent,
        FaqComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        SupportRoutingModule,
        CoreModule
    ]
})
export class SupportModule { }
