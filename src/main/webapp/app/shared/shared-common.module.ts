import { NgModule } from '@angular/core';

import { GufetSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GufetSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GufetSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GufetSharedCommonModule {}
