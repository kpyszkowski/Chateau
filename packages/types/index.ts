export type TokenPayloadType = {
  id: unknown // TODO: Add apropriate Mongoose ObjectId typings
  email: string
}

export type ConversationParticipantsBodyType = {
  participants: string[]
}
