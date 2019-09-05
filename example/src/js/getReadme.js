import Axios from 'axios';
import Markdown from 'markdown-it';

const getReadme = async url => {
  const { data } = await Axios.get(url);
  const md = new Markdown({ html: true });
  const renderedContents = md.render(data);
  return renderedContents;
};

export default getReadme;
