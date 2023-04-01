const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ClassAttributePage extends Page {
    /**
     * define selectors using getter methods
     */
    get buttonsArray () {
        return $$('.container button');
    }

    get primaryButton () {
        return $('button.btn-primary');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('classattr');
    }
}

module.exports = new ClassAttributePage();
