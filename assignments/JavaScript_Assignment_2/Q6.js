let count = 0;

function showCount() {
    function display() {
        console.log(`Current count: ${count}`);
    }

    display();
}

function increment() {
    count++;
    showCount();
}

function decrement() {
    count--;
    showCount();
}

increment();
increment();
decrement();
increment();
