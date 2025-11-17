/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'vuetify/styles'
import 'unfonts.css'

// Vuetify
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          background: '#FFFFFF',
          surface: '#603174ff',
          primary: '#6200EE',
          secondary: '#03DAC6',
          error: '#B00020',
        }
      },
      dark: {
        colors: {
          background: '#121212ff',
          surface: '#31193bff',
          primary: '#BB86FC',
          secondary: '#03DAC6',
          error: '#CF6679',
        }
      }
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    htmlFontSize: 16,
  }
})

const app = createApp(App)

registerPlugins(app)
app.use(vuetify)
app.mount('#app')
