import { request } from "express";
import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";




export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .post('', this.create)
      .delete('/:id', this.remove)
  }
  async getOne(req, res, next) {
    try {
      const burger = await burgersService.getOne(req.params.id)
      return res.send({ burger, message: 'burg' })
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, response, next) {
    try {
      let burgers = await burgersService.getAll()
      return response.send(burgers)
    } catch (error) {
      next(error)
    }
  }
  async create(req, response, next) {
    try {
      const newBurg = await burgersService.create(req.body)
      return response.send(newBurg)
    } catch (error) {
      next(error)
    }
  }
  async remove(req, res, next) {
    try {
      const message = await burgersService.remove(req.params.id)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}