



/* ControlTag Loader for Post Media 42fb57ac-2013-45a6-8dad-332d53e17c1b */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.42.1","schema_version":3},"confid":"uepn18565","context_terms":[],"publisher":{"name":"Post Media","active":true,"uuid":"42fb57ac-2013-45a6-8dad-332d53e17c1b","version_bucket":"stable","id":4499},"params":{"first_party_dmp_managed":true,"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"optout_button_optout_text":"Browser Opt Out","user_data_timing":"load","consent_active":true,"use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","first_party_uid":true,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":false,"optout_button_id":"kx-optout-button","user_id_cookie":"kppid","dfp_premium":true,"control_tag_namespace":"postmedia"},"prioritized_segments":[],"realtime_segments":[],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/42fb57ac-2013-45a6-8dad-332d53e17c1b","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/42fb57ac-2013-45a6-8dad-332d53e17c1b","consent_set":"https://consumer.krxd.net/consent/set/42fb57ac-2013-45a6-8dad-332d53e17c1b","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/42fb57ac-2013-45a6-8dad-332d53e17c1b","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"nationalpost_desktop","cap":255,"id":1678536,"organization_id":4499,"uid":"uepn18565"},"tags":[{"id":41818,"name":"Standard DTC all sites","content":"<script>\n(function() {\n    /* Standard but configurable DTC */\n    var comDomain, domain, level, libUtil, pathLevel, prefix, toSet;\n    libUtil = Krux('require:util.library-tag');\n    toSet = {};\n    level = 1;\n    while (level <= Number('3')) {\n        pathLevel = Krux('scrape.url_path', level);\n        if (pathLevel) {\n            if ('false' === 'true') {\n                pathLevel = (\"\" + pathLevel).replace(\n                    /\\.(?:html?|php[0-9]?|aspx?|cfg|py)$/i, '');\n            }\n            toSet[\"page_attr_url_path_\" + level] = pathLevel;\n        }\n        level++;\n    }\n    toSet['page_attr_meta_keywords'] = Krux('scrape.meta_name', 'keywords');\n    prefix = libUtil.resolvePrefix('get', 'site',\n        'undefined');\n    toSet = Krux('prefix:attr', toSet, prefix);\n    domain = Krux('get', 'domain');\n    comDomain = domain.match(/\\.([^\\.]+\\.com)$/);\n    if (comDomain) {\n        domain = comDomain[1];\n    }\n    toSet['page_attr_domain'] = domain;\n    Krux('set', toSet);\n}).call();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":42920,"name":"Standard DTC all sites no prefix","content":"<script>\n(function() {\n    /* Standard but configurable DTC */\n    var comDomain, domain, level, libUtil, pathLevel, prefix, toSet;\n    libUtil = Krux('require:util.library-tag');\n    toSet = {};\n    level = 1;\n    while (level <= Number('3')) {\n        pathLevel = Krux('scrape.url_path', level);\n        if (pathLevel) {\n            if ('false' === 'true') {\n                pathLevel = (\"\" + pathLevel).replace(\n                    /\\.(?:html?|php[0-9]?|aspx?|cfg|py)$/i, '');\n            }\n            toSet[\"page_attr_url_path_\" + level] = pathLevel;\n        }\n        level++;\n    }\n    toSet['page_attr_meta_keywords'] = Krux('scrape.meta_name', 'keywords');\n    prefix = libUtil.resolvePrefix('none', 'undefined',\n        'undefined');\n    toSet = Krux('prefix:attr', toSet, prefix);\n    domain = Krux('get', 'domain');\n    comDomain = domain.match(/\\.([^\\.]+\\.com)$/);\n    if (comDomain) {\n        domain = comDomain[1];\n    }\n    toSet['page_attr_domain'] = domain;\n    Krux('set', toSet);\n}).call();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":42921,"name":"Whitelist DTC no prefix","content":"<script>\n(function() {\n    /* Selective Attribute DataLayer Library Tag */\n    var _, allAttr, allowedList, attr, attributes, dataLayerIngester, dataObj,\n        isAllowed, keepCase, libUtil, omitKeys, pageAttr, prefix, toSet, trim,\n        userAttr, util, value,\n        hasProp = {}.hasOwnProperty;\n    _ = Krux('require:underscore');\n    util = Krux('require:util');\n    libUtil = Krux('require:util.library-tag');\n    dataLayerIngester = Krux('require:scrape').ingestDataLayer;\n\n    /* Safe copy of dataLayer object */\n    dataObj = Krux('scrape.javascript', 'KruxDataLayer');\n\n    /* String trimming helper function */\n    trim = function(attr) {\n        return (\"\" + attr).replace(/^\\s+|\\s+$/g, '');\n    };\n\n    /* Attribute configs */\n    pageAttr = _.map('Vendor,Brand,Division,Distributor,Page Type,Authors,Entity,NLP Category'.split(','), trim);\n    userAttr = _.map('MPID'.split(','), trim);\n\n    /* Create a array of attributes striping any empty strings */\n    allAttr = _.without(pageAttr.concat(userAttr), '');\n\n    /* Configuration settings */\n    keepCase = 'false' === 'true';\n    omitKeys = 'undefined'.split(',');\n\n    /* Resolve Prefix */\n    prefix = libUtil.resolvePrefix('none', 'undefined',\n        'undefined');\n\n    /* Function to varify if attribute should be used */\n    isAllowed = function(value, whitelist) {\n        var i, len, str, x;\n        str = \"\" + value;\n        if (!((value != null) && str.length > 0)) {\n            return false;\n        }\n        for (i = 0, len = whitelist.length; i < len; i++) {\n            x = whitelist[i];\n            if (value.match(x) != null) {\n                return true;\n            }\n        }\n        return false;\n    };\n\n    /* Get a full list of attributes usting the dataLayer tool */\n    attributes = dataLayerIngester(dataObj, {\n        omitKeys: libUtil.removeFalsyStrings(omitKeys.concat(libUtil.EXCLUDE_KEYS_CONFIG)),\n        omitValues: libUtil.EXCLUDE_VALUES_CONFIG,\n        caseSensitive: keepCase,\n        useFullPath: 'false' === 'true',\n        useLastValue: 'false' === 'true',\n        customDelimited: [/./],\n        altDelimiter: ',',\n        userKeys: _.map(userAttr, function(exp) {\n            return new RegExp(\"(^|\\\\.)\" + exp + \"$\");\n        }),\n        optimizeNames: true\n    });\n\n    /* Only set Attributes in the allowed list */\n    allowedList = _.map(allAttr, function(name) {\n        return new RegExp(\"(_attr_|_attr_\" + prefix + \"|\\\\.)\" + (keepCase ?\n            name : libUtil.normalizeAttrName(name, {\n                removeDot: false\n            })) + \"$\");\n    });\n    toSet = {};\n    for (attr in attributes) {\n        if (!hasProp.call(attributes, attr)) continue;\n        value = attributes[attr];\n        if (isAllowed(attr, allowedList)) {\n            toSet[attr] = value;\n        }\n    }\n    toSet = Krux('prefix:attr', toSet, prefix);\n    Krux('set', toSet);\n}).call();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":42922,"name":"Whitelist DTC with site prefixes","content":"<script>\n(function() {\n    /* Selective Attribute DataLayer Library Tag */\n    var _, allAttr, allowedList, attr, attributes, dataLayerIngester, dataObj,\n        isAllowed, keepCase, libUtil, omitKeys, pageAttr, prefix, toSet, trim,\n        userAttr, util, value,\n        hasProp = {}.hasOwnProperty;\n    _ = Krux('require:underscore');\n    util = Krux('require:util');\n    libUtil = Krux('require:util.library-tag');\n    dataLayerIngester = Krux('require:scrape').ingestDataLayer;\n\n    /* Safe copy of dataLayer object */\n    dataObj = Krux('scrape.javascript', 'KruxDataLayer');\n\n    /* String trimming helper function */\n    trim = function(attr) {\n        return (\"\" + attr).replace(/^\\s+|\\s+$/g, '');\n    };\n\n    /* Attribute configs */\n    pageAttr = _.map('Vendor,Brand,Division,Distributor,Page Type,Authors,Entity,NLP Category'.split(','), trim);\n    userAttr = _.map('undefined'.split(','), trim);\n\n    /* Create a array of attributes striping any empty strings */\n    allAttr = _.without(pageAttr.concat(userAttr), '');\n\n    /* Configuration settings */\n    keepCase = 'false' === 'true';\n    omitKeys = 'undefined'.split(',');\n\n    /* Resolve Prefix */\n    prefix = libUtil.resolvePrefix('get', 'site',\n        'undefined');\n\n    /* Function to varify if attribute should be used */\n    isAllowed = function(value, whitelist) {\n        var i, len, str, x;\n        str = \"\" + value;\n        if (!((value != null) && str.length > 0)) {\n            return false;\n        }\n        for (i = 0, len = whitelist.length; i < len; i++) {\n            x = whitelist[i];\n            if (value.match(x) != null) {\n                return true;\n            }\n        }\n        return false;\n    };\n\n    /* Get a full list of attributes usting the dataLayer tool */\n    attributes = dataLayerIngester(dataObj, {\n        omitKeys: libUtil.removeFalsyStrings(omitKeys.concat(libUtil.EXCLUDE_KEYS_CONFIG)),\n        omitValues: libUtil.EXCLUDE_VALUES_CONFIG,\n        caseSensitive: keepCase,\n        useFullPath: 'false' === 'true',\n        useLastValue: 'undefined' === 'true',\n        customDelimited: [/./],\n        altDelimiter: ',',\n        userKeys: _.map(userAttr, function(exp) {\n            return new RegExp(\"(^|\\\\.)\" + exp + \"$\");\n        }),\n        optimizeNames: true\n    });\n\n    /* Only set Attributes in the allowed list */\n    allowedList = _.map(allAttr, function(name) {\n        return new RegExp(\"(_attr_|_attr_\" + prefix + \"|\\\\.)\" + (keepCase ?\n            name : libUtil.normalizeAttrName(name, {\n                removeDot: false\n            })) + \"$\");\n    });\n    toSet = {};\n    for (attr in attributes) {\n        if (!hasProp.call(attributes, attr)) continue;\n        value = attributes[attr];\n        if (isAllowed(attr, allowedList)) {\n            toSet[attr] = value;\n        }\n    }\n    toSet = Krux('prefix:attr', toSet, prefix);\n    Krux('set', toSet);\n}).call();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true}],"usermatch_tags":[{"id":6,"name":"Google User Match","content":"<script>\r\n(function() {\r\n\r\nvar kuid = Krux('get', 'user');\r\n  if(kuid){\r\n  // original google user match tag. will be deprecated june 1, 2020\r\n  new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\r\n\r\n  // new google user match where they host the match table. The KUID needs to be base64 encoded, but the ids sent will be regular kuids\r\n  var baseEncodedKuid = btoa(kuid).replace(/=$/, '');\r\n  new Image().src = 'https://cm.g.doubleclick.net/pixel?google_nid=krux_digital&google_hm='+baseEncodedKuid;\r\n  }\r\n\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":21,"name":"Acxiom","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":23,"name":"BlueKai S2S (Oracle)","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var bk_prefix = location.protocol == 'https:' ? \"stags\" : \"tags\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&partner=bluekai&bk_uuid=$_BK_UUID\");\r\n            var kurl = prefix + \"//beacon.krxd.net/usermatch.gif?\" + kurl_params;\r\n            var bk_params = 'id=' + kuid;\r\n            var bk_url = '//' + bk_prefix + '.bluekai.com/site/26357?' + bk_params + '&redir=' + kurl;\r\n            var i = new Image();\r\n            i.src = bk_url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":34,"name":"Comscore Data Tag","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  var cbust = Math.round(new Date().getTime() / 1000);\r\n  var prefix = location.protocol == 'https:' ? \"https:\" :\"http:\";\r\n  var url = prefix == 'https:' ? '//sb.scorecardresearch.com/p' : '//b.scorecardresearch.com/p';\r\n  if (kuid) {\r\n    Krux('require:http').pixel({\r\n      url: url,\r\n      data: {\r\n          c1: '9',\r\n          c2: '8188709',\r\n          cs_xi: kuid,\r\n          rn: cbust\r\n      }});\r\n  }\r\n  })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":45,"name":"TubeMogul user match","content":"<script>\r\n    (function() {\r\n        new Image().src = location.protocol + '//sync-tm.everesttech.net/upi/pid/NC4WTmcy?redir=' + encodeURIComponent('https://beacon.krxd.net/usermatch.gif?partner_id=cb276571-e0d9-4438-9fd4-80a1ff034b01&puid=${TM_USER_ID}');\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":62,"name":"Beeswax Usermatch","content":"<script>\r\n\t(new Image()).src = 'https://match.prod.bidr.io/cookie-sync/krux';\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":76,"name":"LiveRamp User Matching","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\r\n      var i = new Image();\r\n      i.src = liveramp_url;     \r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":81,"name":"Bombora","content":"<script>\r\n\r\n(function () {\r\n_ml = window._ml || {};\r\n_ml.pub = '748';\r\n_ml.redirect = '//beacon.krxd.net/usermatch.gif?partner=madisonlogic&partner_uid=[PersonID]';\r\nvar s = document.getElementsByTagName('script')[0], cd = new Date(), mltag = document.createElement('script');\r\nmltag.type = 'text/javascript'; mltag.async = true;\r\nmltag.src = '//ml314.com/tag.aspx?' + cd.getDate() + cd.getMonth() + cd.getFullYear();\r\ns.parentNode.insertBefore(mltag, s);\r\n})();\r\n\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":86,"name":"Neustar AdAdvisor S2S","content":"<script>\r\n(function(){\r\nvar kuid = Krux('get', 'user');\r\nvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\nif (kuid) {\r\n    new Image().src = prefix + '//aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e';\r\n     }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":32,"name":"Casale (Index Exchange) user match","content":"<script>\n(function(){\n\n   var kuid = Krux('get', 'user');\n   if (kuid) {\n      var prefix = window.location.protocol;\n      var casale_url = '';\n      var kurl = '//beacon.krxd.net/usermatch.gif?partner=casale&partner_uid=__UID__';\n      var encode_krux_url = encodeURIComponent(prefix + kurl);\n      \n      if (prefix == \"http:\") {\n         casale_url = prefix + '//ssum.casalemedia.com/usermatchredir?s=183716&cb='+ encode_krux_url;\n      }\n      else if (prefix == \"https:\") { \n         casale_url = prefix + '//ssum-sec.casalemedia.com/usermatchredir?s=183716&cb='+ encode_krux_url; \n      }\n\n      new Image().src = casale_url;\n   }\n\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":149,"name":"StackAdapt User Match","content":"<script>\r\n(function(){\r\n\tvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\n\tvar url = prefix + '//sync.srv.stackadapt.com/sync?nid=salesforce';\r\n\t(new Image()).src = url;\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.e4cdf7ad64ebac73f207c1ce55cc1727', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
