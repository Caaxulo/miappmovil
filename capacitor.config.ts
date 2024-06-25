import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myaplicacion',
  webDir: 'www',

  plugins: {
    TextZoom: {
      sync: true              // Configuración específica para el plugin TextZoom
    }
    // Otros plugins aquí si los tienes
  },
};



export default config;
