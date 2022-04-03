import * as React from 'react';
import { Appbar, withTheme } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

const AppBarComponent = ({ navigation, goBack, theme, title }) => {
    const { colors } = theme
    const _goBack = () => {
        console.log('Went back');
        navigation.goBack()
    }

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    let route = useRoute()

    return (
        <Appbar.Header>
            {
                goBack && <Appbar.BackAction onPress={_goBack} style={{ color: colors.text }} />
            }
            <Appbar.Content
                title={title}
                //    subtitle="Subtitle"
                // style={{alignSelf:'center'}} 
                titleStyle={{ textAlign: 'center', fontSize: 35, color: colors.text }} />
            {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}

            {

                goBack && <Appbar.Action icon="dots-vertical" onPress={_handleMore} color={colors.primary} />
            }
        </Appbar.Header>
    );
};

export default withTheme(AppBarComponent);