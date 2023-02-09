# W3block directory SDK 
## Installation

Install the package with npm
```
npm i @w3block/sdk-directory --save
```

Use the package in the project

```js
import 'dotenv/config'
import { W3blockIdSDK } from '@w3block/sdk-id'
import { W3blockdirectorySDK } from '@w3block/sdk-directory'

async function main() {
  const idSdk = new W3blockIdSDK({
    credential: {
      email: 'your-email',
      password: 'your-password',
      tenantId: 'your-id',
    },
    baseURL: 'http://localhost:6007',
    autoRefresh: false
  });

  const sdk = new W3blockdirectorySDK({
    idSdk: idSdk,
    baseURL: 'http://localhost:6008',
  });
}

main().then(() => {
  console.log('script running with success')
})


```



## Generate Api from Swagger

`SWAGGER_JSON_PATH=http://localhost:6008/sdk-json npm run api`
