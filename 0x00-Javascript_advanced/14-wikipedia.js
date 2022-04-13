function createElement(data) {
  const para = document.createElement('p');
  const node = document.createTextNode(data);
  para.appendChild(node);
  document.body.appendChild(para);
}
function queryWikipedia(callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
  xhr.send();
  xhr.onload = function (){
    json = JSON.parse(xhr.response);
    callback(json.query.pages[21721040].extract);
  }

}
queryWikipedia(createElement);
