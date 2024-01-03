import data from './tagUrls.json';

export const getTagUrls = () => {
  return data;
};

export default (req, res) => {
  const urls = getTagUrls();
  res.json(urls);
};