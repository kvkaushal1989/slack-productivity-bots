﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MailSetting } from './mailsetting.model';
import { NgModule } from "@angular/core";
import { Project } from './project.model';
import { MailSettingService } from './mailsetting.service';
import { LoaderService } from '../../shared/loader.service';
//import { Md2Toast } from 'md2';
import { MailSettingAC } from './mailsettingAC.model';

@Component({
    templateUrl: './app/shared/MailSetting/mailsetting.html',
})
export class MailSettingComponent implements OnInit {
    mailSetting: MailSetting = new MailSetting;
    listOfProject: Array<Project>;
    groupList: Array<string>;
    IsToUpdate: boolean;
    selectedMailSetting: MailSetting = new MailSetting;
    showButton: boolean;
    mailSettingAC: MailSettingAC;
    currentModule: string;
    lists: any;
    projectSelected: boolean;

    constructor(private httpService: MailSettingService, private loader: LoaderService, private router: Router,
        /*private toaster: Md2Toast*/) {
        let currentLocation = window.location.hash;
        let listofString = currentLocation.split('/');
        this.currentModule = listofString[1];
        this.showButton = false;
        this.groupList = new Array<string>();
    }

    ngOnInit() {
        this.loader.loader = true;
        this.getGroups();
        this.getAllProject();
        this.projectSelected = false;
    };

    addMailSetting(mailSetting: MailSetting) {
        this.loader.loader = true;
        this.mailSettingAC = new MailSettingAC;
        this.mailSettingAC.CC = mailSetting.CC;
        this.mailSettingAC.ProjectId = mailSetting.Project.Id;
        this.mailSettingAC.Module = this.currentModule;
        this.mailSettingAC.SendMail = mailSetting.SendMail;
        this.mailSettingAC.To = mailSetting.To;
        this.httpService.addMailSetting(this.mailSettingAC).then((result) => {
            //this.toaster.show('Mail Setting of' + this.currentModule + 'successfully added');
            this.router.navigate(['/']);
        })
        this.loader.loader = false;
    };

    updateMailSetting(mailSetting: MailSetting) {
        this.loader.loader = true;
        this.mailSettingAC = new MailSettingAC;
        this.mailSettingAC.CC = mailSetting.CC;
        this.mailSettingAC.ProjectId = mailSetting.Project.Id;
        this.mailSettingAC.Module = this.currentModule;
        this.mailSettingAC.SendMail = mailSetting.SendMail;
        this.mailSettingAC.To = mailSetting.To;
        this.mailSettingAC.Id = mailSetting.Id;
        this.httpService.updateMailSetting(this.mailSettingAC).then((result) => {
            //this.toaster.show('Mail Setting of' + this.currentModule + 'successfully updated');
            this.router.navigate(['/']);
            this.loader.loader = false;
        });
    };

    getAllProject() {
        this.httpService.getAllProjects().then((result) => {
            this.listOfProject = result;
        });
        this.loader.loader = false;
    };

    getMailSettingDetailsByProjectId(Id: number) {
        this.loader.loader = true;
        this.projectSelected = true;
        this.httpService.getProjectByIdAndModule(Id, this.currentModule).then((result) => {
            this.selectedMailSetting = result;
            this.mailSetting.CC = this.selectedMailSetting.CC;
            this.mailSetting.To = this.selectedMailSetting.To;
            this.mailSetting.Id = this.selectedMailSetting.Id;
            this.mailSetting.Module = this.selectedMailSetting.Module;
            this.mailSetting.SendMail = this.selectedMailSetting.SendMail;
            if (this.selectedMailSetting.Id === 0) {
                this.IsToUpdate = false;
            }
            else {
                this.IsToUpdate = true;
            }
        });
        this.showButton = true;
        this.loader.loader = false;
    }

    getGroups() {
        this.httpService.getListOfGroups().then((result) => {
            this.groupList = result;
        });
    };
}