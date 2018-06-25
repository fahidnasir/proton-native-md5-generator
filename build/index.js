"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var proton_native_1 = require("proton-native"); // import the proton-native components
var react_1 = __importStar(require("react")); // import from react
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        return (react_1.default.createElement(proton_native_1.App, null,
            react_1.default.createElement(proton_native_1.Window, { title: "MD5 Generator", size: { w: 500, h: 500 } },
                react_1.default.createElement(proton_native_1.Grid, { padded: true },
                    react_1.default.createElement(proton_native_1.Text, { row: 0, column: 0 }, "Project is setup with Typescript and React."),
                    react_1.default.createElement(proton_native_1.TextInput, { onChange: function () { return proton_native_1.Dialog('Error', { title: "Message" }); }, row: 0, column: 1 }, "Proton does not have File Picker or Drag/Drop functionality right now."),
                    react_1.default.createElement(proton_native_1.Picker, { row: 1, column: 1 },
                        react_1.default.createElement(proton_native_1.Picker.Item, null, "Option 1"),
                        react_1.default.createElement(proton_native_1.Picker.Item, null, "Option 2"),
                        react_1.default.createElement(proton_native_1.Picker.Item, null, "Option 3"))))));
    };
    return Main;
}(react_1.Component));
proton_native_1.render(react_1.default.createElement(Main, null));
