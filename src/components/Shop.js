import { React } from 'react';
const { map } = require('@laufire/utils/collection');

const Shop = (context) => {
	const { data: { items, shopNames }} = context;

	return (
		<table>
			<thead><tr>
				<th>Items</th>
				{map(shopNames, (shop, i) =>
					<th key={ i }>{shop}</th>)}
			</tr></thead>
			<tbody>
				{
					map(items, (shopData, i) =>
						<tr key={ i }>
							<td>{shopData.name}</td>
							{shopData.shopPrices.map((shop, key) =>
								<td key={ key }>{shop.price}</td>)}
						</tr>)
				}
			</tbody></table>);
};

export default Shop;
