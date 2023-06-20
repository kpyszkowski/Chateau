import { ServerError } from '@/helpers'
import { ConversationModel, UserModel } from '@/models'
import { Types } from 'mongoose'
import type {
  ConversationServiceAddParticipantsParametersType,
  ConversationServiceCreateParametersType,
  ConversationServiceGetListingParametersType,
  ConversationServiceGetMessagesParametersType,
  ConversationServiceLeaveParametersType,
  ConversationServiceSetNameParametersType,
} from '@/types'

const { ObjectId } = Types

class ConversationService {
  async createConversation(
    parameters: ConversationServiceCreateParametersType,
  ) {
    const { userId, participantIds } = parameters

    const currentUser = await UserModel.findById(userId)
    if (!currentUser) {
      throw ServerError('Could not find user record in a database')
    }

    const participants = [
      ...participantIds.map((id) => new ObjectId(id)),
      currentUser,
    ]

    const newConversation = await ConversationModel.create({
      participants,
      host: currentUser._id,
    })

    if (!newConversation) {
      throw ServerError('Could not write new conversation record to database')
    }

    return {
      conversationId: newConversation._id,
    }
  }

  async leaveConversation(parameters: ConversationServiceLeaveParametersType) {
    const { userId, conversationId } = parameters

    const conversationRecord = await ConversationModel.findByIdAndUpdate(
      conversationId,
      {
        $pull: {
          participants: new ObjectId(userId),
        },
      },
    )

    if (!conversationRecord) {
      throw ServerError('Could not find conversation record in a database')
    }

    return {
      participants: conversationRecord.participants,
    }
  }

  async addParticipants(
    parameters: ConversationServiceAddParticipantsParametersType,
  ) {
    const { participantIds, conversationId } = parameters

    const participants = participantIds.map((id) => new ObjectId(id))

    const updatedConversationRecord = await ConversationModel.findByIdAndUpdate(
      conversationId,
      {
        $addToSet: {
          participants,
        },
      },
    )
    // read conversation record from database and update it

    if (!updatedConversationRecord) {
      throw ServerError('Could not update conversation record in a database')
    }

    return {
      participants: updatedConversationRecord.participants,
    }
  }

  async setName(parameters: ConversationServiceSetNameParametersType) {
    const { conversationId, name } = parameters

    const updatedConversationRecord = await ConversationModel.findByIdAndUpdate(
      conversationId,
      { name },
    )

    if (!updatedConversationRecord) {
      throw ServerError('Could not update conversation record in a database')
    }

    return updatedConversationRecord.name === name
  }

  async getMessages(parameters: ConversationServiceGetMessagesParametersType) {
    const { conversationId } = parameters

    const conversationRecord = await ConversationModel.findById(conversationId)

    if (!conversationRecord) {
      throw ServerError('Could not find conversation record in a database')
    }

    return {
      messages: conversationRecord.messages,
    }
  }

  async getListing(parameters: ConversationServiceGetListingParametersType) {
    const { userId, itemsCount, pageNumber } = parameters

    const conversationRecords = await ConversationModel.find({
      participants: new ObjectId(userId),
    })
      .sort({ 'messages.createdAt': 1 })
      .limit(itemsCount as number)
      .skip((pageNumber * itemsCount) as number)

    if (!conversationRecords) {
      throw ServerError('Could not find conversation records in a database')
    }

    const listing = conversationRecords.map((record) => {
      const { participants, messages, name } = record
      const [latestMessage] = messages

      return {
        latestMessage,
        participants,
        name,
      }
    })

    return {
      listing,
    }
  }
}

export default new ConversationService()
