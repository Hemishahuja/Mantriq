const path = require('path');
const {JSDOM} = require('jsdom');

describe('cookie banner', () => {
  let window, document, localStorage;

  beforeEach(() => {
    const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {url: 'http://localhost'});
    window = dom.window;
    document = window.document;
    localStorage = window.localStorage;

    // minimal jQuery-like helper
    global.$ = function(sel) {
      if (sel === document) {
        return {ready: fn => fn()};
      }
      const nodes = document.querySelectorAll(sel);
      const execCallback = (args) => {
        for (const arg of args) {
          if (typeof arg === 'function') { arg(); break; }
        }
      };
      return {
        show: (...args) => {
          nodes.forEach(n => { n.style.display = 'block'; });
          execCallback(args);
        },
        hide: (...args) => {
          nodes.forEach(n => { n.style.display = 'none'; });
          execCallback(args);
        }
      };
    };

    global.window = window;
    global.document = document;
    global.localStorage = localStorage;

    // load script after globals are set
    require(path.join('..', 'js', 'cookie.js'));
  });

  afterEach(() => {
    delete require.cache[require.resolve(path.join('..', 'js', 'cookie.js'))];
    delete global.$;
    delete global.window;
    delete global.document;
    delete global.localStorage;
  });

  test('acceptClick stores consent and toggles banners', () => {
    const fullBanner = document.getElementById('cookieDivFull');
    const smallBanner = document.getElementById('cookieDivSmall');

    // ensure large banner starts visible
    expect(fullBanner.style.display).toBe('block');
    expect(smallBanner.style.display).toBe('none');

    // trigger acceptance
    window.acceptClick();

    expect(localStorage.getItem('cookiesAllowed')).toBe('yes');
    expect(fullBanner.style.display).toBe('none');
    expect(smallBanner.style.display).toBe('block');
  });
});
