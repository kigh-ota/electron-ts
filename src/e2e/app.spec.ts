import assert from 'assert';
import electronPath from 'electron';
import path from 'path';
import { Application } from 'spectron';

describe('Application', function () {
  this.timeout(10000);

  let app: Application;

  beforeEach(async () => {
    app = new Application({
      path: (electronPath as never) as string,
      args: [path.join(__dirname, '..', '..')],
    });
    await app.start();
  });

  afterEach(() => {
    if (app && app.isRunning()) {
      return app.stop();
    }
  });

  it('launches', async () => {
    assert.equal(await app.client.getWindowCount(), 1);
    await app.stop();
    assert.equal(app.isRunning(), false);
  });
});
