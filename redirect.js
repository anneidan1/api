module.exports = (req, res) => {
  // Redirect to the desired URL
  res.writeHead(301, { Location: 'https://example.com' });
  res.end();
};
