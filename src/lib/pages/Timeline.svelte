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
	} from 'svelte-vertical-timeline';

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
              <TimelineDot style={'background-color: #7CD5E2;'}/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3>{option.title}</h3>
            </TimelineContent>
          </TimelineItem>
        {/each}
      </Timeline>
    
      <!--maybe add dropdown menu here-->
      The first era lasted 2920 years, the second era 896, the third era 433 years, and the fourth era is currently ongoing.
<br><br>
 
      The events in the Elder Scrolls online are in middle the 2nd era, during the Three banner war, 
      in which 3 alliances known as the Aldmeri Dominion, Ebonheart pact, and Dagerfall Covenant fought for control of the contentant. 
      <br><br>
      The races in each alliance alligned themselves with their geoglogical neighbors. The Dominion located in the south-west was comprised of the High elves,Wood elves, and Khajit. The ebonheart pact located in the North and east was made up of the Nords, Argonians, and Dark Elves. Finally the Dagerfall Covenant located in the North-west was made up of the Bretons, Reguards, and Orcs.
      </Text>
    </div>
    
    <style>   
      #bg {
      background-color: rgb(35, 84, 154);
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
		color: rgb(72, 134, 126);
	}

    
    </style>