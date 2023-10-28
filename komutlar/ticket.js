module.exports = [{
  name:"ticket-kanal-ayarla",
  code:`
$description[Merhaba! destek talebi oluşturmak için aşağıda ki butonu kullanabilirsiniz.]
$footer[discord.gg/akparti | Bu sistem $usertag adlı yetkili tarafından kurulmuş.]
$addButton[1;Destek Talebi Oluştur!;primary;ticketac;false;🎟️]
$addTimesTamp
$onlyPerms[administrator;Bu komutu kullanabilmek icin yonetici olman gerek]
  `
},{
name:"sil",
code:`
$description[
Bu destek talebini kapatmak istediğinden emin misin?]
$addButton[1;Destek Talebini Sil!;primary;ticketkapat;false;🗑️]
$footer[discord.gg/akparti]
`
                  }]