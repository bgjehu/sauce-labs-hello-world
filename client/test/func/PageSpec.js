const expect = require('chai').expect;

describe('Page', () => {

    it('renders a <h1/> with proper message', () => {

        browser.url('http://localhost:8080/index.html');
        expect(browser.getText('.header=Hello World!')).to.equal('Hello World!');
    });
});