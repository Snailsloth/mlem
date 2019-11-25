# mlemmlem.ml personal page
Using Express, react cli , sass


## installation

clone, npm install in root dir, yarn install in "clientDev" dir


## run

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `front` folder outside clientDev.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.










### secret file 

In project root: 

```javascript
var config = {
  development: {
      secret:'',
      //url to be used in link generation
      url: 'domain',
      //server details
      server: {
          host: '127.0.0.1',
          port: '5000'
      },
      twitter: {
        apiKey: '',
        apiSecret: '',
        accessToken:'',
        accessTokenSecret: ''
      }
  },
  production: {
      secret:'$*',
      //url to be used in link generation
      url: '',
      //server details
      server: {
          host:   '127.0.0.1',
          port:   '5000'
      },
      twitter: {
        apiKey: '',
        apiSecret: '',
        accessToken:'',
        accessTokenSecret: ''
      }
  }
  };
module.exports = config;
```


## TODO: 
⋅⋅* git card doesnt work
⋅⋅* make and separate 1 function for both requests

refactor everything 