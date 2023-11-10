function isLuhnValid(number: string): boolean {
  const digits = number.replace(/\D/g, "").split("").map(Number).reverse();

  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];

    if (i % 2 === 1) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
  }

  return sum % 10 === 0;
}

function findMissingDigit(number: string): number | null {
  for (let digit = 0; digit <= 9; digit++) {
    const candidateNumber = number + digit;

    if (isLuhnValid(candidateNumber)) {
      return digit;
    }
  }

  return null;
}

function main() {
  const args = process.argv.slice(2);

  const flagIndexC = args.indexOf("-c");
  const flagIndexF = args.indexOf("-f");

  if (
    (flagIndexC !== -1 && flagIndexF !== -1) ||
    (flagIndexC === -1 && flagIndexF === -1)
  ) {
    console.error("Usage: node script.js -c <number> OR -f <number>");
    process.exit(1);
  }

  if (flagIndexC !== -1) {
    const numberToCheck = args[flagIndexC + 1];

    if (isLuhnValid(numberToCheck)) {
      console.log("OK");
    } else {
      console.log("KO");
    }
  }

  if (flagIndexF !== -1) {
    const numberToCheck = args[flagIndexF + 1];
    const missingDigit = findMissingDigit(numberToCheck);

    if (missingDigit !== null) {
      console.log(missingDigit);
    } else {
      console.log("No valid completion found.");
    }
  }
}

main();
