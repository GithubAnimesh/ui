class LikeComponent{
    constructor(public likesCount: number, public isSelected: boolean){}
    onClick(){

/*        if(this.isSelected){
            this.likesCount--;
            this.isSelected = false; 
        } else
        {
            this.likesCount++;
            this.isSelected = true;   
        }
*/
        this.likesCount += (this.isSelected) ? -1 : 1;

        this.isSelected = !this.isSelected; // toggle here
    }
}

let component = new LikeComponent(10, true);
component.onClick();
console.log(`Like Count ${component.likesCount}, Is Selected ${component.isSelected}`);