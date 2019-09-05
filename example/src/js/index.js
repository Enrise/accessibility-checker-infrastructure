import 'babel-polyfill';
import '../sass/main.sass';

import getReadme from './getReadme';

const putReadme = async () => {
  const readmeHtml = await getReadme(
    'https://raw.githubusercontent.com/Enrise/accessibility-checker-infrastructure/master/README.md'
  );
  const putHere = document.querySelector('#put-here');
  putHere.insertAdjacentHTML('afterbegin', readmeHtml);
};

// putReadme();
