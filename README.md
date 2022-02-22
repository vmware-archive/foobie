# This repository is no longer actively maintained by VMware, Inc.


foobie
======

Foobie the Foo Bar Marketing App

To deploy to Cloud Foundry:

```bash
$ git clone git@github.com:cloudfoundry-samples/foobie.git
$ cd foobie
$ npm install express
$ npm install jade
$ vmc push <yourappname> --runtime=node08

Would you like to deploy from the current directory? [Yn]:
Detected a Node.js Application, is this correct? [Yn]:
Application Deployed URL [<yourappname>.cloudfoundry.com]:
Memory reservation (128M, 256M, 512M, 1G, 2G) [64M]:
How many instances? [1]:
Bind existing services to '<yourappname>? [yN]:
Create services to bind to '<yourappname>'? [yN]:
Would you like to save this configuration? [yN]:
Creating Application: OK
Uploading Application:
  Checking for available resources: OK
  Processing resources: OK
  Packing application: OK
  Uploading (18K): OK
Push Status: OK
Staging Application '<yourappname>': OK
Starting Application '<yourappname>': OK
```

To update your app:

```bash
$ vmc update <yourappname>
```

To run app locally:

```bash
$ node app.js
```
