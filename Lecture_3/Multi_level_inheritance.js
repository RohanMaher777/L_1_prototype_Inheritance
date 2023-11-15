class Animal {
    eat (){
        console.log("eating")
    }
}

class Lion extends Animal {
    roar(){
        console.log("roaring");
    }
}

class BabyLion extends Lion {
    weep (){
        console.log("weeping");
    }
}

let obj = new BabyLion()
obj.eat()
obj.roar()
obj.weep()
