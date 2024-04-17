export default function handler(req, res) {

  if (req.method === "POST") {

    const userRegister = req.body
    console.log(userRegister)
    res.json(userRegister)

  }


}