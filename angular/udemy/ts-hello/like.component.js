var LikeComponent = /** @class */ (function () {
    function LikeComponent(likesCount, isSelected) {
        this.likesCount = likesCount;
        this.isSelected = isSelected;
    }
    LikeComponent.prototype.onClick = function () {
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
    };
    return LikeComponent;
}());
var component = new LikeComponent(10, true);
component.onClick();
console.log("Like Count " + component.likesCount + ", Is Selected " + component.isSelected);
