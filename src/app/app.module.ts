import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions, Response } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InterceptorService } from 'ng2-interceptors';
import {
  NgModule,
  ApplicationRef,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { PushNotificationsModule, SimpleNotificationsModule, NotificationsService }
  from 'angular2-notifications';
import { ServerURLInterceptor } from './core/services/interceptors/services/app-interceptor.service';
import { PageTitleService } from './core/services/page-title/page-title.service';
import { MessengerModule } from './core/services/event-listeners/app.events.service';
import { GlobalConstants, ApiConstants, ErrorConstants, MsgConstants } from './core/constants/';
import { AppLoaderModule } from './core/modules/app-loader/app.loader.module';
import { AppInterceptorModule } from './core/services/interceptors/app-interceptor.module';
import { DynamicFormModule } from './core/modules/dynamic-form/dynamic-form.module';
import { Ng2UiAuthModule } from 'ng2-ui-auth';
import { CoreAuthConfig } from './core/modules/auth/config/core-auth-config';
import { PipesModule } from './core/pipes/pipes.module';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { BreadcrumbModule } from './core/modules/breadcrumb/breadcrumb.module';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './core/services/app.service';
import { HomeComponent } from './submodules/home';
import { NoContentComponent } from './submodules/no-content';

import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
import { SortableModule } from 'ngx-bootstrap';
import { AuthModule } from './core/modules/auth/auth.module';

import { RestService } from './core/services/rest/rest.service';
import { ErrorHandlerService } from './core/services/error-handler.service';
import { CookieService } from './core/services/cookies/cookie.service';

import 'hammerjs';
import 'style-loader!css-loader!less-loader!font-awesome-webpack/font-awesome-styles.loader!font-awesome-webpack/font-awesome.config.js';
import 'bootstrap-loader';

import '../styles/styles.scss';

import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';

export function interceptorFactory (
  xhrBackend: XHRBackend,
  requestOptions: RequestOptions,
  serverURLInterceptor: ServerURLInterceptor
) {
  let service = new InterceptorService(xhrBackend, requestOptions);
  service.addInterceptor(serverURLInterceptor);
  return service;
}

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  {
    provide: Http,
    useFactory: interceptorFactory,
    deps: [XHRBackend, RequestOptions, ServerURLInterceptor]
  },
  Title,
  AppState,
  GlobalConstants,
  ApiConstants,
  ErrorConstants,
  MsgConstants,
  NotificationsService,
  PageTitleService,
  RestService,
  ErrorHandlerService,
  CookieService
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent,
    HeaderComponent,
    FooterComponent,
    ToolbarComponent
  ],
  exports: [

  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    RouterModule.forRoot(ROUTES, { useHash: false }),
    SimpleNotificationsModule.forRoot(),
    PushNotificationsModule,
    BrowserAnimationsModule,
    AppLoaderModule,
    Ng2BootstrapModule.forRoot(),
    TooltipModule.forRoot(),
    SortableModule.forRoot(),
    AppInterceptorModule.forRoot(),
    ModalModule.forRoot(),
    MessengerModule,
    BootstrapModalModule,
    DynamicFormModule,
    Ng2UiAuthModule.forRoot(CoreAuthConfig),
    PipesModule,
    BreadcrumbModule,
    AuthModule
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [],
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    // console.log('HMR store', JSON.stringify(store, null, 2));
    /**
     * Set state
     */
    this.appState._state = store.state;
    /**
     * Set input values
     */
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    /**
     * Save state
     */
    const state = this.appState._state;
    store.state = state;
    /**
     * Recreate root elements
     */
    store.disposeOldHosts = createNewHosts(cmpLocation);
    /**
     * Save input values
     */
    store.restoreInputValues  = createInputTransfer();
    /**
     * Remove styles
     */
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    /**
     * Display new elements
     */
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
