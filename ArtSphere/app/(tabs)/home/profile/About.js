import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const About = () => {


    return (
        <View>
            <View style={styles.settingRow}>
                <Text style={styles.itemText}>Art Sphere Inc</Text>
            </View>
            <View style={styles.settingRow}>
                <Text style={styles.itemText}>Art for Everyone</Text>
            </View>
            <View style={styles.settingRow}>
                <Text style={styles.itemText}>MISSION</Text>
            </View>
            <View style={styles.settingRow}>
                <Text style={styles.itemText}>Engage the creativity in communities; empower neighborhoods; explore the positives in peoples' lives; and heal the mind, body, and spirit through the arts.</Text>
            </View>
            <View style={styles.settingRow}>
                <Text style={styles.itemText}>ABOUT ASI</Text>
            </View>
            <View style={styles.settingRow}>
                <Text style={styles.itemText}>Founded in 1998, Art Sphere Inc is a non-profit arts organization that creates free educational tools and meaningful experiences for youth in inner-city Philadelphia. We build resources for communities where funding cuts have severely impacted the ability of local schools, recreation centers and libraries to provide any arts exposure.</Text>
            </View>
            <View style={styles.settingRow}>
                <Text style={styles.itemText}>WHAT WE DO</Text>
            </View>
            <View style={styles.settingRow}>
                <Text style={styles.itemText}>Our goal is to provide accessible arts curricula–both in-person and digital–to help children learn to think outside the box, solve problems, promote creativity and increase literacy. Our programs build bridges and encourage creative thinking between the creative arts and architecture, literacy, music, STEAM and other topics. We work closely with local recreation centers, libraries and schools to be able to take our services right into the neighborhoods where people live and work. ASI art classes, lesson plans and curricula take users on a journey to transform everyday materials into art. Through individual and group projects, our art lessons provide opportunities to transmit core values, such as compassion, tolerance and respect. Our curriculum engages children from 3-17 years old and is tailored to multiple learning styles. ASI provides a large collection of online art-based lesson plans and activities that can be done independently. All of this is organized by subject, age and grade level. More at artsphere.org/curriculum. We provide “how to” videos on YouTube and Facebook Live. We weave in tutorials on music, creative writing, music history, exploring different cultures, STEAM, and literacy through art. More at artsphere.org/classes.</Text>
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
        paddingBottom: 30,
        paddingTop: 30,
    }, 
    settingRowWithComponents: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 0,
        paddingBottom: 0,
        paddingTop: 30,
    },
    settingRowWithDateTime: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 0,
        paddingBottom: 30,
    },
});

export default About;