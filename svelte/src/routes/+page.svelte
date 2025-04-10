<script>
	import { get } from "svelte/store";

    let lightOff = 'https://i.postimg.cc/KjK1wL3c/bulb-off.png';
    let lightOn = 'https://i.postimg.cc/6QyTynzr/bulb-on.png';
    let light = lightOff;
    let bgColor = 'bg-black';
    let buttonTxt = 'Turn On';

    function toggleLight() {
        if (light === lightOff) {
            light = lightOn;
            bgColor = 'bg-white';
            buttonTxt = 'Turn Off';
        } else {
            light = lightOff;
            bgColor = 'bg-black';
            buttonTxt = 'Turn On';
        }
    }
</script>

<div class="{bgColor} items-center justify-center gap-4 flex flex-col">
    <img class="items-center mx-auto" src={light} alt="lightbulb"/>
    <button on:click={toggleLight} class="bg-amber-400 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">
        {buttonTxt}</button>
</div>


<style>

</style>