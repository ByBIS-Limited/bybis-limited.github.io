"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[789],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6932:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={id:"coinMarketCap"},i="CoinMarketCap",s={unversionedId:"GlobalEndpoints/coinMarketCap",id:"GlobalEndpoints/coinMarketCap",title:"CoinMarketCap",description:"This API includes technical documentation needed for the integration to CoinMarketCap.",source:"@site/docs/GlobalEndpoints/CoinMarketCap.md",sourceDirName:"GlobalEndpoints",slug:"/GlobalEndpoints/coinMarketCap",permalink:"/api/GlobalEndpoints/coinMarketCap",draft:!1,tags:[],version:"current",frontMatter:{id:"coinMarketCap"},sidebar:"tutorialSidebar",previous:{title:"Basic Information",permalink:"/api/"},next:{title:"CoinGecko",permalink:"/api/GlobalEndpoints/coinGecko"}},c={},l=[{value:"Spot Exchanges API endpoints",id:"spot-exchanges-api-endpoints",level:2},{value:"Get the market summary",id:"get-the-market-summary",level:3},{value:"Get the available asset",id:"get-the-available-asset",level:3},{value:"Get the ticker data",id:"get-the-ticker-data",level:3},{value:"Get the order book data",id:"get-the-order-book-data",level:3},{value:"Get the recent transactions",id:"get-the-recent-transactions",level:3},{value:"Derivative Exchanges API endpoints",id:"derivative-exchanges-api-endpoints",level:2},{value:"Get all contracts",id:"get-all-contracts",level:3},{value:"Get the order book data",id:"get-the-order-book-data-1",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"coinmarketcap"},"CoinMarketCap"),(0,n.kt)("p",null,"This API includes technical documentation needed for the integration to CoinMarketCap."),(0,n.kt)("p",null,"The public GET request endpoints are intended to allow access to market data and every endpoints return results in ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON format"),"."),(0,n.kt)("h2",{id:"spot-exchanges-api-endpoints"},"Spot Exchanges API endpoints"),(0,n.kt)("h3",{id:"get-the-market-summary"},"Get the market summary"),(0,n.kt)("p",null,"Return overview of market data for all tickers and all markets."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://futures.bybis.com/future-api/rest/v1.0/contracts"},"https://futures.bybis.com/future-api/rest/v1.0/contracts")),(0,n.kt)("h3",{id:"get-the-available-asset"},"Get the available asset"),(0,n.kt)("p",null,"Return cryptocurrencies available on the exchange and their information in detail."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://futures.bybis.com/future-api/rest/v1.0/contracts"},"https://futures.bybis.com/future-api/rest/v1.0/contracts")),(0,n.kt)("h3",{id:"get-the-ticker-data"},"Get the ticker data"),(0,n.kt)("p",null,"Return 24-hour rolling window price change statistics for all markets of the exchange."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://futures.bybis.com/future-api/rest/v1.0/contracts"},"https://futures.bybis.com/future-api/rest/v1.0/contracts")),(0,n.kt)("h3",{id:"get-the-order-book-data"},"Get the order book data"),(0,n.kt)("p",null,"Return the order book depth of any given trading pair, split into two different arrays for bid and ask orders."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://futures.bybis.com/future-api/rest/v1.0/contracts"},"https://futures.bybis.com/future-api/rest/v1.0/contracts")),(0,n.kt)("h3",{id:"get-the-recent-transactions"},"Get the recent transactions"),(0,n.kt)("p",null,"Return recently completed trades for a given market."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://futures.bybis.com/future-api/rest/v1.0/contracts"},"https://futures.bybis.com/future-api/rest/v1.0/contracts")),(0,n.kt)("h2",{id:"derivative-exchanges-api-endpoints"},"Derivative Exchanges API endpoints"),(0,n.kt)("h3",{id:"get-all-contracts"},"Get all contracts"),(0,n.kt)("p",null,"Return the summary of all contracts traded on the exchange."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://futures.bybis.com/future-api/rest/v1.0/contracts"},"https://futures.bybis.com/future-api/rest/v1.0/contracts")),(0,n.kt)("h3",{id:"get-the-order-book-data-1"},"Get the order book data"),(0,n.kt)("p",null,"Return the order book depth of any given trading pair, split into two different arrays for bid and ask orders."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://futures.bybis.com/future-api/rest/v1.0/orderbook/BTC_USDT/depth"},"https://futures.bybis.com/future-api/rest/v1.0/orderbook/BTC_USDT/depth")))}d.isMDXComponent=!0}}]);