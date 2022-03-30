function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

function remove(item) {
    let items = item.slice();
    for (let i = 0; i < items.length; i++) {
        for (let j = i; j < items.length; j++) {
            if (items[j] < items[i]) {
                let output = items[j];
                items[j] = items[i];
                items[i] = output;
            }
        }
    }
    return items;
}


export { choice, remove };