.\Slack.Automation\packages\OpenCover.4.6.519\tools\OpenCover.Console.exe -register:user -target:".\Slack.Automation\packages\xunit.runner.console.2.1.0\tools\xunit.console.exe" "-targetargs:"".\Slack.Automation\Promact.Core.Test\bin\Debug\Promact.Core.Test.dll"" -appveyor -noshadow" -filter:"+[Promact.Core.Repository*]*" -output:opencoverCoverage.xml
$coveralls = (Resolve-Path "Slack.Automation/packages/coveralls.net.*/tools/csmacnz.coveralls.exe").ToString()
& $coveralls --opencover -i opencoverCoverage.xml --repoToken $env:COVERALLS_REPO_TOKEN --commitId $env:APPVEYOR_REPO_COMMIT --commitBranch $env:APPVEYOR_REPO_BRANCH --commitAuthor $env:APPVEYOR_REPO_COMMIT_AUTHOR --commitEmail $env:APPVEYOR_REPO_COMMIT_AUTHOR_EMAIL --commitMessage $env:APPVEYOR_REPO_COMMIT_MESSAGE --jobId $env:APPVEYOR_JOB_ID
