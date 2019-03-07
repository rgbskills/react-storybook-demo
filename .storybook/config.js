import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';

function loadStories() {
  require('../src/stories');
}

const newViewports = {
  iPhonex: {
    name: 'iPhoneX',
    styles: {
      width: '372px',
      height: '812px',
    },
  },
  Pixel2: {
    name: 'Pixel2',
    styles: {
      width: '411px',
      height: '731px',
    },
  },
};

addParameters({ viewport: { defaultViewport: 'responsive', viewports: newViewports }});
configure(loadStories, module);
