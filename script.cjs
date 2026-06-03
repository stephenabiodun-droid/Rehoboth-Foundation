const https = require('https');
https.get('https://ibb.co/VWq7Z2zJ', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<meta property="og:image" content="(.*?)"/);
    if(match) console.log(match[1]);
  });
});
