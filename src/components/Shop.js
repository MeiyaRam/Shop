import { React } from 'react';
const { map } = require('@laufire/utils/collection');

const Shop = (context) => {
	const { config: { shopHeader }, data } = context;

	return (
		<table>
			<thead>
				<tr>{map(shopHeader, (shop, i) =>
					<th key={ i }>{shop}</th>)}
				</tr>
			</thead>
			<tbody>
				{
					data.map((shopData, i) =>
						<tr key={ i }>
							<td>{shopData.name}</td>
							{shopData.shopPrices.map((shop, key) =>
								<td key={ key }>{shop.price}</td>)}
						</tr>)
				}
			</tbody></table>);
};

export default Shop;
