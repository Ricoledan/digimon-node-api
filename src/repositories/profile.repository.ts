import profileModel from '../models/profile.model'
import type { Request, Response } from 'express'

class ProfileRepository {
  async read(req: Request, res: Response) {
    const getName = req.params.name

    try {
      if (getName) {
        await profileModel
          .find({ name: getName })
          .then((result) => {
            return res.status(200).send(result)
          })
          .catch((e: any) => {
            res.status(500).send({
              error: 'error occured reading active profile',
              e
            })
          })
      }

      await profileModel
        .find()
        .then((results) => {
          return res.send(results)
        })
        .catch((e: any) => {
          res.status(500).send({
            error: 'error occured reading all active profiles',
            e
          })
        })
    } catch (e) {
      console.log(e)
    }
  }

  async create(req: Request, res: Response) {
    const getRequestBody = req.body

    const profile = new profileModel({
      name: getRequestBody.name,
      level: getRequestBody.level,
      type: getRequestBody.type,
      attribute: getRequestBody.attribute,
      field: getRequestBody.field ?? null,
      group: getRequestBody.group ?? null,
      technique: getRequestBody.technique,
      artwork: getRequestBody.artwork,
      profile: getRequestBody.profile
    })

    try {
      await profile
        .save()
        .then((result: any) => {
          return res.status(201).send(result)
        })
        .catch((e: any) => {
          res.status(500).send({
            error: 'error occured creating profile'
          })
        })
    } catch (e) {
      console.log(e)
    }
  }

  async update(req: Request, res: Response) {
    const getName = req.params.name
    const getRequestBody = req.body

    try {
      const getDocumentFromDB = await profileModel
        .find({ name: getName })
        .then((result) => {
          return res.status(201).send(result)
        })
        .catch((e: any) => {
          res.status(500).send({
            error: 'error occured reading active profile',
            e
          })
        })

      await profileModel
        .updateOne(
          {
            name: getName
          },
          {
            level: getRequestBody.level ?? getDocumentFromDB.level,
            type: getRequestBody.type ?? getDocumentFromDB.type,
            attribute: getRequestBody.attribute ?? getDocumentFromDB.attribute,
            field: getRequestBody.field ?? getDocumentFromDB.field,
            group: getRequestBody.group ?? getDocumentFromDB.group,
            technique: getRequestBody.technique ?? getDocumentFromDB.technique,
            artwork: getRequestBody.artwork ?? getDocumentFromDB.artwork,
            profile: getRequestBody.profile ?? getDocumentFromDB.profile
          }
        )
        .then((result: any) => {
          return res.status(201).send(result)
        })
        .catch((e: any) => {
          res.status(500).send({
            error: 'error occured updating profile'
          })
        })
    } catch (e) {
      console.log(e)
    }
  }

  async delete(req: Request, res: Response) {
    const getName = req.params.name

    try {
      await profileModel
        .deleteOne({
          name: getName
        })
        .then((result: any) => {
          return res.status(201).send(result)
        })
        .catch((e: any) => {
          res.status(500).send({
            error: 'error occured deleting profile'
          })
        })
    } catch (e) {
      console.log(e)
    }
  }
}

export default new ProfileRepository()
