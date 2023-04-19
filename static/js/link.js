// used when you need to route to another page in the same domain
function route(link) {
  window.location.pathname = link;
}

// used to route or redirect to an outer website with another domain name
function redirect(url) {
  window.location.href = url;
}
