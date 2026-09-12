/* =========================================================
 * فرآیند اصلی Electron — پنجره دسکتاپ بازی
 * (بدون nodeIntegration؛ فقط بارگذاری فایل‌های استاتیک)
 * ========================================================= */
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 760,
    minWidth: 420,
    minHeight: 600,
    title: 'نگهبان کهکشان — Galaxy Guardian',
    backgroundColor: '#04040f',
    autoHideMenuBar: true,
    icon: path.join(__dirname, '..', 'icons', 'icon-512.png'),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  Menu.setApplicationMenu(null); // حذف منوی پیش‌فرض
  win.loadFile(path.join(__dirname, '..', 'index.html'));

  // جلوگیری از باز شدن پنجره/تب جدید
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
