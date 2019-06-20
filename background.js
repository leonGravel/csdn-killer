chrome.webRequest.onBeforeRequest.addListener(function(details) {
    var index = details.url.indexOf('wd=')
        if(index>0){
                var suburl = details.url.substring(index)
                var length = suburl.indexOf('&')
                var oldWD = details.url.substring(index).substring(0,length)
                details.url = details.url.replace(oldWD,oldWD+' -csdn')
        }
        
        return {redirectUrl:details.url};
    
    },{urls: ["https://www.baidu.com/*"]},["blocking"]