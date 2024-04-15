function addingEventListener() {

    //Assign input variable to button element
    const input = document.getElementById('button');

    //Callback function that is called and returns an alert on click
    function clickAlert() {
        alert('I was clicked!');   
    }
    input.addEventListener('click', clickAlert);
}

