import { BrowserWindow, screen, shell } from 'electron'
import icon from '../../resources/icon.png?asset'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'

export function createWindow(properties: WindowProperties): void {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  const frame = properties.frameless !== undefined ? !properties.frameless : true
  const window = new BrowserWindow({
    title: properties.title,
    width: width / properties.partWidth,
    height: height / properties.partHeight,
    frame,
    show: false,
    autoHideMenuBar: false,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  window.on('ready-to-show', () => {
    window.show()
  })
  window.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  try {
    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
      window.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/${properties.route}`)
    } else {
      window.loadFile(join(__dirname, '../renderer/index.html'), {
        hash: properties.route
      })
    }
  } catch (error) {
    console.error('Error loading window content:', error)
  }
}

export interface WindowProperties {
  title: string
  route: string
  partWidth: number
  partHeight: number
  frameless?: boolean
}
