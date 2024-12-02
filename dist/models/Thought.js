import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: [280, 'Your reaction cannot exceed 280 characters!']
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => timestamp.toLocaleString(),
    }
});
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: [1, 'You must enter at least 1 character!'],
        maxlength: [280, 'You cannot enter more than 280 characters!']
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => timestamp.toLocaleString(),
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema],
});
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
const Thought = model('Thought', thoughtSchema);
export default Thought;
