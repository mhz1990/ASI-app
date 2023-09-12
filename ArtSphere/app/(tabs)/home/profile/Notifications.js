import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import DailyReminder from './notifications/DailyReminder';
import WeeklyReminder from './notifications/WeeklyReminder';

const Notifications = () => {
    const [isNotificationsEnabled, setNotificationsEnabled] = useState(true);
    const [isDailyReminder, setDailyReminder] = useState(true);
    const [isWeeklyReminder, setWeeklyReminder] = useState(true);
    const [isProjectCompleted, setProjectCompleted] = useState(true);
    const [isProjectPublished, setProjectPublished] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.settingRow}>
                <Text style={styles.itemText}>Turn off all</Text>
                <Switch 
                    value={isNotificationsEnabled}
                    onValueChange={(value) => setNotificationsEnabled(value)}
                />
            </View>

            <View>
                <View style={styles.settingRowWithComponents}>
                    <Text style={styles.itemText}>Daily reminder</Text>
                    <Switch 
                        value={isDailyReminder}
                        onValueChange={(value) => setDailyReminder(value)}
                    />
                </View>
                <View style={styles.settingRowWithDateTime}>
                    <DailyReminder />
                    <Text style={styles.itemText}></Text>
                </View>
            </View>

            <View>
                <View style={styles.settingRowWithComponents}>
                    <Text style={styles.itemText}>Weekly Reminder</Text>
                    <Switch 
                        value={isWeeklyReminder}
                        onValueChange={(value) => setWeeklyReminder(value)}
                    />
                </View>
                <View style={styles.settingRowWithDateTime}>
                    <WeeklyReminder />
                    <Text style={styles.itemText}></Text>
                </View>
            </View>

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
        padding: 20,
    },
    itemText: {
        fontSize: 20,
        marginVertical: 10
    },
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginBottom: 15,
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

export default Notifications;