export default function getFormatDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    month = month >= 10 ? month : ('0' + month);
    day = day >= 10 ? day : ('0' + day);
    hour = hour >= 10 ? hour : ('0' + hour);
    min = min >= 10 ? min : ('0' + min);
    sec = sec >= 10 ? sec : ('0' + sec);

    return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}