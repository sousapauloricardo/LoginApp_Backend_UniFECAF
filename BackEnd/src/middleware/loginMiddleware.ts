import jwt from 'jsonwebtoken'

export const verifyJWT = (req, res, next) => {
    let token = req.headers['X-access-token']

    console.log("authheader: ", req.headers['authheader'])
    
    console.log("X-access-token: ", req.headers['X-access-token'])

    console.log("authorization: ", req.headers['authorization'])

    if(token == undefined){
        const tokenArr = req.headers['authorization'].split(' ')
        token = tokenArr[1]
    }

    jwt.verify(token, process.env.SECRET, (err, decodeURI)=>{
        if(err) return res.status(401).end()
        req.userId = decodeURI.userId
        next()
    })
}
