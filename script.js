function editPro () {
    var proName = prompt("Enter new name")
    document.getElementById("profileName").innerHTML= proName
}

var reqOne = document.querySelector("#toddE")

function removeRequest(element) {
    element.remove()
    reqOne.src = "#toddE"
}

var reqTwo = document.querySelector("#philE")

function removeRequestTwo(element) {
    element.remove()
    reqTwo.src = "#philE"
}