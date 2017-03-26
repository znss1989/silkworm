const produceIDSegment = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); // produce segment like "7eaf"
};

export default generateIDUtil = () => {
    return produceIDSegment()+produceIDSegment()+produceIDSegment()+'-'+produceIDSegment()+produceIDSegment()+produceIDSegment();
};