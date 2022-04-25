import { getNum } from './getNum'
import { info } from '~/info/title'
export function getChallengeDay() {
  const chanllengeNum = getNum()
  if (info[chanllengeNum])
    return info[chanllengeNum].date
  return '100 Days'
}
