import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http'

//Importar las rutas
import { APP_ROUTER_PROVIDER } from './app.routes'

bootstrap(AppComponent, [APP_ROUTER_PROVIDER, HTTP_PROVIDERS]).catch(error => console.log(error));
