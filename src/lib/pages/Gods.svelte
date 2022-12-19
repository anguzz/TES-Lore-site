<script lang="ts">
  import Anchor from "$lib/components/Anchor.svelte";
  import Text from "$lib/components/Text.svelte";
  import CollapsibleCard from 'svelte-collapsible-card'
  import {aedras,daedras} from '../utils/gods';

  </script>
    
  <Anchor id="Gods" />  
  <div id="bg">
    <Text>
      <div class ="text-5xl m-6 font-light" id="gods"> Gods of Tamriel</div>

    <div class="info">The Aedra and Daedra are descendents of two primal forces named Anu and Padomay, whose battle ended up with the creation of the universe. 
       Gods with Anuic basis include the Aedra, and Gods with pandomaic basis include the Daedra.
       Generally Aedra(The Divines) and their actions are seen generally as good. The Daedra are seen as forces of change, and cause chaos and evil to 
      bring that change.
      </div>
    </Text><br><br><br>


    <ul>
        <div class="dropdown-title">The Divines </div>
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
        <div class="dropdown-title">The Daedric princes </div>
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
    font-family: "MedievalSharp";
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
    border-bottom: 1px solid #375068;

	}
	
	.header {
		padding: 0.3em;
		display: flex;
    background-color: #1f2021;
    border-radius: 10px;
    
	}
  .header:hover{
    background-color: #375068;
  }
 
  

	.names {
		padding: 0 0 0 1em;
		display: flex;
		flex-direction: column;
		justify-content: center;
    font-weight: 300;

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
 

  .info
    {
      padding:20px;
      font-size: 1.8rem;
      font-weight: 350;
      background-color: #375068;
      border-radius: 10px;
    }
    .dropdown-title
    {
      font-family: "MedievalSharp";
      padding:15px;
      font-size: 2.0rem;
      font-weight: 700;
    }

    .text-5xl{
  font-family: "MedievalSharp";
}
  </style>