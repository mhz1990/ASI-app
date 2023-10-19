import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const About = () => {
    const [isNotificationsEnabled, setNotificationsEnabled] = useState(true);
    const [isDailyReminder, setDailyReminder] = useState(true);
    const [isWeeklyReminder, setWeeklyReminder] = useState(true);
    const [isProjectCompleted, setProjectCompleted] = useState(true);
    const [isProjectPublished, setProjectPublished] = useState(true);


    return (
        <View style={styles.container}>
            <View style={styles.settingRow}>
                <Text style={styles.itemText}>Project completed</Text>
                <Switch 
                    value={isProjectCompleted}
                    onValueChange={(value) => setProjectCompleted(value)}
                />
            </View>
            <View style={styles.settingRow}>
                <Text style={styles.itemText}>Project published</Text>
                <Switch 
                    value={isProjectPublished}
                    onValueChange={(value) => setProjectPublished(value)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 40,
        paddingLeft: 40,
    },
    itemText: {
        fontSize: 20,
        marginVertical: 10
    },
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 30,
        paddingTop: 30,
    }, 
    settingRowWithComponents: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'transparent',
        paddingBottom: 0,
        paddingTop: 30,
    },
    settingRowWithDateTime: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 30,
    },
});

export default About;