(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports={home:{title:"AK-12's Website",logo:"https://github.com/Saber2pr/MyWeb/raw/master/resource/AK12.jpg",author:"I am AK-12",readMe:"the Website is based on React",websites:[{name:"github",href:"https://github.com/Saber2pr"},{name:"csdn",href:"https://blog.csdn.net/u011607490"},{name:"bilibili",href:"https://space.bilibili.com/71959910/#/"}]},project:[{name:"HouseBlocks",href:"https://saber2pr.github.io/HouseBlocks/HouseBlocks_CocosCreator/build/web-mobile0.1/",img:"https://github.com/Saber2pr/MyWeb/raw/master/resource/newHouseBlocks.jpg"},{name:"csvTochat",href:"https://saber2pr.github.io/csvToChart/",img:"https://github.com/Saber2pr/MyWeb/raw/master/resource/csvToChartView.jpg"},{name:"CameraIdea",href:"https://saber2pr.github.io/CocosCreatorExam/CameraIdea/build/web-mobile/",img:"https://github.com/Saber2pr/MyWeb/raw/master/resource/camera.gif"},{name:"RandPlat",href:"https://saber2pr.github.io/CocosCreatorExam/RandPlat/build/web-mobile/",img:"https://github.com/Saber2pr/MyWeb/raw/master/resource/RandPlat.jpg"},{name:"ComputerBattle",href:"https://saber2pr.github.io/ComputerBattle/build/web-mobile/",img:"https://github.com/Saber2pr/MyWeb/raw/master/resource/CompView.gif"},{name:"imageToCode",href:"https://github.com/Saber2pr/openCvImageTransformer",img:"https://github.com/Saber2pr/MyWeb/raw/master/resource/badapple.jpg"},{name:"XmJUMP",href:"https://github.com/Saber2pr/XM_JUMP",img:"https://github.com/Saber2pr/MyWeb/raw/master/resource/XM_JUMP.jpg"}],about:[{name:"saber2pr@gmail.com",href:"https://saber2pr@gmail.com"},{name:"1029985799@qq.com",href:"https://1029985799@qq.com"}]}},,,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),c=a.n(o),i=(a(14),a(1)),s=a(2),u=a(4),b=a(3),l=a(5),m=(a(16),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(b.a)(t).call(this,e))).state={tabs:e.tabs,currentTab:null},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"record",value:function(e){this.currentTab=e}},{key:"render",value:function(){var e=this,t=this.state.tabs.map(function(t,a){return n.a.createElement("button",{key:a,onClick:e.record.bind(e,a),className:"tab-button"},t)});return n.a.createElement("div",null,t,this.props.children[this.currentTab])}},{key:"currentTab",set:function(e){this.setState({currentTab:e})},get:function(){return this.state.currentTab||0}}]),t}(r.Component)),h=(a(18),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return document.querySelector("body").setAttribute("style","background-color:rgb(25, 26, 33)"),n.a.createElement("div",null,this.props.children)}}]),t}(r.Component)),p=(a(20),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(b.a)(t).call(this,e))).state={items:a.getGroup()},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"getGroup",value:function(){var e=[];for(var t in this.props.group)e.push(this.props.group[t]);return e}},{key:"render",value:function(){var e=this.state.items.map(function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("a",{href:e.href},e.name),void 0===e.img?null:n.a.createElement("img",{src:e.img,alt:e.name}))});return n.a.createElement("div",null,e)}}]),t}(r.Component)),g=(a(22),function(e){function t(e){var a;Object(i.a)(this,t),a=Object(u.a)(this,Object(b.a)(t).call(this,e));var r=e.data;return a.state={title:r.title,logo:r.logo,author:r.author,readMe:r.readMe,websites:r.websites},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"home"},n.a.createElement(h,null,n.a.createElement("p",null,this.state.title),n.a.createElement("img",{src:this.state.logo,alt:"loading"}),n.a.createElement("p",null,this.state.author),n.a.createElement("p",null,this.state.readMe),n.a.createElement(p,{group:this.state.websites})))}}]),t}(r.Component)),f=(a(24),function(e){function t(e){var a;Object(i.a)(this,t),a=Object(u.a)(this,Object(b.a)(t).call(this,e));var r=e.data;return a.state={projects:r},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"project"},n.a.createElement(p,{group:this.state.projects}))}}]),t}(r.Component)),d=(a(26),function(e){function t(e){var a;Object(i.a)(this,t),a=Object(u.a)(this,Object(b.a)(t).call(this,e));var r=e.data;return a.state={about:r},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"about"},n.a.createElement("p",null,"Call Me"),n.a.createElement(p,{group:this.state.about}))}}]),t}(r.Component)),j=a(6),v=(a(28),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"getNames",value:function(){var e=[];for(var t in j)e.push(t);return e}},{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement("center",null,n.a.createElement(m,{tabs:this.getNames()},n.a.createElement(g,{data:j.home}),n.a.createElement(f,{data:j.project}),n.a.createElement(d,{data:j.about}))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);