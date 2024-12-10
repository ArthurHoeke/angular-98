import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { Angular98Component } from 'angular-98';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), Angular98Component]
};
