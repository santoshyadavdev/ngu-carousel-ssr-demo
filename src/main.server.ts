import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/server/app.server.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
