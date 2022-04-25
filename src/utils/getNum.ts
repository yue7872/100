export function getNum() {
  const pathNo = window.location.href.split('/').pop()!
  const chanllengeNum = parseInt(pathNo)
  return chanllengeNum
}
