# Sauce Labs Hello World

This is a hello world web app using `Express` and `Node` in the back, `React` in the front, and `Mocha`, `Chai`, `Enzyme`, for testing locally in `Node` and broswers and cross-browser-ly in the cloud with `Sauce Labs`.

# Install

```sh
git clone https://github.com/bgjehu/sauce-labs-hello-world.git
npm install
```

# Run

run these two commands in different tabs

```sh
npm run dev-server
```

```sh
npm run webpack-server
```

then open `http://127.0.0.1:8080`, and you should see `Hello World` coming from the back and rendering in the front.

# Test in Local

## In `Node`

```sh
npm run utest
```

## In broswer

```sh
npm run utest-server
```

open `http://127.0.0.1:8082` in your broswer

# Test in `Sauce Labs`

run these three sets of commands on different tabs

```sh
sc -u YOUR_USERNAME -k YOUR_ACCESS_KEY -i TUNNEL_ID
```

```sh
npm run utest-server
```

```sh
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
curl -X POST https://saucelabs.com/rest/v1/YOUR_USERNAME/js-tests/status \
     -u YOUR_USERNAME:YOUR_ACCESS_KEY \
     -H 'Content-Type: application/json' \
     -d '{"js tests": ["JOB_ID", "JOB_ID"]}'
```

or Login to your `Sauce Labs` Dashboard.

Note
* `ACCESS_KEY` is not your login password. You should be able to access it in `My Account` page.
* `TUNNEL_ID` could be anything. It is just a identifier for `Sauce Connect` tunnel. 


