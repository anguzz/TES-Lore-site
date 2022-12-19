<script lang="ts">
  import Anchor from "$lib/components/Anchor.svelte";

 
  let color = "text-grey-200";
  let hover = "sm:hover:text-primary-500";
 
</script>

<Anchor id="home" />
<div
  class="flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover page lg:bg-fixed bg-neutral-600 bg-blend-soft-light dark:bg-blend-soft-light dark:bg-neutral-700"
  id="bg"
>
  <div class="text-center">
    <h1 class="text-5xl m-6 {color} font-light">  Elder Scrolls Lore   </h1>
  </div>

</div>

<style>  
  #bg {
    /* The image used background-image: url("/assets/images/background1.jpg"); */
    background-color: #1b1b1b;
    
  }

.text-5xl{
  font-family: "MedievalSharp";
  background-color: #375068;
  padding:20px;
  border-radius: 10px;
}
  .text-2{
  font-size: 1.8rem;  
  margin: 0rem;
  margin-top: 0rem;
  font-weight: 200;
  line-height: 3rem;
  color:rgb(215, 219, 223);
  font-family: "MedievalSharp";

 }    
 
  .subtitle {
    font-size: 1.8rem; 
     margin: 0rem;
    font-weight: 200;
    color:rgb(215, 219, 223);
    padding-left: 3vw;
    font-family: "MedievalSharp";

  }
</style>