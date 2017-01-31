# Sauce Labs Hello World

This is a hello world web app using `Express` and `Node` in the back, `React` in the front, and `Mocha`, `Chai`, `Enzyme`, for testing locally in `Node` and broswers and cross-browser-ly in the cloud with `Sauce Labs`.

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
# start Node API server in the back
npm run dev-server
```

```sh
# start webpack-dev-server to serve React app but proxy API to Node API server
npm run webpack-server
```

then open `http://127.0.0.1:8080`, and you should see `Hello World` coming from the back and rendering in the front.

# Test in Local

## In `Node`

```sh
# run client unit test in Node
npm run client-unit-test
```

## In broswer

```sh
# serve client unit test in 127.0.0.1
npm run serve-client-unit-test
```

open `http://127.0.0.1:8082` in your broswer

# Test in `Sauce Labs`

run these three sets of commands on different tabs

```sh
# create Sauce Connect Tunnel
sc -u YOUR_USERNAME -k YOUR_ACCESS_KEY -i TUNNEL_ID
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

To Check Test Report, use command

```sh
# check test report
curl -X POST https://saucelabs.com/rest/v1/YOUR_USERNAME/js-tests/status \
     -u YOUR_USERNAME:YOUR_ACCESS_KEY \
     -H 'Content-Type: application/json' \
     -d '{"js tests": ["JOB_ID", "JOB_ID"]}'
```

or Login to your `Sauce Labs` Dashboard.

Note
* `ACCESS_KEY` is not your login password. You should be able to access it in `My Account` page.
* `TUNNEL_ID` could be anything. It is just a identifier for `Sauce Connect` tunnel. 


