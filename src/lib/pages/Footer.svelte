<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Socials from "./Socials.svelte";
</script>
<Footer id="Footer" >

  <footer id="theme" class='bottom-0 left-0 flex flex-col w-full gap-4 px-14 py-16 md:gap-10'>
    <div class='w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent'></div>
    <div class='flex flex-col items-center gap-8 md:justify-between md:flex-row'>
      <div class='flex flex-col gap-1'>
        <footer>
            <div class="footer-content">
                <h3>Angel Santoyo</h3>
                <p>Feel free to check out my other socials or contact me below </p>
          
    <div class='w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-700 to-transparent'></div>
    <div class='flex flex-col items-center md:flex-row md:justify-between'>
      <div class=copyright>
        <p>  &#169; 2022 </p>
      </div>  
      <Socials color="white"/>
    </div>
  </footer>
    
  </Footer>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,300&display=swap");
    :root {
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-300: #d1d5db;
    --gray-400: #93a3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
    }
    .footer-content h3{
      font-size: 2.1rem;
      font-weight: 500;
      text-transform: capitalize;
      line-height: 2.5rem;
    }
    .footer-content p{
      max-width: 500px;
      margin: 10px auto;
      color: #1f2021;
      
    } 
    #theme {
    --primary: #1f2021;
    --comp-primary: #1f2021;
    --white: white;
    --gray-200: #1f2021;
    --black: black;
    }
    footer {
    background-color: var(--primary);
    color: var(--white);
    box-shadow: 1px -5px var(--blur) rgba(0, 0, 0, 0.3);
  
    }
    * {
    transition: all 0.3s ease;
    }
    
    </style>