interface User {
	id: number,
	parent: number|string,
  type?:any
}
module.exports = class TreeStore {
    
  array:User[]

  constructor( array:User[]) {
     this.array = array
  }
   
   getAll():User[] {
     return this.array
   } 

   getItem(id:number|string):User|null {
     return this.array.find(item => item.id== id) ||  null
   }

   getChildren(id:number|string):User[] {
     return this.array.filter(item => item.parent ==  id) 
   }

   getAllChildren(id:number|string):User[]  {
     let result:User[] = []
     let currentChildren=  this.getChildren(id)

     if(currentChildren.length)
    {
     result.push(...currentChildren)
     currentChildren.map(item =>  result.push(...this.getAllChildren(item.id)))
    }

    return result        
   }
   
   getAllParents(id:number|string):User[] {
     let result:User[]=[]
     let currentParent 
     const currentItem= this.getItem(id)
     if(currentItem)
     currentParent =  this.getItem(currentItem?.parent)
   
     if(currentItem && currentParent )
    {
       result.push(currentParent)
       result.push(...this.getAllParents(currentParent.id))
    }
   
     return result
   }
   
   }
