import Node from './Node';

class Queue {
  front: Node | null = null;
  rear: Node | null = null;
  
  add(value: number) {
    const newNode = new Node(value);
    if (this.rear) {
      this.rear.next = newNode;
      this.rear = newNode;
    } else {
      this.front = this.rear = newNode;
    }
  }
  
  pop(): number | null {
    if (this.front) {
      const removedValue = this.front.value;
      this.front = this.front.next;
      if (!this.front) this.rear = null;
      return removedValue;
    }
    return null;
  }
  
  toArray(): number[] {
    let array: number[] = [];
    let current = this.front;
    while(current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }
}

export default Queue;