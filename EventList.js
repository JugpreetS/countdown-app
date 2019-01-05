import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';
import EventCard from './EventCard';

const styles = StyleSheet.create({
    eventList: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#F3F3F3'
    }
});

class EventList extends React.Component {

    state = {
        events: []
    };

    componentDidMount() {

        setInterval(() => {
            this.setState({
                events: this.state.events.map(e => ({
                    ...e,
                    timer: Date.now(),
                })),
            })

        }, 1000);
        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date)
        }));
        this.setState({events: events});
    };
    render() {
        return (
            <FlatList style={styles.eventList}
                data = {this.state.events}
                renderItem = {({item}) => <EventCard event={item}/>}
                keyExtractor = {item => item.id}
            />
        )
    }
}

export default EventList;