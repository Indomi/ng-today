import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [SetupComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ],
  providers: [ LocalStorageService ]
})
export class SetupModule { }
