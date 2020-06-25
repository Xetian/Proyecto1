
        
        
        let lista = document.getElementById("listapokemon")
        
        
        function nombrePokemon(id, n){
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
         .then(function(respuesta){
            respuesta.json()
            .then(function(pokemon){
                crearPokemon(pokemon, n)
               
                
            })
         })
        }
        
        
        function buscarPokemon(){
            let primero=Math.round(Math.random() * 150)
            let segundo=Math.round(Math.random() * 150)

            nombrePokemon(primero, 1)
            nombrePokemon(segundo, 2)

        }
    
        function crearPokemon(pokemon, n){
            let item = lista.querySelector(`#pokemon-${n}`)
             let img = item.getElementsByTagName(`img`)[0]
             img.setAttribute("src", pokemon.sprites.front_default)
            let nombre = item.getElementsByTagName(`p`)[0]
             nombre.textContent=pokemon.name
        }

        buscarPokemon()