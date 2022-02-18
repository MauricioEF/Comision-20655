/*Clase grupal*/

class Pets{
    constructor(){
        this.pets = [] ;
    }

    getPets = () =>{
        return this.pets;
    }
    addPet = (pet) =>{
        if(this.pets.length===0){
            pet.id = 1;
        }else{
            pet.id =  this.pets[this.pets.length-1].id+1;
        }
        this.pets.push(pet);
    }
    deletePet = (id) =>{
        // let petIndex = this.pets.findIndex(pet => pet.id===id)
        // this.pets.splice(petIndex,1);
        this.pets = this.pets.filter(pet=>pet.id!==id);
    }
}

let petService = new Pets();
let pet1 = {
    name:"Pablo",
    age:4
}
let pet2 = {
    name:"orejitas",
    age:2
}
let pet3 = {
    name:"patitas",
    age:1
}
petService.addPet(pet1);
petService.addPet(pet2);
petService.addPet(pet3);

petService.deletePet(3);

console.log(petService.getPets());