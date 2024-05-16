// Debug
//alert("Hello FROM chtek git");

/*

let copyrightFooter = document.querySelector('footer.bg-white > section:nth-child(1)');
copyrightFooter.innerHTML = '<span href="https://invoice.chtek.de" target="_blank" class="text-xs md:text-sm text-gray-700">Copyright © 2024 <a class="text-primary hover:underline" href="https://invoice.chtek.de" target="_blank">CHTek</a>. </span>'
*/

// Load jQ
/**
 * @see https://stackoverflow.com/a/10113434
 */
function loadScript(cfg) {
  const {
    url,
    global: globalName
  } = cfg;
  return new Promise((r, j) => {
    // Load the script
    const script = document.createElement("script");
    script.type = 'text/javascript';
    script.onload = function () {
      r(globalName && window[globalName]);
    };
    script.onerror = function (err) {
      j(err);
    };
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  });
}

const jQuery = await loadScript({
  url: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
  global: 'jQuery'
});

jQuery('body')
