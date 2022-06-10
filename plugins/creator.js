function handler(m) {
  this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
  this.sendContact(m.chat, '919015286428', 'OFICIAL - GataBot', m)
  //this.sendContact(m.chat, '18194140063', 'OFICIAL - SubGataBot', m)
  //this.sendContact(m.chat, '18192420063', 'Gata Dios', m)
  }
handler.help = ['contacto'] 
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño|dueña)$/i

module.exports = handler
