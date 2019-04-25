# mlemmlem.ml personal page

Using Express, react cli , sass

####secret file construction

```
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
