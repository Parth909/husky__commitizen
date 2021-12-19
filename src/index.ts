// import dotenv from 'dotenv-safe';
import add from '@src/math/add';

// dotenv.config();

console.log(process.env.MY_NAME);
console.log(add(1, 3));

const hello_world = () => {
  console.log('hello world');
};
hello_world();
