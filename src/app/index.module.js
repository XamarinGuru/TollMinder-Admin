import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';

import {RootController} from './controllers/root';
import {MainDialogController} from './controllers/mainDialog';
import {LoginController} from './controllers/login';
import {RoadListController} from './controllers/roadList';
import {EntityController} from './controllers/entity';
import {DialogController} from './controllers/dialog';
import {RatesController} from './controllers/rates';
import {MatrixController} from './controllers/matrix';

import {LoginService} from './services/login';
import {CrudService} from './services/crud';
import {StaticDataService} from './services/staticData';

angular.module('tollminderAdmin',
  [ 'ngSanitize',
    'ngMessages',
    'ui.router',
    'ngMaterial',
    'md.data.table',
    'ngMap',
    'ui.mask'
  ])

.constant('API', 'http://54.152.103.212/api')
// .constant('API', 'http://localhost:7000/api')
.constant('G_API_Key', 'AIzaSyA3bW45fzOFxRkt23VXQlG0W7Oy9Ud8M_g')

.config(config)
.config(routerConfig)

.run(runBlock)

.controller('RootController', RootController)
.controller('LoginController', LoginController)
.controller('RoadListController', RoadListController)
.controller('EntityController', EntityController)
.controller('DialogController', DialogController)
.controller('RatesController', RatesController)
.controller('MatrixController', MatrixController)

.service('LoginService', LoginService)
.service('StaticDataService', StaticDataService)
.service('CrudService', CrudService);
