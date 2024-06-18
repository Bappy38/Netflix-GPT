# Deploy through AWS Amplify

- Go to AWS Management Console
- Go to Amplify Dashboard
- Click on `Create new App`
- In the `Choose source code provider` step, select `GitHub` and hit `next`
- Authorize amplify to access your selected github repository. Amplify uses `GitHub Apps` feature to get the access.
- In the `Add repository and branch` step, select the repository you have given access for. Select the name of the branch you want to deploy. In our case, its `main`. Hit `next`
- In the `App settings` step, check if the `Build command` and `Build output directory` is correct or not (You can also protect the site with username and password if it's a private site). Hit next. 
- Review all the configuration you set. Provide the necessary environment variable. And hit `Save and Deploy`.
- Visit deployed url once the deployment is done.