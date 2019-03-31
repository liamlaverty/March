"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _main_1 = require("./application/_main");
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.start = function () {
        var main = new _main_1.Main();
        while (true) {
            main.Run();
        }
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=index.js.map