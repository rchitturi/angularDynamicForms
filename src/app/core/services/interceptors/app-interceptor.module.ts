import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInterceptorComponent } from './app-interceptor/app-interceptor.component';
import { ServerURLInterceptor } from './services/app-interceptor.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppInterceptorComponent
  ],
  exports: [],
  entryComponents: [
    // AppInterceptorComponent
  ],
})
export class AppInterceptorModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppInterceptorModule,
      providers: [
        // Include any Services in this feature folder
        ServerURLInterceptor
      ]
    };
  }
}
