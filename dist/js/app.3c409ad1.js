(function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},s={app:0},n=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Gydio/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1250:function(e,t,a){},"1c0f":function(e,t,a){},"24d8":function(e,t,a){"use strict";var r=a("bada"),s=a.n(r);s.a},"2bd0":function(e,t,a){e.exports=a.p+"img/user-placeholder.c3e2f71c.jpg"},"2dfc":function(e,t,a){"use strict";var r=a("7484"),s=a.n(r);s.a},"32b4":function(e,t,a){"use strict";var r=a("6095"),s=a.n(r);s.a},"3db9":function(e,t,a){},"46d5":function(e,t,a){"use strict";var r=a("eef0"),s=a.n(r);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["Uploader"!==e.$route.name?a("Header"):e._e(),a("router-view")],1)},n=[],o={name:"App"},i=o,l=a("2877"),c=Object(l["a"])(i,s,n,!1,null,null,null),u=c.exports,d=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header",{scopedSlots:e._u([{key:"nav-left",fn:function(){return[a("router-link",{attrs:{to:"/explore"}},[e._v("Explore")])]},proxy:!0}])}),a("div",{staticClass:"uploader container"},[e._m(0),a("h2",{staticClass:"uploader-title"},[e._v("Upload your fav track.")]),a("div",{staticClass:"uploader-placeholder"},[a("input",{attrs:{id:"file_uploader",type:"file",disabled:e.database.externalLink||e.storage.isProgress,hidden:""},on:{change:e.handleFile}}),a("label",{staticClass:"uploader-placeholder-btn",attrs:{for:"file_uploader"}},[e._v(" Choose file "),a("font-awesome-icon",{attrs:{icon:["fas","plus-circle"]}})],1),a("span",[e._v(e._s(e.storage.fileName))]),e.storage.blob&&e.storage.fileName&&!e.storage.isProgress?a("font-awesome-icon",{staticClass:"remove-blob",attrs:{icon:["far","times-circle"]},on:{click:e.removeBlob}}):e._e(),a("p",[e._v("Or")])],1),a("div",{staticClass:"external-link"},[a("div",{staticClass:"external-link-inner"},[a("TextInput",{attrs:{label:"Copy/paste an external link e.g. youtube",isDisabled:Boolean(e.storage.blob),isValid:e.database.isValid,hasError:e.database.isError,errorMsg:e.database.errorMsg,handleOnChange:e.validateExternalURL},model:{value:e.database.externalLink,callback:function(t){e.$set(e.database,"externalLink",t)},expression:"database.externalLink"}}),e.database.uploadErrorMsg?a("Message",{attrs:{color:"red",text:e.database.uploadErrorMsg}}):e._e()],1)]),e.storage.isProgress?a("div",{staticClass:"progress-outer"},[a("Message",{attrs:{text:e.storage.progressState,icon:e.storage.isSuccess?["fas","check-circle"]:null,iconStyle:{color:"lightgreen"},color:e.storage.isCancelled?"red":null}}),a("div",{staticClass:"progress"},[a("span",[e._v(e._s(e.storage.progress)+"%")]),a("span",{staticClass:"progress-inner",style:{width:e.storage.progress+"%"}}),a("span",{ref:"cancelUploadEl"},[a("font-awesome-icon",{attrs:{icon:["far","times-circle"]}})],1)]),a("p",{domProps:{innerHTML:e._s(e.storage.bytesTransferred/1e6+"/"+e.storage.totalBytes/1e6+" MB")}})],1):e._e(),a("div",{staticClass:"uploader-btn-wrap"},[a("button",e._g({attrs:{disabled:!e.storage.blob&&!e.database.externalLink||e.database.isError||e.storage.isProgress}},{click:e.storage.blob?e.upload_storage:e.upload_database}),[e._v(" Upload "),a("font-awesome-icon",{attrs:{icon:["fas","arrow-circle-up"]}})],1),e.database.isSuccess?a("Message",{attrs:{text:e.database.progressState,icon:e.database.isSuccess?["fas","check-circle"]:null,iconStyle:{color:"lightgreen"}}}):e._e()],1)])],1)},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"intro"},[a("h1",[e._v("Gydio")]),a("p",[e._v(" Your favorite place for "),a("strong",[e._v("Gaming")]),e._v(" related Music, Themes and Soundtracks. ")])])}],f=(a("4160"),a("b0c0"),a("ac1f"),a("466d"),a("159b"),a("3835")),g=(a("96cf"),a("1da1")),v=a("59ca"),h=a.n(v),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{style:Object.assign({},e.styleObj,{color:e.color})},[a("span",[e._v(e._s(e.text))]),e.icon?a("font-awesome-icon",{style:e.iconStyle,attrs:{icon:e.icon}}):e._e()],1)},x=[],w={name:"Message",props:{text:String,color:String,styleObj:Object,icon:Array,iconStyle:Object}},k=w,y=Object(l["a"])(k,b,x,!1,null,null,null),_=y.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",[a("span",{staticClass:"text-input-label"},[e._v(e._s(e.label)+" "+e._s(e.isRequired?"*":""))]),e.isSubmitted&&!Boolean(e.injectedVal)?a("Message",{attrs:{text:"This field is required!",color:"red",styleObj:{display:"inline-block"}}}):e._e(),e.isValid?a("font-awesome-icon",{attrs:{icon:["fas","check-circle"]}}):e._e(),"checkbox"===(e.inputType||"text")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.injectedVal,expression:"injectedVal"}],staticClass:"text-input",class:{hasError:e.hasError||e.isSubmitted&&!Boolean(e.injectedVal)},attrs:{disabled:e.isDisabled,type:"checkbox"},domProps:{checked:Array.isArray(e.injectedVal)?e._i(e.injectedVal,null)>-1:e.injectedVal},on:{change:[function(t){var a=e.injectedVal,r=t.target,s=!!r.checked;if(Array.isArray(a)){var n=null,o=e._i(a,n);r.checked?o<0&&(e.injectedVal=a.concat([n])):o>-1&&(e.injectedVal=a.slice(0,o).concat(a.slice(o+1)))}else e.injectedVal=s},e.handleOnChange]}}):"radio"===(e.inputType||"text")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.injectedVal,expression:"injectedVal"}],staticClass:"text-input",class:{hasError:e.hasError||e.isSubmitted&&!Boolean(e.injectedVal)},attrs:{disabled:e.isDisabled,type:"radio"},domProps:{checked:e._q(e.injectedVal,null)},on:{change:[function(t){e.injectedVal=null},e.handleOnChange]}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.injectedVal,expression:"injectedVal"}],staticClass:"text-input",class:{hasError:e.hasError||e.isSubmitted&&!Boolean(e.injectedVal)},attrs:{disabled:e.isDisabled,type:e.inputType||"text"},domProps:{value:e.injectedVal},on:{change:e.handleOnChange,input:function(t){t.target.composing||(e.injectedVal=t.target.value)}}}),a("Message",{directives:[{name:"show",rawName:"v-show",value:e.hasError&&!e.isValid,expression:"hasError && !isValid"}],attrs:{color:"red",text:e.errorMsg,icon:["far","times-circle"]}})],1)},E=[],j=new r["a"],M={name:"TextInput",components:{Message:_},props:{label:String,inputType:String,value:String,isRequired:Boolean,isSubmitted:Boolean,isValid:Boolean,isDisabled:Boolean,hasError:Boolean,errorMsg:String,handleOnChange:{type:Function,default:function(){}}},data:function(){return{injectedVal:this.value}},mounted:function(){var e=this;j.$on("resetInput",(function(){return e.injectedVal=""}))},watch:{injectedVal:function(){this.$emit("input",this.injectedVal)}}},T=M,O=(a("d258"),Object(l["a"])(T,S,E,!1,null,"47c6f903",null)),C=O.exports,P=function(e,t,a,r){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Date.now();return{name:e,size:t,downloadUrl:a,user:r,creationDate:s}},U=function(e,t,a,r){return{name:e,photoUrl:t,email:a,lastSignInTime:r}},V=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();return{url:e,user:t,creationDate:a}},B={name:"Uploader",components:{Message:_,TextInput:C},data:function(){return{storage:{blob:null,progress:0,bytesTransferred:0,totalBytes:0,progressState:null,fileName:null,isProgress:!1,isSuccess:!1,storage:!1},database:{externalLink:null,progressState:null,isSuccess:!1,isError:!1,isValid:!1,errorMsg:"You need to input a vaild youtube video URL.",uploadErrorMsg:null,pattern:/^https:\/\/www.youtube.com\/watch\?v=\w+(-)?\w+/g}}},methods:{handleFile:function(e){var t,a=e.target;if(a.files.length){t=a.files[0];var r=t,s=r.name;this.storage.blob=t,this.storage.fileName=s}},upload_storage:function(){var e=this;this.database.progressState=null,this.database.isSuccess=!1;var t=this.storage.blob,a=t.name,r=t.size,s=h.a.auth,n=h.a.storage,o=h.a.firestore,i=o(),l=i.collection("music"),c=n().ref("music/"+a),u=c.put(this.storage.blob);this.cancelUpload=function(){e.$refs.cancelUploadEl&&e.$refs.cancelUploadEl.addEventListener("click",(function(){return u.cancel()}))},u.on("state_changed",(function(t){var r=t.bytesTransferred,s=t.totalBytes,n=t.state;if("running"===n){var o=Math.floor(r/s*100);e.storage.progressState="Uploading ".concat(a," to Firebase storage..."),e.storage.progress=o,e.storage.bytesTransferred=r,e.storage.totalBytes=s,e.storage.isProgress=!0}}),(function(t){e.storage.isCancelled=!0,e.storage.progressState=t.message,e.resetState("storage",[{key:"blob",value:null},{key:"fileName",value:null},{key:"isProgress",value:!1},{key:"isCancelled",value:!1}],2e3)}),Object(g["a"])(regeneratorRuntime.mark((function t(){var n,o,i,u,d,p,m;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=s(),o=n.currentUser,o&&(i=o.displayName,u=o.photoURL,d=o.email,p=o.metadata.lastSignInTime),t.prev=2,t.next=5,c.getDownloadURL();case 5:return m=t.sent,t.next=8,l.add(P(a,r,m,o&&U(i,u,d,p)));case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),e.uploadErrorMsg=t.t0.message;case 13:e.storage.progressState="Uploading is done successfully",e.storage.isSuccess=!0,e.resetState("storage",[{key:"blob",value:null},{key:"isProgress",value:!1},{key:"fileName",value:null},{key:"isSuccess",value:!1}],2e3);case 16:case"end":return t.stop()}}),t,null,[[2,10]])}))))},upload_database:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n,o,i,l,c,u,d,p,m,g;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.storage.isProgress=!1,e.storage.progressState=null,e.storage.isSuccess=!1,a=h.a.auth,r=h.a.firestore,s=a(),n=s.currentUser,n&&(o=n.displayName,i=n.email,l=n.photoURL,c=n.metadata.lastSignInTime),u=r(),d=u.collection("youtube"),p=e.database.externalLink.match(e.database.pattern),m=Object(f["a"])(p,1),g=m[0],t.prev=9,t.next=12,d.add(V(g,n&&U(o,l,i,c)));case 12:t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](9),e.uploadErrorMsg=t.t0.message;case 17:e.database.progressState="Video url uploaded successfully!",e.database.isSuccess=!0,e.resetState("database",[{key:"isError",value:!1},{key:"isValid",value:!1},{key:"isSuccess",value:!1},{key:"externalLink",value:""}],2e3,(function(){return j.$emit("resetInput",e.database.externalLink)}));case 20:case"end":return t.stop()}}),t,null,[[9,14]])})))()},validateExternalURL:function(){if(!this.database.pattern.test(this.database.externalLink))return this.database.externalLink?(this.database.isError=!0,void(this.database.isValid=!1)):void(this.database.isError=!1);this.database.isError=!1,this.database.isValid=!0},resetState:function(e,t,a,r){var s=this;setTimeout((function(){t.forEach((function(t){s[e][t.key]=t.value})),r&&r()}),a)},removeBlob:function(){this.storage.blob=null,this.storage.fileName=null},cancelUpload:function(){}},updated:function(){this.cancelUpload()}},R=B,L=(a("2dfc"),Object(l["a"])(R,p,m,!1,null,"30729d26",null)),$=L.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[e.tracks?a("h1",[e._v("Explore")]):e._e(),e.tracks.length||e.externalTracks?e._e():a("Message",{attrs:{text:e.loadingState}}),e.errorMsg?a("Message",{attrs:{text:e.errorMsg,color:"red"}}):e._e(),a("TrackWrapper",{attrs:{row:!0,basis:"col-4"}},e._l(e.tracks,(function(t){var r=t.id,s=t.data;return a("Track",{key:r,attrs:{name:s.name,creationDate:s.creationDate,downloadUrl:s.downloadUrl,user:s.user,changeSelectedTrack:e.changeSelectedTrack}})})),1)],1),a("div",{staticClass:"container"},[e.externalTracks?a("h1",[e._v("External videos 'Youtube'")]):e._e(),a("TrackWrapper",{attrs:{row:!0,basis:"col-6"}},e._l(e.externalTracks,(function(e){return a("ExternalTrack",{key:e.id,attrs:{videoURL:e.videoURL}})})),1)],1),a("audio",{attrs:{src:e.selectedTrack,autoplay:"",controls:"",controlslist:"nodownload"}})])},I=[],N=(a("d81d"),a("4fad"),a("d3b7"),a("5319"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex-wrapper",class:[e.basis,{container:e.container}],style:e.container&&{"max-width":e.container+"px"}},[e.row?a("div",{staticClass:"row"},[e._t("default")],2):e._t("default")],2)}),A=[],H=(a("a9e3"),{name:"Wrapper",props:{basis:String,row:Boolean,container:Number}}),F=H,W=(a("24d8"),Object(l["a"])(F,N,A,!1,null,"6b5738a7",null)),q=W.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"track col",on:{click:function(){return e.changeSelectedTrack(e.downloadUrl)}}},[a("div",{staticClass:"track-placeholder"},[a("img",{attrs:{src:e.img||e.placeholder,alt:""}})]),a("div",{staticClass:"track-name",attrs:{title:e.name}},[e._v(e._s(e.name))]),a("div",{staticClass:"track-date"},[a("strong",[e._v("Uploaded:")]),e._v(" "+e._s(e.dateTimeFormatted)+" ")]),e.user?a("div",[a("img",{staticClass:"user-pic",attrs:{src:e.user.photoUrl,alt:""}}),a("span",[e._v(e._s(e.user.name))])]):a("div",[a("img",{staticClass:"user-pic",attrs:{src:e.userPlaceholder,alt:""}}),a("span",[e._v("Anonymous")])])])},z=[],Y=(a("99af"),a("edfd")),Z=a.n(Y),J=a("2bd0"),K=a.n(J),Q={name:"Track",props:{name:String,downloadUrl:String,creationDate:Number,img:String,user:Object,changeSelectedTrack:Function},data:function(){return{placeholder:Z.a,userPlaceholder:K.a}},computed:{dateTimeFormatted:function(){var e=new Date(this.creationDate),t=e.toDateString(),a=e.toLocaleTimeString();return"".concat(t,", ").concat(a)}}},X=Q,ee=(a("f00f"),Object(l["a"])(X,G,z,!1,null,"458247e1",null)),te=ee.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("iframe",{staticClass:"col",attrs:{height:"315","same-origin":"",src:e.videoURL,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})},re=[],se={name:"ExternalTrack",props:{videoURL:String}},ne=se,oe=Object(l["a"])(ne,ae,re,!1,null,null,null),ie=oe.exports,le={name:"Explore",components:{Track:te,TrackWrapper:q,ExternalTrack:ie,Message:_},data:function(){return{tracks:[],selectedTrack:null,externalTracks:null,loadingState:null,errorMsg:null}},methods:{changeSelectedTrack:function(e){this.selectedTrack=e}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n,o,i,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loadingState="Loading...",a=h.a.firestore,r=a(),t.prev=3,t.next=6,r.collection("music").orderBy("creationDate","desc").get();case 6:s=t.sent,n=s.docs,o=n.map((function(e){return{id:e.id,data:e.data()}})),e.tracks=o,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](3),e.errorMsg=t.t0.message;case 15:return t.prev=15,t.next=18,fetch("https://musicstream-cb9d3.firebaseio.com/music.json");case 18:return i=t.sent,t.next=21,i.json();case 21:l=t.sent,e.externalTracks=l&&Object.entries(l).map((function(e){var t=Object(f["a"])(e,2),a=t[0],r=t[1],s=r.videoURL,n=r.uploaded,o=s.replace("watch?v=","embed/");return{id:a,videoURL:o,uploaded:n}})).sort((function(e,t){return t.uploaded-e.uploaded})),e.tracks.length||e.externalTracks||(e.loadingState="No files to explore!"),t.next=29;break;case 26:t.prev=26,t.t1=t["catch"](15),e.errorMsg=t.t1.message;case 29:case"end":return t.stop()}}),t,null,[[3,12],[15,26]])})))()}},ce=le,ue=(a("46d5"),Object(l["a"])(ce,D,I,!1,null,"65c52a48",null)),de=ue.exports,pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Dialog",{scopedSlots:e._u([{key:"dialog-title",fn:function(){return[e._v("Register")]},proxy:!0},{key:"dialog-body",fn:function(){return[a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("TextInput",{attrs:{label:"Email",isRequired:!0,isSubmitted:e.isSubmitted,isValid:e.isEmail,hasError:e.email.hasError,errorMsg:e.email.errorMsg},model:{value:e.email.value,callback:function(t){e.$set(e.email,"value",t)},expression:"email.value"}}),a("TextInput",{attrs:{label:"Password",inputType:"password",isRequired:!0,isSubmitted:e.isSubmitted,isValid:e.matchPassword,hasError:e.password.hasError,errorMsg:e.password.errorMsg},model:{value:e.password.value,callback:function(t){e.$set(e.password,"value",t)},expression:"password.value"}}),a("TextInput",{attrs:{label:"Confirm password",inputType:"password",isRequired:!0,isSubmitted:e.isSubmitted,isValid:e.matchPassword},model:{value:e.password.confirmPassword.value,callback:function(t){e.$set(e.password.confirmPassword,"value",t)},expression:"password.confirmPassword.value"}}),a("div",{staticStyle:{"text-align":"center"}},[a("Button",{attrs:{type:"submit"}},[e._v("Submit")])],1),e.isSuccess?a("Message",{attrs:{color:"green",text:"User has been created successfully"}}):e._e(),e.formHasError?a("Message",{attrs:{color:"red",text:e.formHasError.message}}):e._e()],1)]},proxy:!0}])})},me=[],fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{class:[e.iconPosition,e.variant],style:{styleObj:e.styleObj},attrs:{text:e.text,disabled:e.isDisabled,type:e.type},on:{click:e.handleClick}},[e.icon&&"right"!==e.iconPosition?a("font-awesome-icon",{style:e.iconStyle,attrs:{icon:e.icon}}):e._e(),e._t("default"),e.icon&&"right"===e.iconPosition?a("font-awesome-icon",{style:e.iconStyle,attrs:{icon:e.icon}}):e._e()],2)},ge=[],ve={name:"Button",props:{styleObj:Object,variant:String,text:String,type:String,icon:Array,iconStyle:Object,iconPosition:{default:"left",type:String},isDisabled:Boolean,handleClick:{type:Function,default:function(){}}}},he=ve,be=(a("87fc"),Object(l["a"])(he,fe,ge,!1,null,"058ac4db",null)),xe=be.exports,we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialog-outer"},[a("div",{staticClass:"dialog-inner"},[a("h1",{staticClass:"dialog-title"},[e._t("dialog-title")],2),a("div",{staticClass:"dialog-body"},[e._t("dialog-body")],2),e._t("default")],2)])},ke=[],ye={name:"Dialog"},_e=ye,Se=(a("32b4"),Object(l["a"])(_e,we,ke,!1,null,"7e65599b",null)),Ee=Se.exports,je=function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)},Me={name:"Register",components:{Button:xe,Dialog:Ee,Message:_,TextInput:C},data:function(){return{email:{value:"",hasError:!1,errorMsg:""},password:{value:"",hasError:!1,errorMsg:"",confirmPassword:{value:""}},isSubmitted:null,isSuccess:null,formHasError:null}},computed:{isEmail:function(){return je(this.email.value)},matchPassword:function(){return Boolean(this.password.value)&&Boolean(this.password.confirmPassword.value)&&this.password.value===this.password.confirmPassword.value}},methods:{handleSubmit:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isSubmitted=!0,e.email.value&&!e.isEmail?(e.email.hasError=!0,e.email.errorMsg="Enter a valid email address."):(e.email.hasError=!1,e.email.errorMsg=""),e.password.value&&e.password.confirmPassword.value&&!e.matchPassword?(e.password.hasError=!0,e.password.errorMsg="Please match the 2 password inputs."):(e.password.hasError=!1,e.password.errorMsg=""),!e.isEmail||!e.matchPassword){t.next=19;break}return t.prev=4,t.next=7,h.a.auth().createUserWithEmailAndPassword(e.email.value,e.password.value);case 7:return e.isSuccess=!0,a=h.a.auth().currentUser,t.next=11,a.sendEmailVerification();case 11:setTimeout((function(){e.$router.push("/")}),1e3),e.formHasError=null,t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](4),e.isSuccess=!1,e.formHasError=t.t0;case 19:case"end":return t.stop()}}),t,null,[[4,15]])})))()}}},Te=Me,Oe=Object(l["a"])(Te,pe,me,!1,null,null,null),Ce=Oe.exports,Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Dialog",{scopedSlots:e._u([{key:"dialog-title",fn:function(){return[e._v("Login")]},proxy:!0},{key:"dialog-body",fn:function(){return[a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("TextInput",{attrs:{label:"Email",isRequired:!0,isSubmitted:e.isSubmitted,isValid:e.isEmail,hasError:e.email.hasError,errorMsg:e.email.errorMsg},model:{value:e.email.value,callback:function(t){e.$set(e.email,"value",t)},expression:"email.value"}}),a("TextInput",{attrs:{label:"Password",inputType:"password",isRequired:!0,isSubmitted:e.isSubmitted,isValid:Boolean(e.password.value)&&e.password.value.length>=6,hasError:e.password.hasError,errorMsg:e.password.errorMsg},model:{value:e.password.value,callback:function(t){e.$set(e.password,"value",t)},expression:"password.value"}}),a("div",{staticStyle:{"text-align":"center"}},[a("Button",{attrs:{type:"submit"}},[e._v("Submit")])],1),e.isSuccess?a("Message",{attrs:{color:"green",text:"User has been Logged in successfully"}}):e._e(),e.formHasError?a("Message",{attrs:{color:"red",text:e.formHasError.message}}):e._e()],1)]},proxy:!0}])},[a("div",{staticClass:"login-social"},[a("GoogleButton"),a("FacebookButton")],1)])},Ue=[],Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Button",{style:{width:"100%"},attrs:{handleClick:e.handleClick,icon:["fab","facebook-f"]}},[e._v("Login with Facebook")]),e.errorMsg?a("Message",{attrs:{color:"red",text:e.errorMsg}}):e._e()],1)},Be=[],Re={name:"FacebookButton",data:function(){return{errorMsg:null}},components:{Button:xe,Message:_},methods:{handleClick:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new h.a.auth.FacebookAuthProvider,t.prev=1,t.next=4,h.a.auth().signInWithPopup(a);case 4:setTimeout((function(){e.$router.push("/")}),1e3),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),e.errorMsg=t.t0.message;case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()}}},Le=Re,$e=Object(l["a"])(Le,Ve,Be,!1,null,null,null),De=$e.exports,Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Button",{style:{width:"100%"},attrs:{handleClick:e.handleClick,icon:["fab","google"],variant:"danger"}},[e._v("Login with Google")]),e.errorMsg?a("Message",{attrs:{color:"red",text:e.errorMsg}}):e._e()],1)},Ne=[],Ae={name:"GoogleButton",data:function(){return{errorMsg:null}},components:{Button:xe,Message:_},methods:{handleClick:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new h.a.auth.GoogleAuthProvider,t.prev=1,t.next=4,h.a.auth().signInWithPopup(a);case 4:setTimeout((function(){e.$router.push("/")}),1e3),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),e.errorMsg=t.t0.message;case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()}}},He=Ae,Fe=Object(l["a"])(He,Ie,Ne,!1,null,null,null),We=Fe.exports,qe={name:"Login",components:{Button:xe,Dialog:Ee,FacebookButton:De,GoogleButton:We,Message:_,TextInput:C},data:function(){return{email:{value:"",hasError:!1,errorMsg:""},password:{value:"",hasError:!1,errorMsg:""},isSubmitted:null,isSuccess:null,formHasError:null}},computed:{isEmail:function(){return je(this.email.value)}},methods:{handleSubmit:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isSubmitted=!0,e.email.value&&!e.isEmail?(e.email.hasError=!0,e.email.errorMsg="Enter a valid email address."):(e.email.hasError=!1,e.email.errorMsg=""),!e.email.value||!e.password.value){t.next=17;break}return t.prev=3,t.next=6,h.a.auth().signInWithEmailAndPassword(e.email.value,e.password.value);case 6:e.isSuccess=!0,e.formHasError=null,setTimeout((function(){e.$router.push("/")}),1e3),t.next=17;break;case 11:t.prev=11,t.t0=t["catch"](3),e.isSuccess=!1,e.formHasError=t.t0,e.isSubmitted=!1,j.$emit("resetInput","");case 17:case"end":return t.stop()}}),t,null,[[3,11]])})))()}}},Ge=qe,ze=(a("5849"),Object(l["a"])(Ge,Pe,Ue,!1,null,"1fd83531",null)),Ye=ze.exports;r["a"].use(d["a"]);var Ze=[{path:"/",component:$,name:"Uploader"},{path:"/explore",component:de,name:"Explore"},{path:"/register",component:Ce,name:"Register"},{path:"/login",component:Ye,name:"Login"}],Je=new d["a"]({routes:Ze}),Ke=a("ecee"),Qe=a("c074"),Xe=a("b702"),et=a("f2d1"),tt=a("ad3d"),at=(a("1c0f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("header",[a("nav",{staticClass:"nav"},[e._t("nav-left",[a("router-link",{attrs:{to:"/"}},[e._v("Back")])]),e.user?a("ul",{staticClass:"nav-right"},[e.user.email&&!e.user.displayName?a("li",[e._v(" Welcome back, "),a("strong",[e._v(e._s(e.emailUsername))])]):e.user.displayName?a("li",[e._v(" Welcome back, "),a("strong",[e._v(e._s(e.firstName))])]):e._e(),e.user.photoURL?a("li",{staticClass:"nav-right-img"},[a("img",{attrs:{src:e.user.photoURL,alt:""}})]):e._e(),a("li",[a("a",{on:{click:function(t){return t.preventDefault(),e.signOut(t)}}},[e._v("Logout")])])]):a("ul",{staticClass:"nav-right"},[a("li",[a("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),a("li",[a("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1)])],2)])])}),rt=[],st=(a("1276"),{name:"Header",data:function(){return{user:null,firstName:null,emailUsername:null,isAuthenticated:!1}},methods:{signOut:function(){h.a.auth().signOut()}},mounted:function(){var e=this;h.a.auth().onAuthStateChanged((function(t){if(t){e.user=t;var a=t.email&&t.email.split("@")[0],r=t.displayName&&t.displayName.split(" ")[0];return e.firstName=r,void(e.emailUsername=a)}e.user=null}))}}),nt=st,ot=(a("7992"),Object(l["a"])(nt,at,rt,!1,null,"29b78b60",null)),it=ot.exports;a("588e"),a("ea7b"),a("66ce"),a("e71f");Ke["c"].add(Qe["c"],Qe["b"],Qe["a"],Xe["a"],et["a"],et["b"]),r["a"].component("font-awesome-icon",tt["a"]),r["a"].component("Header",it);var lt={apiKey:"AIzaSyBcgNUdZo31IDTvypMjfHvPPms3EPWAycM",authDomain:"musicstream-cb9d3.firebaseapp.com",databaseURL:"https://musicstream-cb9d3.firebaseio.com",projectId:"musicstream-cb9d3",storageBucket:"musicstream-cb9d3.appspot.com",messagingSenderId:"801591518704",appId:"1:801591518704:web:fe152ffb22de13e8fc2935"};h.a.initializeApp(lt),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(u)},router:Je}).$mount("#app")},5849:function(e,t,a){"use strict";var r=a("e4d5"),s=a.n(r);s.a},6095:function(e,t,a){},7484:function(e,t,a){},7992:function(e,t,a){"use strict";var r=a("1250"),s=a.n(r);s.a},"87fc":function(e,t,a){"use strict";var r=a("3db9"),s=a.n(r);s.a},afa5:function(e,t,a){},bada:function(e,t,a){},d258:function(e,t,a){"use strict";var r=a("fa6e"),s=a.n(r);s.a},e4d5:function(e,t,a){},edfd:function(e,t,a){e.exports=a.p+"img/play-button.01d43b4e.png"},eef0:function(e,t,a){},f00f:function(e,t,a){"use strict";var r=a("afa5"),s=a.n(r);s.a},fa6e:function(e,t,a){}});
//# sourceMappingURL=app.3c409ad1.js.map