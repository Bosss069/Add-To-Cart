
var addItemId = 0;
function addToCart(item){
    addItemId += 1;
    var selectedItem = document.createElement('div');  //div created in cart
    selectedItem.classList.add('cartImg');             //class added
    selectedItem.setAttribute('id',addItemId);         //ID added

    var img = document.createElement('img');               //img created inside div
    img.setAttribute('src',item.children[0].currentSrc);   //sourse added
    selectedItem.append(img);
    
    var title = document.createElement("div");
    title.innerText = item.children[1].innerText;
    selectedItem.append(title);

    var label = document.createElement("div");
    label.innerText = item.children[2].children[0].innerText;
    selectedItem.append(label); 
    
    var select = document.createElement("span");
    select.innerText = item.children[2].children[1].value;
    label.append(select);

    var delBtn = document.createElement("button");
    delBtn.innerText = "DELETE";
    delBtn.setAttribute("onclick","del("+addItemId+")");
    selectedItem.append(delBtn)

    var cartItems = document.getElementById('title');
    cartItems.append(selectedItem);
}

function del(item){
    document.getElementById(item).remove();
}