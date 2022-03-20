'use strict';

const mock = require('egg-mock');

describe('test/vite-view.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/vite-view-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, viteView')
      .expect(200);
  });
});
