<template>
    <Header/>
    <label for="fname" >Enter your email:</label>
    <input type="text" id="fname" name="fname" class="registerlauki"><br><br>
    <label for="lname" >Choose password:</label>
    <input type="text" id="lname" name="lname" class="registerlauki"><br><br>
    <input type="submit" value="Submit">
</template>

<script>
import Header from '../components/Header.vue';

export default{
   components:{
       Header
   }
}

</script>

<style scoped>
.registerlauki
{
    display: flex;
    width: 1112px;
    align-items: center;
    border-radius: 20px;
    border: 2px solid rgba(0, 0, 0, 0.06);
    background: #FFF;
}
</style>
