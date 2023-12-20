const { createApp } = Vue

createApp({
    data() {
      return {
        mail: []
      }
    },
    created(){
        for(let i = 0; i<10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) => {
                this.mail.push(response.data.response)
            })
        }
    },
    methods: {

    }
  }).mount('#app')