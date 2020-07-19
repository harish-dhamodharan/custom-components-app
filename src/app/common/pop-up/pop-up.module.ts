import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PopUpComponent} from './pop-up.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    PopUpComponent
  ],
  exports: [
    PopUpComponent
  ],
  entryComponents: [
  ]
})
export class PopUpModule { }
