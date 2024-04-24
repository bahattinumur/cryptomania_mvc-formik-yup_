import { FaBitcoin } from "react-icons/fa";
import CardView from "./CardView";
import millify from "millify";
import { useNavigate } from "react-router-dom";

const MainView = ({ coins, setPage }) => {
  const navigate = useNavigate();

  return (
    <div className="container-xl mt-5">
      <h4 className="d-flex align-items-center gap-3">
        <FaBitcoin />
        <span>Welcome to Cryptomania</span>
      </h4>

      <p>
        Cryptomania is an excellent platform for tracking price changes of
        cryptocurrencies worldwide
      </p>

      <div className="d-flex gap-4 justify-content-around my-5">
        {coins?.slice(0, 3)?.map((data) => (
          <CardView key={data.id} data={data} />
        ))}
      </div>

      {/* tablo */}
      <table className="table table-dark table-striped table-hover table-responsive mt-5">
        <thead>
          <th>#</th>
          <th>coin</th>
          <th>price</th>
          <th>market cap</th>
          <th>volume</th>
          <th>%change (24h)</th>
        </thead>

        <tbody className="coinone">
          {coins.map((coin) => (
            <tr onClick={() => navigate(`/coin/${coin.id}`)} key={coin.id}>
              <td>{coin.rank}</td>
              <td>
                <span className="text-warning me-2">{coin.symbol}</span>
                <span>{coin.name}</span>
              </td>
              <td>${millify(coin.priceUsd)}</td>
              <td>${millify(coin.marketCapUsd)}</td>
              <td>${millify(coin.volumeUsd24Hr)}</td>
              <td className={coin.changePercent24Hr >= 0 ? "up" : "down"}>
                %{Number(coin.changePercent24Hr).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Daha fazla butonu */}
      <div className="d-flex justify-content-center my-5">
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="more-btn"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default MainView;
