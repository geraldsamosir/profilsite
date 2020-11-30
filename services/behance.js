const behanceConf = {
  user: process.env.BEHANCE_USER,
  api: process.env.BEHANCE_API,
  key: process.env.BEHANCE_KEY
};

export default new class  Behance {
  async  getall(){
      const result = await fetch(`${behanceConf.api}/users/${behanceConf.user}/projects?api_key=${behanceConf.key}`)
      return await result.json();
  }
  async getProjectByid(id){
      const response = await fetch(`${behanceConf.api}/projects/${id}?api_key=${behanceConf.key}`)
      return await response.json();
  }
}
