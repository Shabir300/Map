import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,
FlatList } from 'react-native';

const classType = ['Qaida', 'Quran', 'Tafseer', 'Fiqa', ]

const styles = {
    classOption: (activeClass, item) => ( { 
        fontSize: '1rem',
        border: '1px solid grey',
        borderRadius: '20px',
        paddingInline: '1rem',
        paddingBlock: '.3rem',
        color: activeClass === item ? 'black' : 'grey'
    })
}

const ClassOptions = () => {

    const [activeClass, setActiveClass] = useState('Quran');

    return (
        <View style={{paddingInline: '1rem', height: 'fit-content'}}>
            <FlatList 
                data={classType}
                renderItem={({item}) => (
                    <TouchableOpacity
                    onPress={() => {
                        setActiveClass(item)
                    }}
                    >
                        <Text style={styles.classOption(activeClass, item)}>{item}</Text>
                    </TouchableOpacity>
                )}
                horizontal
                contentContainerStyle={{columnGap: 10}}
            />
        </View>
    )
}

export default ClassOptions;