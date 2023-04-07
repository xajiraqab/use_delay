https://xajiraqab.github.io/use_delay/

#useDelay
useDelay is a custom React hook that provides a simple way to delay the execution of a function after a value changes. This can be useful in scenarios where you want to debounce or throttle the execution of a function that depends on some input.


#Usage
![alt text](https://github.com/xajiraqab/use_delay/blob/main/readmeres/image.jpg?raw=true)


#Api
useDelay accepts three arguments:
callback (required): A function to be called after the value changes and the delay duration has passed. The function receives the new value as its only argument.
value (required): The value to observe for changes. The callback function will be called after the duration has passed since the value was last updated.
duration (optional, default: 800): The delay duration in milliseconds. This determines how long useDelay should wait before calling the callback function.
