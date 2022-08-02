function getChangeParam(index,url){
    var queryParamStart = url.substring(index)
    var length = queryParamStart.indexOf('&')
    var queryWord
    if (length < 0) {
        queryWord = url.substring(index).substring(0)
    } else {
        queryWord = url.substring(index).substring(0, length)
    }
    
    var newWord = queryWord.split('-csdn').join('')
    return url.replace(queryWord,newWord+' -csdn')

}
chrome.webRequest.onBeforeRequest.addListener(function(details) {

    var bdIndex = details.url.indexOf('wd=')
    var ggIndex = details.url.indexOf('q=')
        if(bdIndex>0){
            details.url = getChangeParam(bdIndex,details.url);
        }else if(ggIndex>0){
            details.url = getChangeParam(ggIndex,details.url);
        }
        return {redirectUrl:details.url};
    
    },{urls: ["https://www.baidu.com/*","https://www.google.com/*","https://www.google.com.hk/*"]},["blocking"]
)
