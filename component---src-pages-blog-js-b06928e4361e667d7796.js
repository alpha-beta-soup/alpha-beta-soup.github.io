(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2vz6":function(e,t,n){"use strict";var a=n("dI71"),r=n("N1om"),o=n.n(r),i=n("q1tI"),u=n.n(i),l=n("vOnD"),d=n("Wbzz"),c=(n("tb+u"),n("GevN"),l.a.div.withConfig({displayName:"Badge__BadgeDiv",componentId:"a6b1m5-0"})(["position:absolute;top:0;right:0px;width:12px;height:12px;font-size:5pt;text-align:center;vertical-align:middle;border-radius:50%;background-color:#3d93f6;color:white;pointer-events:none;"])),s=l.a.div.withConfig({displayName:"Badge__ValueDiv",componentId:"a6b1m5-1"})(["position:relative;top:50%;transform:translateY(-50%);"]),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.value;return u.a.createElement(c,null,u.a.createElement(s,null,e))},t}(u.a.Component),p=l.a.div.withConfig({displayName:"Tag__TagContainer",componentId:"sc-1blupnu-0"})(["display:inline-block;padding-left:1px;padding-right:1px;font-size:0.8em;a{color:inherit;}text-align:center;"]),m=l.a.div.withConfig({displayName:"Tag__TagButton",componentId:"sc-1blupnu-1"})(["border:0;border-radius:5px;padding:0;background-color:#e8e8e7;&:hover{color:#fff !important;background-color:#3d93f6;}position:relative;width:100%;font-weight:bolder;"]),g=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return u.a.createElement(p,null,u.a.createElement(m,{className:"tag-button"},u.a.createElement(d.Link,{style:{padding:"0.1vw 0.7vw",display:"inline-block",width:"100%"},to:"/tags/"+o()(this.props.tag)},this.props.tag),void 0!==this.props.value&&u.a.createElement(f,{value:this.props.value})))},t}(u.a.Component);t.a=g},"3cYt":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"6nK8":function(e,t,n){var a=n("dVn5"),r=n("fo6e"),o=n("dt0z"),i=n("9NmV");e.exports=function(e,t,n){return e=o(e),void 0===(t=n?void 0:t)?r(e)?i(e):a(e):e.match(t)||[]}},"7oih":function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),o=n.n(r),i=n("Wbzz"),u=n("p3AD"),l=(n("YT/5"),function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e="/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(u.b)(1.5),{marginBottom:Object(u.a)(1.5),marginTop:0,textAlign:"center"})},o.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(u.a)(-1)}},o.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(24),padding:Object(u.a)(1.5)+" "+Object(u.a)(3/4)}},e,r)},t}(o.a.Component));t.a=l},"9NmV":function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+n+"]",r="\\d+",o="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",u="[^\\ud800-\\udfff"+n+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",c="[A-Z\\xc0-\\xd6\\xd8-\\xde]",s="(?:"+i+"|"+u+")",f="(?:"+c+"|"+u+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,d].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),g="(?:"+[o,l,d].join("|")+")"+m,x=RegExp([c+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,c,"$"].join("|")+")",f+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,c+s,"$"].join("|")+")",c+"?"+s+"+(?:['’](?:d|ll|m|re|s|t|ve))?",c+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,g].join("|"),"g");e.exports=function(e){return e.match(x)||[]}},N1om:function(e,t,n){var a=n("sgoq")((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=a},SbOt:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),o=n.n(r),i=(n("tb+u"),n("GevN"),n("YNwP")),u=n.n(i),l=n("p3AD"),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e;return o.a.createElement("div",{style:{display:"flex",marginTop:Object(l.a)(2),marginBottom:Object(l.a)(2.5)}},o.a.createElement("img",{src:u.a,alt:"Richard Law",style:(e={marginRight:Object(l.a)(.5),marginBottom:0,marginTop:Object(l.a)(.5)},e.marginBottom=Object(l.a)(1),e.height=Object(l.a)(2),e.borderRadius="50%",e)}),o.a.createElement("div",null,"Welcome to the blog and personal website of ",o.a.createElement("strong",null,"Richard Law"),", a geographer/programmer who",o.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",fontFamily:"monospace",lineHeight:"0.8em",textAlign:"center"}},o.a.createElement("div",{style:{gridColumnStart:1,gridColumnEnd:2,gridRow:1}},"eats"),o.a.createElement("div",{style:{gridColumnStart:2,gridColumnEnd:3,gridRow:2}},"sleeps"),o.a.createElement("div",{style:{gridColumnStart:3,gridColumnEnd:4,gridRow:1}},"raves"),o.a.createElement("div",{style:{gridColumnStart:4,gridColumnEnd:5,gridRow:2}},"repeats")),"in the Manawatū, New Zealand."))},t}(o.a.Component);t.a=d},TKrE:function(e,t,n){var a=n("qRkn"),r=n("dt0z"),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(o,a).replace(i,"")}},"YT/5":function(e,t,n){},dVn5:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},fo6e:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},qRkn:function(e,t,n){var a=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=a},sgoq:function(e,t,n){var a=n("asDA"),r=n("TKrE"),o=n("6nK8"),i=RegExp("['’]","g");e.exports=function(e){return function(t){return a(o(r(t).replace(i,"")),e,"")}}},vx99:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),r=n("q1tI"),o=n.n(r),i=n("Wbzz"),u=n("TJpk"),l=n.n(u),d=n("SbOt"),c=n("7oih"),s=n("p3AD"),f=n("2vz6"),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=e.site.siteMetadata.description,a=e.allMarkdownRemark.edges;return o.a.createElement(c.a,{location:this.props.location,title:t,style:{fontSize:"5vw"}},o.a.createElement(l.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:t}),o.a.createElement(d.a,null),a.map((function(e){var t=e.node.frontmatter.title||e.node.fields.slug,n=e.node.frontmatter.path||e.node.fields.slug,a=e.node.frontmatter.tags||[],r=a.length?o.a.createElement("div",null,o.a.createElement("div",{style:{fontSize:"x-small"}},o.a.createElement("strong",null,"See other posts tagged with")),a.map((function(e){return o.a.createElement(f.a,{key:e,tag:e})}))):null;return o.a.createElement("div",{key:e.node.fields.slug},o.a.createElement("div",null,o.a.createElement("h3",{style:{marginBottom:Object(s.a)(1/4)}},o.a.createElement(i.Link,{style:{boxShadow:"none"},to:n},t)),o.a.createElement("small",null,e.node.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.node.excerpt}})),r)})))},t}(o.a.Component);t.default=p}}]);
//# sourceMappingURL=component---src-pages-blog-js-b06928e4361e667d7796.js.map