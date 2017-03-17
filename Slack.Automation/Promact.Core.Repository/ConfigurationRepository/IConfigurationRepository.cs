﻿using Promact.Erp.DomainModel.ApplicationClass;
using Promact.Erp.DomainModel.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Promact.Core.Repository.ConfigurationRepository
{
    public interface IConfigurationRepository
    {
        /// <summary>
        /// Method to update configuration
        /// </summary>
        /// <param name="configuration">configuration</param>
        Task UpdateConfigurationAsync(Configuration configuration);
        /// <summary>
        /// Method to get list of configuration
        /// </summary>
        /// <returns>list of configuration</returns>
        IEnumerable<Configuration> GetAllConfiguration();
        /// <summary>
        /// Method to get list status of all module
        /// </summary>
        /// <returns>list of status</returns>
        Task<ConfigurationStatusAC> GetAllConfigurationStatusAsync();
    }
}