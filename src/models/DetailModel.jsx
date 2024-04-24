import axios from "axios";
import { SiCoinmarketcap } from "react-icons/si";
import { MdEventAvailable, MdPriceChange } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";

export default class DetailModel {
  constructor(coin) {
    // Coin verilerini class'tan alınacak örneğin içine gönder
    this.coin = coin;

    // Detay verilerinden oluşan bir dizi
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Cap",
        value: coin?.detail.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Supply",
        value: coin?.detail.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: "Price",
        value: coin?.detail.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "24Hr Price Change (%)",
        value: coin?.detail.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "24Hr Volume",
        value: coin?.detail.volumeUsd24Hr,
      },
    ];

    // Grafik için kullanılacak veri
    this.graphicData = {
      labels: coin?.history.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          id: 1,
          label: "Price",
          data: coin?.history.map((i) => i.priceUsd),
          borderColor: "red",
          backgroundColor: "orange",
        },
      ],
    };
  }

  // API'den hem fiyat hem de detay verisini al
  static async getCoin(id) {
    // Birden fazla api isteğini aynı anda atma
    const response = await Promise.all([
      axios.get(`https://api.coincap.io/v2/assets/${id}`),

      axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`),
    ]);

    return {
      detail: response[0].data.data,
      history: response[1].data.data,
    };
  }
}
