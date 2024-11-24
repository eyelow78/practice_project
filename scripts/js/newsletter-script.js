const form = document.getElementById('newsletterForm')
form.addEventListener('submit', function(event){
    event.preventDefault()
    const formData = new FormData(this)
    fetch('scripts/php/newsletter.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        return response.text()
    })
    .then(data => {
        swal('Successful!', 'You have successfully subscribed to the newsletter', 'success');
    })
    .catch(error => {
        swal('Something went wrong!', 'Try entering a different email address', 'error')
    })
})