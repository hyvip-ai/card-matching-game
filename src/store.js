import {writable} from 'svelte'

export let gameData = writable({
    move:0,
    matched:0
})