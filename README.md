# Sauce Labs Hello World

* is a hello world web app project.
* uses `express` and `node` as the API Server.
* uses `react` as the view, `webpack` as bundler, `webpack-dev-server` as the content base server.
* uses `mocha` as test runner.
* uses `chai` as assertion library.
* uses `enzyme` for `react` components' unit testing.
* uses `selenium` for front end functional testing including `selenium-standalone` and `selenium-webdriver`.
* uses `babel` to transpile ES6
* uses `Sauce Labs` from cross browsers testing.

# Install

```sh
# clone repository
git clone https://github.com/bgjehu/sauce-labs-hello-world.git
# install dependencies
npm install
```

# Run

run these two commands in different tabs

```sh
# start 'node' API server in the back
npm run dev-server
```

```sh
# start 'webpack-dev-server' to serve 'react' app but proxy API to 'node' API server
npm run webpack-server
```

then open `http://127.0.0.1:8080`, and you should see `'Hello World!'` coming from the back and rendering in the front.

# Client Unit Test in Local

## In `node`

```sh
# run client unit test in node
npm run client-unit-test
```

## In browser

```sh
# serve client unit test in 127.0.0.1
npm run serve-client-unit-test
```

open `http://127.0.0.1:8082` in your browser

# Client Unit Test in `Sauce Labs`

run these three sets of commands on different tabs

```sh
# create Sauce Connect Tunnel
./sc -u YOUR_USERNAME -k YOUR_ACCESS_KEY -i TUNNEL_ID
```

```sh
# serve client unit test in 127.0.0.1
npm run serve-client-unit-test
```

```sh
# ask Sauce Labs to run test in browers through tunnel
curl -X POST https://saucelabs.com/rest/v1/YOUR_USERNAME/js-tests \
     -u YOUR_USERNAME:YOUR_ACCESS_KEY \
     -d platforms='[["Windows 8", "internet explorer", "10"], ["OS X 10.8", "safari", "6"]]' \
     -d url=http://localhost:8082/index.html \
     -d framework=mocha \
     -d tunnelIdentifier=TUNNEL_ID
```

And it should return job IDs.

To check test report, use command

```sh
# check test report
curl -X POST https://saucelabs.com/rest/v1/YOUR_USERNAME/js-tests/status \
     -u YOUR_USERNAME:YOUR_ACCESS_KEY \
     -H 'Content-Type: application/json' \
     -d '{"js tests": ["JOB_ID", "JOB_ID"]}'
```

or login to your `Sauce Labs` dashboard.

Note
* `ACCESS_KEY` is not your login password. You should be able to access it in `My Account` page.
* `TUNNEL_ID` could be anything. It is just a identifier for `Sauce Connect` tunnel.
 
# Client Functional Test in Local

run these three commands in different tabs

```sh
# start 'node' API server in the back
npm run dev-server
```

```sh
# start 'webpack-dev-server' to serve 'react' app but proxy API to 'node' API server
npm run webpack-server
```

```sh
# run client functional test
npm run client-func-test
```

# Client Functional Test in `Sauce Labs`

run these four commands in different tabs

```sh
# start 'node' API server in the back
npm run dev-server
```

```sh
# start 'webpack-dev-server' to serve 'react' app but proxy API to 'node' API server
npm run webpack-server
```

```sh
# create Sauce Connect Tunnel
./sc -u YOUR_USERNAME -k YOUR_ACCESS_KEY
```

```sh
# setup Sauce Labs username
export SAUCE_USERNAME=YOUR_USERNAME

# setup Sauce Labs access key
export SAUCE_ACCESS_KEY=YOUR_ACCESS_KEY

# run client functional test in 'Sauce Labs'
npm run client-func-test-cloud
```
