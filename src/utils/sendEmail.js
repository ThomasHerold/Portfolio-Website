import emailjs from 'emailjs-com';

export const sendEmail = (templateParams) => {

    emailjs.send('gmail', 'template_P5xvvOuY', templateParams, 'user_f7axCh2VXL8Zlc7rf1CQw')
        .then(
            function(response) {
                console.log("Success!", response.status, response.text);
            }, 
             function(error) {
                console.log('Failed...', error);
            }
        );
}