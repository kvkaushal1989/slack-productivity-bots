﻿import { Injectable } from '@angular/core';


@Injectable()
export class StringConstant {
    constructor() { }
    leaveReport = "api/leaveReport";
    serverError = 'Server error';
    listColumns = ["Employee Name", "Employee Username", "Role", "Total Sick Leave", "Total Casual Leave", "Utilised Casual Leave", "Balance Casual Leave", "Utilised Sick Leave", "Balance Sick Leave"];
    theme = 'plain';
    overflow = 'linebreak';
    pageBreak = 'auto';
    tableWidth = 'auto';
    save = 'Report.pdf';
    portrait = 'p';
    unit = 'pt';
    format = 'a4';
    detail = '/detail';
    detailColumns = ["Employee Name", "Employee Username", "Type", "Leave From", "Start Day", "Leave Upto", "End Day", "Reason"];
    paramsId = 'id';
    scrum = "api/project";
    slash = "/";
    defaultDate = '1-01-01';
    notAvailableComment = 'Not Available';
    RoleAdmin = "Admin";
    RoleTeamLeader = "TeamLeader";
    taskList = "/task";
    dateDefaultFormat = "yyyy-MM-dd";
    dateFormat = "dd-MM-yyyy";
    taskDetails = "task/taskdetail";
    noLeaves = "No employee has any approved leaves";
    noDetails = "No details to show";
    noProjectToDisplay = "No projects to display";
    medium = "medium";
    userId = "1";
    userName = "test";
    userEmail = "test@test.com";
    createdOn = "10-09-2016";
    comment = "test Comment";
    description = "test Description";
    empty = "";
    paramsUserId = "UserId";
    paramsUserName = "UserName";
    userRole = "UserRole";
    createdOns = "createdOn";
    taskDetailsUrl = "/user/";
    selectedDate = "SelectedDate";
    taskMaiUrl = "api/taskreport";
    next = "Next";
    previous = "Previous";
    pageType = "PageType";
    role = "role";
    name = "userName";
    userIsAdmin = 'user/admin';
    oauthUrl = "oauth/";
    mailSettingOf = "Mail Setting of";
    successfully = "successfully";
    added = "added";
    updated = "updated";
    project = "project";
    group = "group";
    Answer1 = "abc";
    Answer2 = "abc2";
    Answer3 = "no";
    EmployeeName = "xyz";
    ProjectCreationDate = "1/1/16";
    projectName = "aaaa";
    getLeaveReports = "getLeaveReports";
    getLeaveReportDetail = "getLeaveReportDetail";
    casualLeave = "14";
    sickLeave = "7";
    leaveDate = "1/1/16";
    module = "module";
    scrumName = "scrumName";
   
    groupUrl = "api/group";
}