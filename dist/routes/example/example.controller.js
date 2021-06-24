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
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeExample = exports.addExample = exports.getAllExamples = void 0;
const Example = require("../../model/Example");
// Get all examples
const getAllExamples = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const examples = yield Example.find();
        res.status(200).send(examples);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});
exports.getAllExamples = getAllExamples;
// Add example
const addExample = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const example = new Example({
            name: data.name,
            price: data.price,
            userId: data.userId
        });
        yield example.save();
        res.status(200).send(example);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});
exports.addExample = addExample;
// Remove example
const removeExample = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Example.deleteOne({ _id: req.params.exId });
        res.status(200).send("Success");
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.removeExample = removeExample;
