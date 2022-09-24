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
		{ title: 'Elder Scrolls online', time: '2E 600' },
    { title: 'Redguard', time: '2E864' },
    { title: 'Arena',   time: '3E 389' },
    { title: 'Dagerfall', time: '3E 405' },
    { title: 'Morrowind', time: '3E 427' },
    { title: 'Oblivion', time: '3E 433' },
    { title: 'Skyrim', time: '4E 201' },

	
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
    
      <!--maybe add dropdown menu here-->
      <div id="info">The first era lasted 2920 years, the second era 896, the third era 433 years, and the fourth era is currently ongoing. </div>
      
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
    
  }

    
    </style>