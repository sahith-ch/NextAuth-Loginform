"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECRET = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("../db");
const middlewares_1 = require("../middlewares");
exports.SECRET = 'SECr3t';
const router = express_1.default.Router();
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield db_1.USERS.findOne({ username, password });
    if (user) {
        const token = (0, middlewares_1.generatetoken)(user);
        res.json({ message: token });
    }
    else {
        res.json({ message: "user not found" });
    }
}));
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield db_1.USERS.findOne({ username: username, password: password });
    if (user) {
        res.json({ message: "user exists" });
    }
    else {
        const newuser = new db_1.USERS({ username, password });
        newuser.save();
        const token = (0, middlewares_1.generatetoken)(user);
        res.json({ message: token });
    }
}));
exports.default = router;
