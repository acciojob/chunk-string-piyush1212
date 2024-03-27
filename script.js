function stringChop(str, size) {
  // Check if the input string is null or empty
  if (!str) {
    return [];
  }

  // Initialize an empty array to store chunks
  const chunks = [];

  // Iterate over the string with the given chunk length
  for (let i = 0; i < str.length; i += size) {
    // Extract a chunk of the string
    const chunk = str.slice(i, i + size);
    // Push the chunk to the array
    chunks.push(chunk);
  }

  // Return the array of chunks
  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));


