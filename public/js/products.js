import products from "./products-objects.js";

const categoryButtons = document.querySelector(".products__categories__links");
let newProducts = [...products];

// Function to show buttons
const showButtons = () => {
    const types = products.map((product) => product.type);
    console.log(types);
  
    //Set is a collection of unique values. Each value can only occur once in a Set.
    const uniqueTypes = new Set(types);
    console.log(uniqueTypes);
  
    const buttons = ['Todos', ...uniqueTypes];
    console.log(buttons, typeof buttons);
  
    categoryButtons.innerHTML = buttons.map((button, idx) => {
        if(idx == 0) {
            return `            
                <li class="products__categories__link">
                    <a href="" class="products-btn active" data-filter="${button}">${button}</a>
                </li>
            `;
        }
        else {
            return `            
                <li class="products__categories__link">
                    <a href="" class="products-btn" data-filter="${button}">${button}</a>
                </li>
            `;
        }
      }).join('');
};
showButtons();

const galleryContainer = document.querySelector(".products__gallery");

// Function to show wines
const showProducts = () => {  
    galleryContainer.innerHTML = newProducts.map((product) => {
        const {id, title, type, image, price} = product;
  
        return `
            <article class="products__item ${type}" data-id="${id}">
                <header>
                    <figure class="products__item__image">
                        <img src="${image}" alt="Vinho ${type}"/>
                    </figure>
                    
                    <button class="products__item__buy">Comprar</button>                            
                </header>

                <footer>
                    <span class="products__item__name">${title}</span>
                    <span class="products__item__size">R$ ${price}</span>
                </footer>
            </article>`;
      }).join('');
  };
showProducts();

// Show the selected wines
const galleryLinks = document.querySelectorAll(".products__categories__link a");
// const galleryImages = document.querySelectorAll(".products__item");

galleryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // categoryButtons.querySelector(".active").classList.remove("active");
        galleryLinks.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");

        // const filter = link.getAttribute("data-filter");

        // galleryImages.forEach((image) => {
        //     if(filter === "all"  || image.classList.contains(filter)) {
        //         image.style.display = "block";
        //     }
        //     else {
        //         image.style.display = "none";
        //     }
        // });

        // galleryImages.forEach((image) => {
        //     filter === "all" || image.classList.contains(filter) ? image.style.display = "block" : image.style.display = "none";
        // });

        const targetButton = e.target;

        if(targetButton.classList.contains('products-btn')) {
            const dataFilter = targetButton.getAttribute("data-filter");
            console.log(dataFilter);
        
            if(dataFilter === 'Todos') {
              newProducts = [...products];
            }
            else {
              newProducts = products.filter((product) => {
                return product.type === dataFilter;
              });
            }
            
            showProducts();

            userInput.value = "";
        }
    });    
});

// Input Filter
const form = document.querySelector(".search-wine");
const userInput = document.querySelector(".input-field");

form.addEventListener("keyup", () => {
    const userInputValue = userInput.value;

    newProducts = products.filter((wine) => {
        return wine.title.toLowerCase().includes(userInputValue);
    });

    showProducts();
});