function multi(A: number, B: number): void {
  for (let i = 0; i < B + 1; i++) {
    console.log(`${i} x ${A} = ${A * i}`);
  }
}

multi(4, 6);
