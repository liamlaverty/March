!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(2);class r{start(){(new a.Main).Run(500)}}t.App=r,(new r).start()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(3),r=n(4);t.Main=class{constructor(){this.loopCount=0,this.launchMessage="Start",this.canvasManager=new a.CanvasManager,this.inputManager=new r.InputManager}Run(e){this.Start(),setInterval(()=>{this.Loop(),this.loopCount++},e)}Start(){return console.log(this.launchMessage+" will now be posted to the document "),this.inputManager.InitInputManager(),this.canvasManager.InitCanvasManager(),this.launchMessage}Loop(){console.log("in loop. Rendering "+this.loopCount),this.inputManager.NewInputLoopCheck(),this.canvasManager.DrawCanvas()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CanvasManager=class{constructor(){}InitCanvasManager(){this.theCanvas=document.createElement("canvas")}DrawCanvas(){this.theCanvas.id="workingCanvas",this.theCanvas.height=400,this.theCanvas.width=400;const e=this.GetCanvasContext2D(this.theCanvas);e.fillStyle="green",e.fillRect(10,10,100,100),document.body.appendChild(this.theCanvas)}GetCanvasContext2D(e){return e.getContext("2d")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class a{constructor(){this.currentInputs=new Array}NewInputLoopCheck(){}InitInputManager(){document.addEventListener("keydown",e=>{console.log("key is pressed")})}checkKeyPressIsValid(e){for(let t=0;t<a.validInputs.length;t++)if(a.validInputs[t]===e)return!0;return!1}}a.validInputs=["w","a","s","d"," "],t.InputManager=a}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwbGljYXRpb24vX21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vYXBwbGljYXRpb24vY2FudmFzL0NhbnZhc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwbGljYXRpb24vaW5wdXQvSW5wdXRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiX21haW5fMSIsIkFwcCIsIltvYmplY3QgT2JqZWN0XSIsIk1haW4iLCJSdW4iLCJzdGFydCIsIkNhbnZhc01hbmFnZXJfMSIsIklucHV0TWFuYWdlcl8xIiwidGhpcyIsImxvb3BDb3VudCIsImxhdW5jaE1lc3NhZ2UiLCJjYW52YXNNYW5hZ2VyIiwiQ2FudmFzTWFuYWdlciIsImlucHV0TWFuYWdlciIsIklucHV0TWFuYWdlciIsInRpbWVvdXQiLCJTdGFydCIsInNldEludGVydmFsIiwiTG9vcCIsImNvbnNvbGUiLCJsb2ciLCJJbml0SW5wdXRNYW5hZ2VyIiwiSW5pdENhbnZhc01hbmFnZXIiLCJOZXdJbnB1dExvb3BDaGVjayIsIkRyYXdDYW52YXMiLCJ0aGVDYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImhlaWdodCIsIndpZHRoIiwiY3R4IiwiR2V0Q2FudmFzQ29udGV4dDJEIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJnZXRDb250ZXh0IiwiY3VycmVudElucHV0cyIsIkFycmF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJlc3NlZEtleSIsInZhbGlkSW5wdXRzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxFQUFBLEdBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsR0FBQSxDQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFFBQUEsSUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVBQUFWLEVBR0FDLEVBQUFVLEVBQUEsU0FBQVIsRUFBQVMsRUFBQUMsR0FDQVosRUFBQWEsRUFBQVgsRUFBQVMsSUFDQUcsT0FBQUMsZUFBQWIsRUFBQVMsRUFBQSxDQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1osRUFBQWtCLEVBQUEsU0FBQWhCLEdBQ0Esb0JBQUFpQixlQUFBQyxhQUNBTixPQUFBQyxlQUFBYixFQUFBaUIsT0FBQUMsWUFBQSxDQUF3REMsTUFBQSxXQUV4RFAsT0FBQUMsZUFBQWIsRUFBQSxjQUFpRG1CLE9BQUEsS0FRakRyQixFQUFBc0IsRUFBQSxTQUFBRCxFQUFBRSxHQUVBLEdBREEsRUFBQUEsSUFBQUYsRUFBQXJCLEVBQUFxQixJQUNBLEVBQUFFLEVBQUEsT0FBQUYsRUFDQSxLQUFBRSxHQUFBLGlCQUFBRixRQUFBRyxXQUFBLE9BQUFILEVBQ0EsSUFBQUksRUFBQVgsT0FBQVksT0FBQSxNQUdBLEdBRkExQixFQUFBa0IsRUFBQU8sR0FDQVgsT0FBQUMsZUFBQVUsRUFBQSxXQUF5Q1QsWUFBQSxFQUFBSyxVQUN6QyxFQUFBRSxHQUFBLGlCQUFBRixFQUFBLFFBQUFNLEtBQUFOLEVBQUFyQixFQUFBVSxFQUFBZSxFQUFBRSxFQUFBLFNBQUFBLEdBQWdILE9BQUFOLEVBQUFNLElBQXFCQyxLQUFBLEtBQUFELElBQ3JJLE9BQUFGLEdBSUF6QixFQUFBNkIsRUFBQSxTQUFBMUIsR0FDQSxJQUFBUyxFQUFBVCxLQUFBcUIsV0FDQSxXQUEyQixPQUFBckIsRUFBQSxTQUMzQixXQUFpQyxPQUFBQSxHQUVqQyxPQURBSCxFQUFBVSxFQUFBRSxFQUFBLElBQUFBLEdBQ0FBLEdBSUFaLEVBQUFhLEVBQUEsU0FBQWlCLEVBQUFDLEdBQXNELE9BQUFqQixPQUFBa0IsVUFBQUMsZUFBQTFCLEtBQUF1QixFQUFBQyxJQUd0RC9CLEVBQUFrQyxFQUFBLEdBSUFsQyxJQUFBbUMsRUFBQSxtSENsRkEsTUFBQUMsRUFBQXBDLEVBQUEsR0FFQSxNQUFhcUMsRUFDVEMsU0FDaUIsSUFBSUYsRUFBQUcsTUFDWkMsSUFBSSxNQUhqQnRDLEVBQUFtQyxPQU9vQixJQUFJQSxHQUNaSSx1RkNWWixNQUFBQyxFQUFBMUMsRUFBQSxHQUNBMkMsRUFBQTNDLEVBQUEsR0FFQUUsRUFBQXFDLEtBQUEsTUFJSUQsY0FEUU0sS0FBQUMsVUFBb0IsRUFNWEQsS0FBQUUsY0FBd0IsUUFKckNGLEtBQUtHLGNBQWdCLElBQUlMLEVBQUFNLGNBQ3pCSixLQUFLSyxhQUFlLElBQUlOLEVBQUFPLGFBSzVCWixJQUFJYSxHQUVBUCxLQUFLUSxRQUNMQyxZQUFZLEtBQ1JULEtBQUtVLE9BQ0xWLEtBQUtDLGFBQ05NLEdBSVBiLFFBSUksT0FIQWlCLFFBQVFDLElBQUlaLEtBQUtFLGNBQWdCLHdDQUNqQ0YsS0FBS0ssYUFBYVEsbUJBQ2xCYixLQUFLRyxjQUFjVyxvQkFDWmQsS0FBS0UsY0FHaEJSLE9BQ0lpQixRQUFRQyxJQUFJLHNCQUF3QlosS0FBS0MsV0FFekNELEtBQUtLLGFBQWFVLG9CQUNsQmYsS0FBS0csY0FBY2EsOEZDbkMzQjFELEVBQUE4QyxjQUFBLE1BRUlWLGVBSUFBLG9CQUNJTSxLQUFLaUIsVUFBWUMsU0FBU0MsY0FBYyxVQUk1Q3pCLGFBQ0lNLEtBQUtpQixVQUFVRyxHQUFLLGdCQUNwQnBCLEtBQUtpQixVQUFVSSxPQUFTLElBQ3hCckIsS0FBS2lCLFVBQVVLLE1BQVEsSUFDdkIsTUFBTUMsRUFBTXZCLEtBQUt3QixtQkFBbUJ4QixLQUFLaUIsV0FDekNNLEVBQUlFLFVBQVksUUFDaEJGLEVBQUlHLFNBQVMsR0FBSSxHQUFJLElBQUssS0FFMUJSLFNBQVNTLEtBQUtDLFlBQVk1QixLQUFLaUIsV0FHM0J2QixtQkFBbUJ1QixHQUN2QixPQUFPQSxFQUFVWSxXQUFXLHVGQ3ZCcEMsTUFBYXZCLEVBTVRaLGNBQ0lNLEtBQUs4QixjQUFnQixJQUFJQyxNQVE3QnJDLHFCQVVBQSxtQkFDSXdCLFNBQVNjLGlCQUFpQixVQUFXQyxJQUNqQ3RCLFFBQVFDLElBQUksb0JBZXBCbEIscUJBQXFCd0MsR0FDakIsSUFBSyxJQUFJMUUsRUFBSSxFQUFHQSxFQUFJOEMsRUFBYTZCLFlBQVlDLE9BQVE1RSxJQUNqRCxHQUFJOEMsRUFBYTZCLFlBQVkzRSxLQUFPMEUsRUFDaEMsT0FBTyxFQUdmLE9BQU8sR0E3Q2E1QixFQUFBNkIsWUFBNkIsQ0FBQyxJQUFLLElBQUssSUFBSyxJQUFLLEtBSDlFN0UsRUFBQWdEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IE1haW4gfSBmcm9tICcuL2FwcGxpY2F0aW9uL19tYWluJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IG5ldyBNYWluKCk7ICAgICBcclxuICAgICAgICBtYWluLlJ1big1MDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBhcHBsaWNhdGlvbiA9IG5ldyBBcHAoKTtcclxuYXBwbGljYXRpb24uc3RhcnQoKTsiLCJpbXBvcnQgeyBDYW52YXNNYW5hZ2VyIH0gZnJvbSBcIi4vY2FudmFzL0NhbnZhc01hbmFnZXJcIjtcclxuaW1wb3J0IHsgSW5wdXRNYW5hZ2VyIH0gZnJvbSBcIi4vaW5wdXQvSW5wdXRNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbiB7XHJcbiAgICBwcml2YXRlIGNhbnZhc01hbmFnZXI6IENhbnZhc01hbmFnZXI7XHJcbiAgICBwcml2YXRlIGlucHV0TWFuYWdlcjogSW5wdXRNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBsb29wQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc01hbmFnZXIgPSBuZXcgQ2FudmFzTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyID0gbmV3IElucHV0TWFuYWdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGF1bmNoTWVzc2FnZTogc3RyaW5nID0gJ1N0YXJ0JztcclxuXHJcbiAgICBSdW4odGltZW91dDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3J1bm5pbmcnKTtcclxuICAgICAgICB0aGlzLlN0YXJ0KCk7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkxvb3AoKTtcclxuICAgICAgICAgICAgdGhpcy5sb29wQ291bnQrKztcclxuICAgICAgICB9LCB0aW1lb3V0KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBTdGFydCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGF1bmNoTWVzc2FnZSArICcgd2lsbCBub3cgYmUgcG9zdGVkIHRvIHRoZSBkb2N1bWVudCAnKTtcclxuICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5Jbml0SW5wdXRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNNYW5hZ2VyLkluaXRDYW52YXNNYW5hZ2VyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF1bmNoTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBMb29wKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luIGxvb3AuIFJlbmRlcmluZyAnICsgdGhpcy5sb29wQ291bnQpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIuTmV3SW5wdXRMb29wQ2hlY2soKTtcclxuICAgICAgICB0aGlzLmNhbnZhc01hbmFnZXIuRHJhd0NhbnZhcygpO1xyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBDYW52YXNNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgdGhlQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBJbml0Q2FudmFzTWFuYWdlcigpIHtcclxuICAgICAgICB0aGlzLnRoZUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBEcmF3Q2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMudGhlQ2FudmFzLmlkID0gJ3dvcmtpbmdDYW52YXMnO1xyXG4gICAgICAgIHRoaXMudGhlQ2FudmFzLmhlaWdodCA9IDQwMDtcclxuICAgICAgICB0aGlzLnRoZUNhbnZhcy53aWR0aCA9IDQwMDtcclxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLkdldENhbnZhc0NvbnRleHQyRCh0aGlzLnRoZUNhbnZhcyk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDEwLCAxMCwgMTAwLCAxMDApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMudGhlQ2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEdldENhbnZhc0NvbnRleHQyRCh0aGVDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcclxuICAgICAgICByZXR1cm4gdGhlQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSW5wdXRNYW5hZ2VyIHtcclxuXHJcbiAgICBjdXJyZW50SW5wdXRzOiBzdHJpbmdbXTtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHZhbGlkSW5wdXRzOiBBcnJheTxzdHJpbmc+ID0gWyd3JywgJ2EnLCAncycsICdkJywgJyAnXTtcclxuICAgIHByaXZhdGUga2V5Q3VycmVudGx5UHJlc3NlZDogYm9vbGVhbjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5wdXRzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoZWNrcyBmb3IgbmV3IGlucHV0cy4gU2hvdWxkIGJlIGNhbGxlZCBpbiBhIGxvb3BcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIE5ld0lucHV0TG9vcENoZWNrKCkge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgdXAgdGhlIGlucHV0IG1hbmFnZXJcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIEluaXRJbnB1dE1hbmFnZXIoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2tleSBpcyBwcmVzc2VkJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2tzIGlmIGEgZ2l2ZW4ga2V5IGlzIGluIHRoZSBsaXN0IG9mIHZhbGlkIGtleXNcclxuICAgICAqIFxyXG4gICAgICogVE9ETzogdXNlIGBpbmNsdWRlc2AgaW5zdGVhZCBvZiBhIGZvciBsb29wXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByZXNzZWRLZXlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIGNoZWNrS2V5UHJlc3NJc1ZhbGlkKHByZXNzZWRLZXk6IHN0cmluZykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSW5wdXRNYW5hZ2VyLnZhbGlkSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChJbnB1dE1hbmFnZXIudmFsaWRJbnB1dHNbaV0gPT09IHByZXNzZWRLZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyBpZiAoSW5wdXRNYW5hZ2VyLnZhbGlkSW5wdXRzLmluY2x1ZGVzKHByZXNzZWRLZXkpKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==