'use strict';

/**
 * Dependencies.
 */

var udhr,
    assert;

udhr = require('./');
assert = require('assert');

/**
 * Data.
 */

var json,
    text,
    information;

json = udhr.json();
text = udhr.text();
information = udhr.information();

/**
 * Get all keys, recursively, in an object.
 *
 * @param {Object} object
 * @param {string} key
 * @return {Array.<*>}
 */

function all(object, key) {
    var results = [],
        property,
        value;

    for (property in object) {
        value = object[property];

        if (property === key) {
            results.push(value);
        } else if (typeof value === 'object') {
            results = results.concat(all(value, key));
        }
    }

    return results;
}

/**
 * Iterate over every value in an object.
 *
 * @param {Object} values
 * @param {function(*, string)} callback
 */

function each(values, callback) {
    Object.keys(values).forEach(function (key) {
        callback(values[key], key);
    });
}

/**
 * Assert every item in `values`.
 *
 * @param {Object} values
 * @param {string} should
 * @param {function(*, string)} callback
 */

function every(values, should, callback) {
    it(should, function () {
        each(values, callback);
    });
}

/**
 * Tests.
 */

describe('udhr', function () {
    it('should be an `Object`', function () {
        assert(typeof udhr === 'object');
    });
});

describe('udhr.information', function () {
    it('should be a `Function`', function () {
        assert(typeof udhr.information === 'function');
    });

    it('should return an Object', function () {
        assert(typeof information === 'object');
    });
});

describe('udhr.information.n', function () {
    every(information, 'should be an Object', function (declaration) {
        assert(typeof declaration === 'object');
    });

    every(information, 'should contain a `region` property (string?)',
        function (declaration) {
            var region = declaration.region;

            assert(typeof region === 'string' || region === null);
        }
    );

    every(information, 'should contain a `country` property (string?)',
        function (declaration) {
            var country = declaration.country;

            assert(typeof country === 'string' || country === null);
        }
    );

    every(information, 'should contain an `ISO` property (string?)',
        function (declaration) {
            var ISO = declaration.ISO;

            assert(typeof ISO === 'string' || ISO === null);
        }
    );

    every(information, 'should contain an `ULI` property (string?)',
        function (declaration) {
            var ULI = declaration.ULI;

            assert(typeof ULI === 'string' || ULI === null);
        }
    );

    every(information, 'should contain a `BCP47` property (string?)',
        function (declaration) {
            var BCP47 = declaration.BCP47;

            assert(typeof BCP47 === 'string' || BCP47 === null);
        }
    );

    every(information, 'should contain an `OHCHR` property (string?)',
        function (declaration) {
            var OHCHR = declaration.OHCHR;

            assert(typeof OHCHR === 'string' || OHCHR === null);
        }
    );

    every(information, 'should contain a `code` property (string)',
        function (declaration) {
            var code = declaration.code;

            assert(typeof code === 'string');
        }
    );

    every(information, 'should contain a `name` property (string)',
        function (declaration) {
            var name = declaration.name;

            assert(typeof name === 'string');
        }
    );

    every(information, 'should contain a `stage` property (integer)',
        function (declaration) {
            var stage = declaration.stage;

            assert(Math.round(stage) === stage);
        }
    );

    every(information, 'should contain a `stage` property between 1 and 5',
        function (declaration) {
            var stage = declaration.stage;

            assert(stage > 0 && stage < 6);
        }
    );

    every(information, 'should contain a `version` property (string?)',
        function (declaration) {
            var version = declaration.version;

            assert(typeof version === 'string' || version === null);
        }
    );

    every(information, 'should contain a `namedVersion` property (string?)',
        function (declaration) {
            var namedVersion = declaration.namedVersion;

            assert(typeof namedVersion === 'string' || namedVersion === null);
        }
    );

    every(information, 'should contain a `hasNotes` property (boolean)',
        function (declaration) {
            var hasNotes = declaration.hasNotes;

            assert(Boolean(hasNotes) === hasNotes);
        }
    );

    every(information, 'should contain a `hasPDF` property (boolean)',
        function (declaration) {
            var hasPDF = declaration.hasPDF;

            assert(Boolean(hasPDF) === hasPDF);
        }
    );

    every(information, 'should contain a `hasTXT` property (boolean)',
        function (declaration) {
            var hasTXT = declaration.hasTXT;

            assert(Boolean(hasTXT) === hasTXT);
        }
    );

    every(information, 'should contain a `hasJSON` property (boolean)',
        function (declaration) {
            var hasJSON = declaration.hasJSON;

            assert(Boolean(hasJSON) === hasJSON);
        }
    );

    every(information, 'should contain a `filename` property (string)',
        function (declaration) {
            var filename = declaration.filename;

            assert(typeof filename === 'string');
        }
    );

    every(information, 'should contain a `latitude` property (number?)',
        function (declaration) {
            var latitude = declaration.latitude;

            assert(latitude === null || typeof latitude === 'number');
        }
    );

    every(information, 'should contain a `longitude` property (number?)',
        function (declaration) {
            var longitude = declaration.longitude;

            assert(longitude === null || typeof longitude === 'number');
        }
    );
});

