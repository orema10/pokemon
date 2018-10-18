<template>
    <section class="main-header">
        <div ref="toggleScreen" class="toggle-screen" @click="toggleNavMobile"></div>

        <div class="container flex space-between align-center">

            <router-link to="/">Pokemon App</router-link>
            <!-- <h1><router-link to="/">Pokemon App</router-link></h1> -->

            <ul ref="navDesktop" class="nav-desktop flex-row align-center flex inline-list" arial-label="Main navigation bar">
                <li><router-link to="/team"> Team </router-link></li>
                <!-- <li><router-link to="/templates"> Templates </router-link></li> -->
                <li v-if="isUserLoggedIn"><router-link to="/profile" v-if="isUserLoggedIn"> My Profile </router-link></li>
                <li v-if="isUserLoggedIn"><button @click="logout" > Logout </button></li>
                <li v-if="!isUserLoggedIn"><router-link to="/signup" > Signup </router-link></li>
                <li v-if="!isUserLoggedIn"><button @click="toggleLogin" > Login </button></li>
            </ul>

            <div ref="navMobile" class="nav-mobile" @click="toggleNavMobile">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>

        </div>

    </section>
</template>

<script>
export default {
    name: 'main-header',
    data() {
        return {
            navBarMObile: false,
            displayLogin: false,
            user: {
                userName: '',
                password: ''
            }
        }
    },
    computed: {
        isUserLoggedIn() {
            return this.$store.getters.isUserLoggedIn;
        },
        loggedInUser() {
            return this.$store.getters.loggedInUser.userName;
        }
    },
    methods: {
        toggleNavMobile() {
            this.$refs.navMobile.classList.toggle("change");
            this.$refs.navDesktop.classList.toggle("open");
            this.$refs.toggleScreen.classList.toggle("show-div");
        },
        logout() {
            this.$store.dispatch({ type: 'logout' })
                .then( () => this.$router.push('/'));
        },
        toggleLogin() {
            console.log('toggle')
            this.displayLogin = !this.displayLogin;
            if (this.displayLogin) this.openLogin();
        },
        openLogin() {
            if (this.isUserLoggedIn && !this.displayLogin) return;
            this.$swal({
                title: 'Login',
                confirmButtonText: 'Login',
                confirmButtonColor: '#333',
                html: `
                    <p>
                        <label>Username:</label>
                        <input class="username" type="text" required /> 
                    </p>
                    <p>
                        <label>Password:</label>
                        <input class="userpass" type="password" required />
                    </p>
                `,
                preConfirm: () => {
                    return new Promise(resolve => {
                        resolve([
                            document.querySelector('.username').value,
                            document.querySelector('.userpass').value,
                        ]);
                    })
                }
            })
            .then(result => {
                if (result.value) {
                    this.user.userName = result.value[0];
                    this.user.password = result.value[1];
                    this.login();
                }
            });
        },
        login() {
            let user = { userName: this.user.userName, password: this.user.password };
            this.$store.dispatch({ type: 'login', user })
                .then(user => {
                    if (user) {
                        this.$swal({
                            title: 'Login',
                            text: 'Logged in successfully.',
                            confirmButtonText: 'Ok',
                            confirmButtonColor: '#333',
                            timer: 5000
                        })
                        .then(() => this.$router.push(`/profile`));
                    } else {
                        this.$swal({
                            title: 'Login',
                            text: 'Wrong credentials. Please try again',
                            confirmButtonText: 'Ok',
                            confirmButtonColor: '#333',
                            timer: 5000
                        });
                    }
                });
        }
    }
};
</script>

<style scoped lang="scss">
.main-header {
    background-color: #333;

    a {
        color: #fff;
        text-decoration: none;

        &:hover {
            color: #999;
        }
    }

    h1 {
        margin: 0 10px;
        font-size: 1.4em;
        font-weight: bold;
        font-family: 'openSans', 'Geneva', 'Tahoma', 'sans-serif';
    }

    ul {
        margin: 0px;

        li {
            padding: 0.5em 1em;
            font-weight: bold;

            a {
                text-decoration: none;

                &.router-link-exact-active {
                    color: #999;
                }
            }

            button {
                font-family: 'Roboto','OpenSans', 'Geneva', 'Tahoma', 'sans-serif';
                font-weight: bold;
                color: #fff;
                border-color: #fff;

                &:hover {
                    color: #999;
                    background-color: rgba( 0, 0, 0, 0.5);
                }
            }
        }
    }
}
.nav-mobile {
    display: none;
}
.toggle-screen {
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background: rgba(42, 42, 42, 0.6);
    z-index: 0;
    opacity: 0.9;
    visibility: hidden;
    cursor: pointer;
    transition: opacity .5s; 
}
@media (max-width: 720px) {
    .show-div {
        z-index: 1;
        visibility: visible;
        opacity: 1; 
        display:block;
    }
    .nav-desktop{
        margin: 0;
        z-index: 1;
        padding-top: 20px;
        flex-direction: column;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.9);
        border-left: 1px solid rgba(100, 100, 100, 0.5);
        min-width: 200px;
        transform: translate(100%, 0);
        transition: all .8s;

        &.open{
            transform: translate(0, 0);
        }

        li a {
            border-bottom: 2px solid black;
            text-decoration: dotted;
            display: block;
            line-height: 60px;
            text-align: center;
            font-size: 16px;
        }

        li a:hover {
            color: #999;
        }
    }

    /* nav-mobile button */
    
    .nav-mobile {
        z-index: 1;
        cursor: pointer;
        display: block;
        float: right;
        padding: 10px;
    }
    
    .bar1, .bar2, .bar3 {
        width: 35px;
        height: 5px;
        background-color: #fff;
        margin: 6px 0;
        transition: 0.4s;
    }
    
    /* Rotate first bar */
    .change .bar1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
        transform: rotate(-45deg) translate(-9px, 6px) ;
    }
    
    /* Fade out the second bar */
    .change .bar2 {
        opacity: 0;
    }
    
    /* Rotate last bar */
    .change .bar3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
        transform: rotate(45deg) translate(-8px, -8px) ;
    }
    
}
</style>