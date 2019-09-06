import 'babel-polyfill';
import Axios from 'axios';
import Markdown from 'markdown-it';
import $ from 'jquery';

const getReadme = async url => {
  const { data } = await Axios.get(url);
  const md = new Markdown({ html: true });
  const renderedContents = md.render(data);
  return renderedContents;
};

const putReadme = async => {
  $('.readme-here').each(async function() {
    const url = $(this).attr('data-url');
    const readmeContent = await getReadme(url);
    $(this).html(readmeContent);
  });
};

putReadme();
