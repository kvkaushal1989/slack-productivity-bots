﻿using Promact.Core.Repository.AttachmentRepository;
using Promact.Core.Repository.ScrumReportRepository;
using Promact.Erp.DomainModel.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace Promact.Erp.Core.Controllers
{
    [Route("api/[controller]")]
    public class ScrumReportController : WebApiBaseController
    {
        #region "Private variables"
        private readonly IScrumReportRepository _scrumReportRepository;
        private readonly IAttachmentRepository _attachmentRepository;
        private ApplicationUserManager _userManager;
        #endregion

        #region "Constructor"
        public ScrumReportController(IScrumReportRepository scrumRepository, IAttachmentRepository attachmentRepository, ApplicationUserManager userManager)
        {
            _scrumReportRepository = scrumRepository;
            _attachmentRepository = attachmentRepository;
            _userManager = userManager;
        }
        #endregion

        #region "Public methods"

        /**
        * @api {get} GET/projects
        * @apiVersion 1.0.0
        * @apiName ScrumReport
        * @apiGroup ScrumReport    
        * @apiSuccessExample {json} Success-Response:
        * HTTP/1.1 200 OK 
        * {
        *     "Description":"A report will be generated to display the projects based on the logged in users role"
        * }
        */
        [HttpGet]
        [Route("GET/projects")]
        public async Task<IHttpActionResult> ScrumProjectList()
        {
            var accessToken = await _attachmentRepository.AccessToken(User.Identity.Name);
            var loginUser = await _userManager.FindByNameAsync(User.Identity.Name);
            return Ok(await _scrumReportRepository.GetProjects(loginUser.UserName, accessToken));
        }

        /**
        * @api {get} GET/scrumDetails/{projectId}/{date}
        * @apiVersion 1.0 
        * @apiName ScrumReport
        * @apiGroup ScrumReport
        * @apiParam {int} Id  projectId  
        * @apiParam {DateTime} DateTime  date   
        * @apiSuccessExample {json} Success-Response:
        * HTTP/1.1 200 OK 
        * {
        *     "Description":"A report will be generated displaying the details of a scrum for a particular project "
        * }
        */
        [HttpGet]
        [Route("GET/scrumDetails/{projectId}/{date}")]
        public async Task<IHttpActionResult> ScrumDetails(int projectId,DateTime date)
        {
            var accessToken = await _attachmentRepository.AccessToken(User.Identity.Name);
            var loginUser = await _userManager.FindByNameAsync(User.Identity.Name);
            return Ok(await _scrumReportRepository.ScrumReportDetails(projectId, date,loginUser.UserName, accessToken));
        }
        #endregion
    }
}