describe('udhr.json()', function () {
    it('should be a `Function`', function () {
        assert(typeof udhr.json === 'function');
    });

    it('should return an Object', function () {
        assert(typeof json === 'object');
    });
});

describe('udhr.json().n', function () {
    every(json, 'should be an Object', function (declaration) {
        assert(typeof declaration === 'object');
    });

    every(json, 'should contain a `lang` property (string)',
        function (declaration) {
            var lang = declaration.lang;

            assert(typeof lang === 'string');
        }
    );

    every(json, 'should contain a `language` property (string)',
        function (declaration) {
            var language = declaration.language;

            assert(typeof language === 'string');
        }
    );

    every(json, 'should contain a `xmlns` property ' +
        '("http://www.unhchr.ch/udhr")',
        function (declaration) {
            var xmlns = declaration.xmlns;

            assert(xmlns === 'http://www.unhchr.ch/udhr');
        }
    );

    every(json, 'should contain a `title` property (string)',
        function (declaration) {
            var title = declaration.title;

            assert(typeof title === 'string');
        }
    );

    every(json, 'should contain a `preamble` property (Object)',
        function (declaration) {
            var preamble = declaration.preamble;

            assert(typeof preamble === 'object');
        }
    );

    every(json, 'should contain a `preamble.title` property (string)',
        function (declaration) {
            var title = declaration.preamble.title;

            assert(typeof title === 'string');
        }
    );

    every(json, 'should contain a `preamble.para` property (string)',
        function (declaration) {
            var para = declaration.preamble.para;

            assert(typeof para === 'string');
        }
    );

    every(json, 'should contain a `article` property (Array, non-empty)',
        function (declaration) {
            var article = declaration.article;

            assert(Array.isArray(article));
            assert(article.length > 0);
        }
    );

    every(json, '`article[n]`: should be an object', function (declaration) {
        each(declaration.article, function (article) {
            assert(typeof article === 'object');
        });
    });

    every(json, '`article[n].title`: should be a string',
        function (declaration) {
            each(declaration.article, function (article) {
                var title = article.title;

                assert(typeof title === 'string');
            });
        }
    );
});

describe('udhr.json().n.[n]...para', function () {
    every(all(json, 'para'), 'should be a string',
        function (paragraph) {
            assert(typeof paragraph === 'string');
        }
    );
});

describe('udhr.text()', function () {
    it('should be a `Function`', function () {
        assert(typeof udhr.text === 'function');
    });

    it('should return an Object', function () {
        assert(typeof text === 'object');
    });
});

describe('udhr.text().n', function () {
    every(text, 'should be a string', function (declaration) {
        assert(typeof declaration === 'string');
    });
});
