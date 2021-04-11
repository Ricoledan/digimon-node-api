class ApiService {
  async getAll(req: any, res: any) {
    return await res.send('getAll');
  }
  async getData(req: any, res: any) {
    return await res.send('getData');
  }
  async updateData(req: any, res: any) {
    return await res.send('updateData');
  }
  async deleteData(req: any, res: any) {
    return await res.send('deleteData');
  }
}

export default new ApiService();
