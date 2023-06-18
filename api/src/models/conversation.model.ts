import { Schema, model } from 'mongoose'

const conversationSchema = new Schema({
  name: {
    type: String,
    maxLength: 32,
  },
  participants: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
  messages: [
    {
      _id: {
        type: Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
      },
      author: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      content: {
        type: String,
        required: true,
        maxLength: 512,
      },
      createdAt: {
        type: Date,
        required: true,
        default: Date.now,
      },
    },
  ],
})

export const ConversationModel = model('Conversation', conversationSchema)
