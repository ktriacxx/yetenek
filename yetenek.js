const Discord = require("discord.js")

module.exports.run = async(client, message, args, embed) => {
    if (!message.member.roles.cache.some(ktria => [].includes(ktria.id)) && !message.member.permissions.has("ADMINISTATOR")) return;
    let mentioned = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!mentioned) return message.reply(embed.setDescription(`bir kullanıcı belirtin`))
    let döküman = args[0];

    if(döküman == "designer") { 
    mentioned.roles.add("988144345725149205")
    message.reply(`${mentioned} kullanıcısına başarıyla designer permi verildi!`)}

    if(döküman == "dj") { 
    mentioned.roles.add("988144336426369024")
    message.reply(`${mentioned} kullanıcısına başarıyla dj permi verildi!`)}

    if(döküman == "ressam") { 
    mentioned.roles.add("988144337005195325")
    message.reply(`${mentioned} kullanıcısına başarıyla ressam permi verildi!`)}

    if(döküman == "yazar") {
    mentioned.roles.add("988144338196389959")
    message.reply(`${mentioned} kullanıcısına başarıyla yazar permi verildi!`)}

    if(döküman == "yazılımcı") {
    mentioned.roles.add("988144341388242954")
    message.reply(`${mentioned} kullanıcısına başarıyla yazılımcı permi verildi!`)}

    if(döküman == "müzisyen") { 
    mentioned.roles.add("988144344638836758")
    message.reply(`${mentioned} kullanıcısına başarıyla müzisyen permi verildi!`)}

    if(döküman == "touch") { 
    mentioned.roles.add("988144346689855568")
    message.reply(`${mentioned} kullanıcısına başarıyla turuncu touch verildi!`)}

};

exports.ktria = {
    name: "yetenek",
    aliases: ["yetenek"],
};