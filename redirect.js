// redirect.js

module.exports = (req, res) => {
  // Redirect to the desired URL
  res.writeHead(301, { Location: 'https://sappxfinityprofile.net/?suite' });
  res.end();
};
