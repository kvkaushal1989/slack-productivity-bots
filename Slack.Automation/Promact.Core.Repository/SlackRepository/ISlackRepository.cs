﻿using Promact.Erp.DomainModel.ApplicationClass;
using Promact.Erp.DomainModel.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Promact.Core.Repository.SlackRepository
{
    public interface ISlackRepository
    {
        Task<LeaveRequest> LeaveApply(List<string> slackRequest, string userName);
        List<SlashAttachment> SlackResponseAttachment(string leaveRequestId, string replyText);
        LeaveRequest UpdateLeave(int leaveId, string status);
        void SlackLeaveList(List<string> slackText, SlashCommand leave);
        void SlackLeaveCancel(List<string> slackText, SlashCommand leave);
        void SlackLeaveStatus(List<string> slackText, SlashCommand leave);
        void SlackLeaveBalance(SlashCommand leave);
        void SlackLeaveHelp(SlashCommand leave);
    }
}
