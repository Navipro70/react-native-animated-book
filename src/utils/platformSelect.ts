import { Platform } from 'react-native'

export const platformSelect = <T>(options: { android: T; ios: T }) => Platform.select(options) as T
