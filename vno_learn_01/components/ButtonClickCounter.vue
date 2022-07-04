<template>
  <div id="ButtonClickCounter">
    <h1>Component One</h1>
    <button @click="store.$counter++">You clicked me {{ store.$counter }} times.</button><br>
    <br>
    <!--        <a href="javascript:void(0);" v-on:click="store.$counter = 0">Reset</a>-->
    <a href="javascript:void(0);" @click="store.$counter = 0">Reset</a>
  </div>
</template>

<script>
import store from '/util/store.js'

export default {
    name: 'ButtonClickCounter',
    setup(){
      return {store};
    }
};
</script>

<style>

</style>