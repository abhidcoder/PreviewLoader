const linkPreview = require('link-preview-js');


// Setting the user-agent header to GOOGLE-BOT
const headers = {
  'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
};

// Now, fetch the link preview for the desired URLs
linkPreview.getLinkPreview('https://www.instagram.com/artcartbydiksha/', { headers })
  .then(data => console.log(data))
  .catch(error => console.error(error));




const maxRetries = 3;

function fetchLinkPreviewWithRetry(url, retries = 0) {
  return linkPreview.getLinkPreview(url)
    .catch(error => {
      if (retries < maxRetries) {
        console.error(`Error fetching link preview for ${url}. Retrying...`);
        return fetchLinkPreviewWithRetry(url, retries + 1);
      }
      throw error; // If max retries reached, propagate the error
    });
}

// Usage
fetchLinkPreviewWithRetry('https://medium.com/@dr-bartosz-jaworski')
  .then(data => console.log(data))
  .catch(error => console.error(error));

