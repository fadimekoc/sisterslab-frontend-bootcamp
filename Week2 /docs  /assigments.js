const pokemons = [
        { id: 3, name: 'Bulbasaur', type: 'Grass', experience: 64 },
        { id: 7, name: 'Charmander', type: 'Fire', experience: 62 },
        { id: 13, name: 'Squirtle', type: 'Water', experience: 63 },
        { id: 56, name: 'Caterpie', type: 'Bug', experience: 39 },
        { id: 1408, name: 'Ekans', type: 'Poison', experience: 58 },
        { id: 63, name: 'Eevee', type: 'Normal', experience: 65 },
        { id: 27, name: 'Pikachu', type: 'Electric', experience: 112 },
        { id: 31, name: 'Pidgey', type: 'Flying', experience: 50 },
        { id: 21, name: 'Meowth', type: 'Normal', experience: 58 },
        { id: 22, name: 'Snorlax', type: 'Normal', experience: 154 },
        { id: 35, name: 'Psyduck', type: 'Water', experience: 64 },
        
    ];
  
 1-) //Yukarıdaki dizi içinde bulunan "Water" türündeki Pokemonları `filter` kullanarak filtrelemek istiyoruz.
  //Filtreleme işlemi sonucunda kaç "Water" türündeki Pokemon olduğunu ve bu Pokemon'ların isimlerini bulmanız gerekiyor.

const waterTypePokemons = pokemons.filter(pokemon => pokemon.type === 'Water');
const waterTypePokemonCount = waterTypePokemons.length;
const waterTypePokemonNames = waterTypePokemons.map(pokemon => pokemon.name);

console.log(`Toplam ${waterTypePokemonCount} türü "Water" olan Pokemon bulundu.`);
console.log(`Pokemonların isimleri: ${waterTypePokemonNames.join(', ')}`);
/*Filter yöntemi ile water türündeki pokemonlar filtrelendi, daha sonra leght kullanılarak pokemonların sayısı alındı ve
map kullanılarak da pokemon isimlerini bir dizi olarak alıp sonuçlar ekrana yazdırıldı. */

  
2-) //Yukarıdaki dizide bulunan her bir Pokemon'un deneyim puanını 2 katına çıkarmak ve bu işlem sonucunda yeni bir dizi oluşturmak istiyorsunuz.
//Bu yeni dizi, her Pokemon'un adını ve yeni deneyim puanını içermelidir.

   const doubleExperience = pokemonList.map(pokemon => {
    return {
        name: pokemon.name,
        experience: pokemon.experience * 2
    };
});
console.log((doubleExperience));
/*Burada map ile verilen dizide bulunan her pokemonun deneyim puanını 2 katına çıkılarak yeni bir dizi oluşturuldu. */

  
 3-) //Pokemon dizisinde, tüm "Water" türündeki Pokemonlar deneyim puanlarının en az 60 olduğu bir koşulu karşılıyor mu ?
  // Ayrıca, "Fire" türündeki Pokemonlar içinden en az birinin deneyim puanı 70 veya daha fazla mı ?
  // Bu iki koşulu kontrol eden ve sonuçları ekrana yazdıran bir kod yazın.

  /* Water türündeki tüm pokemonların deneyim puanı en az 60 mı?*/       
 const newArr = Pokemons.filter(pokemon=>pokemon.type==='Water').every(pokemon=>pokemon.experince>=60)
 console.log(newArr)
});

   /*Fire türündeki pokemonlardan en az birinin deneyim puanı 70 veya daha fazla mı?*/
  const newArr2 = Pokemons.filter(pokemon=>pokemon.type==='Fire').some(pokemon=>pokemon.experince>=70)
 console.log(newArr2)


  
 4-) //Pokemon dizisinde bulunan "Electric" türündeki Pokemon'ların deneyim puanlarının toplamını
  // kullanarak hesaplamak istiyorsunuz.
  
   const totalElectricExperience = () => {
   let total = 0
   pokemons.filter(poke => poke.type === "Electric").forEach(el)=>{
   total += el.experince

   })
         return total
 }
const electricPokemons =pokemons.filter((poke)=> poke.type == "Electric")
const totalElectricExperince2 =electricPokemons.reduce((total ,pokemon)=> total +pokemon))

    
  /*Ekrana yazdırma işlemi */
 console.log(totalElectricExperience())
 console.log(totalElectricExperince2)


 5-) //Pokemon dizisinde, her türdeki Pokemon'ların deneyim puanlarının ortalamasını hesaplamak istiyorsunuz.
         
  /*Her türdeki Pokemon'ların deneyim puanlarının ortalamasını hesaplamak için bir dizi kullanılır.*/  
         
    const typeExperienceAverages = {};

  pokemonList.forEach(pokemon => {
 if(! typrExperinceAvarages[pokemon.type]){
    typeExperienceAverages[pokemon.type] = {
        totalExperience: 0,
        count: 0,
    };
    typeExperienceAverages[pokemon.type].totalExperience += pokemon.experience;
    typeExperienceAverages[pokemon.type].count += 1;
    typeExperienceAverages[pokemon.type].averageExperience =
    typeExperienceAverages[pokemon.type].totalExperience /
    typeExperienceAverages[pokemon.type].count;    
  
   });
   console.log(typeExperienceAverages);
