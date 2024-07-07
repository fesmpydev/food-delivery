
const categories = [
  {
    name: 'pizza',
    content: [
  {
    id: 1,
    name: 'Pizza Napolitana',
    url: 'https://lh3.googleusercontent.com/gR3PvLL9HJP8bFAr_aDhMDXFkP5i-YfMDW-1ubmDxGzKEmwQ2qq33QI5WRuIaQK4dGhrtSgwqIyV8Jj8M5pM_jxLNHJLX_y7-4w=s0',
    price: 15
  },
  {
    id: 2,
    name: 'Pizza Siciliana',
    url: 'https://lh3.googleusercontent.com/WmssWj_e3VhC1d37GKrWPxqB4fXnjEzyY2MefzA-epSqrtakxZgx8kVYJtwuw8wCdRnPXh9eznQiY6oesT8Sj_exB4OuBXBERw=s0',
    price: 20
  },
  {
    id: 3,
    name: 'Pizza New York',
    url: 'https://lh3.googleusercontent.com/Fl5sf7gkFp-myCN8Hj3c1Kr1dero-LsCEBFfid-y_GlQqHoRz2T1hOALHsBMKzgKepq2i_obGgEucOXLyxWa2P-v6xkj_cWcyAw=w509',
    price: 25
  },
  {
    id: 4,
    name: 'Pizza Chicago',
    url: 'https://lh3.googleusercontent.com/HhLAOWpZScffgwRtVFcz3ZoyO7hFN_btJJXYsC7Ug9etkR0VCxwy05zAYJtH6B64t9np0BeaZFlN-pjPDeR7xHjM5LyidUXujeo=s0',
    price: 30
  },
  {
    id: 5,
    name: 'Pizza Cuatro Quesos',
    url: 'https://lh3.googleusercontent.com/PqgtI8fZ4tPmH4ZW1LrwG3pyRTMF9DU9uANEOiBJOqRlBEt6jBTG7CCYGRIwdja320761Njr3pXvKmHuYZoB1bEFFckGAhZCW3k=s0',
    price: 24
  }
  ]
  },
  {
    name: 'sandwich',
    content: [
      {
        id: 1,
        name: 'Sandwich Zapatilla',
        url: 'https://i.blogs.es/fa9526/melos/1366_2000.jpg',
        price: 15
      },
      {
        id: 2,
        name: 'Sándwich de verduras',
        url: 'https://i.blogs.es/3245c7/verduras/1366_2000.jpg',
        price: 20
      },
      {
        id: 3,
        name: 'Sándwich de ensalada de pollo y aguacate',
        url: 'https://i.blogs.es/57f7b9/pic1/1366_2000.jpg',
        price: 25
      },
      {
        id: 4,
        name: 'Chivito: el sándwich nacional de Uruguay',
        url: 'https://i.blogs.es/5e5001/chivito/1366_2000.jpg',
        price: 30
      }
    ]
  },
  {
    name: 'chicken',
    content: [
      {
        id: 1,
        name: 'Croquetas de jamon iberico',
        url: 'https://carniceriaangel.com/wp-content/uploads/2018/11/Croquetas-de-jamon-iberico-2.jpg',
        price: 15
      },
      {
        id: 2,
        name: 'Pechugas de pollo rellena de york y cheddar',
        url: 'https://carniceriaangel.com/wp-content/uploads/2018/11/Pechugas-de-pollo-rellenas-de-york-y-chedar-1.jpg',
        price: 20
      },
      {
        id: 3,
        name: 'Crepes de champinon y langostino',
        url: 'https://carniceriaangel.com/wp-content/uploads/2018/11/Crepes-de-champinon-y-langostino-1.jpg',
        price: 25
      }
    ]
  },
  {
    name: 'pasta',
    content: [
      {
        id: 1,
        name: 'Espaguetti carbonara',
        url: 'https://mantequeriasanz.es/blog/wp-content/uploads/2022/04/espaguetis.jpg',
        price: 15
      },
      {
        id: 2,
        name: 'Tallarines',
        url: 'https://mantequeriasanz.es/blog/wp-content/uploads/2022/04/tallarines.jpg',
        price: 20
      },
      {
        id: 3,
        name: 'Macarrones',
        url: 'https://mantequeriasanz.es/blog/wp-content/uploads/2022/04/macarrones.jpg',
        price: 25
      },
      {
        id: 4,
        name: 'Ravioli',
        url: 'https://mantequeriasanz.es/blog/wp-content/uploads/2022/04/ravioli.jpg',
        price: 30
      }
    ]
  },
  {
    name: 'dessert',
    content: [
      {
        id: 1,
        name: 'Papas ripio o ripio de papa',
        url: 'https://www.unileverfoodsolutions.com.co/tendencias/inspiracion-para-chef/papas-fritas-y-salsas/jcr:content/parsys/set1/row2/span12/textimage_copy_296844493/image.transform/jpeg-optimized/image.1667209457038.jpg',
        price: 15
      },
      {
        id: 2,
        name: 'Papas criollas fritas',
        url: 'https://www.unileverfoodsolutions.com.co/tendencias/inspiracion-para-chef/papas-fritas-y-salsas/jcr:content/parsys/set1/row2/span12/textimage_copy_382664490/image.transform/jpeg-optimized/image.1667209566059.jpg', 
        price: 20
      },
      {
        id: 3,
        name: 'Papas a la francesa o en bastones',
        url: 'https://www.unileverfoodsolutions.com.co/tendencias/inspiracion-para-chef/papas-fritas-y-salsas/jcr:content/parsys/set1/row2/span12/textimage_copy_1373763797/image.transform/jpeg-optimized/image.1667209590228.jpg',
        price: 25
      }
    ]
  }
];
let containerCategoryClone = [];
const categorys = document.querySelector('.categorys');
const locationRef = document.querySelector('.main__search--location--text--title--span');
const titleCategory = document.getElementById('title-category');

