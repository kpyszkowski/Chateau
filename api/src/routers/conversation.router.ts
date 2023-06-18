import { Router } from 'express'
import { authorize, validate } from '@/middlewares'
import { conversationParticipantsSchema } from '@/schemas'
import type { Router as RouterType } from 'express'
import { ConversationController } from '@/controllers'

const authRouter: RouterType = Router()

authRouter.post(
  '/create',
  [authorize, validate(conversationParticipantsSchema)],
  ConversationController.create,
)
authRouter.delete('/leave/:id', authorize, ConversationController.leave)
authRouter.put(
  '/:id/add-participants',
  [authorize, validate(conversationParticipantsSchema)],
  ConversationController.addParticipants,
)
authRouter.post('/:id/set-name', authorize, ConversationController.setName)
authRouter.get(
  '/:id/get-messages',
  authorize,
  ConversationController.getMessages,
)
authRouter.get('/get-listing', authorize, ConversationController.getListing)

export default authRouter
