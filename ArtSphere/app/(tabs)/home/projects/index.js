import { Stack, useRouter } from "expo-router";
import { TouchableOpacity,View, StyleSheet, Text } from "react-native";
import ExpandableDropdown from "../../../../components/ExpandableDropdown";
export default ()=>{
    const router = useRouter();
    const projects = [];
    return (
        <View>
            <Stack.Screen options={{
                title:"My Projects",
                headerStyle:{ backgroundColor: "#106256"},
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                }}
            />
            <View style={styles.projectSection}>
                <Text style={styles.title}>My active projects</Text>
                {projects.length===0 ?  
                    <Text style={{color:"#606060",fontSize:20, marginBottom: 10}}>
                        You have no active projects at this time.
                    </Text> : <></>
                }
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={{color:"#fff",fontSize:20}}> Choose a project </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.projectSection}>
                <Text style={styles.title}>Project history</Text>
                {projects.length===0 ?  
                    <Text style={{color:"#606060",fontSize:20, marginBottom: 10}}>
                        You have no past projects yet.
                    </Text> : <></>
                }
            </View>
            <View style={styles.projectSection}>
                <Text style={styles.title}>Research guidelines</Text>
                <ExpandableDropdown title="Determining credible resources"/>
                <ExpandableDropdown title="Avoiding plagiarism"/>
                <ExpandableDropdown title="Usage rights for images and videos"/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: "#5e0e48",
        marginBottom: 10,
    },
    buttonStyle:{
        backgroundColor: "#da58a1",
        alignItems: 'center',
        borderRadius: 20,
        paddingHorizontal:20,
        paddingVertical: 10,
        width: 'auto',
    },
    buttonTextStyle:{
        color:"#fff"
    },
    projectSection:{
        padding:15,
        display:'flex',
    }
})