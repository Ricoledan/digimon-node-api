import ApiService from '../services/api.service';

class ApiController {
  async getData(req: any, res: any) {
    return await ApiService.getAll(req, res);
  }
  async addData(req: any, res: any) {
    return await ApiService.getData(req, res);
  }
  async updateData(req: any, res: any) {
    return await ApiService.updateData(req, res);
  }
  async deleteData(req: any, res: any) {
    return await ApiService.deleteData(req, res);
  }
}

export default new ApiController();
