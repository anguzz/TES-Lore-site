<script lang="ts">
import Anchor from "$lib/components/Anchor.svelte";
import Text from "$lib/components/Text.svelte";
import { races } from "$lib/utils/races";



	// @ts-ignore
	let selected: number | null;
// @ts-ignore
		$:console.log(selected)
	
	let cardBackShowing = false;
	
	// @ts-ignore
	const toggleBackFront = (e) => {
		// if same card clicked twice to toggle front and back
		// @ts-ignore
		if (selected === Number(e.target.dataset.cardId)) {
			selected = null;
			cardBackShowing = !cardBackShowing;
		} else {
			cardBackShowing = !cardBackShowing;
			selected = Number(e.target.dataset.cardId)
		}
	}

</script>
  
<Anchor id="Races" />
<div id="bg">
	<div class="text-center">
		<h1 class="text-5xl m-6 font-light">  Races of Tamriel  </h1>
	  </div>
	<div class="row"> {#each races as {title,img,text, province,}, i}
      
		<div class="flip-box" >
			<div class="flip-box-inner" class:show-back={selected === i} >
				<div class="flip-box-front card" >
					<div class="img-container">
						<img src=/{img}  alt="races image" on:click={toggleBackFront} data-card-id={i}>
						</div>
					</div>
					
					<div class="flip-box-back container" alt="races image" on:click={toggleBackFront} data-card-id={i}>
						<div class="title" > {title} </div>
				
						<div class="text" > {text} </div>
						
						<div class="title" > {province} </div>
						</div>
					</div>
				</div>
		{/each}
	  
			</div>

	</div>

<style>   

  #bg {
  background-color: #1b1b1b;
  padding-top:5rem;
  height: fit-content; 
  
  }
  /* if content exceeds height use cover */
  
  .img-container{
		margin: 0 0rem 1rem;
		width: 20rem;
		height: 24rem;
		content:center;
		overflow:hidden;
		background: #212224;
		border-radius: 10px;
		
	}	
	.img-container:hover{
  box-shadow: 5px 10px 15px #76BBFC;
	}
 
	
	.row {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
	
	.flip-box {
		background-color: transparent;
		width: 20rem;
		height: 24rem;
		margin-left:.3rem;
		margin-right:.3rem;
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
		margin-bottom:4rem;
		border-radius: 10px;
	}
	/*  container to position the front & back side */
	.flip-box-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;
		border-radius: 10px;
	}


	.show-back {
		transform: rotateY(180deg);
	}

	/* Position the front and back side */
	.flip-box-front, .flip-box-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden; /* Safari */
		backface-visibility: hidden;

	}

	/* Style the front side */
	.flip-box-front {
		background-color: rgb(255, 251, 251);
		color:black;
		border-radius: 10px;
	}

	/* Style the back side */
	.flip-box-back {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: #212224;
		border-color: #6B7280;
		color: #7EACC0;
		width: 20rem;
		height: 24rem;
		margin: 0rem .4rem;
		transform: rotateY(180deg) translateX(6px);
		border-radius: 10px;
		
	}
	.flip-box-back:hover{
		box-shadow: 5px 10px 15px #76BBFC;
	}

	.text-5xl{
  font-family: "MedievalSharp";
}
.text{
	padding:10px;
}
	/*----------text box for colors----------------*/

		 


	.card {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	}

</style>