import {writable} from 'svelte/store'

export let gameData = writable({
    move:0,
    matched:0
})