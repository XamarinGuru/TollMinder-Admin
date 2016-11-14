import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {LoginController} from './controllers/login';
import {RoadListController} from './controllers/roadList';
import {EntityController} from './controllers/entity';
import {DialogController} from './controllers/dialog';

import {CrudService} from './services/crud';

angular.module('tollminderAdmin',
  ['ngSanitize', 'ngMessages', 'ui.router', 'ngMaterial', "md.data.table"])
.constant('API', 'http://192.168.13.168:7001') // http://192.168.13.168:7000
.constant('USERNAME', 'admin')
.constant('PASSWORD', '1234')
.config(config)
.config(routerConfig)
.run(runBlock)
.controller('LoginController', LoginController)
.controller('RoadListController', RoadListController)
.controller('EntityController', EntityController)
.controller('DialogController', DialogController)
.service('CrudService', CrudService);
