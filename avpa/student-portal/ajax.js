const viewport = document.querySelector('[data-main-content]')

function switchToGrades() {
    var httpRequest;

    if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 6 and older
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {

                viewport.innerHTML = httpRequest.responseText

                addNewScript()
            } else {
                alert(`ERROR! ${httpRequest.status}`)
            }
        }
    }

    httpRequest.open('GET', './student.html', true)
    httpRequest.send()

    function addNewScript() {
        let script = document.createElement('script')
        script.setAttribute('src', './grade-worker.js')

        let wrapper = document.querySelector('[data-assignments-wrapper]')

        wrapper.appendChild(script)
    }
}