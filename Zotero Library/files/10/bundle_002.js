(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{ujfh:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));n("PN9k"),n("yIC7");var r=n("8OQS"),i=n.n(r),o=n("lSNA"),s=n.n(o),a=n("pXBW"),u=n("k49u"),c=n("EhiH"),_=n("Myq3"),p=n("/NU0"),d=n("ZjLa"),f=[u.a.BadOauthToken,u.a.OauthTimestampException,u.a.BadAuthenticationData,u.a.AccessDeniedByBouncer],m=function(){function e(e,t){var n=this;s()(this,"scribeRequest",(function(e){var t=e.response,r=e.error,o=i()(e,["error"]),s=new window.URL(o.url);if((!r&&t||(t={headers:{},body:"",status:r?r.status:500},r instanceof a.a))&&0!==s.pathname.indexOf("/1.1/jot")){n._flushResourceTimingBuffer();var u=Object(_.a)(n._buffer,(function(e){var t=e.request;return s.protocol===t.uri_scheme&&s.hostname===t.uri_host_name&&s.pathname===t.uri_path&&(s.query||"")===t.uri_query}));if(u){var c=n._buffer.indexOf(u);n._buffer[c]=n._updateEventWithRequestResponse(u,o,t,r)}else{var p=n._updateEventWithRequestResponse(n._prepareEvent(o.url),o,t,r);n._buffer.push(p)}n._flushBuffer()}})),s()(this,"_flushResourceTimingBuffer",(function(){if(n._resourceTimingApiSupported){var e=window.performance.getEntriesByType("resource");window.performance.clearResourceTimings(),e.forEach((function(e){if(e.name){var t=n._updateEventWithPrecisionTimings(n._prepareEvent(e.name),e);n._buffer.push(t)}}))}})),s()(this,"_updateNetworkInfo",(function(e){n._networkInfo=e})),s()(this,"_getNetworkMeasurements",(function(){return{connection_type:n._networkInfo.type||"unknown",speed_class:n._networkInfo.effectiveType,download_mbps:n._networkInfo.downlink,download_max_mbps:n._networkInfo.downlinkMax,rtt_ms:n._networkInfo.rtt,reduced_data_usage:n._networkInfo.saveData}})),this._resourceTimingApiSupported=window.performance&&window.performance.getEntriesByType&&window.performance.getEntriesByType("resource")&&window.performance.clearResourceTimings,this._scribe=e,this._options=Object.assign({apiErrorSampleSize:0,apiSampleSize:0,cdnSampleSize:0,cdnHostList:[]},t),this._buffer=[],this._networkInfo={},d.a.getConnectionInfo().then((function(e){n._updateNetworkInfo(e),d.a.addEventListener("connectionChange",n._updateNetworkInfo)})),this._resourceTimingApiSupported&&(window.performance.onresourcetimingbufferfull=this._flushResourceTimingBuffer)}var t=e.prototype;return t._record=function(e){this._sample(e)&&this._scribe.log(void 0,e)},t._possiblyRecordErrorToAllNamespace=function(e){if("api:error"===e.event_type){var t=Object.assign({},e,{event_type:"api:all"});this._record(t)}},t._flushBuffer=function(){var e=this;this._buffer.splice(0,this._buffer.length).forEach((function(t){e._record(t),e._possiblyRecordErrorToAllNamespace(t)}))},t._sample=function(e){var t=e.event_type,n=this._options[{"api:all":"apiSampleSize","api:error":"apiErrorSampleSize","cdn:all":"cdnSampleSize"}[t]]||0;return Math.random()<n},t._getEventType=function(e,t){return this._options.cdnHostList.indexOf(e)>-1?"cdn:all":t>=200&&t<300?"api:all":"api:error"},t._prepareEvent=function(e){var t=new window.URL(e),n="api.twitter.com"===t.hostname;return{_category_:"client_network_request_event",request:{uri_scheme:t.protocol,uri_host_name:t.hostname,uri_path:t.pathname,uri_query:t.query||"",http_method:"GET",http_status_code:n?0:200,start_time_ms:Date.now(),request_details:{duration_ms:0}},common_header:{commonHeader:{clientHeader:{timestampMs:Date.now(),timezoneOffsetMin:-(new Date).getTimezoneOffset()}}},network_measurements:this._getNetworkMeasurements(),event_type:this._getEventType(t.hostname,200),event_source:"rweb"}},t._extractApiErrorCode=function(e){var t=e.errors,n=(void 0===t?[]:t).map((function(e){return e.code})).filter((function(e){return void 0!==e})),r=Object(c.a)(n,(function(e){return f.indexOf(e)>-1}));return r||(n.length>0?n[0]:void 0)},t._updateEventWithRequestResponse=function(e,t,n,r){var i=e.request.request_details;return Object.assign({},e,{request:Object.assign({},e.request,{http_method:t.method,http_status_code:n.status,start_time_ms:t.startTimestamp,trace_id:t.headers["x-b3-traceid"],twitter_api_error_code:r&&this._extractApiErrorCode(r)||void 0,request_details:Object.assign({},i,{duration_ms:i.duration_ms||t.endTimestamp-t.startTimestamp,request_body_size:i.request_body_size||("string"==typeof t.data?t.data.length:t.data?JSON.stringify(t.data).length:void 0),response_body_size:i.response_body_size||(n&&n.body?n.body.length:void 0)})}),event_type:this._getEventType(e.request.uri_host_name,n.status)})},t._getTiming=function(e,t){return Object(p.a)(e)&&Object(p.a)(t)?Math.round(t-e):void 0},t._updateEventWithPrecisionTimings=function(e,t){return Object.assign({},e,{request:Object.assign({},e.request,{request_details:Object.assign({},e.request.request_details,{duration_ms:Math.round(t.responseEnd-t.fetchStart),rx_bytes:t.transferSize,dns_ms:this._getTiming(t.domainLookupStart,t.domainLookupEnd),tcp_ms:this._getTiming(t.connectStart,t.connectEnd),tls_ms:0===t.secureConnectionStart?void 0:Math.round(t.connectEnd-t.secureConnectionStart),response_body_size:t.decodedBodySize})})})},e}()}}]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/bundle.NetworkInstrument.e11fbf14.js.map