import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  plugins: {
    'postcss-import': {
      path: [path.resolve(__dirname, './src/shared/styles')],
    },
    'postcss-mixins': {
      mixinsDir: path.resolve(__dirname, './src/shared/styles/mixins'),
    },
    'postcss-simple-vars': {
      variables: {
        'mobile-min': '375px',
        mobile: '767px',

        'small-desktop-min': '768px',
        'small-desktop': '1441px',

        'desktop-min': '1442px',
        desktop: '1920px',

        'mobile-scale-factor': '3.75',
        'standard-desktop-scale-factor': '14.4',
        'big-desktop-scale-factor': '14.41',
      },
    },
    'postcss-nested': {},
    autoprefixer: {},
  },
};
