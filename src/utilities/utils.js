export const addSeperatorToNumber = (number) => {
    return number.toLocaleString();
}
export const formatTimestamp = (timestamp) => {
    if( typeof timestamp !== 'number') {
        return 'Invalid time';
    }
    
    const inputDate = new Date(timestamp);
    const currentDate = new Date()
    const msDifference = currentDate.valueOf() - inputDate.valueOf();

    if( msDifference >= 31536000000 ) {
        //1year
        const time = Math.floor(msDifference / 31536000000);
        return `${time} yr. ago`;
    }
    else if( msDifference >= 2678400000 ) {
        //1month
        const time = Math.floor(msDifference / 2678400000);
        return `${time} mo. ago`;
    }
    else if(msDifference >= 86400000) {
        //1day
        const time = Math.floor(msDifference / 86400000);
        return `${time} day${time > 1 ? 's' : ''} ago`;
    }
    else if(msDifference >= 3600000) {
        //1hr
        const time = Math.floor(msDifference / 3600000);
        return `${time} hr. ago`;
    }
    else if(msDifference >= 60000) {
        //1min
        const time = Math.floor(msDifference / 60000);
        return `${time} min. ago`;
    }
    else if (msDifference < 60000) {
        // < 1min.
        return '1 min. ago';
    }

}
export const convertMediaMetaDataToUrls = (data) => {
    const urls = [];
    for(const key in data) {
        urls.push(`https://i.redd.it/${key}.${data[key].m.substring(6)}`);
    }
    return urls;
};