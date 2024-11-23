import { app, BrowserWindow, ipcMain } from 'electron'
import { optimizer } from '@electron-toolkit/utils'
import { createWindow, WindowProperties } from './WindowManager'

const pruebasProperties: WindowProperties = {
  title: 'Dashboard Draft',
  route: 'dashboard',
  partHeight: 1,
  partWidth: 1
}

app.whenReady().then(() => {
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow(pruebasProperties)

  ipcMain.handle('create-window', (_event, windowProps) => {
    createWindow(windowProps) // Llama a createWindow para crear nuevas ventanas
  })
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow(pruebasProperties)
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
