import { NgModule } from "@angular/core";
import { StartupCardComponent } from "./startupcard/startupcard.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [ StartupCardComponent ],
    exports: [ StartupCardComponent ],
    imports: [CommonModule]
})
export class StartupModule{}