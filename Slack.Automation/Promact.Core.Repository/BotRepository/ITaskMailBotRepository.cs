﻿namespace Promact.Core.Repository.BotRepository
{
    public interface ITaskMailBotRepository
    {
        /// <summary>
        /// Method to turn on task mail bot
        /// </summary>
        /// <param name="botToken">token of bot</param>
        void StartAndConnectTaskMailBot(string botToken);
    }
}