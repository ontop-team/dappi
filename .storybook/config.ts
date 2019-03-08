import { addParameters, configure } from '@storybook/react';
import dappiTheme from './dappiTheme';

addParameters({
  options: {
    theme: dappiTheme,
  },
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
