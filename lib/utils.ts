export function debounce(fn: Function, delay: number) {
    let timer: NodeJS.Timeout;
  
    return function (...args: any[]) {
        console.log('clear timeout')
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }
  