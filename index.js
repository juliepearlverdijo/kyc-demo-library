import * as kyc from "kyc-api-lib";


const API_OBTAIN = "https://be.progeny.tech/api/v2/token/obtain/"
const TOKEN_USERNAME = "patrick-test"
const TOKEN_PASSWORD = "test12345"


export const addKycUi = () => {
	console.log(kyc)
	kyc.createElements()
	
	const canvas = document.querySelector("#image-canvas")
	const video = document.querySelector("#camera-video")
	const livenessBtn = document.querySelector("#liveness-check")
	const captureBtn = document.querySelector("#take-photo")

	livenessBtn.addEventListener('click', (e) => {
		console.log('here')
		obtainToken();
	});

	

	// captureBtn.addEventListener('click', function() {

	//    	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
	//    	let image_data_url = canvas.toDataURL('image/jpeg');

	//    	// data url of the image
	//    	console.log(image_data_url);
	   	
	//    	kyc.livenessCheck_fqrh44$(image_data_url)
	//    	//kyc.checkLiveness_61zpoe$("Julie")
	// });
}

// const getDevices = () => {
// 	const cameras = [];

// 	navigator.mediaDevices.enumerateDevices()
// 	.then(function(devices) {
// 	  	devices.forEach(function(device) {
// 		  	if(device.kind.toLowerCase() === 'videoinput'){
// 				cameras.push(device);
// 			}
// 		});
// 	});
// 	.catch(function(err) {
// 	  console.log(err.name + ": " + err.message);
// 	});

// 	return cameras;
// }




const obtainToken = () => {
	const formData = new FormData();
		
	formData.append('username', 'patrick-test');
	formData.append('password', 'test12345');
	
	fetch('https://be.progeny.tech/api/v2/token/obtain/', {
	  method: 'POST',
	  body: formData
	})
	.then(response => response.json())
	.then(result => {
	  console.log('Success:', result);
	})
	.catch(error => {
	  console.error('Error:', error);
	});
}

