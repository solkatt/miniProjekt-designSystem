export default async function orderAPI() {
	return new Promise(resolve => {
	  setTimeout(() => {
		resolve('resolved');
	  }, 3000);
	});
  }