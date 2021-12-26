class ApiRoute {
  constructor() {
    // Version 1.0
    this.login = '/api/login'
    this.register = '/api/register'
    this.checkBearer = '/api/profile'
  }
} 

export default new ApiRoute()