module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const found = await db.find_user([username])
        if (+found[0].count !== 0) {
          return res.status(409).send({message: 'Email already registered'})
        }
        const user_id = await db.add_user({username, profilePicture: `https://robohash.org/${username}`})
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        db.add_hash({user_id: user_id[0].user_id, hash})
        req.session.user = {user_id: user_id[0].user_id, username, profilePicture: `https://robohash.org/${username}`}
        res.status(201).send({message: 'Logged In', user: req.session.user})
      },
}