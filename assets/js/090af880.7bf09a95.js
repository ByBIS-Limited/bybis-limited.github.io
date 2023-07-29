"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[905],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),h=o,k=d["".concat(p,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(k,i(i({ref:t},l),{},{components:r})):n.createElement(k,i({ref:t},l))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={id:"coinGecko"},i="CoinGecko",c={unversionedId:"GlobalEndpoints/coinGecko",id:"GlobalEndpoints/coinGecko",title:"CoinGecko",description:"This API includes technical documentation needed for the integration to CoinGecko.",source:"@site/docs/GlobalEndpoints/CoinGecko.md",sourceDirName:"GlobalEndpoints",slug:"/GlobalEndpoints/coinGecko",permalink:"/api/GlobalEndpoints/coinGecko",draft:!1,tags:[],version:"current",frontMatter:{id:"coinGecko"},sidebar:"tutorialSidebar",previous:{title:"CoinMarketCap",permalink:"/api/GlobalEndpoints/coinMarketCap"},next:{title:"Main Endpoints",permalink:"/api/MainEndpoints/"}},p={},s=[{value:"Spot Exchanges API endpoints",id:"spot-exchanges-api-endpoints",level:2},{value:"Get the trading pairs",id:"get-the-trading-pairs",level:3},{value:"Get the ticker data",id:"get-the-ticker-data",level:3},{value:"Get the order book data",id:"get-the-order-book-data",level:3},{value:"Get the recent transactions",id:"get-the-recent-transactions",level:3},{value:"Derivative Exchanges API endpoints",id:"derivative-exchanges-api-endpoints",level:2},{value:"Get all contracts",id:"get-all-contracts",level:3},{value:"Get the order book data",id:"get-the-order-book-data-1",level:3}],l={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coingecko"},"CoinGecko"),(0,o.kt)("p",null,"This API includes technical documentation needed for the integration to CoinGecko."),(0,o.kt)("p",null,"The public GET request endpoints are intended to allow access to market data and every endpoints return results in ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON format"),"."),(0,o.kt)("h2",{id:"spot-exchanges-api-endpoints"},"Spot Exchanges API endpoints"),(0,o.kt)("h3",{id:"get-the-trading-pairs"},"Get the trading pairs"),(0,o.kt)("p",null,"Return the summary on cryptoasset trading pairs available on the exchange."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://bybis.com/spot-api/extra/coingecko/v1/pairs"},"https://bybis.com/spot-api/extra/coingecko/v1/pairs")),(0,o.kt)("h3",{id:"get-the-ticker-data"},"Get the ticker data"),(0,o.kt)("p",null,"Return 24-hour pricing and volume information on each market pair available on an exchange."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://bybis.com/spot-api/extra/coingecko/v1/tickers"},"https://bybis.com/spot-api/extra/coingecko/v1/tickers")),(0,o.kt)("h3",{id:"get-the-order-book-data"},"Get the order book data"),(0,o.kt)("p",null,"Return the order book depth of any given trading pair, split into two different arrays for bid and ask orders."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://bybis.com/spot-api/extra/coingecko/v1/orderbook/BTC_USDT"},"https://bybis.com/spot-api/extra/coingecko/v1/orderbook/BTC_USDT")),(0,o.kt)("h3",{id:"get-the-recent-transactions"},"Get the recent transactions"),(0,o.kt)("p",null,"Return recently completed trades for a given market."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://bybis.com/spot-api/extra/coingecko/v1/historical_trades?ticker_id=BTC_USDT&type=buy&limit=20"},"https://bybis.com/spot-api/extra/coingecko/v1/historical_trades?ticker_id=BTC_USDT&type=buy&limit=20")),(0,o.kt)("h2",{id:"derivative-exchanges-api-endpoints"},"Derivative Exchanges API endpoints"),(0,o.kt)("h3",{id:"get-all-contracts"},"Get all contracts"),(0,o.kt)("p",null,"Return the summary of all contracts traded on the exchange."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://futures.bybis.com/future-api/rest/v1.0/contracts"},"https://futures.bybis.com/future-api/rest/v1.0/contracts")),(0,o.kt)("h3",{id:"get-the-order-book-data-1"},"Get the order book data"),(0,o.kt)("p",null,"Return the order book depth of any given trading pair, split into two different arrays for bid and ask orders."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://futures.bybis.com/future-api/rest/v1.0/orderbook/BTC_USDT/depth"},"https://futures.bybis.com/future-api/rest/v1.0/orderbook/BTC_USDT/depth")))}u.isMDXComponent=!0}}]);