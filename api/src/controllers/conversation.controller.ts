//@ts-nocheck
import { ConversationService } from '@/services'
import type { Request, Response } from 'express'
import type { AuthenticatedRequestBodyType } from '@/types'
import { handleSuccessResponse } from '@/helpers'

class ConversationController {
  async createConversation(req: Request, res: Response) {
    const { participantIds, decodedToken } = req.body
    const { id: userId } = decodedToken

    const data = await ConversationService.createConversation({
      userId,
      participantIds,
    })

    return handleSuccessResponse(res, data)
  }

  async leaveConversation(req: Request, res: Response) {
    const { decodedToken } = req.body
    const { id: conversationId } = req.params

    if (!conversationId) {
      return res.status(400).json({ message: 'request error' })
    }

    const { id: userId } = decodedToken

    const data = await ConversationService.leaveConversation({
      userId,
      conversationId,
    })

    return handleSuccessResponse(res, data)
  }

  async addParticipants(req: Request, res: Response) {
    const { id: conversationId } = req.params
    const { participantIds } = req.body

    const data = await ConversationService.addParticipants({
      conversationId,
      participantIds,
    })

    return handleSuccessResponse(res, data)
  }

  async setName(req: Request, res: Response) {
    const { id: conversationId } = req.params
    const { name } = req.body

    if (!conversationId) {
      throw new RequestError(
        'Missing request parameter: conversation identifier',
      )
    }
    if (!name) {
      throw new RequestError('Missing request body: conversation name')
    }

    await ConversationService.setName({ conversationId, name })

    return handleSuccessResponse(res)
  }

  async getMessages(req: Request, res: Response) {
    const { id: conversationId } = req.params

    if (!conversationId) {
      return res.status(400).json({ message: 'request error' })
    }

    const data = await ConversationService.getMessages({ conversationId })

    return handleSuccessResponse(res, data)
  }

  async getListing(req: Request, res: Response) {
    const { itemsCount, pageNumber } = req.query
    const { decodedToken } = req.body as AuthenticatedRequestBodyType
    const { id: userId } = decodedToken

    const data = await ConversationService.getListing({
      itemsCount,
      pageNumber,
      userId,
    })

    return handleSuccessResponse(res, data)
  }
}

export default new ConversationController()
