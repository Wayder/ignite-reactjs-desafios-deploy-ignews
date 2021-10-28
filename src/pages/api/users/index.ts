import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, nome: "Diego" },
    { id: 2, nome: "Dani" },
    { id: 3, nome: "Rafa" },

  ]

  return response.json(users)
}
