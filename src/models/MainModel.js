import axios from "axios";

// Anasayfanın model katmanı
export default class MainModel {
  // API'den coin verilerini alır
  static async getCoins(page) {
    try {
      const params = {
        offset: (page - 1) * 15, // Kaç tane veri atlanılacak
        limit: 15, // Kaç veri alınıcak
      };

      const res = await axios.get("https://api.coincap.io/v2/assets", {
        params,
      });

      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
}
