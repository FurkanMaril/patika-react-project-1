import getData from './app.js';

const allData = await getData(1);
console.log(allData.users , "posts", allData.posts);