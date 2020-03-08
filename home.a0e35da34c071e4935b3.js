(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{15:function(e,t,n){e.exports=n.p+"textures/checkerboard.bda67ca60caae86413aec7e10112ac3e.jpg"},16:function(e,t,n){e.exports=n.p+"textures/star.1295a0feb51cb51561825078eaf1e493.png"},17:function(e,t){e.exports="attribute float vertexDisplacement;\nuniform float delta;\nvarying float vOpacity;\nvarying vec3 vUv;\n\nvoid main() {\n    vUv = position;\n    vOpacity = vertexDisplacement;\n\n    vec3 p = position;\n\n    p.x += sin(vertexDisplacement) * 50.0;\n    p.y += cos(vertexDisplacement) * 50.0;\n\n    vec4 modelViewPosition = modelViewMatrix * vec4(p, 1.0);\n    gl_Position = projectionMatrix * modelViewPosition;\n}\n"},18:function(e,t){e.exports="uniform float delta;\nvarying float vOpacity;\nvarying vec3 vUv;\n\nvoid main() {\n    float r = 1.0 + cos(vUv.x * delta);\n    float g = 0.5 + sin(delta) * 0.5;\n    float b = 0.0;\n    vec3 rgb = vec3(r, g, b);\n\n    gl_FragColor = vec4(rgb, vOpacity);\n}"},22:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(8),r=n.n(i),o=n(9),s=n(6),c=n(10);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==s.return||s.return()}finally{if(i)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var d=n(15),u=n(16),p=n(17),v=n(18),m=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.showHelpers=!t||void 0===t.showHelpers||t.showHelpers,this.canvas=document.getElementById("application-canvas"),this.container=document.querySelector("main .canvas-container-inner"),this.createTooltip(),this.textureLoader=new a.TextureLoader,s.webgl)this.bindEventHandlers(),this.init(this.canvas),this.render();else{var n=s.getWebGLErrorMessage();this.container.appendChild(n)}}var t,n,i;return t=e,(n=[{key:"bindEventHandlers",value:function(){this.handleClick=this.handleClick.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleResize=this.handleResize.bind(this),this.showTooltip=this.showTooltip.bind(this),this.hideTooltip=this.hideTooltip.bind(this)}},{key:"init",value:function(e){window.addEventListener("resize",this.handleResize),this.setupScene(),this.setupRenderer(e),this.setupCamera(),new o.a(this.renderer,this.scene,this.camera),this.setupLights(),this.showHelpers&&this.setupHelpers(),this.setupRay(),this.setupControls(),this.addFloor(100,100),this.addCube(20),this.addCustomMesh(),this.addParticleSystem(300,5,{spread:{x:50,y:100,z:50}}),this.addGroupObject(10,{depth:20,height:10,spread:{x:20,y:20,z:50},width:5})}},{key:"render",value:function(){var e=this;this.controls.update(),this.updateCustomMesh(),this.renderer.render(this.scene,this.camera),requestAnimationFrame((function(){return e.render()}))}},{key:"createTooltip",value:function(){var e=document.querySelector("main");e||alert("You have no '<main>' tag on ythe HTML page. You need exactly ONE");var t=document.createElement("div");t.setAttribute("class","tooltip"),t.setAttribute("data-cy","tooltip"),e.appendChild(t),this.tooltip=t}},{key:"handleClick",value:function(e){var t=l(this.getNDCCoordinates(e,!0),2),n=t[0],i=t[1];this.raycaster.setFromCamera({x:n,y:i},this.camera);var r=this.raycaster.intersectObjects(this.scene.children);if(r.length>0){var o=16777215*Math.random();r[0].object.material.color.setHex(o);var s=this.raycaster.ray,c=s.direction,h=s.origin,d=new a.ArrowHelper(c,h,100,o);this.scene.add(d)}}},{key:"handleMouseMove",value:function(e){var t=l(this.getNDCCoordinates(e),2);t[0],t[1]}},{key:"handleResize",value:function(e){var t=this.container,n=t.clientWidth,a=t.clientHeight;this.camera.aspect=n/a,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,a)}},{key:"showTooltip",value:function(e){var t=e.target,n=t.name,a=(t.uuid,t.type),i=e.data.global,r=i.x,o=i.y,s=l(this.getScreenCoordinates(r,o),2),c=s[0],h=s[1];this.tooltip.innerHTML="<h4>".concat(n," (").concat(a,")</h4><span><em>Click to cast a ray</em></span>");var d="left: ".concat(c,"px; top: ").concat(h,"px; visibility: visible; opacity: 0.8");this.tooltip.style=d}},{key:"hideTooltip",value:function(e){this.tooltip.style="visibility: hidden"}},{key:"setupScene",value:function(){this.scene=new a.Scene,this.scene.autoUpdate=!0;var e=window.getComputedStyle(this.container),t=new a.Color(e.getPropertyValue("background-color"));this.scene.background=t,this.scene.fog=null,this.scene.name="My Three.js Scene"}},{key:"setupRenderer",value:function(e){this.renderer=new a.WebGLRenderer({antialias:!0,canvas:e}),this.renderer.setClearColor(2236962),this.renderer.setPixelRatio(window.devicePixelRatio||1);var t=this.container,n=t.clientWidth,i=t.clientHeight;this.renderer.setSize(n,i),this.renderer.shadowMap.enabled=!0,this.container.appendChild(this.renderer.domElement),this.renderer.domElement.addEventListener("click",this.handleClick),this.renderer.domElement.addEventListener("mousemove",this.handleMouseMove)}},{key:"setupCamera",value:function(){var e=this.container,t=e.clientWidth/e.clientHeight;this.camera=new a.PerspectiveCamera(75,t,.1,1e4),this.camera.name="Perspective Camera",this.camera.position.set(100,100,100),this.camera.lookAt(this.scene.position)}},{key:"setupLights",value:function(){var e=new a.DirectionalLight(4620980,1);e.name="Directional Light",e.position.set(120,30,-200),e.castShadow=!0,e.shadow.camera.near=10,this.scene.add(e);var t=new a.SpotLight(16755285);t.name="Spotlight",t.position.set(120,30,0),t.castShadow=!0,e.shadow.camera.near=10,this.scene.add(t);var n=new a.AmbientLight(16755285);this.scene.add(n)}},{key:"setupHelpers",value:function(){var e=new a.GridHelper(200,16);e.name="Floor GridHelper",this.scene.add(e);var t=new a.AxesHelper(75);t.name="XYZ AzesHelper",this.scene.add(t);var n=this.scene.getObjectByName("Directional Light"),i=new a.DirectionalLightHelper(n,10);i.name="".concat("Directional Light"," Helper"),this.scene.add(i);var r=new a.CameraHelper(n.shadow.camera);r.name="".concat("Directional Light"," Shadow Camera Helper"),this.scene.add(r);var o=this.scene.getObjectByName("Spotlight"),s=new a.SpotLightHelper(o);s.name="".concat("Spotlight"," Helper"),this.scene.add(s);var c=new a.CameraHelper(o.shadow.camera);c.name="".concat("Spotlight"," Shadow Camera Helper"),this.scene.add(c)}},{key:"setupRay",value:function(){this.raycaster=new a.Raycaster}},{key:"addFloor",value:function(e,t){var n=this,i=new a.PlaneGeometry(e,t,1,1);this.textureLoader.load(d,(function(e){e.wrapS=a.RepeatWrapping,e.wrapT=a.RepeatWrapping,e.repeat.set(4,4);var t=new a.MeshBasicMaterial({map:e,side:a.DoubleSide}),r=new a.Mesh(i,t);r.name="Floor",r.position.y=-.5,r.rotation.x=Math.PI/2,n.scene.add(r),r.cursor="pointer",r.on("mouseover",n.showTooltip),r.on("mouseout",n.hideTooltip)}),void 0,(function(e){alert("Impossible to load the texture ".concat(d))}))}},{key:"setupControls",value:function(){this.controls=new r.a(this.camera,this.renderer.domElement),this.controls.enabled=!0,this.controls.maxDistance=1500,this.controls.minDistance=0,this.controls.autoRotate=!0}},{key:"setupGUI",value:function(){var e=new c.GUI;e.add(this.camera.position,"x").name("Camera X").min(0).max(100),e.add(this.camera.position,"y").name("Camera Y").min(0).max(100),e.add(this.camera.position,"z").name("Camera Z").min(0).max(100)}},{key:"addCustomMesh",value:function(){this.delta=0;var e=new a.ShaderMaterial({vertexShader:p,fragmentShader:v,uniforms:{delta:{value:0}}}),t=new a.SphereBufferGeometry(5,32,32);this.vertexDisplacement=new Float32Array(t.attributes.position.count);for(var n=0;n<this.vertexDisplacement.length;n+=1)this.vertexDisplacement[n]=Math.sin(n);t.setAttribute("vertexDisplacement",new a.BufferAttribute(this.vertexDisplacement,1));var i=new a.Mesh(t,e);i.name="Custom Mesh",i.position.set(5,5,5),this.scene.add(i)}},{key:"updateCustomMesh",value:function(){this.delta+=.1;var e=this.scene.getObjectByName("Custom Mesh");e.material.uniforms.delta.value=.5+.5*Math.sin(this.delta);for(var t=0;t<this.vertexDisplacement.length;t+=1)this.vertexDisplacement[t]=.5+.25*Math.sin(t+this.delta);e.geometry.attributes.vertexDisplacement.needsUpdate=!0}},{key:"addCube",value:function(e){var t=new a.CubeGeometry(e,e,e),n=new a.MeshLambertMaterial({color:16497669}),i=new a.Mesh(t,n);i.name="Cube",i.position.set(0,e/2,0),this.scene.add(i),i.cursor="pointer",i.on("mouseover",this.showTooltip),i.on("mouseout",this.hideTooltip)}},{key:"addParticleSystem",value:function(e,t,n){var i=this,r=new a.Geometry,o=Array(e).fill(n).map(y);r.vertices=o,this.textureLoader.load(u,(function(e){var n=new a.PointsMaterial({alphaTest:.5,map:e,size:t,transparent:!0}),o=new a.Points(r,n);o.name="Stars",o.position.set(-50,50,-50),i.scene.add(o),o.cursor="pointer",o.on("mouseover",i.showTooltip),o.on("mouseout",i.hideTooltip)}),void 0,(function(e){alert("Impossible to load the texture ".concat(u))}))}},{key:"addGroupObject",value:function(e,t){var n=new a.Group;n.name="Group of Boxes";var i=t.depth,r=t.height,o=t.spread,s=t.width,c=new a.BoxGeometry(s,r,i),l=Array(e).fill({geometry:c,spread:o}).map(f),h=!0,d=!1,u=void 0;try{for(var p,v=l[Symbol.iterator]();!(h=(p=v.next()).done);h=!0){var m=p.value;n.add(m)}}catch(e){d=!0,u=e}finally{try{h||null==v.return||v.return()}finally{if(d)throw u}}n.position.set(50,20,50),this.scene.add(n),n.cursor="pointer",n.on("mouseover",this.showTooltip),n.on("mouseout",this.hideTooltip)}},{key:"getNDCCoordinates",value:function(e,t){var n=this.renderer.domElement,a=n.clientHeight,i=n.clientWidth,r=n.offsetLeft,o=n.offsetTop,s=e.clientX-r,c=s/i*2-1,l=e.clientY-o,h=-l/a*2+1;if(t){var d={"Screen Coords (px)":{x:e.screenX,y:e.screenY},"Canvas-Relative Coords (px)":{x:s,y:l},"NDC (adimensional)":{x:c,y:h}};console.table(d,["x","y"])}return[c,h]}},{key:"getScreenCoordinates",value:function(e,t){var n=document.querySelector(".single-responsive-element"),a=this.canvas.getBoundingClientRect(),i=n.getBoundingClientRect(),r=a.x-i.x,o=a.y-i.y;return[(e+1)/2*a.width+r,-.5*(t-1)*a.height+o]}}])&&h(t.prototype,n),i&&h(t,i),e}();function y(e,t){var n=new a.Vector3;return n.x=a.Math.randFloatSpread(e.spread.x),n.y=a.Math.randFloatSpread(e.spread.y),n.z=a.Math.randFloatSpread(e.spread.z),n}function f(e,t){var n=new a.MeshLambertMaterial({color:16777215*Math.random()}),i=new a.Mesh(e.geometry,n);return i.name="Box ".concat(t," in GroupObject"),i.position.x=a.Math.randFloatSpread(e.spread.x),i.position.y=a.Math.randFloatSpread(e.spread.y),i.position.z=a.Math.randFloatSpread(e.spread.z),i.rotation.x=360*Math.random()*(Math.PI/180),i.rotation.y=360*Math.random()*(Math.PI/180),i.rotation.z=360*Math.random()*(Math.PI/180),i}var w=n(3);n(5);window.toggleMobileNav=w.a,new m},3:function(e,t,n){"use strict";function a(){document.querySelector("nav").classList.toggle("nav-grid--expanded")}n.d(t,"a",(function(){return a}))}},[[22,0,8,1]]]);
//# sourceMappingURL=home.a0e35da34c071e4935b3.js.map