class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

export class LinkedList{
    #head;
    #size;
    constructor() {
        this.#head = null;
        this.#size = 0;
    }

    get length(){
        return this.#size;
    }

    unshift(value){
        const node = new Node(value);

        node.next = this.#head;
        this.#head = node;
        this.#size++;
    }

    push(value){
        const node = new Node(value);

        if(this.#head === null){
            this.#head = node;
        } else {
            let current = this.#head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = node;
        }
        this.#size++;
    }

    insert(value, index){
        if(index < 0 || index > this.#size){
            return -Infinity;
        }

        if(index === 0){
            this.unshift(value);
            return;
        }

        if(index === this.#size){
            this.push(value);
            return;
        }

        const node = new Node(value);
        let current = this.#head;
        for(let i = 0; i < index - 1; i++){
            current = current.next;
        }
        node.next = current.next;
        current.next = node;
        this.#size++;
    }

    shift(){
        if(this.#head === null){
            return null;
        } else {
            const current = this.#head;
            this.#head = current.next;
            this.#size--;
            return current.value;
        }
    }

    pop(){
        if(this.#head === null){
            return null;
        } else {
            let current = this.#head;
            while(current.next.next !== null){
                current = current.next;
            }
            const value = current.next.value;
            current.next = null;
            this.#size--;
            return value;
        }
    }

    get print(){
        const list = [];
        let current = this.#head;
        while(current !== null){
            list.push(current.value);
            current = current.next;
        }
        return list;
    }
}