import { NgModule } from '@angular/core'

import { Routes, RouterModule } from '@angular/router'
import { StartupCardComponent } from './startupcards/startupcard/startupcard.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ResultadoLista } from './startupcards/resultadolista/resultadolista.component';

const routes: Routes = [
    { path: '', component: StartupCardComponent },
    { path: 'resultado', component: ResultadoLista },
    { path: '**', component: StartupCardComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRountingModule { }