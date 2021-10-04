function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet(undefined);              // logs: undefined, world!
                      // should log: Hello, world!