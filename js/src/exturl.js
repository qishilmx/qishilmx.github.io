// build time:Tue Mar 19 2019 08:40:00 GMT+0800 (GMT+08:00)
$(document).ready(function(){var r={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var a,o,n,i,h,c,d;var f=0;e=r._utf8_encode(e);while(f<e.length){a=e.charCodeAt(f++);o=e.charCodeAt(f++);n=e.charCodeAt(f++);i=a>>2;h=(a&3)<<4|o>>4;c=(o&15)<<2|n>>6;d=n&63;if(isNaN(o)){c=d=64}else if(isNaN(n)){d=64}t=t+this._keyStr.charAt(i)+this._keyStr.charAt(h)+this._keyStr.charAt(c)+this._keyStr.charAt(d)}return t},decode:function(e){var t="";var a,o,n;var i,h,c,d;var f=0;e=e.replace(/[^A-Za-z0-9+\/=]/g,"");while(f<e.length){i=this._keyStr.indexOf(e.charAt(f++));h=this._keyStr.indexOf(e.charAt(f++));c=this._keyStr.indexOf(e.charAt(f++));d=this._keyStr.indexOf(e.charAt(f++));a=i<<2|h>>4;o=(h&15)<<4|c>>2;n=(c&3)<<6|d;t=t+String.fromCharCode(a);if(c!=64){t=t+String.fromCharCode(o)}if(d!=64){t=t+String.fromCharCode(n)}}t=r._utf8_decode(t);return t},_utf8_encode:function(r){r=r.replace(/rn/g,"n");var e="";for(var t=0;t<r.length;t++){var a=r.charCodeAt(t);if(a<128){e+=String.fromCharCode(a)}else if(a>127&&a<2048){e+=String.fromCharCode(a>>6|192);e+=String.fromCharCode(a&63|128)}else{e+=String.fromCharCode(a>>12|224);e+=String.fromCharCode(a>>6&63|128);e+=String.fromCharCode(a&63|128)}}return e},_utf8_decode:function(r){var e="";var t=0;var a=c1=c2=0;while(t<r.length){a=r.charCodeAt(t);if(a<128){e+=String.fromCharCode(a);t++}else if(a>191&&a<224){c2=r.charCodeAt(t+1);e+=String.fromCharCode((a&31)<<6|c2&63);t+=2}else{c2=r.charCodeAt(t+1);c3=r.charCodeAt(t+2);e+=String.fromCharCode((a&15)<<12|(c2&63)<<6|c3&63);t+=3}}return e}};$(".exturl").on("click",function(){var e=$(this).attr("data-url");var t=r.decode(e);window.open(t,"_blank");return false})});
//rebuild by neat 