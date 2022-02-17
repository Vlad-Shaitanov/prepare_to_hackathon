import React, { useEffect } from "react";

export const Widget2 = () => {
	useEffect(() => {
		let script1 = document.createElement("script");
		let script2 = document.createElement("script");
		script1.src = "https://s3.tradingview.com/tv.js";
		script1.async = true;
		// script2.src = "https://files.coinmarketcap.com/static/widget/currency.js";
		// script2.async = true;
		document.body.appendChild(script1);
		document.body.appendChild(script2);

		// <script type="text/javascript">
		//   new TradingView.widget(
		//     {
		//       "width": 980,
		//       "height": "610",
		//       "symbol": "NASDAQ:AAPL",
		//       "interval": "D",
		//       "timezone": "Etc/UTC",
		//       "theme": "light",
		//       "style": "0",
		//       "locale": "ru",
		//       "toolbar_bg": "#f1f3f6",
		//       "enable_publishing": false,
		//       "allow_symbol_change": true,
		//       "container_id": "tradingview_18e22"
		//     }
		//   );
		// </script>
	});

	return (
		<>
			<div class="tradingview-widget-container">
				<div id="tradingview_18e22"></div>
				<div class="tradingview-widget-copyright">
					<a
						href="https://ru.tradingview.com/symbols/NASDAQ-AAPL/"
						rel="noopener"
						target="_blank"
					>
						<span class="blue-text">График AAPL</span>
					</a>{" "}
					от TradingView
				</div>
			</div>
		</>
	);
};