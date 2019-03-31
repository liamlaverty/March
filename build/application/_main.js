"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Main = /** @class */ (function () {
    function Main() {
        this.launchMessage = 'Start';
    }
    Main.prototype.Run = function () {
        console.log('running');
    };
    Main.prototype.Start = function () {
        console.log(this.launchMessage + ' will now be posted to the document ');
        return this.launchMessage;
    };
    return Main;
}());
exports.Main = Main;
//# sourceMappingURL=_main.js.map