# would-you-rather
This is a simple react-redux implementaion of the "Would You Rather" game. The app was built with create-react-app as a base, and I used react-bootstrap for styling. Yarn was used as my package manager.

## How To Start
1. Install the packages with yarn install. (install yarn if you have not already...)
2. Start the app localhost:3000 with yarn start.
3. Localhost:3000 should automatically open to the login page in your default browser.

## About The App
This is a react-redux implementation of the "Would You Rather" game. A user may login as 1 of 3 users, and answer/create questions which inculde 2 options. The app keeps track of the user's answers and questions in the redux store. The user may view a leader board showing who has asked and answered the most questions. Thats pretty much it! :)

##Sources
I struggled with private routes but was able to get it sorted out with help from this article.
https://tylermcginnis.com/react-router-protected-routes-authentication/
I used help on the slack forum to figure the redirect/login/404 logic.