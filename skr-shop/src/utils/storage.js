export function getLocalStorage(key){
  return localStorage.getItem(key)
}
export function setLocalStorage(key,value){
  return localStorage.setItem(key,value)
}
export function removeLocalStorage(key){
  return localStorage.removeItem(key)
}
export function clear(){
  return localStorage.clear()
}