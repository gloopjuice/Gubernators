<template>
    <div class="navbar">
        <div class="imagecontainer">
            <div class="buttoncontainer">
                <router-link to="/homepage" class="sitelogo">Musinder<br></router-link>
                <div class="headerbutton">
                    <router-link to="/registerpage" class="poga">Register<br></router-link>
                    <router-link to="/loginpage" class="poga">Login</router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
name: 'Header'
}
</script>

<style sourced>
.imagecontainer
{   
    padding-left: 0rem;
    height: 15vh;
    width: 100vw;
    background-color: #373737;
    border: 1px;
    border-color: black;
    border-style: groove;
}
.sitelogo
{
    font-size: 3rem;
    padding-left: 3rem;
    padding-top: 3vh;
    position: fixed;
    color: #00FF29;
    font-family: NATS;
    font-size: 4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
    text-decoration: none;
}
.headerbutton
{
    
    display: flex; 
    flex-direction: row;
    margin-left: auto; 
    margin-right: 1rem; 
    padding: 2rem; 
    padding-top: 6vh;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    
}
.poga
{
    
    border-radius: 2rem;
    border: 1px solid #FFF;
    background: #00570E; 
    
    padding:  0.2rem 0.5rem 0.2rem 0.2rem;
    color: white;
    text-decoration: none;
}
.headerbutton .poga:first-child {
    margin-right: 1rem; 
}
.buttoncontainer
{
    
    display: flex;
    flex-direction: row;
}
</style>