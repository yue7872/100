import { info } from '~/info/title'
export function getTitle() {
  const pathNo = window.location.href.split('/').pop()!
  const chanllengeNum = parseInt(pathNo)
  if (pathNo && info[chanllengeNum])
    return { pathNo, title: info[chanllengeNum].title }
  return { pathNo: 'From', title: '2022/04/25' }
}
