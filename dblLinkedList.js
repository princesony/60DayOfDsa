class Node {
    constructor(value) {
        this.pre = null;
        this.value = value;
        this.next = null;
    }
}

class double_Linked_List {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    append(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            node.pre = this.tail;
            this.tail = node;
        }
    }

    display() {
        let current = this.head;
        let output = "";
        while (current) {
            let preValue = current.pre ? current.pre.value : "null";
            let nextValue = current.next ? current.next.value : "null";
            output += `[ ${preValue} <= ${current.value} => ${nextValue} ] -> `;
            current = current.next;
        }
        console.log(output + "null");
    }
    delete(value){
        let current = this.head;
        while(current){
            if(current.value === value){
                if(current.pre && current.next){
                    current.pre.next = current.next;
                    current.next.pre = current.pre;
            }
        }
        }
    }
}

// Test case
let dll = new double_Linked_List();
dll.append(10);
dll.append(20);
dll.append(30);
dll.display(); // Expected Output: [ null <= 10 => 20 ] -> [ 10 <= 20 => 30 ] -> [ 20 <= 30 => null ] -> null
