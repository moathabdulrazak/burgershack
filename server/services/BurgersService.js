import { dbContext } from "../db/DbContext.js";




class BurgersService {
  async remove(burgerId) {
    const burg = await this.getOne(burgerId)
    let index = dbContext.Burgers.indexOf(burg)
    dbContext.Burgers.splice(index, 1)
    return '${burg.name} shburg gonzios'
  }
  async create(newBurg) {
    newBurg.id = dbContext.Burgers[dbContext.Burgers.length - 1].id + 1
    await dbContext.Burgers.push(newBurg)
    return newBurg
  }
  async getOne(burgerId) {
    const burger = await dbContext.Burgers.find(b => b.id == burgerId)
    if (!burger) throw new Error('no burg shnamed' + burgerId)
    return burger
  }
  async getAll() {
    let burgers = await dbContext.Burgers
    return burgers
  }

}



export const burgersService = new BurgersService();