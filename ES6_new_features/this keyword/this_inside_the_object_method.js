let person = {
    name : "Panparag",
    greet () {
        console.log(this);
        console.log(this.name);
    }
}

person.greet()