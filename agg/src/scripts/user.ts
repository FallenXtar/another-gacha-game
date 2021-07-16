import CryptoJS from "crypto-js";

export default class {
  name: string;
  id: string;
  coin = 0;
  library: unknown[] = [];
  constructor(userName: string) {
    this.name = userName;
    this.id = CryptoJS.MD5(userName).toString();
  }
}
