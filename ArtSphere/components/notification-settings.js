import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const NotificationSettings = () => {
    const [isNotificationsEnabled, setNotificationsEnabled] = useState(true);
    const [isSoundEnabled, setSoundEnabled] = useState(true);
    const [isVibrationEnabled, setVibrationEnabled] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.settingRow}>
                <Text>Turn off all</Text>
                <Switch 
                    value={isNotificationsEnabled}
                    onValueChange={(value) => setNotificationsEnabled(value)}
                />
            </View>

            <View style={styles.settingRow}>
                <Text>Daily reminder</Text>
                <Switch 
                    value={isSoundEnabled}
                    onValueChange={(value) => setSoundEnabled(value)}
                />
            </View>

            <View style={styles.settingRow}>
                <Text>Weekly reminder</Text>
                <Switch 
                    value={isVibrationEnabled}
                    onValueChange={(value) => setVibrationEnabled(value)}
                />
            </View>

            <View style={styles.settingRow}>
                <Text>Project completed</Text>
                <Switch 
                    value={isSoundEnabled}
                    onValueChange={(value) => setSoundEnabled(value)}
                />
            </View>

            <View style={styles.settingRow}>
                <Text>Project published</Text>
                <Switch 
                    value={isVibrationEnabled}
                    onValueChange={(value) => setVibrationEnabled(value)}
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
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
    }
});

export default NotificationSettings;