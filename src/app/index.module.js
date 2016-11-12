import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {RoadListController} from './controllers/roadList';
import {EntityController} from './controllers/entity';
import {DialogController} from './controllers/dialog';

import {CrudService} from './services/crud';

angular.module('tollminderAdmin',
  ['ngSanitize', 'ngMessages', 'ui.router', 'ngMaterial', 'toastr', "md.data.table"])
.constant('API', 'http://localhost:7000') // http://192.168.13.168:7000
.config(config)
.config(routerConfig)
.run(runBlock)
.controller('RoadListController', RoadListController)
.controller('EntityController', EntityController)
.controller('DialogController', DialogController)
.service('CrudService', CrudService);
