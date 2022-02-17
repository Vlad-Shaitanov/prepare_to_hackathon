import React, { useEffect, useState } from "react";
import "./App.css";

export const Chart = () => {
	const [coins, setCoins] = useState([]);
	const getData = async () => {
		const data = await fetch(
			"https://api.polygon.io/v2/aggs/grouped/locale/global/market/crypto/2020-10-14?adjusted=true&apiKey=IKsnFC3le2TdHoJPRuSE_lFto0NxAFVJ"
		);

		const response = await data.json();
		console.log(response);
		setCoins([...response.results]);
		return response;
	};
	console.log("coins", coins);
	useEffect(() => {
		getData();
	}, []);
	// useEffect(()=>{
	//   let script = document.createElement("script");
	//   script.src = "https://files.coinmarketcap.com/static/widget/currency.js";
	//   script.async = true;
	//   document.body.appendChild(script);

	//   function clear() {
	//     document.body.removeChild(script);
	//   }
	// });

	return (
		<>
			<div className="title">Daily status</div>
			{/* <div
        className="coinmarketcap-currency-widget"
        data-currencyid="1"
        data-base="USD"
        data-secondary=""
        data-ticker="true"
        data-rank="true"
        data-marketcap="true"
        data-volume="true"
        data-statsticker="true"
        data-stats="USD"
      >
      </div> */}
			<div className="table-wrap">
				{/* <table>
          <thead>
            <th>Currency</th>
            <th>Close Price</th>
            <th>Highest Price</th>
            <th>Lowest Price</th>
            <th>Open Price</th>
            <th>Trading Volume</th>
            <th>Avg Price</th>
          </thead>
          <tbody>
            {coins.map((item) => {
              return (
                <tr className="table_row" >
                  <td>{item.T}</td>
                  <td>{item.c}</td>
                  <td>{item.h}</td>
                  <td>{item.l}</td>
                  <td>{item.o}</td>
                  <td>{item.v}</td>
                  <td>{item.vw}</td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
				<div className="table_head">
					<div>Currency</div>
					<div>Close Price</div>
					<div>Highest Price</div>
					<div>Lowest Price</div>
					<div>Open Price</div>
					<div>Trading Volume</div>
					<div>Avg Price</div>
				</div>
				<div className="table_body">
					<div style={{ width: "100%" }}>
						{coins.map((item) => {
							return (
								<div className="table_row">
									<div>{item.T}</div>
									<div>{item.c}</div>
									<div>{item.h}</div>
									<div>{item.l}</div>
									<div>{item.o}</div>
									<div>{item.v}</div>
									<div>{item.vw}</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};