import { Tab, Header, Item, Divider } from 'semantic-ui-react'

import itemLogo from './images/logos/SBDH-logo-wordless.png'
import agendaData from "../content/event-agenda.json"

const agenda = [...agendaData]

const wed = agenda.filter(event => event.date === "7-28")
const thurs = agenda.filter(event => event.date === "7-29")
const fri = agenda.filter(event => event.date === "7-30")

const panes = [
    { menuItem: 'All', render: () => (
        <Tab.Pane className="agenda-pane">
            {/* Wed. schedule */}
            <Divider horizontal section>
                <Header content="Wednesday, July 28" className="agenda-header" />
            </Divider>
            <Item.Group divided>
                {wed.map(wedEvent => (
                    <Item key={wedEvent.eventId}>
                        <Item.Image size="tiny" src={itemLogo} />
                        <Item.Content>
                            <Item.Header as="h3">{wedEvent.title}</Item.Header>
                            <Item.Meta>{wedEvent.start} - {wedEvent.end}</Item.Meta>
                            <Item.Meta>{wedEvent.speaker !== "" ? `Speaker: ${wedEvent.speaker}` : null}</Item.Meta>
                            <Item.Description>{wedEvent.desc !== "" ? wedEvent.desc : null}</Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
            {/* Thurs. schedule */}
            <Divider horizontal section>
                <Header content="Thursday, July 29" className="agenda-header" />
            </Divider>
            <Item.Group divided>
                {thurs.map(thursEvent => (
                    <Item key={thursEvent.eventId}>
                        <Item.Image size="tiny" src={itemLogo} />
                        <Item.Content>
                            <Item.Header as="h3">{thursEvent.title}</Item.Header>
                            <Item.Meta>{thursEvent.start} - {thursEvent.end}</Item.Meta>
                            <Item.Meta>{thursEvent.speaker !== "" ? `Speaker: ${thursEvent.speaker}` : null}</Item.Meta>
                            <Item.Description>{thursEvent.desc !== "" ? `Description: ${thursEvent.desc}` : null}</Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
            {/* Fri. schedule */}
            <Divider horizontal section>
                <Header content="Friday, July 30" className="agenda-header" />
            </Divider>
            <Item.Group divided>
                {fri.map(friEvent => (
                    <Item key={friEvent.eventId}>
                        <Item.Image size="tiny" src={itemLogo} />
                        <Item.Content>
                            <Item.Header as="h3">{friEvent.title}</Item.Header>
                            <Item.Meta>{friEvent.start} - {friEvent.end}</Item.Meta>
                            <Item.Meta>{friEvent.speaker !== "" ? `Speaker: ${friEvent.speaker}` : null}</Item.Meta>
                            <Item.Description>{friEvent.desc !== "" ? `Description: ${friEvent.desc}` : null}</Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Tab.Pane> 
    )},
    { menuItem: `July 28 (Wed.)`, render: () => (
        <Tab.Pane className="agenda-pane">
            <Divider horizontal section>
                <Header content="Wednesday, July 28" className="agenda-header" />
            </Divider>

            <Item.Group divided>
                {wed.map(wedEvent => (
                    <Item key={wedEvent.eventId}>
                        <Item.Image size="tiny" src={itemLogo} />
                        <Item.Content>
                            <Item.Header as="h3">{wedEvent.title}</Item.Header>
                            <Item.Meta>{wedEvent.start} - {wedEvent.end}</Item.Meta>
                            <Item.Meta>{wedEvent.speaker !== "" ? `Speaker: ${wedEvent.speaker}` : null}</Item.Meta>
                            <Item.Description>{wedEvent.desc !== "" ? `Description: ${wedEvent.desc}` : null}</Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Tab.Pane>
    )},
    { menuItem: 'July 29 (Thurs.)', render: () => (
        <Tab.Pane className="agenda-pane">
            <Divider horizontal section>
                <Header content="Thursday, July 29" className="agenda-header" />
            </Divider>

            <Item.Group divided>
                {thurs.map(thursEvent => (
                    <Item key={thursEvent.eventId}>
                        <Item.Image size="tiny" src={itemLogo} />
                        <Item.Content>
                            <Item.Header as="h3">{thursEvent.title}</Item.Header>
                            <Item.Meta>{thursEvent.start} - {thursEvent.end}</Item.Meta>
                            <Item.Meta>{thursEvent.speaker !== "" ? `Speaker: ${thursEvent.speaker}` : null}</Item.Meta>
                            <Item.Description>{thursEvent.desc !== "" ? `Description: ${thursEvent.desc}` : null}</Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Tab.Pane>
    ) },
    { menuItem: 'July 30 (Fri.)', render: () => (
        <Tab.Pane className="agenda-pane">
            <Divider horizontal section>
                <Header content="Friday, July 30" className="agenda-header" />
            </Divider>
            <Item.Group divided>
                {fri.map(friEvent => (
                    <Item key={friEvent.eventId}>
                        <Item.Image size="tiny" src={itemLogo} />
                        <Item.Content>
                            <Item.Header as="h3">{friEvent.title}</Item.Header>
                            <Item.Meta>{friEvent.start} - {friEvent.end}</Item.Meta>
                            <Item.Meta>{friEvent.speaker !== "" ? `Speaker: ${friEvent.speaker}` : null}</Item.Meta>
                            <Item.Description>{friEvent.desc !== "" ? `Description: ${friEvent.desc}` : null}</Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Tab.Pane>
    )}
]

function Agenda() {
    // date stuff for default active tab
    // let today = new Date()
    // console.log(today.getMonth(), today.getDate())

    return (
        <div className='page-contain'>
            <Header as='h1' className="page-title" textAlign='center' content="Event Agenda" subheader="Info about how to attend events. Maybe Airmeet link? Explanation of tracks? Note that some events on different tracks are happening during the same time blocks on a given day." />
            <Tab panes={panes} defaultActiveIndex={1} />
        </div>
    )
}


export default Agenda;