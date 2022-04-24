import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
//import { Contact } from './Contact/Contact';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Тарас Шевченко', number: '+3333333' },
      // { id: 'id-2', name: 'Ліна костенко', number: '+6666666' },
      // { id: 'id-3', name: 'Михайло Коцюбинський', number: '+4444444' },
      // { id: 'id-4', name: 'Іван Франко', number: '+5555555' },
    ],
    // filter: '',
    // name: '',
  };

  addContact = ({ contacts, id, name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => {
      if (contacts.some(contact => contact.name === name)) {
        return alert(`${contact.name} is already in contacts`);
      }
      return {
        contacts: [contact, ...contacts],
      };
    });
  };

  render() {
    // const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {/* <Filter filter={filter} />
         <ContactList /> */}
      </div>
    );
  }
}
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         textTransform: 'uppercase',
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
