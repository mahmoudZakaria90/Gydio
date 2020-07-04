(function(e){function t(t){for(var r,i,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Gydio/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"040b":function(e,t,a){},"24d8":function(e,t,a){"use strict";var r=a("bada"),s=a.n(r);s.a},"31b5":function(e,t,a){"use strict";var r=a("cd57"),s=a.n(r);s.a},4619:function(e,t,a){"use strict";var r=a("f838"),s=a.n(r);s.a},"56bb":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["Uploader"!==e.$route.name?a("Header"):e._e(),a("router-view")],1)},n=[],i={name:"App"},o=i,l=a("2877"),c=Object(l["a"])(o,s,n,!1,null,null,null),u=c.exports,d=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header",{scopedSlots:e._u([{key:"nav-left",fn:function(){return[a("router-link",{attrs:{to:"/explore"}},[e._v("Explore")])]},proxy:!0}])}),a("div",{staticClass:"uploader container"},[e._m(0),a("h2",{staticClass:"uploader-title"},[e._v("Upload your fav track.")]),a("div",{staticClass:"uploader-placeholder"},[a("input",{attrs:{id:"file_uploader",type:"file",disabled:e.database.externalLink||e.storage.isProgress,hidden:""},on:{change:e.handleFile}}),a("label",{staticClass:"uploader-placeholder-btn",attrs:{for:"file_uploader"}},[e._v(" Choose file "),a("font-awesome-icon",{attrs:{icon:["fas","plus-circle"]}})],1),a("span",[e._v(e._s(e.storage.fileName))]),a("p",[e._v("Or")])]),a("div",{staticClass:"external-link"},[a("div",{staticClass:"external-link-inner"},[a("TextInput",{ref:"externalLinkInput",attrs:{label:"Copy/paste an external link e.g. youtube",isDisabled:Boolean(e.storage.blob),isValid:e.database.isValid,hasError:e.database.isError,errorMsg:e.database.errorMsg,handleOnChange:e.validateExternalURL},model:{value:e.database.externalLink,callback:function(t){e.$set(e.database,"externalLink",t)},expression:"database.externalLink"}})],1)]),e.storage.isProgress?a("div",{staticClass:"progress-outer"},[a("Message",{attrs:{text:e.storage.progressState,icon:e.storage.isSuccess?["fas","check-circle"]:null,iconStyle:{color:"lightgreen"},color:e.storage.isCancelled?"red":null}}),a("div",{staticClass:"progress"},[a("span",[e._v(e._s(e.storage.progress)+"%")]),a("span",{staticClass:"progress-inner",style:{width:e.storage.progress+"%"}}),a("span",{ref:"cancelUploadEl"},[a("font-awesome-icon",{attrs:{icon:["far","times-circle"]}})],1)]),a("p",{domProps:{innerHTML:e._s(e.storage.bytesTransferred/1e6+"/"+e.storage.totalBytes/1e6+" MB")}})],1):e._e(),a("div",{staticClass:"uploader-btn-wrap"},[a("button",e._g({staticClass:"uploader-btn",attrs:{disabled:!e.storage.blob&&!e.database.externalLink||e.database.isError||e.storage.isProgress}},{click:e.storage.blob?e.upload_storage:e.upload_database}),[e._v(" Upload "),a("font-awesome-icon",{attrs:{icon:["fas","arrow-circle-up"]}})],1),e.database.isSuccess?a("Message",{attrs:{text:e.database.progressState,icon:e.database.isSuccess?["fas","check-circle"]:null,iconStyle:{color:"lightgreen"}}}):e._e()],1)])],1)},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"intro"},[a("h1",[e._v("Gydio")]),a("p",[e._v(" Your favorite place for "),a("strong",[e._v("Gaming")]),e._v(" related Music, Themes and Soundtracks. ")])])}],f=(a("4160"),a("b0c0"),a("ac1f"),a("466d"),a("1276"),a("159b"),a("3835")),g=(a("96cf"),a("1da1")),b=a("59ca"),v=a.n(b),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{style:{color:e.color}},[a("span",[e._v(e._s(e.text))]),e.icon?a("font-awesome-icon",{style:e.iconStyle,attrs:{icon:e.icon}}):e._e()],1)},x=[],w={name:"Message",props:{text:String,color:String,icon:Array,iconStyle:Object}},k=w,y=Object(l["a"])(k,h,x,!1,null,null,null),_=y.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",[e.isSubmitted&&!Boolean(e.injectedVal)?a("Message",{attrs:{text:"This field is required!",color:"red"}}):e._e(),a("span",{staticClass:"text-input-label"},[e._v(e._s(e.label)+" "+e._s(e.isRequired?"*":""))]),e.isValid?a("font-awesome-icon",{attrs:{icon:["fas","check-circle"]}}):e._e(),"checkbox"===(e.inputType||"text")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.injectedVal,expression:"injectedVal"}],staticClass:"text-input",class:{hasError:e.isSubmitted&&!e.isValid||e.isSubmitted&&!Boolean(e.injectedVal)},attrs:{disabled:e.isDisabled,type:"checkbox"},domProps:{checked:Array.isArray(e.injectedVal)?e._i(e.injectedVal,null)>-1:e.injectedVal},on:{change:[function(t){var a=e.injectedVal,r=t.target,s=!!r.checked;if(Array.isArray(a)){var n=null,i=e._i(a,n);r.checked?i<0&&(e.injectedVal=a.concat([n])):i>-1&&(e.injectedVal=a.slice(0,i).concat(a.slice(i+1)))}else e.injectedVal=s},e.handleOnChange]}}):"radio"===(e.inputType||"text")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.injectedVal,expression:"injectedVal"}],staticClass:"text-input",class:{hasError:e.isSubmitted&&!e.isValid||e.isSubmitted&&!Boolean(e.injectedVal)},attrs:{disabled:e.isDisabled,type:"radio"},domProps:{checked:e._q(e.injectedVal,null)},on:{change:[function(t){e.injectedVal=null},e.handleOnChange]}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.injectedVal,expression:"injectedVal"}],staticClass:"text-input",class:{hasError:e.isSubmitted&&!e.isValid||e.isSubmitted&&!Boolean(e.injectedVal)},attrs:{disabled:e.isDisabled,type:e.inputType||"text"},domProps:{value:e.injectedVal},on:{change:e.handleOnChange,input:function(t){t.target.composing||(e.injectedVal=t.target.value)}}}),a("Message",{directives:[{name:"show",rawName:"v-show",value:e.hasError&&!e.isValid,expression:"hasError && !isValid"}],attrs:{color:"red",text:e.errorMsg,icon:["far","times-circle"]}})],1)},E=[],j=new r["a"],T={name:"TextInput",components:{Message:_},props:{label:String,inputType:String,value:String,isRequired:Boolean,isSubmitted:Boolean,isValid:Boolean,isDisabled:Boolean,hasError:Boolean,errorMsg:String,handleOnChange:{type:Function,default:function(){}}},data:function(){return{injectedVal:this.value}},mounted:function(){var e=this;j.$on("resetInput",(function(){return e.injectedVal=""}))},watch:{injectedVal:function(){this.$emit("input",this.injectedVal)}}},M=T,O=(a("d358"),Object(l["a"])(M,S,E,!1,null,"f89c8b12",null)),C=O.exports,V={name:"Uploader",components:{Message:_,TextInput:C},data:function(){return{storage:{blob:null,progress:0,bytesTransferred:0,totalBytes:0,progressState:null,fileName:null,isProgress:!1,isSuccess:!1,storage:!1},database:{externalLink:null,progressState:null,isSuccess:!1,isError:!1,isValid:!1,errorMsg:"You need to input a vaild youtube video URL.",pattern:/^https:\/\/www.youtube.com\/watch\?v=\w+/g}}},methods:{handleFile:function(e){var t,a=e.target;if(a.files.length){t=a.files[0];var r=t,s=r.name;this.storage.blob=t,this.storage.fileName=s}},upload_storage:function(){var e=this;this.database.progressState=null,this.database.isSuccess=!1;var t=this.storage.blob.name,a=v.a.storage().ref("music/"+t),r=a.put(this.storage.blob);this.cancelUpload=function(){e.$refs.cancelUploadEl&&e.$refs.cancelUploadEl.addEventListener("click",(function(){return r.cancel()}))},r.on("state_changed",(function(a){var r=a.bytesTransferred,s=a.totalBytes,n=a.state;if("running"===n){var i=Math.floor(r/s*100);e.storage.progressState="Uploading ".concat(t," to Firebase storage..."),e.storage.progress=i,e.storage.bytesTransferred=r,e.storage.totalBytes=s,e.storage.isProgress=!0}}),(function(t){e.storage.isCancelled=!0,e.storage.progressState=t.message,e.resetState("storage",[{key:"isProgress",value:!1},{key:"isCancelled",value:!1}],2e3)}),(function(){e.storage.progressState="Uploading is done successfully",e.storage.isSuccess=!0,e.resetState("storage",[{key:"blob",value:null},{key:"isProgress",value:!1},{key:"fileName",value:null},{key:"isSuccess",value:!1}],2e3)}))},upload_database:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n,i,o,l,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.storage.isProgress=!1,e.storage.progressState=null,e.storage.isSuccess=!1,a=e.database.externalLink.match(e.database.pattern),r=Object(f["a"])(a,1),s=r[0],n=s.split("watch?v="),i=Object(f["a"])(n,2),o=i[1],l=e.database.externalLink.match(e.database.pattern),c=Object(f["a"])(l,1),u=c[0],t.next=8,v.a.database().ref("music/"+o).set({videoURL:u});case 8:e.database.progressState="Video url uploaded successfully!",e.database.isSuccess=!0,e.resetState("database",[{key:"isError",value:!1},{key:"isValid",value:!1},{key:"isSuccess",value:!1},{key:"externalLink",value:""}],2e3,(function(){return j.$emit("resetInput",e.database.externalLink)}));case 11:case"end":return t.stop()}}),t)})))()},validateExternalURL:function(){if(!this.database.pattern.test(this.database.externalLink))return this.database.externalLink?(this.database.isError=!0,void(this.database.isValid=!1)):void(this.database.isError=!1);this.database.isError=!1,this.database.isValid=!0},resetState:function(e,t,a,r){var s=this;setTimeout((function(){t.forEach((function(t){s[e][t.key]=t.value})),r&&r()}),a)},cancelUpload:function(){}},updated:function(){this.cancelUpload()}},P=V,R=(a("7c16"),Object(l["a"])(P,p,m,!1,null,"95ae4aac",null)),U=R.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[e.tracks||e.externalTracks?e._e():a("p",[e._v(e._s(e.loadingState))]),e.tracks?a("h1",[e._v("Explore")]):e._e(),a("TrackWrapper",{attrs:{row:!0,basis:"col-4"}},e._l(e.tracks,(function(t){return a("Track",{key:t.generation,attrs:{name:t.name,dateUploaded:t.dateUploaded,callback:e.changeSelectedTrack}})})),1)],1),a("div",{staticClass:"container"},[e.externalTracks?a("h1",[e._v("External videos 'Youtube'")]):e._e(),a("TrackWrapper",{attrs:{row:!0,basis:"col-6"}},e._l(e.externalTracks,(function(e){return a("ExternalTrack",{key:e.id,attrs:{videoURL:e.videoURL}})})),1)],1),a("audio",{attrs:{src:e.selectedTrack,autoplay:"",controls:"",controlslist:"nodownload"}})])},$=[],B=(a("99af"),a("d81d"),a("4fad"),a("d3b7"),a("3ca3"),a("5319"),a("ddb0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex-wrapper",class:[e.basis,{container:e.container}],style:e.container&&{"max-width":e.container+"px"}},[e.row?a("div",{staticClass:"row"},[e._t("default")],2):e._t("default")],2)}),I=[],D=(a("a9e3"),{name:"Wrapper",props:{basis:String,row:Boolean,container:Number}}),A=D,H=(a("24d8"),Object(l["a"])(A,B,I,!1,null,"6b5738a7",null)),N=H.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"track col",on:{click:function(){return e.callback(e.name)}}},[a("div",{staticClass:"track-placeholder"},[a("img",{attrs:{src:e.img||e.placeholder,alt:""}})]),a("div",{staticClass:"track-name",attrs:{title:e.name}},[e._v(e._s(e.name))]),a("small",[a("strong",[e._v("Uploaded:")]),e._v(" "+e._s(e.dateUploaded)+" ")])])},F=[],W=a("ab9f"),J=a.n(W),z={name:"Track",props:{name:String,dateUploaded:String,img:String,callback:Function},data:function(){return{placeholder:J.a}}},Y=z,G=(a("5881"),Object(l["a"])(Y,q,F,!1,null,"8d832908",null)),Z=G.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("iframe",{staticClass:"col",attrs:{height:"315","same-origin":"",src:e.videoURL,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})},Q=[],X={name:"ExternalTrack",props:{videoURL:String}},ee=X,te=Object(l["a"])(ee,K,Q,!1,null,null,null),ae=te.exports,re={name:"Explore",components:{Track:Z,TrackWrapper:N,ExternalTrack:ae},data:function(){return{tracks:null,selectedTrack:null,externalTracks:null,loadingState:null}},methods:{changeSelectedTrack:function(e){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=v.a.storage().ref("music/"+e),a.next=3,r.getDownloadURL();case 3:t.selectedTrack=a.sent;case 4:case"end":return a.stop()}}),a)})))()}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=v.a.storage().ref("music"),e.loadingState="Loading...",t.next=4,a.listAll();case 4:if(r=t.sent,s=r.items,t.t0=s,!t.t0){t.next=11;break}return t.next=10,Promise.all(s.map(function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){var r,s,n,i,o,l,c,u,d,p,m,g,b,v,h,x;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.name,s=a.child(r),e.next=4,s.getMetadata();case 4:return n=e.sent,i=n.timeCreated,o=n.generation,l=i.split("T"),c=Object(f["a"])(l,2),u=c[0],d=c[1],p=d.split(".")[0],m=["January","February","March","April","May","June","July","August","September","October","November","December"],g=new Date(u),b=g.getFullYear(),v=g.getDay(),h=m[g.getMonth()],x="".concat(h," ").concat(v,", ").concat(b,", ").concat(p,"."),e.abrupt("return",{name:r,dateUploaded:x,generation:o});case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 10:t.t0=t.sent;case 11:return e.tracks=t.t0,t.next=14,fetch("https://musicstream-cb9d3.firebaseio.com/music.json");case 14:return n=t.sent,t.next=17,n.json();case 17:i=t.sent,e.externalTracks=i&&Object.entries(i).map((function(e){var t=Object(f["a"])(e,2),a=t[0],r=t[1].videoURL,s=r.replace("watch?v=","embed/");return{id:a,videoURL:s}})),e.tracks.length||e.externalTracks.length||(e.loadingState="No files to explore!");case 20:case"end":return t.stop()}}),t)})))()}},se=re,ne=(a("31b5"),Object(l["a"])(se,L,$,!1,null,"28d02c4e",null)),ie=ne.exports,oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Dialog",{scopedSlots:e._u([{key:"dialog-title",fn:function(){return[e._v("Register")]},proxy:!0},{key:"dialog-body",fn:function(){return[a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("TextInput",{attrs:{label:"Email",isRequired:!0,isSubmitted:e.isSubmitted,isValid:e.isEmail,hasError:e.email.hasError,errorMsg:e.email.errorMsg},model:{value:e.email.value,callback:function(t){e.$set(e.email,"value",t)},expression:"email.value"}}),a("TextInput",{attrs:{label:"Password",inputType:"password",isRequired:!0,isSubmitted:e.isSubmitted,isValid:e.matchPassword,hasError:e.password.hasError,errorMsg:e.password.errorMsg},model:{value:e.password.value,callback:function(t){e.$set(e.password,"value",t)},expression:"password.value"}}),a("TextInput",{attrs:{label:"Confirm password",inputType:"password",isRequired:!0,isSubmitted:e.isSubmitted,isValid:e.matchPassword},model:{value:e.password.confirmPassword.value,callback:function(t){e.$set(e.password.confirmPassword,"value",t)},expression:"password.confirmPassword.value"}}),a("div",{staticStyle:{"text-align":"center"}},[a("button",{attrs:{type:"submit"}},[e._v("Submit")])]),e.isSuccess?a("Message",{attrs:{color:"green",text:"User has been created successfully"}}):e._e(),e.formHasError?a("Message",{attrs:{color:"red",text:e.formHasError.message}}):e._e()],1)]},proxy:!0}])})},le=[],ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialog-outer"},[a("div",{staticClass:"dialog-inner"},[a("h1",{staticClass:"dialog-title"},[e._t("dialog-title")],2),a("div",{staticClass:"dialog-body"},[e._t("dialog-body")],2)])])},ue=[],de={name:"Dialog"},pe=de,me=(a("bab8"),Object(l["a"])(pe,ce,ue,!1,null,"31e40bde",null)),fe=me.exports,ge=function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)},be={name:"Register",components:{Dialog:fe,Message:_,TextInput:C},data:function(){return{email:{value:"",hasError:!1,errorMsg:""},password:{value:"",hasError:!1,errorMsg:"",confirmPassword:{value:""}},isSubmitted:null,isSuccess:null,formHasError:null}},computed:{isEmail:function(){return ge(this.email.value)},matchPassword:function(){return Boolean(this.password.value)&&Boolean(this.password.confirmPassword.value)&&this.password.value===this.password.confirmPassword.value}},methods:{handleSubmit:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isSubmitted=!0,e.email.value&&!e.isEmail?(e.email.hasError=!0,e.email.errorMsg="Enter a valid email address."):(e.email.hasError=!1,e.email.errorMsg=""),e.password.value&&e.password.confirmPassword.value&&!e.matchPassword?(e.password.hasError=!0,e.password.errorMsg="Please match the 2 password inputs."):(e.password.hasError=!1,e.password.errorMsg=""),!e.isEmail||!e.matchPassword){t.next=16;break}return t.prev=4,t.next=7,v.a.auth().createUserWithEmailAndPassword(e.email.value,e.password.value);case 7:e.isSuccess=!0,setTimeout((function(){e.$router.push("/")}),3e3),e.formHasError=null,t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](4),e.isSuccess=!1,e.formHasError=t.t0;case 16:case"end":return t.stop()}}),t,null,[[4,12]])})))()}}},ve=be,he=Object(l["a"])(ve,oe,le,!1,null,null,null),xe=he.exports,we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Dialog",{scopedSlots:e._u([{key:"dialog-title",fn:function(){return[e._v("Login")]},proxy:!0},{key:"dialog-body",fn:function(){return[a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("TextInput",{attrs:{label:"Email",isRequired:!0,isSubmitted:e.isSubmitted,isValid:e.isEmail,hasError:e.email.hasError,errorMsg:e.email.errorMsg},model:{value:e.email.value,callback:function(t){e.$set(e.email,"value",t)},expression:"email.value"}}),a("TextInput",{attrs:{label:"Password",inputType:"password",isRequired:!0,isSubmitted:e.isSubmitted,isValid:Boolean(e.password.value),hasError:e.password.hasError,errorMsg:e.password.errorMsg},model:{value:e.password.value,callback:function(t){e.$set(e.password,"value",t)},expression:"password.value"}}),a("div",{staticStyle:{"text-align":"center"}},[a("button",{attrs:{type:"submit"}},[e._v("Submit")])]),e.isSuccess?a("Message",{attrs:{color:"green",text:"User has been Logged in successfully"}}):e._e(),e.formHasError?a("Message",{attrs:{color:"red",text:e.formHasError.message}}):e._e()],1)]},proxy:!0}])})},ke=[],ye={name:"Login",components:{Dialog:fe,Message:_,TextInput:C},data:function(){return{email:{value:"",hasError:!1,errorMsg:""},password:{value:"",hasError:!1,errorMsg:""},isSubmitted:null,isSuccess:null,formHasError:null}},computed:{isEmail:function(){return ge(this.email.value)}},methods:{handleSubmit:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isSubmitted=!0,e.email.value&&!e.isEmail?(e.email.hasError=!0,e.email.errorMsg="Enter a valid email address."):(e.email.hasError=!1,e.email.errorMsg=""),!e.email.value||!e.password.value){t.next=18;break}return t.prev=3,t.next=6,v.a.auth().signInWithEmailAndPassword(e.email.value,e.password.value);case 6:e.isSuccess=!0,e.formHasError=null,setTimeout((function(){e.$router.push("/")}),3e3),t.next=18;break;case 11:t.prev=11,t.t0=t["catch"](3),e.isSuccess=!1,e.formHasError=t.t0,e.isSubmitted=!1,j.$emit("resetInput",""),alert("Fail");case 18:case"end":return t.stop()}}),t,null,[[3,11]])})))()}}},_e=ye,Se=Object(l["a"])(_e,we,ke,!1,null,null,null),Ee=Se.exports;r["a"].use(d["a"]);var je=[{path:"/",component:U,name:"Uploader"},{path:"/explore",component:ie,name:"Explore"},{path:"/register",component:xe,name:"Register"},{path:"/login",component:Ee,name:"Login"}],Te=new d["a"]({routes:je}),Me=(a("588e"),a("ecee")),Oe=a("c074"),Ce=a("b702"),Ve=a("ad3d"),Pe=(a("a058"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("header",[a("nav",{staticClass:"nav"},[e._t("nav-left",[a("router-link",{attrs:{to:"/"}},[e._v("Back")])]),e.user?a("ul",{staticClass:"nav-right"},[a("li",[e._v("Welcome back, "+e._s(e.user.email))]),a("li",[a("a",{on:{click:function(t){return t.preventDefault(),e.signOut(t)}}},[e._v("Logout")])])]):a("ul",{staticClass:"nav-right"},[a("li",[a("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),a("li",[a("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1)])],2)])])}),Re=[],Ue={name:"Header",data:function(){return{user:null,isAuthenticated:!1}},methods:{signOut:function(){v.a.auth().signOut()}},mounted:function(){var e=this;v.a.auth().onAuthStateChanged((function(t){e.user=t||null}))}},Le=Ue,$e=(a("4619"),Object(l["a"])(Le,Pe,Re,!1,null,"227643d2",null)),Be=$e.exports;a("ea7b"),a("66ce");Me["c"].add(Oe["c"],Oe["b"],Oe["a"],Ce["a"]),r["a"].component("font-awesome-icon",Ve["a"]),r["a"].component("Header",Be);var Ie={apiKey:"AIzaSyBcgNUdZo31IDTvypMjfHvPPms3EPWAycM",authDomain:"musicstream-cb9d3.firebaseapp.com",databaseURL:"https://musicstream-cb9d3.firebaseio.com",projectId:"musicstream-cb9d3",storageBucket:"musicstream-cb9d3.appspot.com",messagingSenderId:"801591518704",appId:"1:801591518704:web:fe152ffb22de13e8fc2935"};v.a.initializeApp(Ie),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(u)},router:Te}).$mount("#app")},5881:function(e,t,a){"use strict";var r=a("d4c3"),s=a.n(r);s.a},"7c16":function(e,t,a){"use strict";var r=a("56bb"),s=a.n(r);s.a},a058:function(e,t,a){},ab0d:function(e,t,a){},ab9f:function(e,t,a){e.exports=a.p+"img/Placeholder.ce8c463a.svg"},bab8:function(e,t,a){"use strict";var r=a("ab0d"),s=a.n(r);s.a},bada:function(e,t,a){},cd57:function(e,t,a){},d358:function(e,t,a){"use strict";var r=a("040b"),s=a.n(r);s.a},d4c3:function(e,t,a){},f838:function(e,t,a){}});
//# sourceMappingURL=app.049afeec.js.map