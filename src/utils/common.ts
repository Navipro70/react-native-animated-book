import 'react-native-reanimated'

export function convertSecToTime(seconds: number) {
  'worklet'
  const hrs = ~~(seconds / 3600)
  const mins = ~~((seconds % 3600) / 60)
  const secs = ~~seconds % 60

  let ret = ''
  if (hrs > 0) {
    ret += String(hrs) + ':' + (mins < 10 ? '0' : '')
  }
  ret += String(mins) + ':' + (secs < 10 ? '0' : '')
  ret += String(secs)
  return ret
}
