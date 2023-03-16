function configureListeners() {
     // select img elements  
let images = document.getElementsByTagName('img')

     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners  
        document.getElementById (images[i].id).addEventListener('mouseover', addOpacity, false)
        document.getElementById (images[i].id).addEventListener('mouseout', removeOpacity, false)
        //for registering & deregistering of event listeners
    } 
}

function addOpacity(event) {
    // add appropriate CSS class

    if (this.classList.contains ('color')) {
        this.classList.add ('color')
    }

    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class

     if (this.classList.contains ('color')) {
        this.classList.remove ('color')
    }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    //Plug and play from the graph given from the activity//
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price   
            price = '$14.99'
            colorName =  'Lime Green'

            updatePrice (price,colorName)
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price 
            price = '$11.14'
            colorName =  'Medium Brown'

            updatePrice (price,colorName)
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            price = '$22.99'
            colorName =  'Royal Blue'

            updatePrice (price,colorName)
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price 
            price = '$4.99'
            colorName =  'Solid Black'

            updatePrice (price,colorName) 
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price  
            price = '$8.22'
            colorName =  'Solid Cyan'

            updatePrice (price,colorName)     
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price    
            price = '$11.99'
            colorName =  'Solid Purple'

            updatePrice (price,colorName)  
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            price = '$13.42'
            colorName =  'Solid Red'

            updatePrice (price,colorName)  
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price  
            price = '$21.98'
            colorName =  'Solid White'

            updatePrice (price,colorName)  
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = '$14.99'
            colorName =  'Solid Yellow'

            updatePrice (price,colorName)  
            break;   

          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;
        
        // select element with corresponding id
        // display price
    
        let color = document.getElementById ('color-name')
        color.textContent = colorName;
        // select element with corresponding id
        //display color name

        //using Java to display interactive text on the page through selecting and ID and text content//
    }
    
}
