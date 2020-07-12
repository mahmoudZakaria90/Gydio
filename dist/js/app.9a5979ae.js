(function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},s={app:0},n=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Gydio/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1124:function(e,t,a){},1250:function(e,t,a){},"1c0f":function(e,t,a){},"24d8":function(e,t,a){"use strict";var r=a("bada"),s=a.n(r);s.a},"3db9":function(e,t,a){},"44e2":function(e,t,a){},"4bbb":function(e,t,a){"use strict";var r=a("1124"),s=a.n(r);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["Uploader"!==e.$route.name?a("Header"):e._e(),a("router-view")],1)},n=[],o={name:"App"},i=o,l=a("2877"),c=Object(l["a"])(i,s,n,!1,null,null,null),u=c.exports,d=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header",{scopedSlots:e._u([{key:"nav-left",fn:function(){return[a("router-link",{attrs:{to:"/explore"}},[e._v("Explore")])]},proxy:!0}])}),a("div",{staticClass:"uploader container"},[e._m(0),a("h2",{staticClass:"uploader-title"},[e._v("Upload your fav track.")]),a("div",{staticClass:"uploader-placeholder"},[a("input",{attrs:{id:"file_uploader",type:"file",disabled:e.database.externalLink||e.storage.isProgress,hidden:""},on:{change:e.handleFile}}),a("label",{staticClass:"uploader-placeholder-btn",attrs:{for:"file_uploader"}},[e._v(" Choose file "),a("font-awesome-icon",{attrs:{icon:["fas","plus-circle"]}})],1),a("span",[e._v(e._s(e.storage.fileName))]),a("p",[e._v("Or")])]),a("div",{staticClass:"external-link"},[a("div",{staticClass:"external-link-inner"},[a("TextInput",{attrs:{label:"Copy/paste an external link e.g. youtube",isDisabled:e.storage.blob,isValid:e.database.isValid,hasError:e.database.isError,errorMsg:e.database.errorMsg,handleOnChange:e.validateExternalURL},model:{value:e.database.externalLink,callback:function(t){e.$set(e.database,"externalLink",t)},expression:"database.externalLink"}}),a("Message",{attrs:{color:"red",text:e.database.uploadErrorMsg}})],1)]),e.storage.isProgress?a("div",{staticClass:"progress-outer"},[a("Message",{attrs:{text:e.storage.progressState,icon:e.storage.isSuccess?["fas","check-circle"]:null,iconStyle:{color:"lightgreen"},color:e.storage.isCancelled?"red":null}}),a("div",{staticClass:"progress"},[a("span",[e._v(e._s(e.storage.progress)+"%")]),a("span",{staticClass:"progress-inner",style:{width:e.storage.progress+"%"}}),a("span",{ref:"cancelUploadEl"},[a("font-awesome-icon",{attrs:{icon:["far","times-circle"]}})],1)]),a("p",{domProps:{innerHTML:e._s(e.storage.bytesTransferred/1e6+"/"+e.storage.totalBytes/1e6+" MB")}})],1):e._e(),a("div",{staticClass:"uploader-btn-wrap"},[a("button",e._g({attrs:{disabled:!e.storage.blob&&!e.database.externalLink||e.database.isError||e.storage.isProgress}},{click:e.storage.blob?e.upload_storage:e.upload_database}),[e._v(" Upload "),a("font-awesome-icon",{attrs:{icon:["fas","arrow-circle-up"]}})],1),e.database.isSuccess?a("Message",{attrs:{text:e.database.progressState,icon:e.database.isSuccess?["fas","check-circle"]:null,iconStyle:{color:"lightgreen"}}}):e._e()],1)])],1)},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"intro"},[a("h1",[e._v("Gydio")]),a("p",[e._v(" Your favorite place for "),a("strong",[e._v("Gaming")]),e._v(" related Music, Themes and Soundtracks. ")])])}],f=(a("4160"),a("b0c0"),a("ac1f"),a("466d"),a("1276"),a("159b"),a("3835")),g=(a("96cf"),a("1da1")),b=a("59ca"),v=a.n(b),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{style:Object.assign({},e.styleObj,{color:e.color})},[a("span",[e._v(e._s(e.text))]),e.icon?a("font-awesome-icon",{style:e.iconStyle,attrs:{icon:e.icon}}):e._e()],1)},w=[],x={name:"Message",props:{text:String,color:String,styleObj:Object,icon:Array,iconStyle:Object}},k=x,y=Object(l["a"])(k,h,w,!1,null,null,null),_=y.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",[a("span",{staticClass:"text-input-label"},[e._v(e._s(e.label)+" "+e._s(e.isRequired?"*":""))]),e.isSubmitted&&!Boolean(e.injectedVal)?a("Message",{attrs:{text:"This field is required!",color:"red",styleObj:{display:"inline-block"}}}):e._e(),e.isValid?a("font-awesome-icon",{attrs:{icon:["fas","check-circle"]}}):e._e(),"checkbox"===(e.inputType||"text")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.injectedVal,expression:"injectedVal"}],staticClass:"text-input",class:{hasError:e.hasError||e.isSubmitted&&!Boolean(e.injectedVal)},attrs:{disabled:e.isDisabled,type:"checkbox"},domProps:{checked:Array.isArray(e.injectedVal)?e._i(e.injectedVal,null)>-1:e.injectedVal},on:{change:[function(t){var a=e.injectedVal,r=t.target,s=!!r.checked;if(Array.isArray(a)){var n=null,o=e._i(a,n);r.checked?o<0&&(e.injectedVal=a.concat([n])):o>-1&&(e.injectedVal=a.slice(0,o).concat(a.slice(o+1)))}else e.injectedVal=s},e.handleOnChange]}}):"radio"===(e.inputType||"text")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.injectedVal,expression:"injectedVal"}],staticClass:"text-input",class:{hasError:e.hasError||e.isSubmitted&&!Boolean(e.injectedVal)},attrs:{disabled:e.isDisabled,type:"radio"},domProps:{checked:e._q(e.injectedVal,null)},on:{change:[function(t){e.injectedVal=null},e.handleOnChange]}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.injectedVal,expression:"injectedVal"}],staticClass:"text-input",class:{hasError:e.hasError||e.isSubmitted&&!Boolean(e.injectedVal)},attrs:{disabled:e.isDisabled,type:e.inputType||"text"},domProps:{value:e.injectedVal},on:{change:e.handleOnChange,input:function(t){t.target.composing||(e.injectedVal=t.target.value)}}}),a("Message",{directives:[{name:"show",rawName:"v-show",value:e.hasError&&!e.isValid,expression:"hasError && !isValid"}],attrs:{color:"red",text:e.errorMsg,icon:["far","times-circle"]}})],1)},E=[],j=new r["a"],M={name:"TextInput",components:{Message:_},props:{label:String,inputType:String,value:String,isRequired:Boolean,isSubmitted:Boolean,isValid:Boolean,isDisabled:Boolean,hasError:Boolean,errorMsg:String,handleOnChange:{type:Function,default:function(){}}},data:function(){return{injectedVal:this.value}},mounted:function(){var e=this;j.$on("resetInput",(function(){return e.injectedVal=""}))},watch:{injectedVal:function(){this.$emit("input",this.injectedVal)}}},O=M,T=(a("d258"),Object(l["a"])(O,S,E,!1,null,"47c6f903",null)),C=T.exports,P={name:"Uploader",components:{Message:_,TextInput:C},data:function(){return{storage:{blob:null,progress:0,bytesTransferred:0,totalBytes:0,progressState:null,fileName:null,isProgress:!1,isSuccess:!1,storage:!1},database:{externalLink:null,progressState:null,isSuccess:!1,isError:!1,isValid:!1,errorMsg:"You need to input a vaild youtube video URL.",uploadErrorMsg:null,pattern:/^https:\/\/www.youtube.com\/watch\?v=\w+(-)?\w+/g}}},methods:{handleFile:function(e){var t,a=e.target;if(a.files.length){t=a.files[0];var r=t,s=r.name;this.storage.blob=t,this.storage.fileName=s}},upload_storage:function(){var e=this;this.database.progressState=null,this.database.isSuccess=!1;var t=this.storage.blob.name,a=v.a.storage().ref("music/"+t),r=a.put(this.storage.blob);this.cancelUpload=function(){e.$refs.cancelUploadEl&&e.$refs.cancelUploadEl.addEventListener("click",(function(){return r.cancel()}))},r.on("state_changed",(function(a){var r=a.bytesTransferred,s=a.totalBytes,n=a.state;if("running"===n){var o=Math.floor(r/s*100);e.storage.progressState="Uploading ".concat(t," to Firebase storage..."),e.storage.progress=o,e.storage.bytesTransferred=r,e.storage.totalBytes=s,e.storage.isProgress=!0}}),(function(t){e.storage.isCancelled=!0,e.storage.progressState=t.message,e.resetState("storage",[{key:"isProgress",value:!1},{key:"isCancelled",value:!1}],2e3)}),(function(){e.storage.progressState="Uploading is done successfully",e.storage.isSuccess=!0,e.resetState("storage",[{key:"blob",value:null},{key:"isProgress",value:!1},{key:"fileName",value:null},{key:"isSuccess",value:!1}],2e3)}))},upload_database:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n,o,i,l,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.storage.isProgress=!1,e.storage.progressState=null,e.storage.isSuccess=!1,a=e.database.externalLink.match(e.database.pattern),r=Object(f["a"])(a,1),s=r[0],n=s.split("watch?v="),o=Object(f["a"])(n,2),i=o[1],l=e.database.externalLink.match(e.database.pattern),c=Object(f["a"])(l,1),u=c[0],t.prev=6,t.next=9,v.a.database().ref("music/"+i).set({videoURL:u,uploaded:Date.now()});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](6),e.uploadErrorMsg=t.t0.message;case 14:e.database.progressState="Video url uploaded successfully!",e.database.isSuccess=!0,e.resetState("database",[{key:"isError",value:!1},{key:"isValid",value:!1},{key:"isSuccess",value:!1},{key:"externalLink",value:""}],2e3,(function(){return j.$emit("resetInput",e.database.externalLink)}));case 17:case"end":return t.stop()}}),t,null,[[6,11]])})))()},validateExternalURL:function(){if(!this.database.pattern.test(this.database.externalLink))return this.database.externalLink?(this.database.isError=!0,void(this.database.isValid=!1)):void(this.database.isError=!1);this.database.isError=!1,this.database.isValid=!0},resetState:function(e,t,a,r){var s=this;setTimeout((function(){t.forEach((function(t){s[e][t.key]=t.value})),r&&r()}),a)},cancelUpload:function(){}},updated:function(){this.cancelUpload()}},V=P,R=(a("696e"),Object(l["a"])(V,p,m,!1,null,"0de2b926",null)),U=R.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[e.tracks?a("h1",[e._v("Explore")]):e._e(),e.tracks.length||e.externalTracks?e._e():a("Message",{attrs:{text:e.loadingState}}),e.errorMsg?a("Message",{attrs:{text:e.errorMsg,color:"red"}}):e._e(),a("TrackWrapper",{attrs:{row:!0,basis:"col-4"}},e._l(e.sortedTracks,(function(t){return a("Track",{key:t.generation,attrs:{name:t.name,dateUploaded:t.dateUploaded,callback:e.changeSelectedTrack}})})),1)],1),a("div",{staticClass:"container"},[e.externalTracks?a("h1",[e._v("External videos 'Youtube'")]):e._e(),a("TrackWrapper",{attrs:{row:!0,basis:"col-6"}},e._l(e.externalTracks,(function(e){return a("ExternalTrack",{key:e.id,attrs:{videoURL:e.videoURL}})})),1)],1),a("audio",{attrs:{src:e.selectedTrack,autoplay:"",controls:"",controlslist:"nodownload"}})])},L=[],$=(a("99af"),a("d81d"),a("fb6a"),a("4fad"),a("d3b7"),a("3ca3"),a("5319"),a("ddb0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex-wrapper",class:[e.basis,{container:e.container}],style:e.container&&{"max-width":e.container+"px"}},[e.row?a("div",{staticClass:"row"},[e._t("default")],2):e._t("default")],2)}),D=[],I=(a("a9e3"),{name:"Wrapper",props:{basis:String,row:Boolean,container:Number}}),A=I,N=(a("24d8"),Object(l["a"])(A,$,D,!1,null,"6b5738a7",null)),H=N.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"track col",on:{click:function(){return e.callback(e.name)}}},[a("div",{staticClass:"track-placeholder"},[a("img",{attrs:{src:e.img||e.placeholder,alt:""}})]),a("div",{staticClass:"track-name",attrs:{title:e.name}},[e._v(e._s(e.name))]),a("small",[a("strong",[e._v("Uploaded:")]),e._v(" "+e._s(e.dateUploaded)+" ")])])},W=[],q=a("edfd"),G=a.n(q),z={name:"Track",props:{name:String,dateUploaded:String,img:String,callback:Function},data:function(){return{placeholder:G.a}}},Y=z,Z=(a("4bbb"),Object(l["a"])(Y,F,W,!1,null,"59ce037f",null)),J=Z.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("iframe",{staticClass:"col",attrs:{height:"315","same-origin":"",src:e.videoURL,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})},Q=[],X={name:"ExternalTrack",props:{videoURL:String}},ee=X,te=Object(l["a"])(ee,K,Q,!1,null,null,null),ae=te.exports,re={name:"Explore",components:{Track:J,TrackWrapper:H,ExternalTrack:ae,Message:_},data:function(){return{tracks:[],selectedTrack:null,externalTracks:null,loadingState:null,errorMsg:null}},methods:{changeSelectedTrack:function(e){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=v.a.storage().ref("music/"+e),a.prev=1,a.next=4,r.getDownloadURL();case 4:t.selectedTrack=a.sent,a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](1),t.errorMsg=a.t0.message;case 10:case"end":return a.stop()}}),a,null,[[1,7]])})))()}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=v.a.storage().ref("music"),e.loadingState="Loading...",t.prev=2,t.next=5,a.listAll();case 5:if(r=t.sent,s=r.items,t.t0=s,!t.t0){t.next=12;break}return t.next=11,Promise.all(s.map(function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){var r,s,n,o,i,l,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.name,s=a.child(r),e.next=4,s.getMetadata();case 4:return n=e.sent,o=n.timeCreated,i=n.generation,l=new Date(o).toDateString(),c=new Date(o).toTimeString().split(" GMT")[0],u="".concat(l,", ").concat(c,"."),e.abrupt("return",{name:r,originalDate:o,dateUploaded:u,generation:i});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 11:t.t0=t.sent;case 12:e.tracks=t.t0,t.next=18;break;case 15:t.prev=15,t.t1=t["catch"](2),e.errorMsg=t.t1.message;case 18:return t.prev=18,t.next=21,fetch("https://musicstream-cb9d3.firebaseio.com/music.json");case 21:return n=t.sent,t.next=24,n.json();case 24:o=t.sent,e.externalTracks=o&&Object.entries(o).map((function(e){var t=Object(f["a"])(e,2),a=t[0],r=t[1],s=r.videoURL,n=r.uploaded,o=s.replace("watch?v=","embed/");return{id:a,videoURL:o,uploaded:n}})).sort((function(e,t){return t.uploaded-e.uploaded})),e.tracks.length||e.externalTracks||(e.loadingState="No files to explore!"),t.next=32;break;case 29:t.prev=29,t.t2=t["catch"](18),e.errorMsg=t.t2.message;case 32:case"end":return t.stop()}}),t,null,[[2,15],[18,29]])})))()},computed:{sortedTracks:function(){return this.tracks.slice(0).sort((function(e,t){var a=e.originalDate,r=t.originalDate;return new Date(r).getTime()-new Date(a).getTime()}))}}},se=re,ne=(a("a72f"),Object(l["a"])(se,B,L,!1,null,"21149f1f",null)),oe=ne.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Dialog",{scopedSlots:e._u([{key:"dialog-title",fn:function(){return[e._v("Register")]},proxy:!0},{key:"dialog-body",fn:function(){return[a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("TextInput",{attrs:{label:"Email",isRequired:!0,isSubmitted:e.isSubmitted,isValid:e.isEmail,hasError:e.email.hasError,errorMsg:e.email.errorMsg},model:{value:e.email.value,callback:function(t){e.$set(e.email,"value",t)},expression:"email.value"}}),a("TextInput",{attrs:{label:"Password",inputType:"password",isRequired:!0,isSubmitted:e.isSubmitted,isValid:e.matchPassword,hasError:e.password.hasError,errorMsg:e.password.errorMsg},model:{value:e.password.value,callback:function(t){e.$set(e.password,"value",t)},expression:"password.value"}}),a("TextInput",{attrs:{label:"Confirm password",inputType:"password",isRequired:!0,isSubmitted:e.isSubmitted,isValid:e.matchPassword},model:{value:e.password.confirmPassword.value,callback:function(t){e.$set(e.password.confirmPassword,"value",t)},expression:"password.confirmPassword.value"}}),a("div",{staticStyle:{"text-align":"center"}},[a("Button",{attrs:{type:"submit"}},[e._v("Submit")])],1),e.isSuccess?a("Message",{attrs:{color:"green",text:"User has been created successfully"}}):e._e(),e.formHasError?a("Message",{attrs:{color:"red",text:e.formHasError.message}}):e._e()],1)]},proxy:!0}])})},le=[],ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{class:[e.iconPosition,e.variant],style:{styleObj:e.styleObj},attrs:{text:e.text,disabled:e.isDisabled,type:e.type},on:{click:e.handleClick}},[e.icon&&"right"!==e.iconPosition?a("font-awesome-icon",{style:e.iconStyle,attrs:{icon:e.icon}}):e._e(),e._t("default"),e.icon&&"right"===e.iconPosition?a("font-awesome-icon",{style:e.iconStyle,attrs:{icon:e.icon}}):e._e()],2)},ue=[],de={name:"Button",props:{styleObj:Object,variant:String,text:String,type:String,icon:Array,iconStyle:Object,iconPosition:{default:"left",type:String},isDisabled:Boolean,handleClick:{type:Function,default:function(){}}}},pe=de,me=(a("87fc"),Object(l["a"])(pe,ce,ue,!1,null,"058ac4db",null)),fe=me.exports,ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialog-outer"},[a("div",{staticClass:"dialog-inner"},[a("h1",{staticClass:"dialog-title"},[e._t("dialog-title")],2),a("div",{staticClass:"dialog-body"},[e._t("dialog-body")],2),e._t("default")],2)])},be=[],ve={name:"Dialog"},he=ve,we=(a("b08b"),Object(l["a"])(he,ge,be,!1,null,"2e3a0392",null)),xe=we.exports,ke=function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)},ye={name:"Register",components:{Button:fe,Dialog:xe,Message:_,TextInput:C},data:function(){return{email:{value:"",hasError:!1,errorMsg:""},password:{value:"",hasError:!1,errorMsg:"",confirmPassword:{value:""}},isSubmitted:null,isSuccess:null,formHasError:null}},computed:{isEmail:function(){return ke(this.email.value)},matchPassword:function(){return Boolean(this.password.value)&&Boolean(this.password.confirmPassword.value)&&this.password.value===this.password.confirmPassword.value}},methods:{handleSubmit:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isSubmitted=!0,e.email.value&&!e.isEmail?(e.email.hasError=!0,e.email.errorMsg="Enter a valid email address."):(e.email.hasError=!1,e.email.errorMsg=""),e.password.value&&e.password.confirmPassword.value&&!e.matchPassword?(e.password.hasError=!0,e.password.errorMsg="Please match the 2 password inputs."):(e.password.hasError=!1,e.password.errorMsg=""),!e.isEmail||!e.matchPassword){t.next=19;break}return t.prev=4,t.next=7,v.a.auth().createUserWithEmailAndPassword(e.email.value,e.password.value);case 7:return e.isSuccess=!0,a=v.a.auth().currentUser,t.next=11,a.sendEmailVerification();case 11:setTimeout((function(){e.$router.push("/")}),3e3),e.formHasError=null,t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](4),e.isSuccess=!1,e.formHasError=t.t0;case 19:case"end":return t.stop()}}),t,null,[[4,15]])})))()}}},_e=ye,Se=Object(l["a"])(_e,ie,le,!1,null,null,null),Ee=Se.exports,je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Dialog",{scopedSlots:e._u([{key:"dialog-title",fn:function(){return[e._v("Login")]},proxy:!0},{key:"dialog-body",fn:function(){return[a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("TextInput",{attrs:{label:"Email",isRequired:!0,isSubmitted:e.isSubmitted,isValid:e.isEmail,hasError:e.email.hasError,errorMsg:e.email.errorMsg},model:{value:e.email.value,callback:function(t){e.$set(e.email,"value",t)},expression:"email.value"}}),a("TextInput",{attrs:{label:"Password",inputType:"password",isRequired:!0,isSubmitted:e.isSubmitted,isValid:Boolean(e.password.value)&&e.password.value.length>=6,hasError:e.password.hasError,errorMsg:e.password.errorMsg},model:{value:e.password.value,callback:function(t){e.$set(e.password,"value",t)},expression:"password.value"}}),a("div",{staticStyle:{"text-align":"center"}},[a("Button",{attrs:{type:"submit"}},[e._v("Submit")])],1),e.isSuccess?a("Message",{attrs:{color:"green",text:"User has been Logged in successfully"}}):e._e(),e.formHasError?a("Message",{attrs:{color:"red",text:e.formHasError.message}}):e._e()],1)]},proxy:!0}])},[a("div",{staticClass:"login-social"},[a("FacebookButton"),a("GoogleButton")],1)])},Me=[],Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Button",{style:{width:"100%"},attrs:{handleClick:e.handleClick,icon:["fab","facebook-f"]}},[e._v("Login with Facebook")])},Te=[],Ce={name:"FacebookButton",components:{Button:fe},methods:{handleClick:function(){return Object(g["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=new v.a.auth.FacebookAuthProvider,v.a.auth().signInWithPopup(t);case 2:case"end":return e.stop()}}),e)})))()}}},Pe=Ce,Ve=Object(l["a"])(Pe,Oe,Te,!1,null,null,null),Re=Ve.exports,Ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Button",{style:{width:"100%"},attrs:{handleClick:e.handleClick,icon:["fab","google"],variant:"danger"}},[e._v("Login with Google")])},Be=[],Le={name:"GoogleButton",components:{Button:fe},methods:{handleClick:function(){return Object(g["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=new v.a.auth.GoogleAuthProvider,v.a.auth().signInWithPopup(t);case 2:case"end":return e.stop()}}),e)})))()}}},$e=Le,De=Object(l["a"])($e,Ue,Be,!1,null,null,null),Ie=De.exports,Ae={name:"Login",components:{Button:fe,Dialog:xe,FacebookButton:Re,GoogleButton:Ie,Message:_,TextInput:C},data:function(){return{email:{value:"",hasError:!1,errorMsg:""},password:{value:"",hasError:!1,errorMsg:""},isSubmitted:null,isSuccess:null,formHasError:null}},computed:{isEmail:function(){return ke(this.email.value)}},methods:{handleSubmit:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isSubmitted=!0,e.email.value&&!e.isEmail?(e.email.hasError=!0,e.email.errorMsg="Enter a valid email address."):(e.email.hasError=!1,e.email.errorMsg=""),!e.email.value||!e.password.value){t.next=17;break}return t.prev=3,t.next=6,v.a.auth().signInWithEmailAndPassword(e.email.value,e.password.value);case 6:e.isSuccess=!0,e.formHasError=null,setTimeout((function(){e.$router.push("/")}),3e3),t.next=17;break;case 11:t.prev=11,t.t0=t["catch"](3),e.isSuccess=!1,e.formHasError=t.t0,e.isSubmitted=!1,j.$emit("resetInput","");case 17:case"end":return t.stop()}}),t,null,[[3,11]])})))()}}},Ne=Ae,He=(a("ea91"),Object(l["a"])(Ne,je,Me,!1,null,"a20c3f96",null)),Fe=He.exports;r["a"].use(d["a"]);var We=[{path:"/",component:U,name:"Uploader"},{path:"/explore",component:oe,name:"Explore"},{path:"/register",component:Ee,name:"Register"},{path:"/login",component:Fe,name:"Login"}],qe=new d["a"]({routes:We}),Ge=a("ecee"),ze=a("c074"),Ye=a("b702"),Ze=a("f2d1"),Je=a("ad3d"),Ke=(a("1c0f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("header",[a("nav",{staticClass:"nav"},[e._t("nav-left",[a("router-link",{attrs:{to:"/"}},[e._v("Back")])]),e.user?a("ul",{staticClass:"nav-right"},[e.user.email&&!e.user.displayName?a("li",[e._v(" Welcome back, "),a("strong",[e._v(e._s(e.emailUsername))])]):e.user.displayName?a("li",[e._v(" Welcome back, "),a("strong",[e._v(e._s(e.firstName))])]):e._e(),e.user.photoURL?a("li",{staticClass:"nav-right-img"},[a("img",{attrs:{src:e.user.photoURL,alt:""}})]):e._e(),a("li",[a("a",{on:{click:function(t){return t.preventDefault(),e.signOut(t)}}},[e._v("Logout")])])]):a("ul",{staticClass:"nav-right"},[a("li",[a("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),a("li",[a("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1)])],2)])])}),Qe=[],Xe={name:"Header",data:function(){return{user:null,firstName:null,emailUsername:null,isAuthenticated:!1}},methods:{signOut:function(){v.a.auth().signOut()}},mounted:function(){var e=this;v.a.auth().onAuthStateChanged((function(t){if(t){e.user=t;var a=t.email&&t.email.split("@")[0],r=t.displayName&&t.displayName.split(" ")[0];return e.firstName=r,void(e.emailUsername=a)}e.user=null}))}},et=Xe,tt=(a("7992"),Object(l["a"])(et,Ke,Qe,!1,null,"29b78b60",null)),at=tt.exports;a("588e"),a("ea7b"),a("66ce");Ge["c"].add(ze["c"],ze["b"],ze["a"],Ye["a"],Ze["a"],Ze["b"]),r["a"].component("font-awesome-icon",Je["a"]),r["a"].component("Header",at);var rt={apiKey:"AIzaSyBcgNUdZo31IDTvypMjfHvPPms3EPWAycM",authDomain:"musicstream-cb9d3.firebaseapp.com",databaseURL:"https://musicstream-cb9d3.firebaseio.com",projectId:"musicstream-cb9d3",storageBucket:"musicstream-cb9d3.appspot.com",messagingSenderId:"801591518704",appId:"1:801591518704:web:fe152ffb22de13e8fc2935"};v.a.initializeApp(rt),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(u)},router:qe}).$mount("#app")},6443:function(e,t,a){},"696e":function(e,t,a){"use strict";var r=a("6443"),s=a.n(r);s.a},7992:function(e,t,a){"use strict";var r=a("1250"),s=a.n(r);s.a},"87fc":function(e,t,a){"use strict";var r=a("3db9"),s=a.n(r);s.a},a72f:function(e,t,a){"use strict";var r=a("44e2"),s=a.n(r);s.a},b08b:function(e,t,a){"use strict";var r=a("c2cb"),s=a.n(r);s.a},b157:function(e,t,a){},bada:function(e,t,a){},c2cb:function(e,t,a){},d258:function(e,t,a){"use strict";var r=a("fa6e"),s=a.n(r);s.a},ea91:function(e,t,a){"use strict";var r=a("b157"),s=a.n(r);s.a},edfd:function(e,t,a){e.exports=a.p+"img/play-button.01d43b4e.png"},fa6e:function(e,t,a){}});
//# sourceMappingURL=app.9a5979ae.js.map