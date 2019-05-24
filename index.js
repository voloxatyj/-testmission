const purchase = [
  {
    id: 0,
    data: new Date("Apr 25 2018"),
    cash: 12,
    currency: "EUR",
    product: "Photo Frame"
  },
  {
    id: 1,
    data: new Date("Dec 02 2018"),
    cash: 2.5,
    currency: "PLN",
    product: "Sweets"
  },
  {
    id: 2,
    data: new Date("Jun 12 2018"),
    cash: 2,
    currency: "USD",
    product: "T-shirt"
  },
  {
    id: 3,
    data: new Date("Oct 31 2018"),
    cash: 4.75,
    currency: "EUR",
    product: "Beer"
  }
];


//adds-purchases made by customers
adds=purchase.slice();

console.log(adds);
// all-shows all purchases sorted by date

purchase.sort((a,b) => (a.data > b.data) ? 1 : ((b.data > a.data) ? -1 : 0));
console.log(purchase);
	
// clear-removes all purchases for specified date(2018) and show the rest purchase

let clear = purchase.filter(item=>(item.data.getFullYear() == '2018')? 
	purchase.slice(item.id,1):console.log(item.data));
	
// report-calculate the total income for specified year, convert in UAH));

let totalvalue=[];
purchase.forEach(item=>(item.currency !=="EUR" && item.currency !=="PLN")? 
		totalvalue.push(item.cash*26):console.log(item.id));
		console.log('report sales in 2018 :  ' + totalvalue +'UAH');
			 			 
purchase.forEach(item=>(item.currency !=="USD" && item.currency !=="PLN")? 
		totalvalue.push(item.cash*31):console.log(item.id));	
		console.log('report sales in 2018 :  ' + totalvalue +'UAH');

purchase.forEach(item=>(item.currency !=="USD" && item.currency !=="EUR")? 
		totalvalue.push(item.cash*8):console.log(item.id));	
		console.log('report sales in 2018 :  ' + totalvalue +'UAH');

let report = eval(totalvalue.join('+'));
console.log(report);



