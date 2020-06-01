import { NgModule } from '@angular/core';



import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatIconModule, MatToolbarModule  ],
  exports: [ MatButtonModule, MatIconModule, MatToolbarModule ],
  
})
export class MaterialModule { }