const cart = [];
const cartIndicator = document.querySelector('.indicator');
const btnRequestLocation = document.querySelector('.btn-request-location');

const formSearchFood = document.getElementById('form-search');
const inputSearchFood = document.getElementById('input-search');
const searchResults = document.getElementById('search-results');
const btnBack = document.getElementById('back');

window.addEventListener('load', () => {
  addListenerCategoryItems();
})

btnBack.addEventListener('click', () => {
  removeCategoryChildren();
  categorys.classList.replace('main__categories', 'main__popular--categories');
  categorys.insertAdjacentHTML('beforeend', containerCategoryClone[0].innerHTML);
  addListenerCategoryItems();
  btnBack.style.display = 'none';
})

btnRequestLocation.addEventListener('click', requestLocation);


inputSearchFood.addEventListener('input', () => {
  const value = inputSearchFood.value.trim().toLowerCase();


  const filteredProducts = categories.flatMap((category) => category.content).filter(search => search.name.toLowerCase().includes(value));

  searchResults.innerHTML = '';

  if(filteredProducts.length > 0 && value !== '') {
    searchResults.style.display = 'flex';
    const results = filteredProducts.map((product) => {
    return `
      <div class='product-result'>
      <img src='${product.url}' alt='${product.name}' />
      <h2 class='product-result--title'>${product.name}</h2>
      <p class='product-result--price'>$${product.price}</p>
      </div>
    `;
  });

  searchResults.insertAdjacentHTML('beforeend', results.join(''));
  } else if (value === '') {
    searchResults.style.display = 'none';
  }
  
})

function addListenerCategoryItems() {
[...categorys.children].forEach((category) => {
  const categoryName = category.getAttribute('data-category');
  category.addEventListener('click', () => {
  btnBack.style.display = 'block'
    cloneNode(categorys);
    removeCategoryChildren();
    getProductsCategory(categoryName);
  });
});
}

function getProductsCategory(categoryName) {
  const category = categories.find((category) => category.name === categoryName);
  addCategoryItems(category.content, category.name);
}

function cloneNode(node) {
  containerCategoryClone = [...containerCategoryClone, node.cloneNode(true)];
}

function removeCategoryChildren() {
  while(categorys.firstChild) {
    categorys.removeChild(categorys.firstChild);
  }
}

function addCategoryItems(content, category) {
  const childrenItems = content.map((item) => {
    const { name, url, price, id } = item;

    return `
      <div class='category--item'>
        <img src='${url}' alt='${name}' class='category--item--image' />
        <h2 class='category--item--title'>${name}</h2>
        <p class='category--item--price'>$${price}</p>
        <button type='button' class='btn-add-to-cart' onClick='addToCart("${category}", ${id})'>Add to cart</button>
      </div>
    `;
  });

  categorys.classList.replace('main__popular--categories', 'main__categories');

  categorys.insertAdjacentHTML('beforeend', childrenItems.join(''));
}

function addToCart(categoryName, id) {
  const product = categories.find((category) => category.name === categoryName)?.content.find((item) => item.id === id);

  if (!product) return;

  cart.push(product);
  incrementCartIndicator();
}

function incrementCartIndicator() {

  if (cart.length > 0) {
    cartIndicator.textContent = cart.length
    cartIndicator.style.display = 'grid';
  }
}

async function requestLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async (position,error) => {
      if (error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert('User denied the request for Geolocation');
            break;
          case error.POSITION_UNAVAILABLE:
            alert('Location information is unavailable');
            break;
          case error.TIMEOUT:
            alert('The request to get user location timed out');
            break;
          default:
            alert('An unexpected error occurred');
            break;
        }
      }

      const response = await fetch('http://ip-api.com/json/');
      const data = await response.json();

      btnRequestLocation.style.display = 'none';
      locationRef.textContent = `${data.city}, ${data.country}`;
    })
  } else {
    alert('Geolocation is not supported by your browser');
  }
}