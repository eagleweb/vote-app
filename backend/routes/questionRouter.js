const express = require('express');
const questionRouter = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Question = require('../models/questions');

questionRouter.route('/')

    .get(function (req, res) {
        Question.find({}, function (err, result) {
            if (err) res.send(err);
            res.json(result);
        })

    })

    .post(function (req, res) {
        if (!req.body.question) {
            res.json({success: false, message: 'Please enter your question'});
        } else {
            const newQuestion = new Question({
                question: req.body.question,
            });

            newQuestion.save(function (err) {
                if (err) {
                    console.log(err);
                    if (err.code === 11000) {
                        return res.json({success: false, message: 'Adding failed. Question exist.'});
                    } else res.send(err);
                }
                res.json({success: true, message: 'Question added successfully'});
            })
        }
    });

module.exports = questionRouter;