const form = document.getElementById('bookingForm')
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch('scripts/php/booking.php', {
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
        swal('booking is successful!', '', 'success');
        // const swalButton = document.querySelector('.swal-button')
        // swalButton.addEventListener('click', function(){
        //     window.location.href = '/'
        // })
    })
    .catch(error => {
        swal('Something went wrong!', 'Try to choose a another booking date', 'error')
    })
})