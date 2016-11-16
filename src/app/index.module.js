import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';

import {RootController} from './controllers/root';
import {LoginController} from './controllers/login';
import {RoadListController} from './controllers/roadList';
import {EntityController} from './controllers/entity';
import {DialogController} from './controllers/dialog';

import {LoginService} from './services/login';
import {CrudService} from './services/crud';

angular.module('tollminderAdmin',
  [ 'ngSanitize',
    'ngMessages',
    'ui.router',
    'ngMaterial',
    'md.data.table',
    'ngMap'
  ])

.constant('API', 'http://54.152.103.212/api')
//.constant('API', 'http://localhost:7000/api')
.constant('G_API_Key', 'AIzaSyA3bW45fzOFxRkt23VXQlG0W7Oy9Ud8M_g')

.config(config)
.config(routerConfig)

.run(runBlock)

.controller('RootController', RootController)
.controller('LoginController', LoginController)
.controller('RoadListController', RoadListController)
.controller('EntityController', EntityController)
.controller('DialogController', DialogController)

.service('LoginService', LoginService)
.service('CrudService', CrudService);
