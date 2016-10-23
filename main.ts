import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';

//Importar las rutas
import { APP_ROUTER_PROVIDER } from './app.routes'

bootstrap(AppComponent, [APP_ROUTER_PROVIDER]).catch(error => console.log(error));
