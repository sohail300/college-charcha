export function getTime() {
    const date = new Date();
    const utcOffset = date.getTimezoneOffset(); // in minutes
    const istOffset = 330; // IST is UTC+5:30, which is 330 minutes

    // Calculate the time in IST
    const istTime = new Date(date.getTime() + (istOffset + utcOffset) * 60000);

    let hours = istTime.getHours();
    const minutes = String(istTime.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strTime = `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;

    return strTime;
}
