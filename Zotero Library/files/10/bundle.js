(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"8Lfv":function(e,t,n){"use strict";n("yKDW"),n("dtAy");var r=n("MDbM");t.a=function(e,t){return function(n,o,a){if(e.selectInitialFetchStatus(o())===r.a.LOADING)return Promise.resolve();var i=e.selectTimeline(o());return n(e.deleteTimeline()),n(e.fetchInitial(t)).catch((function(t){if(!i||e.selectUnavailableReason(o()))return Promise.reject(t);n(e.restoreTimeline(i))}))}}},"AEu/":function(e,t,n){"use strict";n.r(t);var r=n("PJYZ"),o=n.n(r),a=n("VbXa"),i=n.n(a),c=n("lSNA"),s=n.n(c),l=n("ERkP"),u=n("es0u"),d=(n("NlgC"),n("oEGd")),p=n("0KEI"),f=n("hqKg"),h=n("8Lfv"),m=n("G6rE"),w=Object(f.createSelector)((function(e,t){return t.match.params.screenName}),(function(e,t){return t.match.params.statusId}),(function(e,t){return"PUSH"===t.history.action}),m.e.selectLoggedInUser,(function(e,t,n,r){return{loggedInScreenName:r?r.screen_name:void 0,screenName:e,statusId:t,isForwardNavigation:n}})),T={createLocalApiErrorHandler:Object(p.b)("HIDDEN_REPLIES_PAGE"),clearTimelineCache:function(e){return Object(h.a)(e)}},v=Object(d.g)(w,T),g=n("7JQg"),b=n("xZXe"),y=n("QIgh"),_=n("8UdT"),I=n("IcAo"),C=n("VrCx"),E=n("yy6l"),x=function(e){return Object(E.a)({component:b.a,createAdditionalProps:function(){return{withUnhideReply:e}},displayBlocked:!0,divider:{top:!0,bottom:!0}})},R=n("WU0f"),O=n("yoO3"),S=n("IG4P"),P=n("fTQJ"),j=n("VS6U"),A=n("t62R"),L=n("FIs5"),N=n("I7xG"),F=n("3XMw"),M=n.n(F);n.d(t,"ConversationHiddenRepliesScreen",(function(){return W}));var k=M.a.f8bf99e2,U=M.a.e001fce2,H=M.a.f7462e22,D=M.a.h73926af,B=l.createElement(M.a.I18NFormatMessage,{$i18n:"c774be45"},l.createElement(A.b,{link:"https://help.twitter.com/using-twitter/mentions-and-replies#hidden-reply"},M.a.fa1e6c45)),V=function(){return l.createElement(L.a,{header:D,message:B})},W=function(e){function t(t){var n;return n=e.call(this,t)||this,s()(o()(n),"_getModule",Object(N.a)(o()(n),(function(e){return e.statusId}),(function(e){return Object(R.a)(e)}))),n._clearTimelineCache(),n}i()(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=e.history,n=e.location,r=e.loggedInScreenName,o=e.screenName,a=e.statusId;return o&&a?l.createElement(O.a,null,l.createElement(j.a,{backLocation:"/"+o.toLowerCase()+"/status/"+a,history:t,location:n,primaryContent:this._renderPrimaryContent(),sidebarContent:l.createElement(u.a,null),subtitle:o===r?U:H({screenName:o}),title:k})):null},n._renderPrimaryContent=function(){var e,t,n,r,o=this.props,a=o.loggedInScreenName,i=o.screenName;return l.createElement(P.a,{entryConfiguration:(e={withUnhideReply:i===a},r=e.withUnhideReply,Object(I.a)({},y.b,((n={})[_.a.Tweet]={handlers:(t={},t[C.a.Tweet]=x(r),t)},n))),module:this._getModule(),refreshControl:S.a,renderEmptyState:V,title:k})},n._clearTimelineCache=function(e){void 0===e&&(e=this._getModule());var t=this.props,n=t.clearTimelineCache,r=t.createLocalApiErrorHandler;t.isForwardNavigation&&n(e).catch(r({}))},t}(l.Component);t.default=Object(g.d)({page:"tweet",section:"moderated_replies"})(v(W))},AUxQ:function(e,t,n){"use strict";var r=n("PJYZ"),o=n.n(r),a=n("VbXa"),i=n.n(a),c=n("lSNA"),s=n.n(c),l=n("PiaM"),u=n("ERkP"),d=n("rxPX"),p=function(e,t){var n=t.module.selectTimeline(e);return!!n&&n.terminatedStatus.atTop},f=function(e,t){return t.location.state&&t.location.state.contextualClientEventInfo},h=Object(d.a)().propsFromState((function(){return{isTimelineTerminatedAtTop:p,contextualClientEventInfo:f}})),m=n("I7xG"),w=n("3XMw"),T=n.n(w),v=n("v6aA"),g=n("VTxf"),b=n("SrIh"),y=n("fTQJ"),_=n("iBK2"),I=n("IRWI"),C=n("wgnn"),E=n("yhJW"),x=T.a.gccad761,R=function(e){switch(e){case C.a.NOT_FOUND:return u.createElement(g.a,null);default:return Object(b.a)("Unhandled timeline unavailable reason: "+e),null}},O=function(){return u.createElement(g.a,null)},S=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,s()(o()(t),"_isInitialFocusEntry",(function(e,n){var r=t.props.focalTweetId;return n>0&&e&&e.content&&!!e.content.id&&e.content.id===r})),s()(o()(t),"_getPreprocessor",Object(m.a)(o()(t),(function(e){return e.socialContext}),(function(e){return e.contextTweetId}),(function(e){return e.contextualClientEventInfo}),(function(e){return e.promotedContent}),(function(e){return e.focalTweetId}),(function(e){return e.selectedTweet}),(function(e){return e.conversationTreeEnabled}),(function(e){return e.isTimelineTerminatedAtTop}),(function(e){var t;return null===(t=e.focalTweet)||void 0===t?void 0:t.in_reply_to_status_id_str}),(function(e){return e.withFocalTweetMedia}),(function(e,t,n,r,o,a,i,c,s,l){return i?Object(E.a)({focalTweetId:o,contextTweetId:t,contextualClientEventInfo:n,socialContext:e,selectedTweet:a,promotedContent:r,isTimelineTerminatedAtTop:c,focalInReplyTo:s,hideMedia:!l}):Object(E.c)({focalTweetId:o,contextTweetId:t,contextualClientEventInfo:n,socialContext:e,promotedContent:r})}))),s()(o()(t),"_getEntryConfig",Object(m.a)(o()(t),(function(e){return!!e.rootTweet&&e.rootTweet.user.id_str}),(function(e,t,n){return n.context.loggedInUserId}),(function(e){return e.withFocalTweetMedia}),(function(e,t,n){var r=t&&e&&t===e;return Object(E.b)({isCurrentUserRootAuthor:!!r,withFocalTweetMedia:n})}))),t}i()(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=e.apiErrorHandlerMap,n=e.fetchOptions,r=e.module,o=e.onEntriesUpdate;return u.createElement(y.a,{anchoring:I.a,apiErrorHandlerMap:t,entryConfiguration:this._getEntryConfig(),fetchOptions:n,isInitialFocusEntry:this._isInitialFocusEntry,module:r,olderAtTop:!0,onEntriesUpdate:o,preprocessEntryList:this._getPreprocessor(),previewEntries:this._previewEntries(),renderEmptyState:O,renderUnavailable:R,title:x})},n._previewEntries=function(){var e=this.props,t=e.conversationTreeEnabled,n=e.focalTweet,r=(null==n?void 0:n.id_str)||"";return t&&n?[l.i({tweetId:r,sortIndex:_.a})]:n?[l.k({id:r,sortIndex:_.a})]:void 0},t}(u.Component);s()(S,"defaultProps",{withFocalTweetMedia:!0}),s()(S,"contextType",v.a);var P=h(S);t.a=P},DL4F:function(e,t,n){"use strict";n.r(t);n("PN9k"),n("yIC7");var r=n("PJYZ"),o=n.n(r),a=n("VbXa"),i=n.n(a),c=n("lSNA"),s=n.n(c),l=n("ERkP"),u=(n("VAZu"),n("NlgC"),n("zh9S")),d=n("oEGd"),p=n("0KEI"),f=n("hqKg"),h=n("XOJV"),m=function(e,t){return t.match.params.statusId},w=Object(f.createSelector)((function(e,t){return h.a.selectFetchStatus(e,m(0,t))}),m,(function(e,t){return h.a.selectHydrated(e,m(0,t))}),(function(e,t,n){return{fetchStatus:e,statusId:t,tweet:n}})),T={createLocalApiErrorHandler:Object(p.b)("CONVERSATION_ANALYTICS_SCREEN"),fetchTweetIfNeeded:h.a.fetchOneIfNeeded,scribeAction:u.c},v=Object(d.g)(w,T),g=n("7JQg"),b=n("1SjZ"),y=n("v//M"),_=n("W5XZ"),I=n("jHSc"),C=n("3XMw"),E=n.n(C),x=n("v6aA"),R=n("SrIh"),O=n("Rp9C"),S=n("bPFD"),P=n("rHpw");n.d(t,"ConversationAnalyticsScreen",(function(){return N}));var j=E.a.db722a73,A=E.a.ba56def2,L=E.a.j07decd3,N=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,s()(o()(t),"_handleFetchTweet",(function(){var e=t.props,n=e.createLocalApiErrorHandler;(0,e.fetchTweetIfNeeded)(e.statusId).catch(n(_.a))})),s()(o()(t),"_render",(function(){var e=t._getRetweetOrTweet();if(!e||e&&e.user.id_str!==t.context.loggedInUserId)return l.createElement(b.a,{onRetry:null,title:j});return l.createElement(S.a,{dangerouslyDisableSandbox:!0,onMessage:t._handleIFrameMessage,reportError:R.a,src:"/i/tfb/v1/quick_promote/lite/"+e.id_str,style:F.iframe})})),s()(o()(t),"_setAppBarRef",(function(e){t._appBarRef=e})),s()(o()(t),"_handleIFrameMessage",(function(e){if(e&&"quick_promote"===e.name)if("scribe"===e.type){var n=t.props,r=n.scribeAction,o=n.scribeNamespace,a=t._getRetweetOrTweet(),i=e.scribeData||{},c="string"==typeof i.component?i.component:"quick_promote",s="string"==typeof i.uiEvent?i.uiEvent:"";r(Object.assign({},o,{component:c,action:s}),Object.assign({},i,{items:a?[O.a.getTweetItem(a)]:[]}))}else"close"===e.type&&t._appBarRef&&t._appBarRef.goBack()})),t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this._handleFetchTweet()},n._getRetweetOrTweet=function(){return this.props.tweet&&this.props.tweet.retweeted_status||this.props.tweet},n.render=function(){var e=this.props,t=e.fetchStatus,n=e.history,r=e.location,o=this._getRetweetOrTweet();return l.createElement(I.b,{appBarRef:this._setAppBarRef,backLocation:o?o.permalink:"/",history:n,location:r,title:A},l.createElement(y.a,{fetchStatus:t,render:this._render,retryMessage:L}))},t}(l.PureComponent);s()(N,"contextType",x.a);var F=P.a.create((function(e){return{iframe:{flexGrow:1}}}));t.default=Object(g.d)({page:"tweet",section:"analytics"})(v(N))},HThR:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("PJYZ"),o=n.n(r),a=n("VbXa"),i=n.n(a),c=n("lSNA"),s=n.n(c),l=n("ERkP"),u=n("wrlS"),d=n("v6aA"),p=n("RxYA"),f=function(e){function t(t,n){var r;r=e.call(this,t,n)||this,s()(o()(r),"_handleClose",(function(){r.setState({showLoginPrompt:!1})}));var a=!r.context.loggedInUserId&&u.a.hasValue("rweb_android_app_install_cta_v2_8497","app_install_once_per_week");return r.state={showLoginPrompt:a},r}return i()(t,e),t.prototype.render=function(){return this.state.showLoginPrompt?l.createElement(p.a,{isHalfSheet:!0,onClose:this._handleClose,onlyShowOnce:!0}):null},t}(l.Component);s()(f,"contextType",d.a)},W5XZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r,o=n("k49u"),a=n("fs1G"),i=((r={})[o.a.OtherUserSuspended]={customAction:a.a},r[o.a.StatusViewForbidden]={customAction:a.a},r)},bPFD:function(e,t,n){"use strict";var r=n("97Jx"),o=n.n(r),a=(n("PN9k"),n("1Pcy")),i=n.n(a),c=n("W/Kd"),s=n.n(c),l=n("KEM+"),u=n.n(l),d=n("ERkP"),p=n("6/RC"),f=n("rHpw"),h=(n("aWzz"),n("7DT3")),m=n.n(h),w=n("3xO4"),T=n.n(w),v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,u()(i()(t),"_handleMessage",(function(e){var n=t.props,r=n.onMessage,o=n.forwardedRef,a=n.reportError;if(r&&("string"!=typeof e.data||0!==e.data.indexOf("setImmediate$"))){if(e.origin!==window.location.protocol+"//"+window.location.host)return a?a("Invalid cross-origin postMessage from "+e.origin):null;var i;if(o&&o.current&&o.current.contentWindow&&o.current.contentWindow===e.source)if(e.stopImmediatePropagation(),"string"==typeof e.data&&"undefined"!==e.data){try{i=JSON.parse(e.data)}catch(c){return void(a&&a("Invalid postMessage data from "+e.origin+": "+e.data))}r(i)}}})),t}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e;this.props.onMessage&&(e=this._handleMessage,p.canUseDOM&&window.addEventListener("message",e,!1))},n.componentWillUnmount=function(){var e;this.props.onMessage&&(e=this._handleMessage,p.canUseDOM&&window.removeEventListener("message",e,!1))},n.render=function(){var e=this.props,t=e.allowForms,n=e.dangerouslyDisableSandbox,r=e.src,o=e.style,a=e.title,i=m()("iframe",Object.assign({allow:"autoplay; fullscreen",allowFullScreen:!0,ref:this.props.forwardedRef,src:r,style:g.iframe,title:a},n?null:{sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"+(t?" allow-forms":"")}));return d.createElement(T.a,{style:[g.root,o]},i)},t}(d.Component);v.propTypes={};var g=f.a.create((function(e){return{root:{overflow:"auto",WebkitOverflowScrolling:"touch"},iframe:{borderWidth:0,flexGrow:1}}}));t.a=d.forwardRef((function(e,t){return d.createElement(v,o()({forwardedRef:t},e))}))},ckGq:function(e,t,n){"use strict";var r=n("R972"),o=(n("ERkP"),n("6vad"));t.a=r.d(r.f({divider:{top:!0,bottom:!1},component:o.a,createProps:function(e){var t=e.entry.content;return{text:t.text,subtext:t.subtext,withBottomBorder:!1}}}))},rkhm:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("k49u"),o=n("fs1G"),a=n("LVU8"),i=function(e){var t;return void 0===e&&(e=""),(t={})[r.a.GenericNotFound]={customAction:o.a},t[r.a.NotAuthorizedToViewUser]={customAction:function(){Object(a.d)("/"+e,{statusCode:401})}},t[r.a.StatusViewForbidden]={customAction:function(){Object(a.d)("/"+e)}},t.showToast=!0,t}},yhJW:function(e,t,n){"use strict";n.d(t,"c",(function(){return E})),n.d(t,"a",(function(){return x}));n("PN9k");var r,o=n("R972"),a=n("PiaM"),i=n("xZXe"),c=n("P1oR"),s=n("VPAj"),l=n("QIgh"),u=n("8UdT"),d=n("zrc3"),p=n("caTy"),f=n("NO+D"),h=n("ckGq"),m=n("IcAo"),w=n("zh9S"),T=n("gdQ4"),v=n("yvCK"),g=n("euJ+"),b=n("Yy//"),y=n("VrCx"),_=n("yy6l"),I=n("G6rE"),C=Object.assign({},l.b,((r={})[u.a.Tweet]=Object(b.a)({hideConversationControlsEducationText:!0}),r));t.b=function(e){var t,n,r,a=e.isCurrentUserRootAuthor,l=e.withFocalTweetMedia;return Object(m.a)({},C,((r={})[u.a.Tweet]={handlers:(t={},t[y.a.Tweet]=Object(_.a)({component:i.a,hideConversationControlsEducationText:!0,createAdditionalProps:function(e,t,n){var r=n.applyFeedbackAction,o={};o.withHideReply=a,o.withUnhideReply=!1,o.withViewHiddenReplies=!0,o.withMuteConversation=!0;var i=!!(e.content&&e.content.hasModeratedReplies&&e.conversationPosition&&e.conversationPosition.isStart);return o.hasModeratedReplies=i,a&&(o.onTweetDismiss=function(){return r({entry:e,feedbackKeys:[g.d]})}),o},dismissable:!0}),t[y.a.Focal]=Object(_.a)({component:c.a,hideConversationControlsEducationText:!1,createAdditionalProps:function(e,t,n){var r=n.applyFeedbackAction,o=e.content,i=o.hasModeratedReplies,c=o.tombstoneInfo,s=e.referringContext,u=e.conversationPosition,d=s||{},p=d.contextTweetId,f=d.socialContext,h=d.promotedContent,m=!!(i&&u&&u.isStart);return Object.assign({contextTweetId:p,hasModeratedReplies:m,socialContext:f,promotedContent:h,tombstoneInfo:c,withHideReply:a,withTweetMedia:l},a?{onTweetDismiss:function(){return r({entry:e,feedbackKeys:[g.d]})}}:{})},dismissable:!0,divider:function(e){return{top:!1,bottom:!1}}}),t)},r[u.a.Tombstone]={handlers:(n={},n.FocalTweetInlineTombstone=Object(f.a)({createAdditionalProps:function(e){var t=e.referringContext||{};return{contextTweetId:t.contextTweetId,isFocalTweet:!0,socialContext:t.socialContext,withHideReply:a}},shouldDisplayBorder:Object(s.a)(!0)}),n[v.a.Inline]=Object(f.a)({createAdditionalProps:function(e,t){var n=t.applyFeedbackAction;return{onTweetDismiss:a?function(){return n({entry:e,feedbackKeys:[g.d]})}:void 0,withHideReply:a}},shouldDisplayBorder:function(e){return!e||!e.conversationPosition||!!e.conversationPosition.isStart&&!!e.conversationPosition.isEnd}}),n)},r[u.a.Label]=h.a,r[u.a.TweetComposer]=o.d(o.f({component:T.a,bindActions:Object(s.a)({scribe:w.c}),selectData:function(e){e.entry,e.module;return{loggedInUser:function(e){return I.e.selectLoggedInUser(e)}}},createProps:function(e){var t=e.data.loggedInUser,n=void 0===t?{}:t,r=e.entry,o=e.actions.scribe,a=e.scribeNamespace,i=Object(p.a)(r.content.url.url);return{avatarUrl:n.profile_image_url_https,onClick:function(){return o(Object.assign({},a,{element:"add_to_thread",action:"click"}))},onImpression:function(){return o(Object.assign({},a,{element:"add_to_thread",action:"impression"}))},to:i?Object.assign({},i,{state:Object.assign({},i.state||{},{isSelfThreadReply:!0})}):void 0,userName:n.screen_name,withButton:!0,withConversationLine:r.withConversationLine}},shouldDisplayBorder:Object(s.a)(!1),divider:{top:!1,bottom:!0}})),r))};var E=function(e){var t=e.focalTweetId,n=e.contextTweetId,r=e.contextualClientEventInfo,o=e.socialContext,a=e.promotedContent,i=e.hideAncestorTweets,c=function(e){return e.type===u.a.Tweet&&e.content.id===t||e.type===u.a.Tombstone&&!!e.content&&!!e.content.tweet&&e.content.tweet.id===t};return function(e){var t=Object(d.a)(e,c),s=!1;return e.map((function(e,c){var l=c>t;if(e.type!==u.a.Tweet&&e.type!==u.a.Tombstone||l)return e;var d=!s;if(s=!0,c<t){if(i)return null;if(e.type===u.a.Tweet)return j(e,d);if(e.type===u.a.Tombstone)return A(e,d)}else{if(e.type===u.a.Tombstone){var p={isStart:d,isEnd:!0};return e.content.displayType===v.a.Inline?S({contextTweetId:n,entry:e,socialContext:o,conversationPosition:p}):P({entry:e,conversationPosition:p})}if(e.type===u.a.Tweet)return O({originalEntry:e,contextTweetId:n,contextualClientEventInfo:r,socialContext:o,promotedContent:a,conversationPosition:{isStart:d,isEnd:!0,position:"focal",showReplyContext:!1}})}})).filter(Boolean)}},x=function(e){var t=e.focalTweetId,n=e.contextTweetId,r=e.contextualClientEventInfo,o=e.socialContext,a=e.selectedTweet,i=e.promotedContent,c=e.isTimelineTerminatedAtTop,s=e.focalInReplyTo,l=e.hideMedia;return function(e){return e.map((function(e,d){return e.type===u.a.Tombstone?e.content.displayType===v.a.Inline?S({contextTweetId:n,entry:e,socialContext:o}):P({entry:e}):e.type===u.a.TimelineModule?R({entry:e,referringContext:{focalTweetId:t,promotedContent:i,contextTweetId:n,contextualClientEventInfo:r,socialContext:o,hideMedia:l},selectedTweet:a,isRootEntryPresent:c||!s}):e})).filter(Boolean)}},R=function(e){var t=e.entry,n=e.referringContext,r=e.selectedTweet,o=e.isRootEntryPresent,a=t.content||{};return Object.assign({},t,{referringContext:n,content:Object.assign({},a,{selectedTweet:r,showSmallAvatars:!0,isRootEntryPresent:o})})},O=function(e){var t=e.originalEntry,n=e.contextTweetId,r=e.contextualClientEventInfo,o=e.socialContext,i=e.promotedContent,c=e.conversationPosition;return a.g(Object.assign({},t,{conversationPosition:c,referringContext:{contextTweetId:n,contextualClientEventInfo:r,socialContext:o,promotedContent:i}}),{displayType:y.a.Focal})},S=function(e){var t=e.entry,n=e.contextTweetId,r=e.conversationPosition,o=e.socialContext;return a.g(Object.assign({},t,{conversationPosition:r,referringContext:{contextTweetId:n,socialContext:o}}),{displayType:"FocalTweetInlineTombstone"})},P=function(e){var t=e.entry,n=e.conversationPosition;return Object.assign({},t,{conversationPosition:n})},j=function(e,t){return Object.assign({},e,{conversationPosition:{isStart:t,isEnd:!1,position:"ancestor",showReplyContext:!1}})},A=function(e,t){return Object.assign({},e,{conversationPosition:{isStart:t,isEnd:!1,position:"ancestor"}})}},z4TA:function(e,t,n){"use strict";n.r(t);var r=n("pVnL"),o=n.n(r),a=(n("yIC7"),n("PN9k"),n("rmZQ"),n("LnO1"),n("3eMz"),n("dtAy"),n("PJYZ")),i=n.n(a),c=n("VbXa"),s=n.n(c),l=n("lSNA"),u=n.n(l),d=n("aeN7"),p=n("ERkP"),f=n("HThR"),h=n("pxuL"),m=n("es0u"),w=(n("NlgC"),n("T3IU"),n("DZyD"),n("zh9S")),T=n("1YZw"),v=n("oEGd"),g=n("0KEI"),b=n("hqKg"),y=n("8Lfv"),_=n("QK5w"),I=n("eR3e"),C=n("pNZL"),E=n("XOJV"),x=n("Mx3A"),R=n("P1r1"),O=function(e,t){return e.location&&e.location.state&&e.location.state[t]},S=function(e,t){var n=O(t,"focal");return n&&Object(I.n)(e).includes("conversation-graphql-"+n)?n:P(e,t)},P=function(e,t){var n=t.location,r=t.match;return r.params&&r.params.statusId?r.params.statusId:n.query&&n.query.tweet_id&&"string"==typeof n.query.tweet_id?n.query.tweet_id:""},j=Object(b.createSelector)(_.a,(function(e,t){return O(t,"contextTweetId")}),(function(e,t){return E.a.selectFetchStatus(e,S(e,t))}),(function(e,t){return"PUSH"===t.history.action}),(function(e,t){var n=t.location.query,r=Object(_.a)(e,t);return Object(x.c)({query:n,httpReferer:r?"":document.referrer||"",requestUrl:window.location.href}).referral_type===x.a.Web}),(function(e,t){var n=O(t,"referrer"),r=S(e,t);return!!n&&n.includes("/i/topics/tweet/"+r)}),(function(e,t){return O(t,"promotedContent")}),(function(e,t){return t.location.query&&"string"==typeof t.location.query.cxt?t.location.query.cxt:void 0}),(function(e,t){var n=S(e,t),r=E.a.selectHydrated(e,n);return r&&r.conversation_id_str?E.a.selectHydrated(e,r.conversation_id_str):null}),(function(e,t){return E.a.selectHydrated(e,S(e,t))}),(function(e,t){return t.location.pathname.indexOf("/intent/")>-1}),(function(e,t){return t.match.params.screenName}),(function(e,t){return O(t,"socialContext")}),S,P,R.h,(function(e,t){return O(t,"contextualClientEventInfo")}),C.a,(function(e,t,n,r,o,a,i,c,s,l,u,d,p,f,h,m,w,T){return{contextTweetId:t,conversationTreeEnabled:m,initialFetchStatus:n,isForwardNavigation:r,isInitialScreen:!e,isReferralSource:o,isReferredFromExploreTopics:a,promotedContent:i,richLandingContextId:c,rootTweet:s,focalTweet:l,isIntentRoute:u,screenName:d,selectedTweetId:h,socialContext:p,statusId:f,contextualClientEventInfo:w,tweetDetailNav:T}})),A={addToast:T.b,createLocalApiErrorHandler:Object(g.b)("CONVERSATION_SCREEN"),googleAnalyticsPageView:w.a,scribePageImpression:w.d,clearTimelineCache:function(e,t){return Object(y.a)(e,t)},updateSettings:R.E},L=Object(v.g)(j,A),N=n("ymux"),F=n("rkhm"),M=n("aHKU"),k=n.n(M),U=n("8UdT"),H=n("dwig"),D=n("wrlS"),B=n("kGix"),V=n("JyI6"),W=n("3XMw"),q=n.n(W),J=n("zOCl"),G=n.n(J),K=q.a.ad62343c,X=q.a.cf67b3f1,Z=q.a.h6994d0e,z=function(e){var t=e.getLocationState,n=e.history;return p.createElement(V.a,{accessibilityLabel:K,getLocationState:t,history:n,icon:p.createElement(G.a,null),label:Z,scribeComponent:"floating_reply_button",shortLabel:X})},Q=n("iFPY"),Y=n("zb92"),$=Object(Y.a)({loader:function(){return Promise.all([n.e(2),n.e(3),n.e(194)]).then(n.bind(null,"uo3S"))},renderPlaceholder:function(e,t){return null}}),ee=n("mN6z"),te=n("yoO3"),ne=n("AUxQ"),re=n("I7xG"),oe=n("QIgh"),ae=n("VTxf"),ie=n("SrIh"),ce=n("fTQJ"),se=n("ZNT5"),le=function(e){var t=e.richLandingContextId,n=e.statusId,r=t?n+"-"+t:n,o={refsrc_tweet:n,rux_cxt:t};return Object(se.a)({timelineId:"rich-tweet-landing-"+r,getEndpoint:function(e){return e.URT.fetchRichTweetLandingTimeline},getEndpointParams:function(e){return Object.assign({},o,{},e)},context:"FETCH_RICH_TWEET_LANDING",perfKey:"rich-tweet-landing"})},ue=(n("aWzz"),n("wgnn")),de=function(e){switch(e){case ue.a.NOT_FOUND:return p.createElement(ae.a,null);default:return Object(ie.a)("Unhandled timeline unavailable reason: "+e),null}},pe=function(){return p.createElement(ae.a,null)},fe=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,u()(i()(t),"_getModule",Object(re.a)(i()(t),(function(e){return e.statusId}),(function(e){return e.richLandingContextId}),(function(e,t){return le({statusId:e,richLandingContextId:t})}))),t}return s()(t,e),t.prototype.render=function(){var e=this.props.title;return p.createElement(ce.a,{entryConfiguration:oe.b,module:this._getModule(),renderEmptyState:pe,renderUnavailable:de,title:e})},t}(p.Component),he=n("Rp9C"),me=n("7JQg"),we=n("VS6U"),Te=n("CK8+");n.d(t,"ConversationScreen",(function(){return Ie}));var ve=q.a.c6432564,ge=q.a.aacb5623,be=q.a.d998faa7,ye={page:"tweet"},_e={page:"tweet",section:"landing"},Ie=function(e){function t(t){var n;return n=e.call(this,t)||this,u()(i()(n),"_handleTreeSwitchChange",(function(e){var t=n.props,r=t.addToast;(0,t.updateSettings)({conversationTreeEnabled:e}),e?r({text:"Welcome to the new conversation tree!",autoDismissDelay:5e3,withClearButton:!0}):n.context.setBackgroundClickHandler(null)})),u()(i()(n),"_getFabState",(function(){var e=n.props,t=e.promotedContent;return{inReplyToStatusId:e.statusId,promotedContent:t}})),u()(i()(n),"_isBucketedInRichTweetLandingExperiment",(function(){var e=n.props,t=e.isReferralSource,r=e.isReferredFromExploreTopics;return!(e.richLandingContextId||!t||r)&&D.a.isTrue("responsive_web_rich_tweet_landing_enabled")})),u()(i()(n),"_getNavigationParams",Object(re.a)(i()(n),(function(e){return e.tweetDetailNav}),(function(e){return e.contextualClientEventInfo}),(function(e,t){var r,o;return n._navigationReferrerParamEnabled?{referrer:e,controllerData:e&&(null==t?void 0:null===(r=t.details)||void 0===r?void 0:null===(o=r.timelinesDetails)||void 0===o?void 0:o.controllerData)}:void 0}))),u()(i()(n),"_getApiErrorHandlerMap",Object(re.a)(i()(n),(function(e){return e.screenName}),(function(e){return Object(F.a)(e)}))),u()(i()(n),"_getModule",Object(re.a)(i()(n),(function(e){return e.statusId}),(function(e){return e.conversationTreeEnabled}),(function(e,t){return Object(N.a)({focalTweetId:e,conversationTreeEnabled:t})}))),u()(i()(n),"_handleEntriesUpdate",(function(e){var t=e.entries,r=e.fetchStatus,o=n.props.recordTTFL;if(r===B.a.FAILED&&(n._shouldRecordTTFL=!1),n._shouldRecordTTFL&&t.length){var a=t.some((function(e){return e.type===U.a.Tweet}));n._shouldRecordTTFL=!1,a&&o&&o("permalink")}})),u()(i()(n),"_shouldRedirectToCanonical",(function(){var e=n.props,t=e.focalTweet,r=e.screenName;return e.selectedTweetId===e.statusId&&(r&&t&&r.toLowerCase()!==t.user.screen_name.toLowerCase())})),u()(i()(n),"_redirectToCanonical",(function(){var e=n.props,t=e.history,r=e.location;t.replace({pathname:n._getCanonicalPath(),query:r.query,state:r.state})})),u()(i()(n),"_getCanonicalPath",(function(){var e=n.props.focalTweet;return e?"/"+e.user.screen_name+"/status/"+e.id_str:"/"})),u()(i()(n),"_getPathForTweetId",(function(e,t){return"/"+(t||"i")+"/status/"+e})),u()(i()(n),"_getScribeNamespace",(function(){return n._shouldRenderRichTweetLandingTimeline()?_e:ye})),u()(i()(n),"_setSelectedTweetId",(function(e,t){var r=n.props,o=r.history,a=r.location,i=r.statusId;o.replace(n._getPathForTweetId(e,t),Object.assign({},a.state,{focal:i,lockScroll:!0}))})),u()(i()(n),"_setBackgroundClickHander",(function(){var e,t=n.props,r=t.focalTweet,o=t.rootTweet,a=t.selectedTweetId,i=null===(e=o||r)||void 0===e?void 0:e.conversation_id_str,c=i&&i!==a?function(){n._setSelectedTweetId(i)}:null;n.context.setBackgroundClickHandler(c)})),n._shouldRecordTTFL=t.isInitialScreen,n._navigationReferrerParamEnabled=D.a.isTrue("navigation_stack_referrer_param_enabled"),n._isInlineReplyEnabled=D.a.isTrue("responsive_web_inline_reply_enabled"),n._isInlineReplyWithFabEnabled=D.a.isTrue("responsive_web_inline_reply_with_fab_enabled"),n}s()(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(e){return!Object(ee.a)(e,this.props)},n.componentDidMount=function(){var e=this.props,t=e.history,n=e.location,r=e.isForwardNavigation;!this._shouldRenderRichTweetLandingTimeline()||n.state&&n.state.isRichTweetLanding||t.replace(n,Object.assign({},n.state,{isRichTweetLanding:!0})),r&&this._clearTimelineCache()},n.componentWillUnmount=function(){this.context.setBackgroundClickHandler(null)},n.componentDidUpdate=function(e){this._shouldRedirectToCanonical()?this._redirectToCanonical():(this.props.statusId!==e.statusId&&this.props.isForwardNavigation&&this._clearTimelineCache(),e.selectedTweetId===this.props.selectedTweetId&&e.rootTweet===this.props.rootTweet||!this.props.conversationTreeEnabled||this._setBackgroundClickHander())},n.render=function(){var e=this.props,t=e.conversationTreeEnabled,n=e.focalTweet,r=e.history,a=e.isIntentRoute,i=e.location,c=e.promotedContent,s=e.statusId,l=n?be({tweetText:n.text,fullName:n.user.name}):void 0,u={items:[he.a.forTweet(s,c)],tweet_id:s},d={canonical:"https://twitter.com"+(this._getCanonicalPath()||"")},h=D.a.isTrue("responsive_web_conversation_tree_toggle")&&!this._shouldRenderRichTweetLandingTimeline()?p.createElement(Te.a,{accessibilityLabel:"Conversation Tree toggle",onValueChange:this._handleTreeSwitchChange,value:t}):void 0,m=this._shouldRenderRichTweetLandingTimeline()||!t;return p.createElement(me.c,{data:u,namespace:this._getScribeNamespace()},p.createElement(te.a,null,p.createElement(k.a,o()({extend:!0},d)),p.createElement(we.a,{backLocation:"/",documentTitle:l,history:r,location:i,primaryContent:this._renderTimeline(),rightControl:h,sidebarContent:this._renderSidebarContent(),title:n&&n.self_thread?ge:ve,withAppBarBorder:m,withPrimaryHeader:!1,withSideBorders:m}),a?p.createElement(Q.a,{history:r,location:i,tweet:n}):p.createElement(f.a,null)))},n._renderSidebarContent=function(){var e=this.props.focalTweet;return e&&e.user.id_str?p.createElement(m.a,{withWhoToFollow:!1},p.createElement($,{focalTweetId:e.id_str})):null},n._renderTimeline=function(){var e=this.props,t=e.conversationTreeEnabled,n=e.focalTweet,r=e.history,o=e.location,a=e.richLandingContextId,i=e.rootTweet,c=e.selectedTweetId,s=e.statusId,l=e.socialContext,u=e.promotedContent,d=e.contextTweetId,f={selectedTweetId:c,setSelectedTweetId:this._setSelectedTweetId},h=this._isInlineReplyEnabled&&!this._isInlineReplyWithFabEnabled||t?null:p.createElement(z,{getLocationState:this._getFabState,history:r});return p.createElement(H.a,{fab:h},this._shouldRenderRichTweetLandingTimeline()?p.createElement(fe,{richLandingContextId:a,statusId:s,title:ve}):p.createElement(ne.a,{apiErrorHandlerMap:this._getApiErrorHandlerMap(),contextTweetId:d,conversationTreeEnabled:t,fetchOptions:this._getNavigationParams(),focalTweet:n,focalTweetId:s,location:o,module:this._getModule(),onEntriesUpdate:this._handleEntriesUpdate,promotedContent:u,rootTweet:i||void 0,selectedTweet:f,socialContext:l}))},n._shouldRenderRichTweetLandingTimeline=function(){var e=this.props,t=e.isReferredFromExploreTopics;return!!e.richLandingContextId||t||this._isBucketedInRichTweetLandingExperiment()},n._clearTimelineCache=function(e,t){void 0===e&&(e=this._getModule()),void 0===t&&(t=this._getNavigationParams());var n=this.props,r=n.clearTimelineCache,o=n.createLocalApiErrorHandler;r(e,t).catch(o(this._getApiErrorHandlerMap()))},t}(p.Component);u()(Ie,"contextType",h.a),u()(Ie,"defaultProps",{recordTTFL:d.c});t.default=L(Ie)}}]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/bundle.Conversation.88c3c764.js.map