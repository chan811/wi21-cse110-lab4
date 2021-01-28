for (const property in statistics) {
  if((statistics[property] % 2 != 0)||( ('r' <= property)&&(property < 's') ))
  {
    console.log(`${property}: ${statistics[property]}`);
  }
}
