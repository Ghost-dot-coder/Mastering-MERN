sentance = "hai hello hai hello hello world";

// output: {hai:2, hello:3, world:1}

output = {};

sentance
  .split(" ")
  .forEach((word) =>
    output.hasOwnProperty(word) ? (output[word] += 1) : (output[word] = 1)
  );
console.log(output);
