<template>
    <h1>Pokemon Page <span>#{{ id }}</span></h1>

    <div>
        <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
             Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
</template>
<script>
import axios from 'axios';

export default {

    props: {
        id:{
            type: Number,
            required: true
        }
    },
    
    data(){
        return {
            //id: null
            pokemonName: ""
  
        }
    },
    created(){

    axios.get(`https://pokeapi.co/api/v2/pokemon/` + 1)
        .then(response => {
        // JSON responses are automatically parsed.
        
        console.log(response.data.results[0])
        this.pokemon = response
        })
        .catch(e => {
        console.log(e)
        })
    }

}
</script>