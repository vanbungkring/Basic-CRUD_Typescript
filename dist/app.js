"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.listen(port, function () {
    console.log('Updated : Server listening at port %d', port);
});
//# sourceMappingURL=app.js.map