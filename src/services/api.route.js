class ApiRoute {
  constructor() {
    // Version 1.0
    this.login = '/api/login'
    this.register = '/api/register'
    this.checkBearer = '/api/profile'
    this.attendence = '/api/attendence'
  }
} 

export default new ApiRoute()