import { useParams } from "react-router-dom";
import DetailView from "../views/DetailView";
import { useEffect, useState } from "react";
import DetailModel from "../models/DetailModel";

const DetailController = () => {
  const [coin, setCoin] = useState(null);

  // 1) URL'den ID'yi al
  const { id } = useParams();

  // 2) Coin'in detay verilerini ve fiyat geçmişini API'den al
  useEffect(() => {
    DetailModel.getCoin(id).then((data) => setCoin(data));
  }, []);

  // Class'tan örnek al
  const model = new DetailModel(coin);

  return <DetailView model={model} />;
};

export default DetailController;
