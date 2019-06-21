# FY19AzureAppCouchbaseDriver
Azure App on Linux + WSL + CouchBase driver



# On WSL:

Install NVM (managing multiple NPM, node versions etc)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```



```bash
nvm install 8.9
nvm alias default 8.9
```

Then:

```bash
npm init
npm install --save couchbase
```



# On Azure App Service for Linux:

Select Publish: Code + Node 8.9 (or LTS as per 2019-06-21)

![2019-06-21_20-10-45](Y:\GIT_TKOPACZ\FY19AzureAppCouchbaseDriver\2019-06-21_20-10-45.png)



Warning! Repository contains node_modules - Couchbase driver compiled on WSL, Ubuntu 18.04.

