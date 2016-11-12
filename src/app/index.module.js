import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {RoadsController} from './roads/roads.controller';
import {RoadController} from './road/road.controller';
import {NewRoadController} from './modals/newRoad.controller';
import {NewWayPointController} from './modals/newWayPoint.controller';
import {WayPointController} from './wayPoint/wayPoint.controller';
import {NewTollPointController} from './modals/newTollPoint.controller';

import {RoadService} from './services/road.service';
import {WayPointService} from './services/wayPoint.service';
import {TollPointService} from './services/tollPoint.service';

angular.module('tollminderAdmin',
  ['ngSanitize', 'ngMessages', 'ui.router', 'ngMaterial', 'toastr', "md.data.table"])
.constant('API', 'http://localhost:7000') // http://192.168.13.168:7000
.config(config)
.config(routerConfig)
.run(runBlock)
.controller('RoadsController', RoadsController)
.controller('RoadController', RoadController)
.controller('NewRoadController', NewRoadController)
.controller('NewWayPointController', NewWayPointController)
.controller('WayPointController', WayPointController)
.controller('NewTollPointController', NewTollPointController)
.service('RoadService', RoadService)
.service('WayPointService', WayPointService)
.service('TollPointService', TollPointService);
