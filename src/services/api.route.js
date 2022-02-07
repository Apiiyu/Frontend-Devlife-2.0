class ApiRoute {
  constructor() {
    // Version 1.0
    this.login = '/api/login'
    this.logout = '/api/logout'
    this.register = '/api/register'
    this.checkBearer = '/api/profile'

    //---------- Api Guru
    this.getDataAttendence = '/api/attendence'
    this.postAttendence = '/api/attendence'

    //---------- Api Guru
    this.guru = '/api/guru'

    //---------- Api Mata Pelajaran
    this.matpel = '/api/matpel'
  }
} 

export default new ApiRoute()