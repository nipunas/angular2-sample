//Angular - library for using Angular in a web browser
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//Root Module
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
