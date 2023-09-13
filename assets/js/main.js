
(function(){
    emailjs.init("taTMDdzn_aZ9lG4yO");

    document.getElementById('Myform').addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = {
            name: document.getElementById('full-name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('email-subject').value,
            message: document.getElementById('abstract').value
        };

        emailjs.send('service_e2sn59f', 'ciaosonoio', formData)
            .then(function(response) {
                console.log('Email inviata con successo', response);
            }, function(error) {
                console.log('Errore durante l\'invio dell\'email', error);
            });
    });
})();

