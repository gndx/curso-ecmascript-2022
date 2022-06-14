const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('AsynC!!'), 2000)
      : reject(new Error('Error!'));
  });
}

const anotherFn = () => {
  const somethig = fnAsync();
  console.log(somethig);
  console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');