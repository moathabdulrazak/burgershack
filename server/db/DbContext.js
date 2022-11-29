import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Burgers = [
    {
      name: 'struh',
      des: 'struh the finest burger',
      price: 10,
      id: 1
    },
    {
      name: 'skir',
      des: 'skir the finest burger',
      price: 15,
      id: 2
    },
    {
      name: 'prr',
      des: 'prr the finest burger',
      price: 30,
      id: 3
    }
  ]
}

export const dbContext = new DbContext()
