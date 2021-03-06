class listGuests {
    constructor() {
        this.guests = []
    }

    addGuest(name, age, id){
        this.guests.push({ name, age, id })
        console.log(this.guests)
    }

    listGuests(){
        console.log(this.guests)
    }
}

var listGuest = new listGuests()

document.getElementById('addGuest').onclick = function(){
    var name = document.getElementById('name').value
    listGuest.addGuest(name, 22, "1234567")
}

document.getElementById('listGuest').onclick = function(){
    listGuest.listGuests()
}
