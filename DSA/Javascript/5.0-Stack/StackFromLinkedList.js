class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top=null;
        this.bottom= null;
        this.length=0
    }
    peek(){
        if(!this.top) return null;
        return this.top.value
    }
    push(value){
        const newNode = new Node(value);
        if(!this.top){
            this.top = newNode
            this.bottom = newNode
        }else{
          const holdingPointer = this.top
          this.top= newNode
          this.top.next = holdingPointer
        }
        this.length++
        return this
    }

    pop(){
        if(!this.top) return null 
        if(this.top === this.bottom){
            this.bottom = null
        }
        const holdingPointer = this.top
        this.top = this.top.next
        this.length--
        return holdingPointer
    }
}

const myStack = new Stack();
myStack.peek()
myStack.push('google')
myStack.push('udemy')