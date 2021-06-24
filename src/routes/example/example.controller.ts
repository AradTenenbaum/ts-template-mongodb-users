import { Request, Response } from "express";
const Example = require("../../model/Example");

// Get all examples
export const getAllExamples = async (req: Request, res: Response) => {
    try {
        const examples = await Example.find();
        res.status(200).send(examples);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

// Add example
export const addExample = async (req: Request, res: Response) => {
    const data = req.body;
    try {
        const example = new Example({
            name: data.name,
            price: data.price,
            userId: data.userId
        });
        await example.save();
        res.status(200).send(example);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

// Remove example
export const removeExample = async (req: Request, res: Response) => {
    try {
        await Example.deleteOne({_id: req.params.exId});
        res.status(200).send("Success");
    } catch (error) {
        res.status(400).send(error);
    }
};