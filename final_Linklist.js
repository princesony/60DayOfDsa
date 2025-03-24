class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // ✅ Append (Insert at End)
    append(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // ✅ Display (Print the List)
    display() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.data + " -> ";
            current = current.next;
        }
        console.log(output + "null");
    }

    // ✅ Search
    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                console.log(`Found: ${data}`);
                return true;
            }
            current = current.next;
        }
        console.log(`Not Found: ${data}`);
        return false;
    }

    // ✅ Delete
    delete(data) {
        if (!this.head) return console.log("List is empty");

        if (this.head.data === data) {
            this.head = this.head.next;
            console.log(`Deleted: ${data}`);
            return;
        }

        let current = this.head;
        let previous = null;

        while (current && current.data !== data) {
            previous = current;
            current = current.next;
        }

        if (!current) {
            console.log(`Value ${data} not found`);
            return;
        }

        previous.next = current.next;
        console.log(`Deleted: ${data}`);
    }

    // ✅ Update
    update(oldData, newData) {
        let current = this.head;

        while (current) {
            if (current.data === oldData) {
                current.data = newData;
                console.log(`Updated: ${oldData} → ${newData}`);
                return;
            }
            current = current.next;
        }

        console.log(`Value ${oldData} not found for update`);
    }
}

// ✅ **Test Cases**
const list = new LinkedList();

// **Append Test**
console.log("\n✅ Adding Elements:");
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.display(); // Expected Output: 10 -> 20 -> 30 -> 40 -> null

// **Search Test**
console.log("\n✅ Searching Elements:");
list.search(20); // Expected: Found: 20
list.search(100); // Expected: Not Found: 100

// **Delete Test**
console.log("\n✅ Deleting Elements:");
list.delete(30);
list.display(); // Expected Output: 10 -> 20 -> 40 -> null
list.delete(100); // Expected: Value 100 not found

// **Update Test**
console.log("\n✅ Updating Elements:");
list.update(20, 25);
list.display(); // Expected Output: 10 -> 25 -> 40 -> null
list.update(100, 200); // Expected: Value 100 not found for update
