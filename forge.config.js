module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'Chatbot App',
        exe: 'Chatbot App.exe',
        setupIcon: 'assets/icon.ico',
        setupExe: 'Chatbot App.exe',
        setupExeCompression: 'zip',
        setupIconCompression: 'zip',
        description: 'A simple windows app chatbot',
        authors: 'Diego Mirhan',
        publisher: 'Diego Mirhan',
        target: 'nsis',
        icon: 'assets/icon.ico',
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    {
      name: '@electron-forge/plugin-webpack',
      config: {
        mainConfig: './webpack.main.config.js',
        renderer: {
          config: './webpack.renderer.config.js',
          entryPoints: [
            {
              html: './renderer/index.html',
              js: './renderer/index.js',
              name: 'main_window',
            },
          ],
        },
      },
    },  
  ],
  }
