const By = require('selenium-webdriver').By;
const Driver = require('../helper/Driver');
const expect = require('chai').expect;

describe('Page', () => {
    var driver, driverQuited;

    beforeEach(() => {
        driver = Driver();
    });

    it('renders a <h1/> with proper message', (done) => {

        //  go to localhost
        driver.get('http://localhost:8080/index.html')
            .then(() => {

                //  find header element
                driver.findElements(By.className('header'))
                    .then((elements) => {

                        if ((elements || []).length > 0) {
                            //  found header element
                            const header = elements[0];

                            //  get header text
                            header.getText()
                                .then((text) => {
                                    //  assert
                                    expect(text).to.equal('Hello World');
                                    done();
                                });
                        } else {
                            //  no header element
                            throw new Error('Cannot find elements!');
                        }
                    });
            })
            .catch((err) => {
                //  got error in any part of the chain
                //  close browser
                driver.quit()
                    .then(() => {
                        //  set flag
                        driverQuited = true;

                        //  bubble error
                        throw err;
                    })
            });
    }).timeout(0);

    afterEach(() => {
        if (!driverQuited) driver.quit();
    });
});