<template>
    <div id="app">
        <Header></Header>
        <Banner v-if="isHomePage"></Banner>
        <InnerBanner v-else></InnerBanner>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import InnerBanner from './components/InnerBanner.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'App',
    data() {
        return {
            isHomePage: true
        };
    },
    components: {
        Header,
        Banner,
        InnerBanner,
        Footer
    },
    created: function() {
        if (window.location.pathname =='/') {
            this.isHomePage = true;
        } else {
            this.isHomePage = false;
        }
    },
    updated: function(){
        if (window.location.pathname =='/') {
            this.isHomePage = true;
        } else {
            this.isHomePage = false;
        }
    }
}
</script>

<style lang="scss">
    * {
        box-sizing:border-box;
    }

    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }

    body {
        margin: 0;

        .text-center {
            text-align: center;
        }

        *:focus {
            outline: 0 !important;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        .flex {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
        }
    }

    .two-col-btn .btn {
        margin: 0 10px;
    }

    .three-col-btn .btn {
        margin: 0 10px;
    }

    .container {
        padding: 0 20px;
        width: 1200px;
        margin: 0 auto;
        text-align: center;
    }
    
    .btn {
        display: inline-block;
        //padding: 10px 20px;
        width: 150px;
        border-radius: 20px;
        border: 1px solid #000;
        transition: ease-in-out .2s;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        color: #002C76;
    }

    .btn:hover {
        opacity: 0.5;
    }

    .opacity-hover:hover {
        opacity: 0.5;
    }

    .opacity-hover {
        transition: ease-in-out .2s;
    }

    a {
        transition: ease-in-out .2s;
        text-decoration: none;
        color: #002C76;
    }
    
    a:hover {
        opacity: 0.5;
    }

    section {
        margin: 80px 0;

        .section-title {
            h2 {
                margin: 0;
                font-size: 30px;
            }
        }

        .section-body {
            margin-top: 40px;
        }
    }

    section + section {
        margin: 120px 0;
    }

</style>                                                    