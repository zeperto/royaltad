const middleware = {}

middleware['adminLogin'] = require('..\\middleware\\adminLogin.js')
middleware['adminLogin'] = middleware['adminLogin'].default || middleware['adminLogin']

export default middleware
