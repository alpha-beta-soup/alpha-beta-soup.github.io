(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{135:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return p});n(192);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),u=n(153),c=n.n(u),l=(n(140),n(194),n(139)),f=n(152),d=n(146),s=function(t){var e=t.data,n=e.allMarkdownRemark.group,r=e.site.siteMetadata.title;return a.a.createElement("div",null,a.a.createElement(c.a,{title:r+" | Tags"}),a.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},a.a.createElement(d.a,null),a.a.createElement("h1",null,"Tags"),a.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gridGap:10}},n.sort(function(t,e){return t.totalCount<e.totalCount}).map(function(t){return a.a.createElement(f.a,{tag:t.fieldValue,value:t.totalCount})}))))};s.propTypes={data:i.a.shape({allMarkdownRemark:i.a.shape({group:i.a.arrayOf(i.a.shape({fieldValue:i.a.string.isRequired,totalCount:i.a.number.isRequired}).isRequired)}),site:i.a.shape({siteMetadata:i.a.shape({title:i.a.string.isRequired})})})},e.default=s;var p="3353917046"},139:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return l});var r=n(150),a=n.n(r),o=n(151),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var u=new a.a(i.a);var c=u.rhythm,l=u.scale},140:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return g}),n.d(e,"StaticQueryContext",function(){return s}),n.d(e,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),u=n(138),c=n.n(u);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var l=n(141),f=n.n(l);n.d(e,"PageRenderer",function(){return f.a});var d=n(29);n.d(e,"parsePath",function(){return d.a});var s=a.a.createContext({}),p=function(t){return a.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},141:function(t,e,n){var r;t.exports=(r=n(144))&&r.default||r},144:function(t,e,n){"use strict";n.r(e);n(28);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),u=n(46),c=n(2),l=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(u.a,Object.assign({location:e,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},145:function(t,e,n){t.exports=n.p+"static/profile-632e3775ffa3d7f89e6b7e1fba57ebed.jpg"},146:function(t,e,n){"use strict";var r=n(6),a=n.n(r),o=n(0),i=n.n(o),u=(n(142),n(143),n(145)),c=n.n(u),l=n(139),f=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t;return i.a.createElement("div",{style:{display:"flex",marginTop:Object(l.a)(2),marginBottom:Object(l.a)(2.5)}},i.a.createElement("img",{src:c.a,alt:"Richard Law",style:(t={marginRight:Object(l.a)(.5),marginBottom:0,marginTop:Object(l.a)(.5)},t.marginBottom=Object(l.a)(1),t.height=Object(l.a)(2),t.borderRadius="50%",t)}),i.a.createElement("div",null,"Welcome to the blog and personal website of ",i.a.createElement("strong",null,"Richard Law"),", a geographer/programmer who",i.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",fontFamily:"monospace",lineHeight:"0.8em",textAlign:"center"}},i.a.createElement("div",{style:{gridColumnStart:1,gridColumnEnd:2,gridRow:1}},"eats"),i.a.createElement("div",{style:{gridColumnStart:2,gridColumnEnd:3,gridRow:2}},"sleeps"),i.a.createElement("div",{style:{gridColumnStart:3,gridColumnEnd:4,gridRow:1}},"raves"),i.a.createElement("div",{style:{gridColumnStart:4,gridColumnEnd:5,gridRow:2}},"repeats")),"in the Manawatū, New Zealand."))},e}(i.a.Component);e.a=f},152:function(t,e,n){"use strict";var r=n(6),a=n.n(r),o=n(0),i=n.n(o),u=n(149),c=n(140),l=n(155),f=(n(142),n(143),u.a.div.withConfig({displayName:"Badge__BadgeDiv",componentId:"a6b1m5-0"})(["position:absolute;top:0;right:0px;width:12px;height:12px;font-size:5pt;text-align:center;vertical-align:middle;border-radius:50%;background-color:#3d93f6;color:white;pointer-events:none;"])),d=u.a.div.withConfig({displayName:"Badge__ValueDiv",componentId:"a6b1m5-1"})(["position:relative;top:50%;transform:translateY(-50%);"]),s=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props.value;return i.a.createElement(f,null,i.a.createElement(d,null,t))},e}(i.a.Component),p=u.a.div.withConfig({displayName:"Tag__TagContainer",componentId:"sc-1blupnu-0"})(["display:inline-block;padding-left:1px;padding-right:1px;font-size:0.8em;a{color:inherit;}text-align:center;"]),g=u.a.div.withConfig({displayName:"Tag__TagButton",componentId:"sc-1blupnu-1"})(["border:0;border-radius:5px;padding:0;background-color:#e8e8e7;&:hover{color:#fff !important;background-color:#3d93f6;}position:relative;width:100%;"]),m=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){return i.a.createElement(p,null,i.a.createElement(g,{className:"tag-button"},i.a.createElement(c.Link,{style:{padding:"0.1vw 0.7vw",display:"inline-block",width:"100%"},to:"/tags/"+Object(l.kebabCase)(this.props.tag)},this.props.tag),void 0!==this.props.value&&i.a.createElement(s,{value:this.props.value})))},e}(i.a.Component);e.a=m},156:function(t,e,n){var r=n(201).Symbol;t.exports=r},158:function(t,e,n){var r=n(200);t.exports=function(t){return null==t?"":r(t)}},192:function(t,e,n){"use strict";var r=n(22),a=n(23),o=n(30),i=n(21),u=[].sort,c=[1,2,3];r(r.P+r.F*(i(function(){c.sort(void 0)})||!i(function(){c.sort(null)})||!n(193)(u)),"Array",{sort:function(t){return void 0===t?u.call(o(this)):u.call(o(this),a(t))}})},193:function(t,e,n){"use strict";var r=n(21);t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},194:function(t,e,n){var r=n(195)(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()});t.exports=r},195:function(t,e,n){var r=n(196),a=n(197),o=n(210),i=RegExp("['’]","g");t.exports=function(t){return function(e){return r(o(a(e).replace(i,"")),t,"")}}},196:function(t,e){t.exports=function(t,e,n,r){var a=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++a]);++a<o;)n=e(n,t[a],a,t);return n}},197:function(t,e,n){var r=n(198),a=n(158),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=a(t))&&t.replace(o,r).replace(i,"")}},198:function(t,e,n){var r=n(199)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},199:function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},200:function(t,e,n){var r=n(156),a=n(203),o=n(204),i=n(205),u=1/0,c=r?r.prototype:void 0,l=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return a(e,t)+"";if(i(e))return l?l.call(e):"";var n=e+"";return"0"==n&&1/e==-u?"-0":n}},201:function(t,e,n){var r=n(202),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();t.exports=o},202:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(154))},203:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}},204:function(t,e){var n=Array.isArray;t.exports=n},205:function(t,e,n){var r=n(206),a=n(209),o="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||a(t)&&r(t)==o}},206:function(t,e,n){var r=n(156),a=n(207),o=n(208),i="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?u:i:c&&c in Object(t)?a(t):o(t)}},207:function(t,e,n){var r=n(156),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(t){}var a=i.call(t);return r&&(e?t[u]=n:delete t[u]),a}},208:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},209:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},210:function(t,e,n){var r=n(211),a=n(212),o=n(158),i=n(213);t.exports=function(t,e,n){return t=o(t),void 0===(e=n?void 0:e)?a(t)?i(t):r(t):t.match(e)||[]}},211:function(t,e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(n)||[]}},212:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},213:function(t,e){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",a="\\d+",o="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",u="[^\\ud800-\\udfff"+n+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",f="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+i+"|"+u+")",s="(?:"+f+"|"+u+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",g="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,l].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),m="(?:"+[o,c,l].join("|")+")"+g,v=RegExp([f+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,f,"$"].join("|")+")",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,f+d,"$"].join("|")+")",f+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",f+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,m].join("|"),"g");t.exports=function(t){return t.match(v)||[]}}}]);
//# sourceMappingURL=component---src-pages-tags-js-8f9030e0dec491b05a63.js.map