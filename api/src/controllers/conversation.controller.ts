import { ConversationService } from '@/services'
import type { Request, Response } from 'express'

const service = new ConversationService({})

class ConversationController {
  async create(req: Request, res: Response) {
    // get participants from requests' body
    // get user id from decoded token payload (conversation host)
    // create database record
  }

  async leave(req: Request, res: Response) {
    // get conversation id from requests' params
    // get user id from decoded token payload
    // update the conversation record to user from participants field
  }

  async addParticipants(req: Request, res: Response) {
    // get conversation id from requests' params
    // get user id from requests` body
    // update the conversation record to user from participants field
  }

  async setName(req: Request, res: Response) {
    // get conversation id from requests' params
    // get user id from decoded token payload
    // update the conversation record to user from participants field
  }

  async getMessages(req: Request, res: Response) {
    // get conversation id from requests' params
    // read messages field of corresponding database record
    // return to user
  }

  async getListing(req: Request, res: Response) {
    // get listing size and page number from requests' query
    // read requested portion of data from the database (participants names or conversation name, latest message and its' creation date)
  }
}

export default new ConversationController()
