import Fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import Jumbotron from '../components/common/Jumbotron';
import PricesStatic from '../components/prices/PricesStatic';
import PricesReference from '../components/prices/PricesReference';
import PricesList from '../components/prices/PricesList';
import PricesTable from '../components/prices/PricesTable';
import PricesDynamic from '../components/prices/PricesDynamic';

const BPI = (props) => (
	<Layout msgs={props.messages} activePageIndex={props.currentPageIndex}>
		<div className='bpi module'>
            <Jumbotron title={props.title}>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum praesentium ipsam id qui dicta doloremque dolor minus laborum assumenda dolorum laboriosam nemo provident, vitae voluptates sint, est neque explicabo porro!</p>
				<p>Powered by <a href='https://www.coindesk.com/price'>CoinDesk</a></p>
            </Jumbotron>
			<PricesTable>
				<PricesReference 
					bpi={props.bpiusd} />
				<PricesStatic 
					bpi={props.bpi} />
				<PricesList 
					bpi={props.bpi} />
				<PricesDynamic 
					bpi={props.bpi}
					currencies={props.currencies} />
			</PricesTable>
		</div>
		<style jsx local>{`
		`}</style>
	</Layout>
);

BPI.getInitialProps = async function() {

	const currentprice = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
	const currentpriceData = await currentprice.json();

	const currentpriceUSD = await fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json');
	const currentpriceUSDData = await currentpriceUSD.json();

	// const currencies = await fetch('https://api.coindesk.com/v1/bpi/supported-currencies.json');
	// const currenciesData = await currencies.json();

	// const currencies = await fetch('/data/supported-currencies.json');
    // const currenciesData = await currencies.json();
    
    // another api to use: https://coinmarketcap.com/

	return {
		bpi: currentpriceData.bpi,
		bpiusd: currentpriceUSDData.bpi,
		currencies: [{"currency":"AED","country":"United Arab Emirates Dirham"},{"currency":"AFN","country":"Afghan Afghani"},{"currency":"ALL","country":"Albanian Lek"},{"currency":"AMD","country":"Armenian Dram"},{"currency":"ANG","country":"Netherlands Antillean Guilder"},{"currency":"AOA","country":"Angolan Kwanza"},{"currency":"ARS","country":"Argentine Peso"},{"currency":"AUD","country":"Australian Dollar"},{"currency":"AWG","country":"Aruban Florin"},{"currency":"AZN","country":"Azerbaijani Manat"},{"currency":"BAM","country":"Bosnia-Herzegovina Convertible Mark"},{"currency":"BBD","country":"Barbadian Dollar"},{"currency":"BDT","country":"Bangladeshi Taka"},{"currency":"BGN","country":"Bulgarian Lev"},{"currency":"BHD","country":"Bahraini Dinar"},{"currency":"BIF","country":"Burundian Franc"},{"currency":"BMD","country":"Bermudan Dollar"},{"currency":"BND","country":"Brunei Dollar"},{"currency":"BOB","country":"Bolivian Boliviano"},{"currency":"BRL","country":"Brazilian Real"},{"currency":"BSD","country":"Bahamian Dollar"},{"currency":"BTC","country":"Bitcoin"},{"currency":"BTN","country":"Bhutanese Ngultrum"},{"currency":"BWP","country":"Botswanan Pula"},{"currency":"BYR","country":"Belarusian Ruble"},{"currency":"BZD","country":"Belize Dollar"},{"currency":"CAD","country":"Canadian Dollar"},{"currency":"CDF","country":"Congolese Franc"},{"currency":"CHF","country":"Swiss Franc"},{"currency":"CLF","country":"Chilean Unit of Account (UF)"},{"currency":"CLP","country":"Chilean Peso"},{"currency":"CNY","country":"Chinese Yuan"},{"currency":"COP","country":"Colombian Peso"},{"currency":"CRC","country":"Costa Rican Col\u00f3n"},{"currency":"CUP","country":"Cuban Peso"},{"currency":"CVE","country":"Cape Verdean Escudo"},{"currency":"CZK","country":"Czech Republic Koruna"},{"currency":"DJF","country":"Djiboutian Franc"},{"currency":"DKK","country":"Danish Krone"},{"currency":"DOP","country":"Dominican Peso"},{"currency":"DZD","country":"Algerian Dinar"},{"currency":"EEK","country":"Estonian Kroon"},{"currency":"EGP","country":"Egyptian Pound"},{"currency":"ERN","country":"Eritrean Nnakfa"},{"currency":"ETB","country":"Ethiopian Birr"},{"currency":"EUR","country":"Euro"},{"currency":"FJD","country":"Fijian Dollar"},{"currency":"FKP","country":"Falkland Islands Pound"},{"currency":"GBP","country":"British Pound Sterling"},{"currency":"GEL","country":"Georgian Lari"},{"currency":"GHS","country":"Ghanaian Cedi"},{"currency":"GIP","country":"Gibraltar Pound"},{"currency":"GMD","country":"Gambian Dalasi"},{"currency":"GNF","country":"Guinean Franc"},{"currency":"GTQ","country":"Guatemalan Quetzal"},{"currency":"GYD","country":"Guyanaese Dollar"},{"currency":"HKD","country":"Hong Kong Dollar"},{"currency":"HNL","country":"Honduran Lempira"},{"currency":"HRK","country":"Croatian Kuna"},{"currency":"HTG","country":"Haitian Gourde"},{"currency":"HUF","country":"Hungarian Forint"},{"currency":"IDR","country":"Indonesian Rupiah"},{"currency":"ILS","country":"Israeli New Sheqel"},{"currency":"INR","country":"Indian Rupee"},{"currency":"IQD","country":"Iraqi Dinar"},{"currency":"IRR","country":"Iranian Rial"},{"currency":"ISK","country":"Icelandic Kr\u00f3na"},{"currency":"JEP","country":"Jersey Pound"},{"currency":"JMD","country":"Jamaican Dollar"},{"currency":"JOD","country":"Jordanian Dinar"},{"currency":"JPY","country":"Japanese Yen"},{"currency":"KES","country":"Kenyan Shilling"},{"currency":"KGS","country":"Kyrgystani Som"},{"currency":"KHR","country":"Cambodian Riel"},{"currency":"KMF","country":"Comorian Franc"},{"currency":"KPW","country":"North Korean Won"},{"currency":"KRW","country":"South Korean Won"},{"currency":"KWD","country":"Kuwaiti Dinar"},{"currency":"KYD","country":"Cayman Islands Dollar"},{"currency":"KZT","country":"Kazakhstani Tenge"},{"currency":"LAK","country":"Laotian Kip"},{"currency":"LBP","country":"Lebanese Pound"},{"currency":"LKR","country":"Sri Lankan Rupee"},{"currency":"LRD","country":"Liberian Dollar"},{"currency":"LSL","country":"Lesotho Loti"},{"currency":"LTL","country":"Lithuanian Litas"},{"currency":"LVL","country":"Latvian Lats"},{"currency":"LYD","country":"Libyan Dinar"},{"currency":"MAD","country":"Moroccan Dirham"},{"currency":"MDL","country":"Moldovan Leu"},{"currency":"MGA","country":"Malagasy Ariary"},{"currency":"MKD","country":"Macedonian Denar"},{"currency":"MMK","country":"Myanma Kyat"},{"currency":"MNT","country":"Mongolian Tugrik"},{"currency":"MOP","country":"Macanese Pataca"},{"currency":"MRO","country":"Mauritanian Ouguiya"},{"currency":"MTL","country":"Maltese Lira"},{"currency":"MUR","country":"Mauritian Rupee"},{"currency":"MVR","country":"Maldivian Rufiyaa"},{"currency":"MWK","country":"Malawian Kwacha"},{"currency":"MXN","country":"Mexican Peso"},{"currency":"MYR","country":"Malaysian Ringgit"},{"currency":"MZN","country":"Mozambican Metical"},{"currency":"NAD","country":"Namibian Dollar"},{"currency":"NGN","country":"Nigerian Naira"},{"currency":"NIO","country":"Nicaraguan C\u00f3rdoba"},{"currency":"NOK","country":"Norwegian Krone"},{"currency":"NPR","country":"Nepalese Rupee"},{"currency":"NZD","country":"New Zealand Dollar"},{"currency":"OMR","country":"Omani Rial"},{"currency":"PAB","country":"Panamanian Balboa"},{"currency":"PEN","country":"Peruvian Nuevo Sol"},{"currency":"PGK","country":"Papua New Guinean Kina"},{"currency":"PHP","country":"Philippine Peso"},{"currency":"PKR","country":"Pakistani Rupee"},{"currency":"PLN","country":"Polish Zloty"},{"currency":"PYG","country":"Paraguayan Guarani"},{"currency":"QAR","country":"Qatari Rial"},{"currency":"RON","country":"Romanian Leu"},{"currency":"RSD","country":"Serbian Dinar"},{"currency":"RUB","country":"Russian Ruble"},{"currency":"RWF","country":"Rwandan Franc"},{"currency":"SAR","country":"Saudi Riyal"},{"currency":"SBD","country":"Solomon Islands Dollar"},{"currency":"SCR","country":"Seychellois Rupee"},{"currency":"SDG","country":"Sudanese Pound"},{"currency":"SEK","country":"Swedish Krona"},{"currency":"SGD","country":"Singapore Dollar"},{"currency":"SHP","country":"Saint Helena Pound"},{"currency":"SLL","country":"Sierra Leonean Leone"},{"currency":"SOS","country":"Somali Shilling"},{"currency":"SRD","country":"Surinamese Dollar"},{"currency":"STD","country":"S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra"},{"currency":"SVC","country":"Salvadoran Col\u00f3n"},{"currency":"SYP","country":"Syrian Pound"},{"currency":"SZL","country":"Swazi Lilangeni"},{"currency":"THB","country":"Thai Baht"},{"currency":"TJS","country":"Tajikistani Somoni"},{"currency":"TMT","country":"Turkmenistani Manat"},{"currency":"TND","country":"Tunisian Dinar"},{"currency":"TOP","country":"Tongan Pa?anga"},{"currency":"TRY","country":"Turkish Lira"},{"currency":"TTD","country":"Trinidad and Tobago Dollar"},{"currency":"TWD","country":"New Taiwan Dollar"},{"currency":"TZS","country":"Tanzanian Shilling"},{"currency":"UAH","country":"Ukrainian Hryvnia"},{"currency":"UGX","country":"Ugandan Shilling"},{"currency":"USD","country":"United States Dollar"},{"currency":"UYU","country":"Uruguayan Peso"},{"currency":"UZS","country":"Uzbekistan Som"},{"currency":"VEF","country":"Venezuelan Bol\u00edvar Fuerte"},{"currency":"VND","country":"Vietnamese Dong"},{"currency":"VUV","country":"Vanuatu Vatu"},{"currency":"WST","country":"Samoan Tala"},{"currency":"XAF","country":"CFA Franc BEAC"},{"currency":"XAG","country":"Silver (troy ounce)"},{"currency":"XAU","country":"Gold (troy ounce)"},{"currency":"XBT","country":"Bitcoin"},{"currency":"XCD","country":"East Caribbean Dollar"},{"currency":"XDR","country":"Special Drawing Rights"},{"currency":"XOF","country":"CFA Franc BCEAO"},{"currency":"XPF","country":"CFP Franc"},{"currency":"YER","country":"Yemeni Rial"},{"currency":"ZAR","country":"South African Rand"},{"currency":"ZMK","country":"Zambian Kwacha (pre-2013)"},{"currency":"ZMW","country":"Zambian Kwacha"},{"currency":"ZWL","country":"Zimbabwean Dollar"}],
		title:'Bitcoin Price Index',
		currentPageIndex:1,
		messages: [
			{id:1, kind:'info', text:'Lorem ipsum dolor sic amet...', lede:'BPI Warning'}
		]
	}
}

export default BPI;
