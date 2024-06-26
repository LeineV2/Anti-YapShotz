const thread = new Thread(() => {
    ChatLib.say(`MONKEY SPOTTED!`)
    thread.sleep(600)
    ChatLib.command(`p leave`)
})

const thread2 = new Thread(() => {
    ChatLib.say(`MONKEY SPOTTED!`)
    thread.sleep(600)
    ChatLib.command(`p kick redshotz`)
})

register("chat", () => {
        thread.start()
}).setCriteria("RedShotz's party!").setContains()

register("chat", () => {
        thread2.start()
}).setCriteria("RedShotz joined the party.").setContains()

register("chat", (event) => {
        cancel(event)
}).setCriteria("RedShotz").setContains()
