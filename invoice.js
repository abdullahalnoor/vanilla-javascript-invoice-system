document.addEventListener("DOMContentLoaded",(e) => {
    // console.log("content loaded...");
    const productName = document.querySelector("#productName"),
    productQuantity = document.querySelector("#productQuantity"),
    productPrice = document.querySelector("#productPrice"),
    addProduct = document.querySelector("#addProduct"),
     tableBody = document.querySelector("#tableBody"),
     grandTotal = document.querySelector("#grandTotal");


     //  calculate grand total
     const calculateGrandTotal = function(){
        const allTotal = document.querySelectorAll(".total")
        let total = 0 ;
        allTotal.forEach((element) => {
           total = total +  parseFloat(element.value) ;
        });
        grandTotal.value = parseFloat(total).toFixed(2)
     }

     document.addEventListener("click",function(e){
        e.preventDefault()
        // console.log('Delete Ittem');
        if(e.target.classList.contains("removeItem")){
            // console.log('removeItem');
            // console.log(e.target.parentElement.parentElement);
            e.target.parentElement.parentElement.remove()
            // call calculate grand total function
            calculateGrandTotal()
            return false
        }
        return false
     })

    //  chnage quantiy and calculate total row price
    document.addEventListener("input",function(e){
        e.preventDefault()
        if(e.target.classList.contains("quantity")){
            let itemQuantity = e.target.value
            itemQuantity = parseFloat(itemQuantity)
            // console.log('quantity input chnage');
            // console.log(e.target.parentElement.nextElementSibling.children[0]);
            let itemPrice = e.target.parentElement.nextElementSibling.children[0].value
            itemPrice = parseFloat(itemPrice)
            let itemTotal = itemQuantity * itemPrice;
            itemTotal = itemTotal.toFixed(2)
            // console.log(itemTotal);
            // console.log(e.target.parentElement.nextElementSibling.nextElementSibling.children[0].value);
            e.target.parentElement.nextElementSibling.nextElementSibling.children[0].value = itemTotal
            calculateGrandTotal()
        }
    })
    // change price input  and calculate total row price and grand total
    document.addEventListener("input",function(e){
        e.preventDefault()
        if(e.target.classList.contains("price")){
            let itemPrice = e.target.value;
            itemPrice = parseFloat(itemPrice)
            // get itam quantity 
            // console.log(e.target.parentElement.previousElementSibling);
            let itemQuantity = e.target.parentElement.previousElementSibling.children[0].value
            itemQuantity = parseFloat(itemQuantity)
            let itemTotal = itemPrice * itemQuantity
            itemTotal = itemTotal.toFixed(2)
            // console.log(itemTotal);
            // put item total in total input
            // console.log(e.target.parentElement.nextElementSibling.children[0].value);
            e.target.parentElement.nextElementSibling.children[0].value = itemTotal
            calculateGrandTotal()
        }
    })

    addProduct.addEventListener("click",function(e){
        e.preventDefault()
        // console.log("ok");
        let productNameVal = productName.value ;
        productName.value = ''
        let productQuantityVal = productQuantity.value ;
        productQuantity.value = ''
        productQuantityVal = parseFloat(productQuantityVal)
        let productPriceVal = productPrice.value ;
        productPrice.value = ""
        productPriceVal =parseFloat(productPriceVal)
        let totalValue = productQuantityVal * productPriceVal
        totalValue = totalValue.toFixed(2)
        // console.log(productNameVal,productQuantityVal,productPriceVal);
        const html = `<tr>
        <td>
            <input type="text" name="product" id="product" value="${productNameVal}" class="form-control product">
        </td>
        <td>
            <input type="number" step="any" name="quantity" value="${productQuantityVal}" id="quantity" class="form-control quantity">
        </td>
        <td>
            <input type="number" step="any" name="price" value="${productPriceVal}" id="price" class="form-control price">
        </td>
        <td>
            <input readonly type="number" step="any" value="${totalValue}" name="total" id="total" class="form-control total">
        </td>
        <td>
            <button class="btn btn-danger removeItem">X</button>
        </td>
      </tr>`;

      tableBody.insertAdjacentHTML("beforeend",html)
    //   call grand total funtion
      calculateGrandTotal()

    })
    
   
})