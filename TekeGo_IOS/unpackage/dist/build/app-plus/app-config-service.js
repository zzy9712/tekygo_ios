
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/welcomePage/welcome","pages/welcomePage/inputEmail","pages/welcomePage/inputPassword","pages/welcomePage/forgotPassword","pages/welcomePage/WrongPassw","pages/welcomePage/noEmailFound","pages/welcomePage/createAccount","pages/welcomePage/registerWin","pages/welcomePage/termsSevice","pages/subscription/subscription","pages/subscription/subOk","pages/subscription/subNoOk","pages/subscription/contactUS","pages/subscription/Bind","pages/index/index","pages/components/TekyGo-Top","pages/components/TekyGo","pages/milestones/milestones","pages/myAccount/myAccount","pages/settings/settings","pages/gamesCenter/gamesCenter","pages/components/pageStyle1","pages/components/pageStyle2","pages/index/gameDetails","pages/gamesCenter/games","pages/gamesCenter/gamesData"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom","bounce":"none"},"tabBar":{"color":"#0b4d6e","selectedColor":"#0b4d6e","borderStyle":"black","backgroundColor":"#FFFFFF","iconWidth":"45px","height":"80px","spacing":"0px","fontSize":"8px","list":[{"pagePath":"pages/index/index","iconPath":"static/img/tabbar/home.png","selectedIconPath":"static/img/tabbar/home-1.png","text":"FEATURED"},{"pagePath":"pages/gamesCenter/gamesCenter","iconPath":"static/img/tabbar/youXi.png","selectedIconPath":"static/img/tabbar/youXi-1.png","text":"GAMES"},{"pagePath":"pages/milestones/milestones","iconPath":"static/img/tabbar/jiangbei.png","selectedIconPath":"static/img/tabbar/jiangbei-1.png","text":"MILESTONES"},{"pagePath":"pages/myAccount/myAccount","iconPath":"static/img/tabbar/MyACC.png","selectedIconPath":"static/img/tabbar/MyACC-1.png","text":"MY ACCOUNT"},{"pagePath":"pages/settings/settings","iconPath":"static/img/tabbar/settings.png","selectedIconPath":"static/img/tabbar/settings-1.png","text":"SETTINGS"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"TekyGo","compilerVersion":"3.2.16","entryPagePath":"pages/welcomePage/welcome","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/welcomePage/welcome","meta":{"isQuit":true},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33","background":"#fecb4d"}},{"path":"/pages/welcomePage/inputEmail","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33","background":"#fecb4d"}},{"path":"/pages/welcomePage/inputPassword","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33","background":"#2b95cf"}},{"path":"/pages/welcomePage/forgotPassword","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33","background":"#2b95cf"}},{"path":"/pages/welcomePage/WrongPassw","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33","background":"#2b95cf"}},{"path":"/pages/welcomePage/noEmailFound","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33","background":"#2b95cf"}},{"path":"/pages/welcomePage/createAccount","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33"}},{"path":"/pages/welcomePage/registerWin","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33","background":"#fecb4c"}},{"path":"/pages/welcomePage/termsSevice","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33"}},{"path":"/pages/subscription/subscription","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33","background":"#2b95cf"}},{"path":"/pages/subscription/subOk","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33","background":"#2b95cf"}},{"path":"/pages/subscription/subNoOk","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33","background":"#2b95cf"}},{"path":"/pages/subscription/contactUS","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33","background":"#2b95cf"}},{"path":"/pages/subscription/Bind","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33","background":"#2b95cf"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33","background":"#fecb4c"}},{"path":"/pages/components/TekyGo-Top","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33"}},{"path":"/pages/components/TekyGo","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33"}},{"path":"/pages/milestones/milestones","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33","background":"#fecb4c"}},{"path":"/pages/myAccount/myAccount","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33","background":"#fecb4c"}},{"path":"/pages/settings/settings","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33","background":"#2b95cf"}},{"path":"/pages/gamesCenter/gamesCenter","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33","background":"#fecb4c"}},{"path":"/pages/components/pageStyle1","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33"}},{"path":"/pages/components/pageStyle2","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33"}},{"path":"/pages/index/gameDetails","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33"}},{"path":"/pages/gamesCenter/games","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33"}},{"path":"/pages/gamesCenter/gamesData","meta":{},"window":{"navigationBarTitleText":" ","navigationBarBackgroundColor":"#ee5b33"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
