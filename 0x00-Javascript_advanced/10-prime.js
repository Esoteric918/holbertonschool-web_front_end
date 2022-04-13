function countPrimeNumbers() {
  let prime = [];
  for (let i = 2; i <= 100; i++) {
  var not_prime = false;
  for (let div = 3; div <= i ; div+=2 ) {
      if ( div % i === 0 ) {
        not_prime = true;
        }
      }
      if (not_prime === false) {
          prime.push(i);
        }
      }
      return prime;
}

const t0 = performance.now();
for (let x = 1; x <= 100; ++x) {
    countPrimeNumbers();
}
const t1 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`);
