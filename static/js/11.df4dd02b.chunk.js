/*! For license information please see 11.df4dd02b.chunk.js.LICENSE.txt */
(this.webpackJsonpsqurs=this.webpackJsonpsqurs||[]).push([[11],{119:function(e,t,n){"use strict";n.r(t);var r=n(29),o=n(10),i=n(5),a=n(23),s="firebasestorage.googleapis.com",u=function(e){function t(n,r){var o=e.call(this,c(n),"Firebase Storage: "+r+" ("+c(n)+")")||this;return o.customData={serverResponse:null},o._baseMessage=o.message,Object.setPrototypeOf(o,t.prototype),o}return Object(o.d)(t,e),t.prototype._codeEquals=function(e){return c(e)===this.code},Object.defineProperty(t.prototype,"serverResponse",{get:function(){return this.customData.serverResponse},set:function(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=this._baseMessage+"\n"+this.customData.serverResponse:this.message=this._baseMessage},enumerable:!1,configurable:!0}),t}(i.c);function c(e){return"storage/"+e}function l(){return new u("unknown","An unknown error occurred, please check the error payload for server response.")}function h(){return new u("canceled","User canceled the upload/download.")}function p(){return new u("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function f(e){return new u("invalid-argument",e)}function d(){return new u("app-deleted","The Firebase app was deleted.")}function _(e){return new u("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function g(e,t){return new u("invalid-format","String does not match format '"+e+"': "+t)}function b(e){throw new u("internal-error","Internal error: "+e)}var v={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},m=function(e,t){this.data=e,this.contentType=t||null};function y(e,t){switch(e){case v.RAW:return new m(w(t));case v.BASE64:case v.BASE64URL:return new m(R(e,t));case v.DATA_URL:return new m(function(e){var t=new k(e);return t.base64?R(v.BASE64,t.rest):function(e){var t;try{t=decodeURIComponent(e)}catch(n){throw g(v.DATA_URL,"Malformed data URL.")}return w(t)}(t.rest)}(t),new k(t).contentType)}throw l()}function w(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r))if(n<e.length-1&&56320===(64512&e.charCodeAt(n+1)))r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r);else t.push(239,191,189);else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function R(e,t){switch(e){case v.BASE64:var n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r)throw g(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break;case v.BASE64URL:var o=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(o||i)throw g(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}var a;try{a=atob(t)}catch(c){throw g(e,"Invalid character found")}for(var s=new Uint8Array(a.length),u=0;u<a.length;u++)s[u]=a.charCodeAt(u);return s}var k=function(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw g(v.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var n=t[1]||null;null!=n&&(this.base64=(r=n,o=";base64",r.length>=o.length&&r.substring(r.length-o.length)===o),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1);var r,o};var T,O={STATE_CHANGED:"state_changed"},x={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function P(e){switch(e){case"running":case"pausing":case"canceling":return x.RUNNING;case"paused":return x.PAUSED;case"success":return x.SUCCESS;case"canceled":return x.CANCELED;default:return x.ERROR}}!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(T||(T={}));var U=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=T.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=T.ABORT,t()})),e.xhr_.addEventListener("error",(function(){e.errorCode_=T.NETWORK_ERROR,t()})),e.xhr_.addEventListener("load",(function(){t()}))}))}return e.prototype.send=function(e,t,n,r){if(this.sent_)throw b("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(var o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw b("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw b("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw b("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)},e}();var S=function(){function e(){}return e.prototype.createConnection=function(){return new U},e}(),C=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!1,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},e.makeFromBucketSpec=function(t,n){var r;try{r=e.makeFromUrl(t,n)}catch(o){return new e(t,"")}if(""===r.path)return r;throw new u("invalid-default-bucket","Invalid default bucket '"+t+"'.")},e.makeFromUrl=function(t,n){var r=null,o="([A-Za-z0-9.\\-_]+)";var i=new RegExp("^gs://"+o+"(/(.*))?$","i");function a(e){e.path_=decodeURIComponent(e.path)}for(var c=n.replace(/[.]/g,"\\."),l=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://"+c+"/v[A-Za-z0-9_]+/b/"+o+"/o(/([^?#]*).*)?$","i"),indices:{bucket:1,path:3},postModify:a},{regex:new RegExp("^https?://"+(n===s?"(?:storage.googleapis.com|storage.cloud.google.com)":n)+"/"+o+"/([^?#]*)","i"),indices:{bucket:1,path:2},postModify:a}],h=0;h<l.length;h++){var p=l[h],f=p.regex.exec(t);if(f){var d=f[p.indices.bucket],_=f[p.indices.path];_||(_=""),r=new e(d,_),p.postModify(r);break}}if(null==r)throw function(e){return new u("invalid-url","Invalid URL '"+e+"'.")}(t);return r},e}(),j=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}();function E(e){return"string"===typeof e||e instanceof String}function A(e){return I()&&e instanceof Blob}function I(){return"undefined"!==typeof Blob}function q(e,t,n,r){if(r<t)throw f("Invalid value for '"+e+"'. Expected "+t+" or greater.");if(r>n)throw f("Invalid value for '"+e+"'. Expected "+n+" or less.")}function L(e,t){var n=t.match(/^(\w+):\/\/.+/),r=t;return null==(null===n||void 0===n?void 0:n[1])&&(r="https://"+t),r+"/v0"+e}function B(e){var t=encodeURIComponent,n="?";for(var r in e){if(e.hasOwnProperty(r))n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1)}var M=function(){function e(e,t,n,r,o,i,a,s,u,c,l){var h=this;this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise((function(e,t){h.resolve_=e,h.reject_=t,h.start_()}))}return e.prototype.start_=function(){var e=this;function t(t,n){var r,o=e.resolve_,i=e.reject_,a=n.connection;if(n.wasSuccessCode)try{var s=e.callback_(a,a.getResponseText());void 0!==s?o(s):o()}catch(c){i(c)}else null!==a?((r=l()).serverResponse=a.getResponseText(),e.errorCallback_?i(e.errorCallback_(a,r)):i(r)):n.canceled?i(r=e.appDelete_?d():h()):i(r=new u("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}this.canceled_?t(0,new N(!1,null,!0)):this.backoffId_=function(e,t,n){var r=1,i=null,a=!1,s=0;function u(){return 2===s}var c=!1;function l(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];c||(c=!0,t.apply(null,e))}function h(t){i=setTimeout((function(){i=null,e(p,u())}),t)}function p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!c)if(e)l.call.apply(l,Object(o.g)([null,e],t));else{var i;u()||a?l.call.apply(l,Object(o.g)([null,e],t)):(r<64&&(r*=2),1===s?(s=2,i=0):i=1e3*(r+Math.random()),h(i))}}var f=!1;function d(e){f||(f=!0,c||(null!==i?(e||(s=2),clearTimeout(i),h(0)):e||(s=1)))}return h(0),setTimeout((function(){a=!0,d(!0)}),n),d}((function(t,n){if(n)t(!1,new N(!1,null,!0));else{var r=e.pool_.createConnection();e.pendingConnection_=r,null!==e.progressCallback_&&r.addUploadProgressListener(o),r.send(e.url_,e.method_,e.body_,e.headers_).then((function(){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingConnection_=null;var n=r.getErrorCode()===T.NO_ERROR,i=r.getStatus();if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i);t(!0,new N(a,r))}else{var s=r.getErrorCode()===T.ABORT;t(!1,new N(!1,null,s))}}))}function o(t){var n=t.loaded,r=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(n,r)}}),t,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r},e}(),N=function(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n};function z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function F(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=z();if(void 0!==n){for(var r=new n,o=0;o<e.length;o++)r.append(e[o]);return r.getBlob()}if(I())return new Blob(e);throw new u("unsupported-environment","This browser doesn't seem to support creating Blobs")}var D=function(){function e(e,t){var n=0,r="";A(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,n){if(A(this.data_)){var r=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}(this.data_,t,n);return null===r?null:new e(r)}return new e(new Uint8Array(this.data_.buffer,t,n-t),!0)},e.getBlob=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(I()){var r=t.map((function(t){return t instanceof e?t.data_:t}));return new e(F.apply(null,r))}var o=t.map((function(e){return E(e)?y(v.RAW,e).data:e.data_})),i=0;o.forEach((function(e){i+=e.byteLength}));var a=new Uint8Array(i),s=0;return o.forEach((function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]})),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}();function H(e){var t,n;try{t=JSON.parse(e)}catch(r){return null}return"object"!==typeof(n=t)||Array.isArray(n)?null:t}function G(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}function W(e,t){return t}var X=function(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||W},V=null;function K(){if(V)return V;var e=[];e.push(new X("bucket")),e.push(new X("generation")),e.push(new X("metageneration")),e.push(new X("name","fullPath",!0));var t=new X("name");t.xform=function(e,t){return function(e){return!E(e)||e.length<2?e:G(e)}(t)},e.push(t);var n=new X("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new X("timeCreated")),e.push(new X("updated")),e.push(new X("md5Hash",null,!0)),e.push(new X("cacheControl",null,!0)),e.push(new X("contentDisposition",null,!0)),e.push(new X("contentEncoding",null,!0)),e.push(new X("contentLanguage",null,!0)),e.push(new X("contentType",null,!0)),e.push(new X("metadata","customMetadata",!0)),V=e}function J(e,t,n){for(var r={type:"file"},o=n.length,i=0;i<o;i++){var a=n[i];r[a.local]=a.xform(r,t[a.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){var n=e.bucket,r=e.fullPath,o=new C(n,r);return t._makeStorageReference(o)}})}(r,e),r}function Z(e,t,n){var r=H(t);return null===r?null:J(e,r,n)}function $(e,t){for(var n={},r=t.length,o=0;o<r;o++){var i=t[o];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}function Y(e,t,n){var r=H(n);return null===r?null:function(e,t,n){var r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n.prefixes)for(var o=0,i=n.prefixes;o<i.length;o++){var a=i[o].replace(/\/$/,""),s=e._makeStorageReference(new C(t,a));r.prefixes.push(s)}if(n.items)for(var u=0,c=n.items;u<c.length;u++){var l=c[u];s=e._makeStorageReference(new C(t,l.name)),r.items.push(s)}return r}(e,t,r)}var Q=function(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]};function ee(e){if(!e)throw l()}function te(e,t){return function(n,r){var o=Z(e,r,t);return ee(null!==o),o}}function ne(e,t){return function(n,r){var o=Z(e,r,t);return ee(null!==o),function(e,t,n){var r=H(t);if(null===r)return null;if(!E(r.downloadTokens))return null;var o=r.downloadTokens;if(0===o.length)return null;var i=encodeURIComponent;return o.split(",").map((function(t){var r=e.bucket,o=e.fullPath;return L("/b/"+i(r)+"/o/"+i(o),n)+B({alt:"media",token:t})}))[0]}(o,r,e.host)}}function re(e){return function(t,n){var r,o,i;return 401===t.getStatus()?r=t.getResponseText().includes("Firebase App Check token is invalid")?new u("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new u("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,r=new u("quota-exceeded","Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,r=new u("unauthorized","User does not have permission to access '"+o+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function oe(e){var t=re(e);return function(n,r){var o,i=t(n,r);return 404===n.getStatus()&&(o=e.path,i=new u("object-not-found","Object '"+o+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function ie(e,t,n){var r=L(t.fullServerUrl(),e.host),o=e.maxOperationRetryTime,i=new Q(r,"GET",te(e,n),o);return i.errorHandler=oe(t),i}function ae(e,t,n,r,o){var i={};t.isRoot?i.prefix="":i.prefix=t.path+"/",n&&n.length>0&&(i.delimiter=n),r&&(i.pageToken=r),o&&(i.maxResults=o);var a=L(t.bucketOnlyServerUrl(),e.host),s=e.maxOperationRetryTime,u=new Q(a,"GET",function(e,t){return function(n,r){var o=Y(e,t,r);return ee(null!==o),o}}(e,t.bucket),s);return u.urlParams=i,u.errorHandler=re(t),u}function se(e,t,n){var r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}var ue=function(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null};function ce(e,t){var n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(r){ee(!1)}return ee(!!n&&-1!==(t||["active"]).indexOf(n)),n}var le=262144;function he(e,t,n,r,o,i,a,s){var c=new ue(0,0);if(a?(c.current=a.current,c.total=a.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw new u("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var l=c.total-c.current,h=l;o>0&&(h=Math.min(h,o));var f=c.current,d=f+h,_={"X-Goog-Upload-Command":h===l?"upload, finalize":"upload","X-Goog-Upload-Offset":""+c.current},g=r.slice(f,d);if(null===g)throw p();var b=t.maxUploadRetryTime,v=new Q(n,"POST",(function(e,n){var o,a=ce(e,["active","final"]),s=c.current+h,u=r.size();return o="final"===a?te(t,i)(e,n):null,new ue(s,u,"final"===a,o)}),b);return v.headers=_,v.body=g.uploadData(),v.progressCallback=s||null,v.errorHandler=re(e),v}var pe=function(e,t,n){if("function"===typeof e||null!=t||null!=n)this.next=e,this.error=t,this.complete=n;else{var r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}};function fe(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];Promise.resolve().then((function(){return e.apply(void 0,t)}))}}var de=function(){function e(e,t,n){var r=this;void 0===n&&(n=null),this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=K(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=function(e){r._request=void 0,r._chunkMultiplier=1,e._codeEquals("canceled")?(r._needToFetchStatus=!0,r.completeTransitions_()):(r._error=e,r._transition("error"))},this._metadataErrorHandler=function(e){r._request=void 0,e._codeEquals("canceled")?r.completeTransitions_():(r._error=e,r._transition("error"))},this._promise=new Promise((function(e,t){r._resolve=e,r._reject=t,r._start()})),this._promise.then(null,(function(){}))}return e.prototype._makeProgressCallback=function(){var e=this,t=this._transferred;return function(n){return e._updateProgress(t+n)}},e.prototype._shouldDoResumable=function(e){return e.size()>262144},e.prototype._start=function(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())},e.prototype._resolveToken=function(e){var t=this;Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((function(n){var r=n[0],o=n[1];switch(t._state){case"running":e(r,o);break;case"canceling":t._transition("canceled");break;case"pausing":t._transition("paused")}}))},e.prototype._createResumable=function(){var e=this;this._resolveToken((function(t,n){var r=function(e,t,n,r,o){var i=t.bucketOnlyServerUrl(),a=se(t,r,o),s={name:a.fullPath},u=L(i,e.host),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":""+r.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},l=$(a,n),h=e.maxUploadRetryTime,p=new Q(u,"POST",(function(e){var t;ce(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){ee(!1)}return ee(E(t)),t}),h);return p.urlParams=s,p.headers=c,p.body=l,p.errorHandler=re(t),p}(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),o=e._ref.storage._makeRequest(r,t,n);e._request=o,o.getPromise().then((function(t){e._request=void 0,e._uploadUrl=t,e._needToFetchStatus=!1,e.completeTransitions_()}),e._errorHandler)}))},e.prototype._fetchStatus=function(){var e=this,t=this._uploadUrl;this._resolveToken((function(n,r){var o=function(e,t,n,r){var o=e.maxUploadRetryTime,i=new Q(n,"POST",(function(e){var t=ce(e,["active","final"]),n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(i){ee(!1)}n||ee(!1);var o=Number(n);return ee(!isNaN(o)),new ue(o,r.size(),"final"===t)}),o);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=re(t),i}(e._ref.storage,e._ref._location,t,e._blob),i=e._ref.storage._makeRequest(o,n,r);e._request=i,i.getPromise().then((function(t){t=t,e._request=void 0,e._updateProgress(t.current),e._needToFetchStatus=!1,t.finalized&&(e._needToFetchMetadata=!0),e.completeTransitions_()}),e._errorHandler)}))},e.prototype._continueUpload=function(){var e=this,t=le*this._chunkMultiplier,n=new ue(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((function(o,i){var a;try{a=he(e._ref._location,e._ref.storage,r,e._blob,t,e._mappings,n,e._makeProgressCallback())}catch(u){return e._error=u,void e._transition("error")}var s=e._ref.storage._makeRequest(a,o,i);e._request=s,s.getPromise().then((function(t){e._increaseMultiplier(),e._request=void 0,e._updateProgress(t.current),t.finalized?(e._metadata=t.metadata,e._transition("success")):e.completeTransitions_()}),e._errorHandler)}))},e.prototype._increaseMultiplier=function(){le*this._chunkMultiplier<33554432&&(this._chunkMultiplier*=2)},e.prototype._fetchMetadata=function(){var e=this;this._resolveToken((function(t,n){var r=ie(e._ref.storage,e._ref._location,e._mappings),o=e._ref.storage._makeRequest(r,t,n);e._request=o,o.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._transition("success")}),e._metadataErrorHandler)}))},e.prototype._oneShotUpload=function(){var e=this;this._resolveToken((function(t,n){var r=function(e,t,n,r,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},s=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+s;var u=se(t,r,o),c="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+$(u,n)+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",l="\r\n--"+s+"--",h=D.getBlob(c,r,l);if(null===h)throw p();var f={name:u.fullPath},d=L(i,e.host),_=e.maxUploadRetryTime,g=new Q(d,"POST",te(e,n),_);return g.urlParams=f,g.headers=a,g.body=h.uploadData(),g.errorHandler=re(t),g}(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),o=e._ref.storage._makeRequest(r,t,n);e._request=o,o.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._updateProgress(e._blob.size()),e._transition("success")}),e._errorHandler)}))},e.prototype._updateProgress=function(e){var t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()},e.prototype._transition=function(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":var t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=h(),this._state=e,this._notifyObservers()}},e.prototype.completeTransitions_=function(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=P(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}},enumerable:!1,configurable:!0}),e.prototype.on=function(e,t,n,r){var o=this,i=new pe(t,n,r);return this._addObserver(i),function(){o._removeObserver(i)}},e.prototype.then=function(e,t){return this._promise.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype._addObserver=function(e){this._observers.push(e),this._notifyObserver(e)},e.prototype._removeObserver=function(e){var t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)},e.prototype._notifyObservers=function(){var e=this;this._finishPromise(),this._observers.slice().forEach((function(t){e._notifyObserver(t)}))},e.prototype._finishPromise=function(){if(void 0!==this._resolve){var e=!0;switch(P(this._state)){case x.SUCCESS:fe(this._resolve.bind(null,this.snapshot))();break;case x.CANCELED:case x.ERROR:fe(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}},e.prototype._notifyObserver=function(e){switch(P(this._state)){case x.RUNNING:case x.PAUSED:e.next&&fe(e.next.bind(e,this.snapshot))();break;case x.SUCCESS:e.complete&&fe(e.complete.bind(e))();break;default:e.error&&fe(e.error.bind(e,this._error))()}},e.prototype.resume=function(){var e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e},e.prototype.pause=function(){var e="running"===this._state;return e&&this._transition("pausing"),e},e.prototype.cancel=function(){var e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e},e}(),_e=function(){function e(e,t){this._service=e,this._location=t instanceof C?t:C.makeFromUrl(t,e.host)}return e.prototype.toString=function(){return"gs://"+this._location.bucket+"/"+this._location.path},e.prototype._newRef=function(t,n){return new e(t,n)},Object.defineProperty(e.prototype,"root",{get:function(){var e=new C(this._location.bucket,"");return this._newRef(this._service,e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this._location.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this._location.path},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return G(this._location.path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this._service},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===t)return null;var n=new C(this._location.bucket,t);return new e(this._service,n)},enumerable:!1,configurable:!0}),e.prototype._throwIfRoot=function(e){if(""===this._location.path)throw _(e)},e}();function ge(e){var t={prefixes:[],items:[]};return be(e,t).then((function(){return t}))}function be(e,t,n){return Object(o.b)(this,void 0,void 0,(function(){var r,i,a;return Object(o.e)(this,(function(o){switch(o.label){case 0:return[4,ve(e,{pageToken:n})];case 1:return r=o.sent(),(i=t.prefixes).push.apply(i,r.prefixes),(a=t.items).push.apply(a,r.items),null==r.nextPageToken?[3,3]:[4,be(e,t,r.nextPageToken)];case 2:o.sent(),o.label=3;case 3:return[2]}}))}))}function ve(e,t){return Object(o.b)(this,void 0,void 0,(function(){var n,r;return Object(o.e)(this,(function(o){switch(o.label){case 0:return null!=t&&"number"===typeof t.maxResults&&q("options.maxResults",1,1e3,t.maxResults),n=t||{},r=ae(e.storage,e._location,"/",n.pageToken,n.maxResults),[4,e.storage.makeRequestWithTokens(r)];case 1:return[2,o.sent().getPromise()]}}))}))}function me(e,t){return Object(o.b)(this,void 0,void 0,(function(){var n;return Object(o.e)(this,(function(r){switch(r.label){case 0:return e._throwIfRoot("updateMetadata"),n=function(e,t,n,r){var o=L(t.fullServerUrl(),e.host),i=$(n,r),a=e.maxOperationRetryTime,s=new Q(o,"PATCH",te(e,r),a);return s.headers={"Content-Type":"application/json; charset=utf-8"},s.body=i,s.errorHandler=oe(t),s}(e.storage,e._location,t,K()),[4,e.storage.makeRequestWithTokens(n)];case 1:return[2,r.sent().getPromise()]}}))}))}function ye(e){return Object(o.b)(this,void 0,void 0,(function(){var t;return Object(o.e)(this,(function(n){switch(n.label){case 0:return e._throwIfRoot("getDownloadURL"),t=function(e,t,n){var r=L(t.fullServerUrl(),e.host),o=e.maxOperationRetryTime,i=new Q(r,"GET",ne(e,n),o);return i.errorHandler=oe(t),i}(e.storage,e._location,K()),[4,e.storage.makeRequestWithTokens(t)];case 1:return[2,n.sent().getPromise().then((function(e){if(null===e)throw new u("no-download-url","The given file does not have any download URLs.");return e}))]}}))}))}function we(e){return Object(o.b)(this,void 0,void 0,(function(){var t;return Object(o.e)(this,(function(n){switch(n.label){case 0:return e._throwIfRoot("deleteObject"),t=function(e,t){var n=L(t.fullServerUrl(),e.host),r=e.maxOperationRetryTime,o=new Q(n,"DELETE",(function(e,t){}),r);return o.successCodes=[200,204],o.errorHandler=oe(t),o}(e.storage,e._location),[4,e.storage.makeRequestWithTokens(t)];case 1:return[2,n.sent().getPromise()]}}))}))}function Re(e,t){var n=function(e,t){var n=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new C(e._location.bucket,n);return new _e(e.storage,r)}function ke(e){return/^[A-Za-z]+:\/\//.test(e)}function Te(e,t){if(e instanceof Pe){var n=e;if(null==n._bucket)throw new u("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");var r=new _e(n,n._bucket);return null!=t?Te(r,t):r}return void 0!==t?Re(e,t):e}function Oe(e,t){if(t&&ke(t)){if(e instanceof Pe)return new _e(e,t);throw f("To use ref(service, url), the first argument must be a Storage instance.")}return Te(e,t)}function xe(e,t){var n=null===t||void 0===t?void 0:t.storageBucket;return null==n?null:C.makeFromBucketSpec(n,e)}var Pe=function(){function e(e,t,n,r,o,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._pool=r,this._url=o,this._firebaseVersion=i,this._bucket=null,this._host=s,this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=o?C.makeFromBucketSpec(o,this._host):xe(this._host,this.app.options)}return Object.defineProperty(e.prototype,"host",{get:function(){return this._host},set:function(e){this._host=e,null!=this._url?this._bucket=C.makeFromBucketSpec(this._url,e):this._bucket=xe(e,this.app.options)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this._maxUploadRetryTime},set:function(e){q("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this._maxOperationRetryTime},set:function(e){q("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e},enumerable:!1,configurable:!0}),e.prototype._getAuthToken=function(){return Object(o.b)(this,void 0,void 0,(function(){var e,t;return Object(o.e)(this,(function(n){switch(n.label){case 0:return this._overrideAuthToken?[2,this._overrideAuthToken]:(e=this._authProvider.getImmediate({optional:!0}))?[4,e.getToken()]:[3,2];case 1:if(null!==(t=n.sent()))return[2,t.accessToken];n.label=2;case 2:return[2,null]}}))}))},e.prototype._getAppCheckToken=function(){return Object(o.b)(this,void 0,void 0,(function(){var e;return Object(o.e)(this,(function(t){switch(t.label){case 0:return(e=this._appCheckProvider.getImmediate({optional:!0}))?[4,e.getToken()]:[3,2];case 1:return[2,t.sent().token];case 2:return[2,null]}}))}))},e.prototype._delete=function(){return this._deleted||(this._deleted=!0,this._requests.forEach((function(e){return e.cancel()})),this._requests.clear()),Promise.resolve()},e.prototype._makeStorageReference=function(e){return new _e(this,e)},e.prototype._makeRequest=function(e,t,n){var r=this;if(this._deleted)return new j(d());var o=function(e,t,n,r,o,i){var a=B(e.urlParams),s=e.url+a,u=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(u,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(u,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}(u,i),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(u,r),new M(s,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o)}(e,this._appId,t,n,this._pool,this._firebaseVersion);return this._requests.add(o),o.getPromise().then((function(){return r._requests.delete(o)}),(function(){return r._requests.delete(o)})),o},e.prototype.makeRequestWithTokens=function(e){return Object(o.b)(this,void 0,void 0,(function(){var t,n,r;return Object(o.e)(this,(function(o){switch(o.label){case 0:return[4,Promise.all([this._getAuthToken(),this._getAppCheckToken()])];case 1:return t=o.sent(),n=t[0],r=t[1],[2,this._makeRequest(e,n,r)]}}))}))},e}();function Ue(e,t,n){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new de(e,new D(t),n)}(e=Object(i.q)(e),t,n)}function Se(e){return function(e){return Object(o.b)(this,void 0,void 0,(function(){var t;return Object(o.e)(this,(function(n){switch(n.label){case 0:return e._throwIfRoot("getMetadata"),t=ie(e.storage,e._location,K()),[4,e.storage.makeRequestWithTokens(t)];case 1:return[2,n.sent().getPromise()]}}))}))}(e=Object(i.q)(e))}function Ce(e,t){return Oe(e=Object(i.q)(e),t)}function je(e,t,n,r){void 0===r&&(r={}),function(e,t,n,r){void 0===r&&(r={}),e.host="http://"+t+":"+n;var o=r.mockUserToken;o&&(e._overrideAuthToken="string"===typeof o?o:Object(i.l)(o,e.app.options.projectId))}(e,t,n,r)}var Ee=function(){function e(e,t,n){this._delegate=e,this.task=t,this.ref=n}return Object.defineProperty(e.prototype,"bytesTransferred",{get:function(){return this._delegate.bytesTransferred},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"metadata",{get:function(){return this._delegate.metadata},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return this._delegate.state},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"totalBytes",{get:function(){return this._delegate.totalBytes},enumerable:!1,configurable:!0}),e}(),Ae=function(){function e(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}return Object.defineProperty(e.prototype,"snapshot",{get:function(){return new Ee(this._delegate.snapshot,this,this._ref)},enumerable:!1,configurable:!0}),e.prototype.then=function(e,t){var n=this;return this._delegate.then((function(t){if(e)return e(new Ee(t,n,n._ref))}),t)},e.prototype.on=function(e,t,n,r){var o=this,i=void 0;return t&&(i="function"===typeof t?function(e){return t(new Ee(e,o,o._ref))}:{next:t.next?function(e){return t.next(new Ee(e,o,o._ref))}:void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,n||void 0,r||void 0)},e}(),Ie=function(){function e(e,t){this._delegate=e,this._service=t}return Object.defineProperty(e.prototype,"prefixes",{get:function(){var e=this;return this._delegate.prefixes.map((function(t){return new qe(t,e._service)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"items",{get:function(){var e=this;return this._delegate.items.map((function(t){return new qe(t,e._service)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextPageToken",{get:function(){return this._delegate.nextPageToken||null},enumerable:!1,configurable:!0}),e}(),qe=function(){function e(e,t){this._delegate=e,this.storage=t}return Object.defineProperty(e.prototype,"name",{get:function(){return this._delegate.name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this._delegate.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this._delegate.fullPath},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return this._delegate.toString()},e.prototype.child=function(t){var n=function(e,t){return Re(e,t)}(this._delegate,t);return new e(n,this.storage)},Object.defineProperty(e.prototype,"root",{get:function(){return new e(this._delegate.root,this.storage)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=this._delegate.parent;return null==t?null:new e(t,this.storage)},enumerable:!1,configurable:!0}),e.prototype.put=function(e,t){return this._throwIfRoot("put"),new Ae(Ue(this._delegate,e,t),this)},e.prototype.putString=function(e,t,n){void 0===t&&(t=v.RAW),this._throwIfRoot("putString");var r=y(t,e),i=Object(o.a)({},n);return null==i.contentType&&null!=r.contentType&&(i.contentType=r.contentType),new Ae(new de(this._delegate,new D(r.data,!0),i),this)},e.prototype.listAll=function(){var e,t=this;return(e=this._delegate,ge(e=Object(i.q)(e))).then((function(e){return new Ie(e,t.storage)}))},e.prototype.list=function(e){var t=this;return function(e,t){return ve(e=Object(i.q)(e),t)}(this._delegate,e||void 0).then((function(e){return new Ie(e,t.storage)}))},e.prototype.getMetadata=function(){return Se(this._delegate)},e.prototype.updateMetadata=function(e){return function(e,t){return me(e=Object(i.q)(e),t)}(this._delegate,e)},e.prototype.getDownloadURL=function(){return e=this._delegate,ye(e=Object(i.q)(e));var e},e.prototype.delete=function(){return this._throwIfRoot("delete"),e=this._delegate,we(e=Object(i.q)(e));var e},e.prototype._throwIfRoot=function(e){if(""===this._delegate._location.path)throw _(e)},e}(),Le=function(){function e(e,t){this.app=e,this._delegate=t}return Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this._delegate.maxOperationRetryTime},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this._delegate.maxUploadRetryTime},enumerable:!1,configurable:!0}),e.prototype.ref=function(e){if(ke(e))throw f("ref() expected a child path but got a URL, use refFromURL instead.");return new qe(Ce(this._delegate,e),this)},e.prototype.refFromURL=function(e){if(!ke(e))throw f("refFromURL() expected a full URL but got a child path, use ref() instead.");try{C.makeFromUrl(e,this._delegate.host)}catch(t){throw f("refFromUrl() expected a valid full URL but got an invalid one.")}return new qe(Ce(this._delegate,e),this)},e.prototype.setMaxUploadRetryTime=function(e){this._delegate.maxUploadRetryTime=e},e.prototype.setMaxOperationRetryTime=function(e){this._delegate.maxOperationRetryTime=e},e.prototype.useEmulator=function(e,t,n){void 0===n&&(n={}),je(this._delegate,e,t,n)},e}();function Be(e,t){var n=t.instanceIdentifier,o=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return new Le(o,new Pe(o,i,a,new S,n,r.a.SDK_VERSION))}!function(e){var t={TaskState:x,TaskEvent:O,StringFormat:v,Storage:Pe,Reference:qe};e.INTERNAL.registerComponent(new a.a("storage",Be,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion("@firebase/storage","0.7.1")}(r.a)}}]);
//# sourceMappingURL=11.df4dd02b.chunk.js.map