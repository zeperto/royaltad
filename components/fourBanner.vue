<template>
  <div id="fourParts">
    <div class="item1">
        <img src="@/assets/bannerblock-1.png" alt="part1">
    </div>
    <div class="item2">
        <img src="@/assets/bannerblock-2.png" alt="parts2">
    </div>
    <div class="item3">
        <img src="@/assets/bannerblock-4.png" alt="part3">
    </div>
    <div class="item4">
        <img src="@/assets/bannerblock-3.png" alt="part4">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #fourParts{
        padding: 3rem;
        display: grid;
        grid-template-rows: 2;
        grid-template-columns: 3;
        grid-gap: 1rem;
    }
    .item1{
        grid-row: 1 / 2;
        grid-column: 1 / 2;
    }
    .item2{
        grid-row: 1 / 2;
        grid-column: 2 / 3;
    }
    .item3{
        grid-row: 1 / 3;
        grid-column: 3 / 4;
    }
    .item4{
        grid-row: 2 / 3;
        grid-column: 1 / 3;
    }
    @media screen and (max-width: 576px) {
        #fourParts{
            display: flex;
            flex-flow: column;
            margin: auto;
            text-align: center;
            img{
                width: 80%;
            }
        }
    }
    @media screen and (min-width: 577px)  and (max-width: 768px){
        #fourParts{
            display: flex;
            flex-flow: column;
            margin: auto;
            text-align: center;
        }
    }
    @media screen and (min-width: 769px)  and (max-width: 992px){
        #fourParts{
            max-width: 85vw;
            margin:auto;
            img{
                width: 100%;
            }
        }
    }
    @media screen and (min-width: 993px)  and (max-width: 1200px){
        #fourParts{
            max-width: 85vw;
            margin:auto;
            img{
                width: 100%;
            }
        }
    }
    @media screen and (min-width: 1200px){
        #fourParts{
            max-width: 80vw;
            margin:auto;
            img{
                width: 100%;
            }
        }
    }
</style>
