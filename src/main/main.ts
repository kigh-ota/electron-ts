import { app, BrowserWindow } from 'electron';
import log from 'electron-log';
import path from 'path';

const isDebug = process.argv.find((arg) => arg === '--debug');

process.on('unhandledRejection', (err) => {
  // tslint:disable-next-line:no-console
  console.dir(err);
});

function createWindow() {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true, // required for using electron-log in the renderer process
    },
  });
  win.removeMenu();
  win.loadFile(path.join('app', 'index.html'));
  if (isDebug) {
    win.webContents.openDevTools();
  }

  win.on('close', () => {
    log.info('win.close');
  });

  win.on('closed', () => {
    log.info('win.closed');
  });
}

app.on('ready', async () => {
  log.info(`app.ready: version ${app.getVersion()}`);
  createWindow();
});

app.on('window-all-closed', () => {
  log.info('app.window-all-closed');
  app.quit();
});

app.on('will-quit', () => {
  log.info('app.will-quit');
});
