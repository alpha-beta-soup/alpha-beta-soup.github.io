(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{135:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),l=n(138),c=n(151),s=n.n(c),u=(n(140),n(141),n(147).a.hr.withConfig({displayName:"HorizontalRule__Hr",componentId:"f0mpbt-0"})(['overflow:visible;padding:0;margin-top:15px;margin-bottom:15px;opacity:0.4;border:none;border-top:medium double #333;color:#333;text-align:center;background-image:linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,0.75),rgba(0,0,0,0));&:after{content:"§";display:inline-block;position:relative;top:-1em;font-size:1em;padding:0 0.25em;background:white;}'])),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(u,null)},t}(i.a.Component),p=n(143),d=n.n(p),h=n(137),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(h.a)(1.5)}},i.a.createElement("img",{src:d.a,alt:"Richard Law",style:{marginRight:Object(h.a)(.5),marginBottom:0,marginTop:Object(h.a)(1),height:Object(h.a)(2),borderRadius:"50%"}}),i.a.createElement("div",null,i.a.createElement("p",null,"Welcome to the blog and personal website of ",i.a.createElement("strong",null,"Richard Law"),", a geographer/programmer who eats, sleeps, raves, repeats in the Manawatū, New Zealand."),i.a.createElement(m,null),i.a.createElement("p",null,"You should absolutely not follow me on ",i.a.createElement("a",{href:"https://twitter.com/alphabeta"},"Twitter"),", because social media is a enormous waste of your potential, and you pay for it by indirectly selling your soul to advertisers."),i.a.createElement(m,null),i.a.createElement("p",null,"I contribute to ",i.a.createElement("a",{href:"https://gis.stackexchange.com/users/25417/richard-law"},"gis.stackexchange.com"),".",i.a.createElement("br",null),"I'm active on ",i.a.createElement("a",{href:"https://thespatialcommunity.org/"},"The Spatial Community"),", a Slack group for geospatial enthusisasts.",i.a.createElement("br",null),"I'm on ",i.a.createElement("a",{href:"https://github.com/alpha-beta-soup"},"Github"),".",i.a.createElement("br",null),"I only want to my make my grandparents proud.")))},t}(i.a.Component),f=n(145);n.d(t,"pageQuery",function(){return b});var y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=e.site.siteMetadata.description,a=e.allMarkdownRemark.edges[0].node,r=a.frontmatter.title||a.fields.slug;return i.a.createElement(f.a,{location:this.props.location,title:t,style:{fontSize:"5vw"}},i.a.createElement(s.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:t}),i.a.createElement(g,null),i.a.createElement("div",{key:a.fields.slug},i.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)"}},i.a.createElement("h4",{style:{gridColumn:"1/2"}},"Most recent post"),i.a.createElement("h4",{style:{gridColumn:"3/last",textAlign:"right"}},i.a.createElement("a",{href:"/blog"},"All posts"))),i.a.createElement("h3",{style:{marginBottom:Object(h.a)(.25)}},i.a.createElement(l.Link,{style:{boxShadow:"none"},to:a.frontmatter.path},r)),i.a.createElement("small",null,a.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.excerpt}})))},t}(i.a.Component),b=(t.default=y,"2377523546")},137:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var a=n(148),r=n.n(a),o=n(149),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var l=new r.a(i.a);var c=l.rhythm,s=l.scale},138:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(136),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(139),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(29);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},139:function(e,t,n){var a;e.exports=(a=n(142))&&a.default||a},142:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(46),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},143:function(e,t,n){e.exports=n.p+"static/profile-632e3775ffa3d7f89e6b7e1fba57ebed.jpg"},145:function(e,t,n){"use strict";n(28);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),l=n(138),c=n(137),s=(n(146),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e="/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0,textAlign:"center"})},i.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(c.a)(-1)}},i.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},e,r)},t}(i.a.Component));t.a=s},146:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-52b8303a9faa4ce42cf7.js.map