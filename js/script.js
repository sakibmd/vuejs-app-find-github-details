jQuery(function($) {
    $(window).on('load', function() { // makes sure the whole site is loaded 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({ 'overflow': 'visible' });
    })
});


const GitInfo = {
    data() {
        return {
            username: "",
            userinfo: [],
            showresult: false,
        };
    },
    methods: {
        get_details() {
            fetch("https://api.github.com/users/" + this.username)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    this.userinfo = data;
                    console.log(this.userinfo.company);
                });
            this.showresult = true;
        },
        reset() {
            this.username = "";
            this.showresult = false;
            this.userinfo = [];
        },
    },
};
Vue.createApp(GitInfo).mount("#git_info");