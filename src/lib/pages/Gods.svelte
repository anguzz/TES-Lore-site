<script lang="ts">
  import Anchor from "$lib/components/Anchor.svelte";
  import Text from "$lib/components/Text.svelte";
  import CollapsibleCard from 'svelte-collapsible-card'
  import {aedras,daedras} from '../utils/gods';

  </script>
    
  <Anchor id="Gods" />
  <div id="bg">
    <ul>
      { #each aedras as aedra }
        <li>
          <CollapsibleCard>
            <div slot='header' class='header'>
              <div class='names'>
                <h2>{ aedra.heading }</h2>
              </div>
            </div>
            <div slot='body' class='body'>
              { aedra.content } <br><br>

              <div class = "image "> <img src={aedra.image} alt="image here" width=900 > </div>   
                <br>  <br>
              </div>
            
        
          </CollapsibleCard>
        </li>
      { /each }
    
    </ul>



    <br><br><br>
    <ul>
	
      { #each daedras as daedra }
        <li>
          <CollapsibleCard>
            <div slot='header' class='header'>
              <div class='names'>
                <h2>{ daedra.heading }</h2>
              </div>
            </div>
            <div slot='body' class='body'>
              { daedra.content } <br><br>

              <div class = "image "> <img src={daedra.image} alt="image here" width=900 > </div>   
                <br>  <br>
              </div>
            
        
          </CollapsibleCard>
        </li>
      { /each }
    
    </ul>
  </div>
  
  <style>   
    #bg {
    background-color: #1b1b1b;
    padding-top:5rem;
    height: fit-content;
    }
    
  

 ul {
		list-style: none;
		padding: 0;
		margin: 0 auto;
		width:80%;
		color:  #ffffff;
		font-size: 1.5rem;
    font-weight:bold;
    background-color:#1f2021;
    border-radius: 10px;
    
	}
	
	li {
		margin-bottom: 0em;
    border-radius: 10px; 
    border-bottom: 1px solid #6B91A4;

	}
	
	.header {
		padding: 0.3em;
		display: flex;
    background-color: #1f2021;
    border-radius: 10px;
    
	}
  .header:hover{
    background-color: #2b3d57;
  }
 
  

	.names {
		padding: 0 0 0 1em;
		display: flex;
		flex-direction: column;
		justify-content: center;

	}
	
	h2 {
		margin: 0;
		width: 100%;
    
	}
	
	p {
		margin: 0;
	}
	
	.body {
    padding: 0 0 0 0em;
    text-align: center;
    display: block;
    padding-top: 20px;
	}
  .image
  {
    display: flex;
      justify-content: center;
  }
 


  </style>