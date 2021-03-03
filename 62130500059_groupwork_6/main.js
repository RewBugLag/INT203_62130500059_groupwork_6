const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    }
}
const app = {
    data() {
        return {
            firstname: null,
            lastname: null,
            role: 'College student',
            url: 'images/profile.jpg',
            articleCount: 30,
            followerCount: 900,
            ratings: 9,
            errors: null
        }
    },
    methods: {
        formValidator(e){
            this.errors = validate({
                firstname: this.firstname,
                lastname: this.lastname
            },
            constraints)
        if (this.errors) {
            e.preventDefault();
        }
        if (!this.errors) {
            alert("Your profile is updated successfully.")
        }
        }
        
    }
}
Vue.createApp(app).mount('#app')