"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var Rx_1 = require('rxjs/Rx');
var LeaveReportService = (function () {
    function LeaveReportService(http) {
        this.http = http;
    }
    LeaveReportService.prototype.getLeaveReports = function () {
        return this.http.get("leaveReport")
            .map(this.extractData)
            .catch(this.handleError);
    };
    LeaveReportService.prototype.getLeaveReportDetail = function (Id) {
        return this.http.get("leaveReportDetails/" + Id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    LeaveReportService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    LeaveReportService.prototype.handleError = function (error) {
        var errMsg = 'Server error';
        return Rx_1.Observable.throw(errMsg);
    };
    LeaveReportService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LeaveReportService);
    return LeaveReportService;
}());
exports.LeaveReportService = LeaveReportService;
//# sourceMappingURL=leaveReport.service.js.map