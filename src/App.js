import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Main} from './components/Main';
import './App.css';
//import I from 'immutable';

class App extends Component {
  constructor() {
    super();
      this.state = {
      ifClickEvent: 0,
      ifClickGroup: 0,
      groupNameInput: '',
      eventHeader: '',
      eventContent: '',
      eventTags: '2',
      eventDate: '',
      eventGroupName: 'Okul',
      // todo Buradaki Default deger dinamiklesecek
      groups: [
        {
          groupId: 1,
          groupName: 'Okul',
          cards: [
            {
              card_Id:1,
              header: 'Odev',
              text: 'Okul Odevlerini Yapmayi iniutma',
              imgSrc: '',
              date: '29-06-2020',
              tags: 1,
            },
            {
              card_Id:2,
              header: 'Proje Teslimi',
              text: 'Oyun Programlama odevi teslim edilecek',
              imgSrc: '',
              date: '30-06-2020',
              tags: 1,
            },
          ],
        },
        {
          groupId: 2,
          groupName: 'Is',
          cards: [
            {
              card_Id:3,
              header: 'Scrum Bulusmasi',
              text: 'Okul Odevlerini Yapmayi Unutma',
              imgSrc: '',
              date: '29-06-2020',
              tag: 2,
            },
          ],
        },
        {
          groupId: 3,
          groupName: 'Haftasonu',
          cards: [
            {
              card_Id:4,
              header: 'Piknik',
              text:
                'aOkul arkadaslari ile beraber piknige gidilecek. Haftasonuna kadar isleri hallet',
              imgSrc: '',
              date: '01-07-2020',
              tag: 3,
            },
          ],
        },
        {
          groupId: 8,
          groupName: 'E-spor',
          cards: [{
            card_Id:5,
          }],
        },
      ],
    };
    this.showForm = this.showForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addGroup = this.addGroup.bind(this);
    this.cardDelete=this.cardDelete.bind(this);
  }

  cardDelete(e) {
    this.setState(()=>({groups:this.state.groups.filter(x=>x.groupId!==e)}))
    console.log(e);
  }



  handleSubmit(e) {
    const { groups } = this.state;
    const {
      eventHeader,
      eventContent,
      eventDate,
      eventTags,
      eventGroupName,
    } = this.state;
    let index;
    
    groups.forEach((val, i) => {
      console.log('val', val.groupName);
      console.log('eventGroupName', eventGroupName);
      if (val.groupName === eventGroupName) {
        console.log(i);
        index = i;
      }
    });
    //Immutable
    const oldCard = groups[index].cards;
    console.log('oldCard eski hali', groups[index].cards);
    const newCard = {
      header: eventHeader,
      text: eventContent,
      imgSrc: '',
      date: eventDate,
      tag: eventTags,
    };
    // Immutable
    oldCard.push(newCard);
    console.log('oldCard yeni Cikstisi', newCard);
    this.setState({
      groups:groups,
      eventHeader: '',
      eventContent: '',
      eventDate: '',
      eventTags: 2,
      eventGroupName: 'Okul',
      // ifClickEvent: 0,
    });
    e.preventDefault();
  }

  addGroup(e) {
    const { groups, groupNameInput } = this.state;
    console.log(groups.length);
    let lastGroup = groups[groups.length - 1]; // groups[3]
    const newGroupId = lastGroup.groupId + 1;
    const newGroups = {
      groupId: newGroupId,
      groupName: groupNameInput,
      cards: [],
    };
    // ToDo Immutable
    groups.push(newGroups);
    this.setState({ groups:groups, groupNameInput: '', ifClickGroup: 0 });
    e.preventDefault();
  }

  handleChange(e) {
    console.log('name', e.target.name);
    console.log('value', e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  showForm(e) {
    console.log(e.target.name);
    const { name } = e.target;
    const { ifClickEvent, ifClickGroup } = this.state;
    let val;
    if (name === 'ifClickEvent') {
      val = ifClickEvent;
    } else if (name === 'ifClickGroup') {
      val = ifClickGroup;
    }
    this.setState({ [name]: !val });
  }

  render() {
    const {
      groups,
      ifClickEvent,
      eventContent,
      eventDate,
      eventHeader,
      eventTags,
      ifClickGroup,
      groupNameInput,
    } = this.state;
    return (
      <div className="App">
        <Navbar showForm={this.showForm} />
        <Main
          groupNameInput={groupNameInput}
          ifClickEvent={ifClickEvent}
          ifClickGroup={ifClickGroup}
          groups={groups}
          eventContent={eventContent}
          eventDate={eventDate}
          eventHeader={eventHeader}
          eventTags={eventTags}
          addGroup={this.addGroup}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          cardDelete={this.cardDelete}

        />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <h1>Selam</h1>
//     </div>
//   );
// }

export default App;