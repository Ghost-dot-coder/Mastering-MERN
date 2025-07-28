for (let i = 0; i <= 10; i++) {
  if (i > 5) {
    break;
  }
  console.log(i);
}

// continue; to skip a iteration in loop(5 skiped)
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
