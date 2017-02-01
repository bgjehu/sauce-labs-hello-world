const By = require('selenium-webdriver').By;
const expect = require('chai').expect;

module.exports = (driver) => {
    describe('Page', () => {

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
                                        expect(text).to.equal('Hello World!');
                                        done();
                                    });
                            } else {
                                //  no header element
                                throw new Error('Cannot find elements!');
                            }
                        });
                })
                .catch(done);
        }).timeout(0);

        afterEach((done) => {
            driver.quit().then(done).catch(done);
        });
    });
};