const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost'
});

dom.window.document.IS_MOCHA_TEST = true;

global.window = dom.window;
global.document = dom.window.document;
global.localStorage = dom.window.localStorage;
global.Node = dom.window.Node;
