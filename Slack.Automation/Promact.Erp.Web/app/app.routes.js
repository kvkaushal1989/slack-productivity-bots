//import { provideRouter, RouterConfig }  from '@angular/router';
"use strict";
//import { AppComponent } from './app.component';
//const routes: RouterConfig = [
//    {
//        path: 'reports',
//        component: AppComponent
//    },
//    //{
//    //    path: '',
//    //    redirectTo: '/main',
//    //    pathMatch: 'full'
//    //},
//];
//export const appRouterProviders = [
//    provideRouter(routes)
//];
var router_1 = require('@angular/router');
var leaveReport_1 = require('./leaveReport/leaveReportList/leaveReport');
var leaveReportDetails_1 = require('./leaveReport/leaveReportDetails/leaveReportDetails');
var appRoutes = [
    {
        path: 'report',
        component: leaveReport_1.LeaveReportComponent
    },
    {
        path: 'detail/:id',
        component: leaveReportDetails_1.LeaveReportDetailsComponent
    },
    {
        path: '',
        redirectTo: '/report',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map