(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{132:function(e,n,i){"use strict";i.r(n),i.d(n,"pageQuery",function(){return m});var t=i(0),a=i.n(t),r=i(4),o=i.n(r),l=i(171),s=i.n(l),u=i(139),c=i(152),d=i(146),p=i(140),g=function(e){var n=e.pageContext,i=e.data,t=n.tag,r=i.allMarkdownRemark,o=r.edges,l=r.totalCount,g="I've got "+(l<10?s()(l):l)+" post"+(1===l?"":"s")+" tagged with";return a.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(24),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},a.a.createElement(d.a,null),a.a.createElement("h2",null,g," ",a.a.createElement(c.a,{tag:t})),a.a.createElement("ul",null,o.map(function(e){var n=e.node.frontmatter,i=n.path,t=n.title;return a.a.createElement("li",{key:i},a.a.createElement(p.Link,{to:i},t))})),a.a.createElement(p.Link,{to:"/tags"},"All tags"))};g.propTypes={pathContext:o.a.shape({tag:o.a.string.isRequired}),data:o.a.shape({allMarkdownRemark:o.a.shape({totalCount:o.a.number.isRequired,edges:o.a.arrayOf(o.a.shape({node:o.a.shape({frontmatter:o.a.shape({path:o.a.string.isRequired,title:o.a.string.isRequired})})}).isRequired)})})},n.default=g;var m="1926486196"},139:function(e,n,i){"use strict";i.d(n,"a",function(){return s}),i.d(n,"b",function(){return u});var t=i(150),a=i.n(t),r=i(151),o=i.n(r);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var l=new a.a(o.a);var s=l.rhythm,u=l.scale},140:function(e,n,i){"use strict";i.r(n),i.d(n,"graphql",function(){return m}),i.d(n,"StaticQueryContext",function(){return p}),i.d(n,"StaticQuery",function(){return g});var t=i(0),a=i.n(t),r=i(4),o=i.n(r),l=i(138),s=i.n(l);i.d(n,"Link",function(){return s.a}),i.d(n,"withPrefix",function(){return l.withPrefix}),i.d(n,"navigate",function(){return l.navigate}),i.d(n,"push",function(){return l.push}),i.d(n,"replace",function(){return l.replace}),i.d(n,"navigateTo",function(){return l.navigateTo});var u=i(141),c=i.n(u);i.d(n,"PageRenderer",function(){return c.a});var d=i(29);i.d(n,"parsePath",function(){return d.a});var p=a.a.createContext({}),g=function(e){return a.a.createElement(p.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},141:function(e,n,i){var t;e.exports=(t=i(144))&&t.default||t},144:function(e,n,i){"use strict";i.r(n);i(28);var t=i(0),a=i.n(t),r=i(4),o=i.n(r),l=i(46),s=i(2),u=function(e){var n=e.location,i=s.default.getResourcesForPathnameSync(n.pathname);return a.a.createElement(l.a,Object.assign({location:n,pageResources:i},i.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=u},145:function(e,n,i){e.exports=i.p+"static/profile-632e3775ffa3d7f89e6b7e1fba57ebed.jpg"},146:function(e,n,i){"use strict";var t=i(6),a=i.n(t),r=i(0),o=i.n(r),l=(i(142),i(143),i(145)),s=i.n(l),u=i(139),c=function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e;return o.a.createElement("div",{style:{display:"flex",marginTop:Object(u.a)(2),marginBottom:Object(u.a)(2.5)}},o.a.createElement("img",{src:s.a,alt:"Richard Law",style:(e={marginRight:Object(u.a)(.5),marginBottom:0,marginTop:Object(u.a)(.5)},e.marginBottom=Object(u.a)(1),e.height=Object(u.a)(2),e.borderRadius="50%",e)}),o.a.createElement("div",null,"Welcome to the blog and personal website of ",o.a.createElement("strong",null,"Richard Law"),", a geographer/programmer who",o.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",fontFamily:"monospace",lineHeight:"0.8em",textAlign:"center"}},o.a.createElement("div",{style:{gridColumnStart:1,gridColumnEnd:2,gridRow:1}},"eats"),o.a.createElement("div",{style:{gridColumnStart:2,gridColumnEnd:3,gridRow:2}},"sleeps"),o.a.createElement("div",{style:{gridColumnStart:3,gridColumnEnd:4,gridRow:1}},"raves"),o.a.createElement("div",{style:{gridColumnStart:4,gridColumnEnd:5,gridRow:2}},"repeats")),"in the Manawatū, New Zealand."))},n}(o.a.Component);n.a=c},152:function(e,n,i){"use strict";var t=i(6),a=i.n(t),r=i(0),o=i.n(r),l=i(149),s=i(140),u=i(155),c=(i(142),i(143),l.a.div.withConfig({displayName:"Badge__BadgeDiv",componentId:"a6b1m5-0"})(["position:absolute;top:0;right:0px;width:12px;height:12px;font-size:5pt;text-align:center;vertical-align:middle;border-radius:50%;background-color:#3d93f6;color:white;pointer-events:none;"])),d=l.a.div.withConfig({displayName:"Badge__ValueDiv",componentId:"a6b1m5-1"})(["position:relative;top:50%;transform:translateY(-50%);"]),p=function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e=this.props.value;return o.a.createElement(c,null,o.a.createElement(d,null,e))},n}(o.a.Component),g=l.a.div.withConfig({displayName:"Tag__TagContainer",componentId:"sc-1blupnu-0"})(["display:inline-block;padding-left:1px;padding-right:1px;font-size:0.8em;a{color:inherit;}text-align:center;"]),m=l.a.div.withConfig({displayName:"Tag__TagButton",componentId:"sc-1blupnu-1"})(["border:0;border-radius:5px;padding:0;background-color:#e8e8e7;&:hover{color:#fff !important;background-color:#3d93f6;}position:relative;width:100%;"]),h=function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){return o.a.createElement(g,null,o.a.createElement(m,{className:"tag-button"},o.a.createElement(s.Link,{style:{padding:"0.1vw 0.7vw",display:"inline-block",width:"100%"},to:"/tags/"+Object(u.kebabCase)(this.props.tag)},this.props.tag),void 0!==this.props.value&&o.a.createElement(p,{value:this.props.value})))},n}(o.a.Component);n.a=h},171:function(e,n,i){"use strict";n=e.exports=u;var t=i(172),a=["en","es","pt","fr","eo","it","vi","tr"],r={en:i(173),es:i(174),pt:i(175),ptPT:i(176),fr:i(177),eo:i(178),it:i(179),vi:i(180),tr:i(181),hu:i(182),enIndian:i(183)};n.i18n=r;for(var o=[100],l=1;l<=16;l++)o.push(Math.pow(10,3*l));var s=[100,1e3];for(l=1;l<=15;l++)s.push(Math.pow(10,6*l));function u(e,n){if(n=n||{},n=t.defaults(n,u.defaults),e<0)return"";e=Math.round(+e);var i,l="string"==typeof n.lang?r[n.lang]:n.lang,c=l.useLongScale?s:o,d=l.units;if(!(d instanceof Array)){var p=d;for(var g in d=[],c=Object.keys(p))d.push(p[c[g]]),c[g]=Math.pow(10,parseInt(c[g]))}l||(a.indexOf(u.defaults.lang)<0&&(u.defaults.lang="en"),l=r[u.defaults.lang]);var m=l.base;if(l.unitExceptions[e])return l.unitExceptions[e];if(m[e])return m[e];if(e<100)return function(e,n,i,t,a){var r=10*Math.floor(e/10);if(i=e-r)return t[r]+n.baseSeparator+u(i,a);return t[r]}(e,l,i,m,n);var h,v=e%100,f=[];v&&(!n.noAnd||l.andException&&l.andException[10]?f.push(l.unitSeparator+u(v,n)):f.push(u(v,n)));g=0;for(var x=d.length;g<x;g++){var b,y=Math.floor(e/c[g]);if(y%=g===x-1?1e6:c[g+1]/c[g],i=d[g],y)if(h=c[g],i.useBaseInstead)i.useBaseException.indexOf(y)>-1&&(!i.useBaseExceptionWhenNoTrailingNumbers||0===g&&f.length)?f.push(y>1&&i.plural?i.plural:i.singular):f.push(m[y*c[g]]);else if(b="string"==typeof i?i:!(y>1&&i.plural)||i.avoidInNumberPlural&&v?i.singular:i.plural,i.avoidPrefixException&&i.avoidPrefixException.indexOf(y)>-1)f.push(b);else{var z=l.unitExceptions[y]||u(y,t.defaults({noAnd:!(l.andException&&l.andException[y]||i.andException)},n));e-=y*c[g],f.push(z+" "+b)}}var q=e-h*Math.floor(e/h);return l.andWhenTrailing&&h&&0<q&&0!==f[0].indexOf(l.unitSeparator)&&(f=[f[0],l.unitSeparator.replace(/\s+$/,"")].concat(f.slice(1))),f.reverse().join(" ")}u.defaults={noAnd:!1,lang:"en"}},172:function(e,n,i){"use strict";n.defaults=function(e,n){null==e&&(e={});for(var i={},t=Object.keys(n),a=0,r=t.length;a<r;a++){var o=t[a];i[o]=e[o]||n[o]}return i}},173:function(e){e.exports={useLongScale:!1,baseSeparator:"-",unitSeparator:"and ",base:{0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen",20:"twenty",30:"thirty",40:"forty",50:"fifty",60:"sixty",70:"seventy",80:"eighty",90:"ninety"},units:["hundred","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion"],unitExceptions:[]}},174:function(e){e.exports={useLongScale:!0,baseSeparator:" y ",unitSeparator:"",base:{0:"cero",1:"uno",2:"dos",3:"tres",4:"cuatro",5:"cinco",6:"seis",7:"siete",8:"ocho",9:"nueve",10:"diez",11:"once",12:"doce",13:"trece",14:"catorce",15:"quince",16:"dieciséis",17:"diecisiete",18:"dieciocho",19:"diecinueve",20:"veinte",21:"veintiuno",22:"veintidós",23:"veintitrés",24:"veinticuatro",25:"veinticinco",26:"veintiséis",27:"veintisiete",28:"veintiocho",29:"veintinueve",30:"treinta",40:"cuarenta",50:"cincuenta",60:"sesenta",70:"setenta",80:"ochenta",90:"noventa",100:"cien",200:"doscientos",300:"trescientos",400:"cuatrocientos",500:"quinientos",600:"seiscientos",700:"setecientos",800:"ochocientos",900:"novecientos",1000:"mil"},unitExceptions:{1:"un"},units:[{singular:"ciento",useBaseInstead:!0,useBaseException:[1]},{singular:"mil",avoidPrefixException:[1]},{singular:"millón",plural:"millones"},{singular:"billón",plural:"billones"},{singular:"trillón",plural:"trillones"},{singular:"cuatrillón",plural:"cuatrillones"},{singular:"quintillón",plural:"quintillones"},{singular:"sextillón",plural:"sextillones"},{singular:"septillón",plural:"septillones"},{singular:"octillón",plural:"octillones"},{singular:"nonillón",plural:"nonillones"},{singular:"decillón",plural:"decillones"},{singular:"undecillón",plural:"undecillones"},{singular:"duodecillón",plural:"duodecillones"},{singular:"tredecillón",plural:"tredecillones"},{singular:"cuatrodecillón",plural:"cuatrodecillones"},{singular:"quindecillón",plural:"quindecillones"}]}},175:function(e){e.exports={useLongScale:!1,baseSeparator:" e ",unitSeparator:"e ",andWhenTrailing:!0,base:{0:"zero",1:"um",2:"dois",3:"três",4:"quatro",5:"cinco",6:"seis",7:"sete",8:"oito",9:"nove",10:"dez",11:"onze",12:"doze",13:"treze",14:"catorze",15:"quinze",16:"dezesseis",17:"dezessete",18:"dezoito",19:"dezenove",20:"vinte",30:"trinta",40:"quarenta",50:"cinquenta",60:"sessenta",70:"setenta",80:"oitenta",90:"noventa",100:"cem",200:"duzentos",300:"trezentos",400:"quatrocentos",500:"quinhentos",600:"seiscentos",700:"setecentos",800:"oitocentos",900:"novecentos",1000:"mil"},unitExceptions:{1:"um"},units:[{singular:"cento",useBaseInstead:!0,useBaseException:[1],useBaseExceptionWhenNoTrailingNumbers:!0,andException:!0},{singular:"mil",avoidPrefixException:[1],andException:!0},{singular:"milhão",plural:"milhões"},{singular:"bilhão",plural:"bilhões"},{singular:"trilhão",plural:"trilhões"},{singular:"quadrilhão",plural:"quadrilhão"},{singular:"quintilhão",plural:"quintilhões"},{singular:"sextilhão",plural:"sextilhões"},{singular:"septilhão",plural:"septilhões"},{singular:"octilhão",plural:"octilhões"},{singular:"nonilhão",plural:"nonilhões"},{singular:"decilhão",plural:"decilhões"},{singular:"undecilhão",plural:"undecilhões"},{singular:"doudecilhão",plural:"doudecilhões"},{singular:"tredecilhão",plural:"tredecilhões"}]}},176:function(e){e.exports={useLongScale:!0,baseSeparator:" e ",unitSeparator:"e ",andWhenTrailing:!0,base:{0:"zero",1:"um",2:"dois",3:"três",4:"quatro",5:"cinco",6:"seis",7:"sete",8:"oito",9:"nove",10:"dez",11:"onze",12:"doze",13:"treze",14:"catorze",15:"quinze",16:"dezasseis",17:"dezassete",18:"dezoito",19:"dezanove",20:"vinte",30:"trinta",40:"quarenta",50:"cinquenta",60:"sessenta",70:"setenta",80:"oitenta",90:"noventa",100:"cem",200:"duzentos",300:"trezentos",400:"quatrocentos",500:"quinhentos",600:"seiscentos",700:"setecentos",800:"oitocentos",900:"novecentos",1000:"mil"},unitExceptions:{1:"um"},units:[{singular:"cento",useBaseInstead:!0,useBaseException:[1],useBaseExceptionWhenNoTrailingNumbers:!0,andException:!0},{singular:"mil",avoidPrefixException:[1],andException:!0},{singular:"milhão",plural:"milhões"},{singular:"bilião",plural:"biliões"},{singular:"trilião",plural:"triliões"},{singular:"quadrilião",plural:"quadriliões"},{singular:"quintilião",plural:"quintiliões"},{singular:"sextilião",plural:"sextiliões"},{singular:"septilião",plural:"septiliões"},{singular:"octilião",plural:"octiliões"},{singular:"nonilião",plural:"noniliões"},{singular:"decilião",plural:"deciliões"}]}},177:function(e){e.exports={useLongScale:!1,baseSeparator:"-",unitSeparator:"",base:{0:"zéro",1:"un",2:"deux",3:"trois",4:"quatre",5:"cinq",6:"six",7:"sept",8:"huit",9:"neuf",10:"dix",11:"onze",12:"douze",13:"treize",14:"quatorze",15:"quinze",16:"seize",17:"dix-sept",18:"dix-huit",19:"dix-neuf",20:"vingt",30:"trente",40:"quarante",50:"cinquante",60:"soixante",70:"soixante-dix",80:"quatre-vingt",90:"quatre-vingt-dix"},units:[{singular:"cent",plural:"cents",avoidInNumberPlural:!0,avoidPrefixException:[1]},{singular:"mille",avoidPrefixException:[1]},{singular:"million",plural:"millions"},{singular:"milliard",plural:"milliards"},{singular:"billion",plural:"billions"},{singular:"billiard",plural:"billiards"},{singular:"trillion",plural:"trillions"},{singular:"trilliard",plural:"trilliards"},{singular:"quadrillion",plural:"quadrillions"},{singular:"quadrilliard",plural:"quadrilliards"},{singular:"quintillion",plural:"quintillions"},{singular:"quintilliard",plural:"quintilliards"},{singular:"sextillion",plural:"sextillions"},{singular:"sextilliard",plural:"sextilliards"},{singular:"septillion",plural:"septillions"},{singular:"septilliard",plural:"septilliards"},{singular:"octillion",plural:"octillions"}],unitExceptions:{71:"soixante et onze",72:"soixante-douze",73:"soixante-treize",74:"soixante-quatorze",75:"soixante-quinze",76:"soixante-seize",77:"soixante-dix-sept",78:"soixante-dix-huit",79:"soixante-dix-neuf",80:"quatre-vingts",91:"quatre-vingt-onze",92:"quatre-vingt-douze",93:"quatre-vingt-treize",94:"quatre-vingt-quatorze",95:"quatre-vingt-quinze",96:"quatre-vingt-seize",97:"quatre-vingt-dix-sept",98:"quatre-vingt-dix-huit",99:"quatre-vingt-dix-neuf"}}},178:function(e){e.exports={useLongScale:!1,baseSeparator:" ",unitSeparator:"",base:{0:"nulo",1:"unu",2:"du",3:"tri",4:"kvar",5:"kvin",6:"ses",7:"sep",8:"ok",9:"naŭ",10:"dek",20:"dudek",30:"tridek",40:"kvardek",50:"kvindek",60:"sesdek",70:"sepdek",80:"okdek",90:"naŭdek",100:"cent",200:"ducent",300:"tricent",400:"kvarcent",500:"kvincent",600:"sescent",700:"sepcent",800:"okcent",900:"naŭcent"},units:[{useBaseInstead:!0,useBaseException:[]},{singular:"mil",avoidPrefixException:[1]},{singular:"miliono",plural:"milionoj",avoidPrefixException:[1]},{singular:"miliardo",plural:"miliardoj",avoidPrefixException:[1]},{singular:"biliono",plural:"bilionoj",avoidPrefixException:[1]}],unitExceptions:[]}},179:function(e){e.exports={useLongScale:!1,baseSeparator:"",unitSeparator:"",generalSeparator:"",wordSeparator:"",base:{0:"zero",1:"uno",2:"due",3:"tre",4:"quattro",5:"cinque",6:"sei",7:"sette",8:"otto",9:"nove",10:"dieci",11:"undici",12:"dodici",13:"tredici",14:"quattordici",15:"quindici",16:"sedici",17:"diciassette",18:"diciotto",19:"diciannove",20:"venti",21:"ventuno",23:"ventitré",28:"ventotto",30:"trenta",31:"trentuno",33:"trentatré",38:"trentotto",40:"quaranta",41:"quarantuno",43:"quaranta­tré",48:"quarantotto",50:"cinquanta",51:"cinquantuno",53:"cinquantatré",58:"cinquantotto",60:"sessanta",61:"sessantuno",63:"sessanta­tré",68:"sessantotto",70:"settanta",71:"settantuno",73:"settantatré",78:"settantotto",80:"ottanta",81:"ottantuno",83:"ottantatré",88:"ottantotto",90:"novanta",91:"novantuno",93:"novantatré",98:"novantotto",100:"cento",101:"centuno",108:"centootto",180:"centottanta",201:"duecentuno",301:"tre­cent­uno",401:"quattro­cent­uno",501:"cinque­cent­uno",601:"sei­cent­uno",701:"sette­cent­uno",801:"otto­cent­uno",901:"nove­cent­uno"},unitExceptions:{1:"un"},units:[{singular:"cento",avoidPrefixException:[1]},{singular:"mille",plural:"mila",avoidPrefixException:[1]},{singular:"milione",plural:"milioni"},{singular:"miliardo",plural:"miliardi"},{singular:"bilione",plural:"bilioni"},{singular:"biliardo",plural:"biliardi"},{singular:"trilione",plural:"trilioni"},{singular:"triliardo",plural:"triliardi"},{singular:"quadrilione",plural:"quadrilioni"},{singular:"quadriliardo",plural:"quadriliardi"}]}},180:function(e){e.exports={useLongScale:!1,baseSeparator:" ",unitSeparator:"và ",base:{0:"không",1:"một",2:"hai",3:"ba",4:"bốn",5:"năm",6:"sáu",7:"bảy",8:"tám",9:"chín",10:"mười",15:"mười lăm",20:"hai mươi",21:"hai mươi mốt",25:"hai mươi lăm",30:"ba mươi",31:"ba mươi mốt",40:"bốn mươi",41:"bốn mươi mốt",45:"bốn mươi lăm",50:"năm mươi",51:"năm mươi mốt",55:"năm mươi lăm",60:"sáu mươi",61:"sáu mươi mốt",65:"sáu mươi lăm",70:"bảy mươi",71:"bảy mươi mốt",75:"bảy mươi lăm",80:"tám mươi",81:"tám mươi mốt",85:"tám mươi lăm",90:"chín mươi",91:"chín mươi mốt",95:"chín mươi lăm"},units:["trăm","ngàn","triệu","tỷ","nghìn tỷ"],unitExceptions:[]}},181:function(e){e.exports={useLongScale:!1,baseSeparator:" ",unitSeparator:"",base:{0:"sıfır",1:"bir",2:"iki",3:"üç",4:"dört",5:"beş",6:"altı",7:"yedi",8:"sekiz",9:"dokuz",10:"on",20:"yirmi",30:"otuz",40:"kırk",50:"elli",60:"altmış",70:"yetmiş",80:"seksen",90:"doksan"},units:[{singular:"yüz",avoidPrefixException:[1]},{singular:"bin",avoidPrefixException:[1]},"milyon","milyar","trilyon","katrilyon","kentilyon","sekstilyon","septilyon","oktilyon","nonilyon","desilyon","andesilyon","dodesilyon","tredesilyon","katordesilyon","kendesilyon"],unitExceptions:[]}},182:function(e){e.exports={useLongScale:!0,baseSeparator:"",unitSeparator:"és ",base:{0:"nulla",1:"egy",2:"kettő",3:"három",4:"négy",5:"öt",6:"hat",7:"hét",8:"nyolc",9:"kilenc",10:"tíz",11:"tizenegy",12:"tizenkettő",13:"tizenhárom",14:"tizennégy",15:"tizenöt",16:"tizenhat",17:"tizenhét",18:"tizennyolc",19:"tizenkilenc",20:"húsz",21:"huszonegy",22:"huszonkettő",23:"huszonhárom",24:"huszonnégy",25:"huszonöt",26:"huszonhat",27:"huszonhét",28:"huszonnyolc",29:"huszonkilenc",30:"harminc",40:"negyven",50:"ötven",60:"hatvan",70:"hetven",80:"nyolcvan",90:"kilencven",100:"száz",200:"kétszáz",300:"háromszáz",400:"négyszáz",500:"ötszáz",600:"hatszáz",700:"hétszáz",800:"nyolcszáz",900:"kilencszáz",1000:"ezer"},unitExceptions:{1:"egy"},units:[{singular:"száz",useBaseInstead:!0,useBaseException:[1]},{singular:"ezer",avoidPrefixException:[1]},{singular:"millió",avoidPrefixException:[1]},{singular:"milliárd",avoidPrefixException:[1]},{singular:"-billió",avoidPrefixException:[1]},{singular:"billiárd",avoidPrefixException:[1]},{singular:"trillió",avoidPrefixException:[1]},{singular:"trilliárd",avoidPrefixException:[1]},{singular:"kvadrillió",avoidPrefixException:[1]},{singular:"kvadrilliárd",avoidPrefixException:[1]},{singular:"kvintillió",avoidPrefixException:[1]},{singular:"kvintilliárd",avoidPrefixException:[1]},{singular:"szextillió",avoidPrefixException:[1]},{singular:"szeptillió",avoidPrefixException:[1]},{singular:"oktillió",avoidPrefixException:[1]},{singular:"nonillió",avoidPrefixException:[1]}]}},183:function(e){e.exports={useLongScale:!1,baseSeparator:"-",unitSeparator:"and ",base:{0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen",20:"twenty",30:"thirty",40:"forty",50:"fifty",60:"sixty",70:"seventy",80:"eighty",90:"ninety"},units:{2:"hundred",3:"thousand",5:"lakh",7:"crore"},unitExceptions:[]}}}]);
//# sourceMappingURL=component---src-templates-tags-js-0da5e2c7b937514a3045.js.map