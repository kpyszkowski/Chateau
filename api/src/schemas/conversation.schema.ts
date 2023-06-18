import * as yup from 'yup'

export const conversationParticipantsSchema = yup.object({
  participants: yup.array().of(yup.string().required()),
})
