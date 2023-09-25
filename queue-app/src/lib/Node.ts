class Node {
    value: number;
    next: Node | null = null;
    
    constructor(value: number) {
      this.value = value;
    }
  }
  
  export default Node;