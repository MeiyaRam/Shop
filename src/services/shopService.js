import shopData from './shopData';

const getItemPrice = (shopItems, name) => {
	const item = shopItems.find((items) => items.name === name);

	const priceDetails = item
		? { price: item.price }
		: { price: '-' };

	return priceDetails;
};

const getShopPrices = (name, data) => data.map((shopItems) =>
	getItemPrice(shopItems.items, name));

const getItemDetails = (shopItems) => shopItems.map((item) => item.name);

const getItemNames = (data) => [...new Set(data.map((shop) =>
	getItemDetails(shop.items)).flat())];

const renderData = (context) => {
	const { data } = context;
	const items = getItemNames(data).map((name) => ({
		name: name,
		shopPrices: getShopPrices(name, data),
	}));

	return items ;
};

const shopServices = (context) =>
	renderData({ ...context, data: shopData });

export default shopServices;
