import React, { useEffect } from "react";

export const Widget1 = () => {
	useEffect(() => {
		let script = document.createElement("script");
		script.src = "https://files.coinmarketcap.com/static/widget/currency.js";
		script.async = true;
		document.body.appendChild(script);

		function clear() {
			document.body.removeChild(script);
		}
	});
	return (
		<div
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
		></div>
	);
};