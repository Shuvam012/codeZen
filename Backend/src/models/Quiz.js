



import mongoose from "mongoose";

/* -------------------- Question Schema -------------------- */
const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true,
    },
    options: {
        type: [String],
        required: true,
        validate: {
            validator: (val) => val.length === 4,
            message: "Exactly 4 options are required",
        },
    },
    correctAnswer: {
        type: Number, // index 0-3
        required: true,
        min: 0,
        max: 3,
        select: false, //hides by default
    },
});

/* -------------------- Quiz Schema -------------------- */
const quizSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        topic: {
            type: String,
            required: true,
            enum: [
                "JavaScript",
                "DSA",
                "DBMS",
                "Computer Networks",
                "Operating System",
            ],
            index: true,
        },
        questions: {
            type: [questionSchema],
            required: true,
        },
        timeLimit: {
            type: Number, // minutes
            required: true,
            min: 1,
            max: 180,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Quiz", quizSchema);
