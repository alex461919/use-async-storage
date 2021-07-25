import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

const useAsyncStorage = (key, defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    const storeData = (_value) => {
        (async (__value) => {
            try {
                await AsyncStorage.setItem(key, JSON.stringify(__value));
                setValue(await getData());
            } catch (e) {
                // saving error
            }
        })(_value);
    };
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    };

    const removeData = () => {
        (async () => {
            try {
                await AsyncStorage.removeItem('@MyApp_key');
            } catch (e) {
                // remove error
            }
        })();
    };

    useEffect(() => {
        (async () => {
            setValue(await getData());
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [value, storeData, removeData];
};

export {useAsyncStorage};
