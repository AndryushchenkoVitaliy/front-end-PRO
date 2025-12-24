'use strict';

const contactBook = {
    contacts: [
      {
        name: "Бобёр",
        phone: "+380501234567",
        email: "bober@gmail.com"
      },
      {
        name: "Оксана",
        phone: "+380671112233",
        email: "oksana@gmail.com"
      }
    ],
  
    findContact(name) {
      return this.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
    },
  
    addContact(name, phone, email) {
      this.contacts.push({ name, phone, email });
    }
};
  
console.log(contactBook.findContact("Бобёр"));

contactBook.addContact("Денис", "+380991234567", "denis@gmail.com");

console.log(contactBook.contacts);