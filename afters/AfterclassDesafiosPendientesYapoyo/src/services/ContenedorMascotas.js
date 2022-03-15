export default class ContenedorMascotas{
    constructor(){
        this.pets = [];
    }

    getAllPets = () =>{
        return this.pets;
    }
    savePet = (pet) =>{
        this.pets.push(pet);
    }
}