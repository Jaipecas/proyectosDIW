window.onload = function() {
  init();
};

function init() {
  let highlightedParagrafs = document.querySelectorAll('p[data-type="highlight"]');
  
  highlightedParagrafs.forEach(item => {
    item.addEventListener("click", event => {
      let spans = item.querySelectorAll('span');
      spans.forEach(itemSpan => itemSpan.style.fontWeight = 900 )
    }, false); 
  });

  let highRelevance = document.querySelectorAll('[data-high-relevance]');

  highRelevance.forEach(item => {
    item.addEventListener("click", event => {
      let high = (item.dataset.highRelevance === 'true');
      item.dataset.highRelevance = !high;
    }, false); 
  });

}