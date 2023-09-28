<template>
    <Header/>
    <label for="fname" >Enter email:</label>
    <input type="text" id="fname" name="fname" class="loginlauki"><br><br>
    <label for="lname" >Enter password:</label>
    <input type="text" id="lname" name="lname" class="loginlauki"><br><br>
    <input type="submit" value="Log in!">
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
.loginlauki
{
    display: flex;
    width: 1112px;
    align-items: center;
    border-radius: 20px;
    border: 2px solid rgba(0, 0, 0, 0.06);
    background: #FFF;
}
</style>
