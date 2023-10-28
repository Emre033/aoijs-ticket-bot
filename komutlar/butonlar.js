module.exports = [
  {
    name: "ticketac",
    type: "interaction",
    prototype: "button",
    code: `
  
    $interactionReply[Senin için destek talebi oluşturdum.;;;;everyone;true]

 
$modifyChannelPerms[$splitText[1];$guildID;-viewchannel]
    $textSplit[$newTicket[ticket-$username;
<@$authorID | @ {newEmbed:{description:<@$authorID> lütfen bekle destek ekibi senle ilgilenecek!}} ;1166068090145095731;true;ticket olusturulurken hata olustu!]]

  `,
  },{
    name:"ticketkapat",
    type:"interaction",
    prototype:"button",
    code:`
    $closeTicket[hata oldu]
    $wait[5s]
    $interactionReply[<@$authorID>
    Bu destek talebi siliniyor. lütfen bekleyiniz!]`
  }
];