import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mathmaster.app',
  appName: 'Math Master',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    allowNavigation: [
      'sunlit-student-smn89.firebaseapp.com',
      '*.firebaseapp.com',
      '*.googleapis.com',
      '*.google.com',
      'accounts.google.com',
    ],
  },
  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },
};

export default config;
