<script lang="ts">
    import Anchor from "$lib/components/Anchor.svelte";
    import Text from "$lib/components/Text.svelte";


    import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from '$lib/components/svelte-vertical-timeline';

	const options = [
		{ title: 'Elder Scrolls online (2014)', time: '2E 600' },
    { title: 'Redguard (1998)', time: '2E864' },
    { title: 'Arena (1994)',   time: '3E 389' },
    { title: 'Dagerfall (1996)', time: '3E 405' },
    { title: 'Morrowind (2002)', time: '3E 427' },
    { title: 'Oblivion (2006)', time: '3E 433' },
    { title: 'Skyrim (2011)', time: '4E 201' },

	
	];

    </script>
      
    <Anchor id="Timeline" />
    <div id="bg">
    <Text>
    
    
      <Timeline position="alternate">
        {#each options as option}
          <TimelineItem>
            <TimelineOppositeContent slot="opposite-content">
              <p>{option.time}</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3>{option.title}</h3>
            </TimelineContent>
          </TimelineItem>
        {/each}
      </Timeline>
    

      <div class="info">The first era lasted 2920 years, the second era 896, the third era 433 years, and the fourth era is currently ongoing. While some games are newer, they take place 
        further back in the timeline, such as Elder scrolls online taking place around 1000 years before Skyrim.
      </div>
      
<br><br>
 
      
      <br><br>
  

      </Text>
    </div>
    
    <style>   
      #bg {
      background-color: #1b1b1b;
      padding-top:5rem;
      height: cover;
      }
      
	h3 {
		letter-spacing: px;
		margin: 0;
		padding: 0;
	}
	
	p {
		letter-spacing: 1.5px;
		margin: 0;
		color: #76bcfd;
	} 
  .info
  {
    font-size: 2.0rem;
       font-weight: 350;
       font-family: "MedievalSharp";
    padding:20px;
  }

    
    </style>