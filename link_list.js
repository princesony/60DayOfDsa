// ✅ Node Class (Stores Value & Next Pointer)
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// ✅ Linked List Class
class NodeList {
    constructor() {
        this.head = null;
    }

    // ✅ Append Method (Add Element at End)
    append(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let lastNode = this.head;
        while (lastNode.next) {
            lastNode = lastNode.next;
        }
        lastNode.next = newNode;
    }

    // ✅ Print List Method (Returns String)
    printList() {
        let output = "";
        let currentNode = this.head;

        while (currentNode) {
            output += currentNode.value + " ";
            currentNode = currentNode.next;
        }

        console.log("Linked List:", output.trim());
        return output.trim();
    }

    // ✅ Search Method (Returns Position)
    search(value) {
        let currentNode = this.head;
        let position = 1;

        while (currentNode) {
            if (currentNode.value === value) {
                console.log(`Found: Value ${value} at Position ${position}`);
                return `Found: ${value} at Position ${position}`;
            }
            currentNode = currentNode.next;
            position++;
        }

        console.log(`Value ${value} not found`);
        return `Value ${value} not found`;
    }

    // ✅ Delete Method
    delete(value) {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            console.log(`Deleted: ${value}`);
            return;
        }

        let currentNode = this.head;
        let previous = null;

        while (currentNode && currentNode.value !== value) {
            previous = currentNode;
            currentNode = currentNode.next;
        }

        if (!currentNode) {
            console.log(`Value ${value} not found`);
            return;
        }

        previous.next = currentNode.next;
        console.log(`Deleted: ${value}`);
    }

    // ✅ Update Method
    update(value, updatedValue) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                currentNode.value = updatedValue;
                console.log(`Updated: ${value} to ${updatedValue}`);
                return;
            }
            currentNode = currentNode.next;
        }

        console.log(`Value ${value} not found for update`);
    }
}


// ✅ Create List
let list = new NodeList();

// ✅ Append Test Cases
list.append(10);
list.append(20);
list.append(30);
list.append(40);
console.log("After append:");
list.printList();  // Output: 10 20 30 40

// ✅ Search Test Cases
list.search(20); // Output: Found: Value 20 at Position 2
list.search(50); // Output: Value 50 not found

// ✅ Delete Test Cases
list.delete(10);  // Delete head
console.log("After deleting 10:");
list.printList(); // Output: 20 30 40

list.delete(30);  // Delete middle node
console.log("After deleting 30:");
list.printList(); // Output: 20 40

list.delete(50);  // Try to delete non-existing value
console.log(list.delete(50)); // Output: Value 50 not found

// ✅ Update Test Cases
list.update(20, 25);
console.log("After updating 20 to 25:");
list.printList(); // Output: 25 40

list.update(40, 50);
console.log("After updating 40 to 50:");
list.printList(); // Output: 25 50
