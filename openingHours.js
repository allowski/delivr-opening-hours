module.exports = function isOpen(openingHours, defaultOpen, currentDate) {

    const myDate = currentDate || new Date();

    if(!openingHours || openingHours.length === 0){
        return defaultOpen;
    }

    const currentWeekOfDay = myDate.getDay();

    const rules = openingHours.filter(r => r.dayOfWeek === currentWeekOfDay);

    if(rules.length === 0){
        return false;
    }

    const hours = rules.reduce((arr, hour) => arr.concat(hour.hours), []);

    const currentHour = myDate.getHours().toFixed(0);

    const currentMinute = ("0" + (myDate.getMinutes().toFixed(0))).substr(0, 2);

    const time = parseInt(currentHour + currentMinute);

    const isOpen = hours.filter(hour =>  hour.from <= time && hour.to >= time);

    return isOpen.length > 0;

};