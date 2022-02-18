/*Clases de entidad*/


class Pet{
    constructor({name,age}){
        this.name=name;
        this.age=age;
        this.adopted = false;
        this.family = [];
    }
    walk = () =>{
        console.log("Caminando");
    }
    play = () =>{
        console.log("Jugando")
    }
    
    getName = () =>{
        return this.name;
    }
    getAdopted = (family) =>{
        this.adopted = true;
        this.family = family;
    }
    isAdopted = () =>{
        return this.adopted;
    }
    getFamilyMembers = () =>{
        // this.family.forEach(member=>console.log(member));
        //EL MAP SIEMPRE TE DEVUELVE ALGO.
        // let processedFamily = this.family.map((member,papitas)=>{
        //     return member.name;
        // })

        //Sólo entra al arreglo el que cumpla un true.
        let femaleMembers = this.family.filter(member=>{
            return member.gender=="female";
        }).map(femaleMember=>femaleMember.name);

        return femaleMembers;
    }

    /*¿Corroboraste que sí se creó con libros? ¿Lo consologueaste después del return? */
    getBookNames(){
        let nombreslibros =this.libros.map(libro=>{
            return  libro.nombre;
        })
        return nombreslibros
    }

}



let pet1 = new Pet({name:"Patitas",age:3});

pet1.getAdopted([{name:"Esteban",last_name:"Zárate",gender:"male"},{name:"María",last_name:"Camacaro",gender:"female"}])

console.log(pet1.isAdopted());

let family = pet1.getFamilyMembers();
console.log(family);





// ES5
// function PetFuncionConstructora(name,age){
//     this.name=name;
//     this.age=age;
// }
// let pet1 = new PetFuncionConstructora("Patas",3);