(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[5],{353:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return a})),r.d(e,"d",(function(){return l})),r.d(e,"f",(function(){return h})),r.d(e,"e",(function(){return d})),r.d(e,"c",(function(){return f}));var n=r(24),s=r.n(n);function i(t,e,r,n,s,i,u){try{var o=t[i](u),c=o.value}catch(a){return void r(a)}o.done?e(c):Promise.resolve(c).then(n,s)}var u="https://swapi.dev/api/",o=function(){var t,e=(t=s.a.mark((function t(e){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,s){var u=t.apply(e,r);function o(t){i(u,n,s,o,c,"next",t)}function c(t){i(u,n,s,o,c,"throw",t)}o(void 0)}))});return function(t){return e.apply(this,arguments)}}(),c=function(){return o(u+"films/")},a=function(){return o(u+"people/")},l=function(){return o(u+"species/")},h=function(){return o(u+"vehicles/")},d=function(){return o(u+"starships/")},f=function(){return o(u+"planets/")}},355:function(t,e,r){"use strict";r.d(e,"a",(function(){return R}));var n=r(4),s=r(12),i=r(3),u=r(13),o=r(28),c=r(23),a=r(32),l=function(t){function e(e,r){var n;return(n=t.call(this)||this).client=e,n.options=r,n.trackedProps=[],n.previousSelectError=null,n.bindMethods(),n.setOptions(r),n}Object(s.a)(e,t);var r=e.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),h(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnReconnect||!1!==e.refetchOnReconnect&&f(t,e));var t,e},r.shouldFetchOnWindowFocus=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnWindowFocus||!1!==e.refetchOnWindowFocus&&f(t,e));var t,e},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(t,e){var r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var s=this.hasListeners();s&&d(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(e),!s||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout(),!s||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.refetchInterval===r.refetchInterval||this.updateRefetchInterval()},r.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,e);return this.createResult(r,e)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(t){var e=this,r={};return Object.keys(t).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){var r=n;return e.trackedProps.includes(r)||e.trackedProps.push(r),t[r]}})})),r},r.getNextResult=function(t){var e=this;return new Promise((function(r,n){var s=e.subscribe((function(e){e.isFetching||(s(),e.isError&&(null==t?void 0:t.throwOnError)?n(e.error):r(e))}))}))},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(t){return this.fetch(t)},r.fetchOptimistic=function(t){var e=this,r=this.client.defaultQueryObserverOptions(t),n=this.client.getQueryCache().build(this.client,r);return n.fetch().then((function(){return e.createResult(n,r)}))},r.fetch=function(t){var e=this;return this.executeFetch(t).then((function(){return e.updateResult(),e.currentResult}))},r.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return(null==t?void 0:t.throwOnError)||(e=e.catch(i.h)),e},r.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!i.d&&!this.currentResult.isStale&&Object(i.e)(this.options.staleTime)){var e=Object(i.p)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){t.currentResult.isStale||t.updateResult()}),e)}},r.updateRefetchInterval=function(){var t=this;this.clearRefetchInterval(),!i.d&&!1!==this.options.enabled&&Object(i.e)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||o.a.isFocused())&&t.executeFetch()}),this.options.refetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},r.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},r.createResult=function(t,e){var r,n,s=this.currentQuery,u=this.options,o=this.currentResult,c=this.currentResultState,l=this.currentResultOptions,p=t!==s,v=p?t.state:this.currentQueryInitialState,b=p?this.currentResult:this.previousQueryResult,y=t.state,O=y.dataUpdatedAt,j=y.error,R=y.errorUpdatedAt,m=y.isFetching,S=y.status,Q=!1,x=!1;if(e.optimisticResults){var g=this.hasListeners(),E=!g&&h(t,e),w=g&&d(t,s,e,u);(E||w)&&(m=!0,O||(S="loading"))}if(e.keepPreviousData&&!y.dataUpdateCount&&(null==b?void 0:b.isSuccess)&&"error"!==S)r=b.data,O=b.dataUpdatedAt,S=b.status,Q=!0;else if(e.select&&"undefined"!==typeof y.data)if(o&&y.data===(null==c?void 0:c.data)&&e.select===(null==l?void 0:l.select)&&!this.previousSelectError)r=o.data;else try{r=e.select(y.data),!1!==e.structuralSharing&&(r=Object(i.l)(null==o?void 0:o.data,r)),this.previousSelectError=null}catch(C){Object(a.a)().error(C),j=C,this.previousSelectError=C,R=Date.now(),S="error"}else r=y.data;"undefined"!==typeof e.placeholderData&&"undefined"===typeof r&&"loading"===S&&("undefined"!==typeof(n=(null==o?void 0:o.isPlaceholderData)&&e.placeholderData===(null==l?void 0:l.placeholderData)?o.data:"function"===typeof e.placeholderData?e.placeholderData():e.placeholderData)&&(S="success",r=n,x=!0));return{status:S,isLoading:"loading"===S,isSuccess:"success"===S,isError:"error"===S,isIdle:"idle"===S,data:r,dataUpdatedAt:O,error:j,errorUpdatedAt:R,failureCount:y.fetchFailureCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>v.dataUpdateCount||y.errorUpdateCount>v.errorUpdateCount,isFetching:m,isLoadingError:"error"===S&&0===y.dataUpdatedAt,isPlaceholderData:x,isPreviousData:Q,isRefetchError:"error"===S&&0!==y.dataUpdatedAt,isStale:f(t,e),refetch:this.refetch,remove:this.remove}},r.shouldNotifyListeners=function(t,e){if(!e)return!0;if(t===e)return!1;var r=this.options,n=r.notifyOnChangeProps,s=r.notifyOnChangePropsExclusions;if(!n&&!s)return!0;if("tracked"===n&&!this.trackedProps.length)return!0;var i="tracked"===n?this.trackedProps:n;return Object.keys(t).some((function(r){var n=r,u=t[n]!==e[n],o=null==i?void 0:i.some((function(t){return t===r})),c=null==s?void 0:s.some((function(t){return t===r}));return u&&!c&&(!i||o)}))},r.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(i.n)(this.currentResult,e)){var r={cache:!0};!1!==(null==t?void 0:t.listeners)&&this.shouldNotifyListeners(this.currentResult,e)&&(r.listeners=!0),this.notify(Object(n.a)({},r,t))}},r.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}},r.onQueryUpdate=function(t){var e={};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},r.notify=function(t){var e=this;u.a.batch((function(){t.onSuccess?(null==e.options.onSuccess||e.options.onSuccess(e.currentResult.data),null==e.options.onSettled||e.options.onSettled(e.currentResult.data,null)):t.onError&&(null==e.options.onError||e.options.onError(e.currentResult.error),null==e.options.onSettled||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)})),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})}))},e}(c.a);function h(t,e){return function(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)}(t,e)||function(t,e){return!1!==e.enabled&&t.state.dataUpdatedAt>0&&("always"===e.refetchOnMount||!1!==e.refetchOnMount&&f(t,e))}(t,e)}function d(t,e,r,n){return!1!==r.enabled&&(t!==e||!1===n.enabled)&&f(t,r)}function f(t,e){return t.isStaleByTime(e.staleTime)}var p=r(2),v=r.n(p);function b(){var t=!1;return{clearReset:function(){t=!1},reset:function(){t=!0},isReset:function(){return t}}}var y=v.a.createContext(b()),O=r(351);function j(t,e){var r=v.a.useRef(!1),n=v.a.useState(0)[1],s=Object(O.b)(),i=v.a.useContext(y),o=s.defaultQueryObserverOptions(t);o.optimisticResults=!0,o.onError&&(o.onError=u.a.batchCalls(o.onError)),o.onSuccess&&(o.onSuccess=u.a.batchCalls(o.onSuccess)),o.onSettled&&(o.onSettled=u.a.batchCalls(o.onSettled)),o.suspense&&"number"!==typeof o.staleTime&&(o.staleTime=1e3),(o.suspense||o.useErrorBoundary)&&(i.isReset()||(o.retryOnMount=!1));var c=v.a.useRef();c.current||(c.current=new e(s,o));var a=c.current.getOptimisticResult(o);if(v.a.useEffect((function(){r.current=!0,i.clearReset();var t=c.current.subscribe(u.a.batchCalls((function(){r.current&&n((function(t){return t+1}))})));return c.current.updateResult(),function(){r.current=!1,t()}}),[i]),v.a.useEffect((function(){c.current.setOptions(o,{listeners:!1})}),[o]),o.suspense&&a.isLoading)throw c.current.fetchOptimistic(o).then((function(t){var e=t.data;null==o.onSuccess||o.onSuccess(e),null==o.onSettled||o.onSettled(e,null)})).catch((function(t){i.clearReset(),null==o.onError||o.onError(t),null==o.onSettled||o.onSettled(void 0,t)}));if((o.suspense||o.useErrorBoundary)&&a.isError)throw a.error;return"tracked"===o.notifyOnChangeProps&&(a=c.current.trackResult(a)),a}function R(t,e,r){return j(Object(i.j)(t,e,r),l)}},361:function(t,e,r){"use strict";r.r(e);var n=r(355),s=r(353),i=r(57),u=r(6);e.default=function(t){var e,r=Object(n.a)("people",s.b),o=r.status,c=r.error,a=r.data;return"loading"===o?Object(u.jsx)(i.a,{}):"error"===o?Object(u.jsx)("div",{children:c.message}):Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("section",{children:[Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("span",{onClick:function(){t.history.goBack()},children:Object(u.jsx)("i",{className:"fas fa-long-arrow-alt-left"})}),Object(u.jsx)("h1",{children:"People"})]}),Object(u.jsx)("div",{className:"table_container",children:Object(u.jsxs)("table",{className:"table_wrap",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"S/N"}),Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Gender"}),Object(u.jsx)("th",{children:"Birth Year"})]})}),Object(u.jsx)("tbody",{children:(e=a&&a.results,e&&e.map((function(t,e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e+1}),Object(u.jsx)("td",{children:t.name}),Object(u.jsx)("td",{children:t.gender}),Object(u.jsx)("td",{children:t.birth_year})]},e)})))})]})})]})})}}}]);
//# sourceMappingURL=5.60741ae5.chunk.js.map