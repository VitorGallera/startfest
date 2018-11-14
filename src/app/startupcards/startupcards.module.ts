import { NgModule } from "@angular/core";
import { StartupCardComponent } from "./startupcard/startupcard.component";
import { CommonModule } from "@angular/common";
import { FormProposta } from "./formproposta/formproposta.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultadoItem } from "./resultadoitem/resultadoitem.component";
import { ResultadoLista } from "./resultadolista/resultadolista.component";
import { RouterModule, Routes, Router } from '@angular/router';

@NgModule({
    declarations: [ 
        StartupCardComponent,
        FormProposta,
        ResultadoLista,
        ResultadoItem
    ],
    exports: [ 
        StartupCardComponent,
        FormProposta,
        ResultadoLista,
        ResultadoItem
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class StartupModule{}