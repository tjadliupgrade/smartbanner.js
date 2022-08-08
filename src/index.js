import SmartBanner from './smartbanner.js';

let smartbanner;


window.addEventListener('load', function() {
  smartbanner = new SmartBanner();
  if (!smartbanner.apiEnabled) {
    smartbanner.publish();
  } 
});

export default SmartBanner