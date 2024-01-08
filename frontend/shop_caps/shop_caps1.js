
const nav = document.getElementById("right_nav_bar")
const navico = document.getElementById("nav_bar")
navico.onclick = () => {
  nav.style.right = "0"
  const backdrop = document.getElementById("backdropCSS")
  backdrop.style.left = "-26vw"
  backdrop.style.zIndex = "9999"
}
closeico.onclick = () => {
  nav.style.right = "-30vw"
  const backdrop = document.getElementById("backdropCSS")
  backdrop.style.left = "-100vw"
  backdrop.style.zIndex = "9999"
}


const login = document.getElementById("login")
login.onclick = () => {
  const tagetURL = '../regBlank/index.html'
  window.location.href = tagetURL
}
const cartmenubottom = document.getElementById("cart_menu_bottom")
if (cartmenubottom.innerHTML == "") {
  cartmenubottom.innerHTML = "The Cart Is Empty"
}
const cartmenu = document.getElementById("cart_menu")
const cartexit = document.getElementById("cart_exit")
const cart_count = document.getElementById("cart_count")
cart_count.onclick = () => {
  cartmenu.style.right = "-1vw"
  cartmenu.style.position = "fixed"
  const backdrop = document.getElementById("backdropCSS")
  backdrop.style.left = "-26vw"
  backdrop.style.zIndex = "9999"
}
cartexit.onclick = () => {
  cartmenu.style.right = "-30vw"
  const backdrop = document.getElementById("backdropCSS")
  backdrop.style.left = "-100vw"
  backdrop.style.zIndex = "9999"
}

const raw = document.getElementById("RAW")
raw.onclick = () => {
  window.location.href = '../shop.html'
}

const fbook = document.getElementById("fbook")
fbook.onclick = () => {
  window.location.href = "https://www.facebook.com/wix"
}

const insta = document.getElementById("insta")
insta.onclick = () => {
  window.location.href = 'https://www.instagram.com/wix/';
}

const pint = document.getElementById("pint")
pint.onclick = () => {
  window.location.href = 'https://www.pinterest.com/wixcom'
}

const tube = document.getElementById("tube")
tube.onclick = () => {
  window.location.href = 'https://www.youtube.com/user/Wix'
}

const twit = document.getElementById("twit")
twit.onclick = () => {
  window.location.href = "https://twitter.com/wix";
}

const Gpng1 = document.getElementById("Gpng1")
Gpng1.onclick = () => {
  const Cpng1 = document.getElementById("Cpng1")
  Cpng1.style.background = "url('https://static.wixstatic.com/media/baac51_e0ebe39677864d7f934e2544bbf9ae19~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_e0ebe39677864d7f934e2544bbf9ae19~mv2_d_2000_1500_s_2.jpg')"
  Cpng1.style.backgroundSize = "cover"
}
const Gpng2 = document.getElementById("Gpng2")
Gpng2.onclick = () => {
  const Cpng1 = document.getElementById("Cpng1")
  Cpng1.style.background = "url('https://static.wixstatic.com/media/baac51_ae96d298952242c2bb5cce4abdcab7a9~mv2_d_2000_1500_s_2.jpg/v1/fill/w_516,h_387,al_c,q_85,usm_0.66_1.00_0.01/baac51_ae96d298952242c2bb5cce4abdcab7a9~mv2_d_2000_1500_s_2.jpg')"
  Cpng1.style.backgroundSize = "cover"
}
const Cpng1 = document.getElementById("Cpng1");

Cpng1.onclick = () => {
  if (Cpng1.style.transform === "scale(1.1)") {
    Cpng1.style.transform = "scale(1)";
    Cpng1.style.cursor = "zoom-in";
  } else {
    Cpng1.style.transform = "scale(1.1)";
    Cpng1.style.cursor = "zoom-out";
  }
};

const plus1 = document.getElementById("plus1")
plus1.onclick = () => {
  const content1 = document.getElementById("content1")
  if (content1.style.display === "none") {
    content1.style.display = "block"
    plus1.innerHTML = "_"
    plus1.style.marginBottom = '1vh'
  } else {
    content1.style.display = "none"
    plus1.innerHTML = "+"
    plus1.style.marginBottom = '0vh';
  }
}

const plus2 = document.getElementById("plus2")
plus2.onclick = () => {
  const content2 = document.getElementById("content2")
  if (content2.style.display === "none") {
    content2.style.display = "block"
    plus2.innerHTML = "_"
    plus2.style.marginBottom = '1vh'
  } else {
    content2.style.display = "none"
    plus2.innerHTML = "+"
    plus2.style.marginBottom = '0vh';
  }
}

const plus3 = document.getElementById("plus3")
plus3.onclick = () => {
  const content3 = document.getElementById("content3")
  if (content3.style.display === "none") {
    content3.style.display = "block"
    plus3.innerHTML = "_"
    plus3.style.marginBottom = '1vh'
  } else {
    content3.style.display = "none"
    plus3.innerHTML = "+"
    plus3.style.marginBottom = '0vh';
  }
}

const products = [
  {
    id: 1,
    url: 'https://static.wixstatic.com/media/baac51_e0ebe39677864d7f934e2544bbf9ae19~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_e0ebe39677864d7f934e2544bbf9ae19~mv2_d_2000_1500_s_2.jpg',
    hoverURL: 'https://static.wixstatic.com/media/baac51_ae96d298952242c2bb5cce4abdcab7a9~mv2_d_2000_1500_s_2.jpg/v1/fill/w_516,h_387,al_c,q_85,usm_0.66_1.00_0.01/baac51_ae96d298952242c2bb5cce4abdcab7a9~mv2_d_2000_1500_s_2.jpg',
    title: 'Modern Cap',
    price: 25.00
  },
  {
    id: 2,
    url: 'https://static.wixstatic.com/media/baac51_444fa6e3add545a6b3757f46a11ee9de~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_444fa6e3add545a6b3757f46a11ee9de~mv2_d_2000_1500_s_2.jpg',
    hoverURL: 'https://static.wixstatic.com/media/baac51_96428f6f85de47268baeffa9258f681f~mv2_d_2000_1500_s_2.jpg/v1/fill/w_516,h_387,al_c,q_85,usm_0.66_1.00_0.01/baac51_96428f6f85de47268baeffa9258f681f~mv2_d_2000_1500_s_2.jpg',
    title: 'Forest Cap',
    price: 25.00
  },
  {
    id: 3,
    url: 'https://static.wixstatic.com/media/baac51_34821e1460024305a72be06274bd65d6~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_34821e1460024305a72be06274bd65d6~mv2_d_2000_1500_s_2.jpg',
    hoverURL: 'https://static.wixstatic.com/media/baac51_b9031651b1e2480b80e11d455923f407~mv2_d_2000_1500_s_2.jpg/v1/fill/w_516,h_387,al_c,q_85,usm_0.66_1.00_0.01/baac51_b9031651b1e2480b80e11d455923f407~mv2_d_2000_1500_s_2.jpg',
    title: 'Black White Cap',
    price: 25.00
  },
  {
    id: 4,
    url: 'https://static.wixstatic.com/media/baac51_3564de284ffd41e6a9b4f3f908e3003a~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_3564de284ffd41e6a9b4f3f908e3003a~mv2_d_2000_1500_s_2.jpg',
    hoverURL: 'https://static.wixstatic.com/media/baac51_6b27b52f603e464aa0cd8790f03c22f0~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_6b27b52f603e464aa0cd8790f03c22f0~mv2_d_2000_1500_s_2.jpg',
    title: 'Palma Cap',
    price: 25.00
  },
  {
    id: 5,
    url: 'https://static.wixstatic.com/media/baac51_b0b367782959434382f77ba6947792ea~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_b0b367782959434382f77ba6947792ea~mv2_d_2000_1500_s_2.jpg',
    hoverURL: 'https://static.wixstatic.com/media/baac51_6b27b52f603e464aa0cd8790f03c22f0~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_6b27b52f603e464aa0cd8790f03c22f0~mv2_d_2000_1500_s_2.jpg',
    title: 'Solid Cap',
    price: 25.00
  },
  {
    id: 6,
    url: 'https://static.wixstatic.com/media/baac51_765ee8d8af0242ef9a28d7f15b982643~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_765ee8d8af0242ef9a28d7f15b982643~mv2_d_2000_1500_s_2.jpg',
    hoverURL: 'https://static.wixstatic.com/media/baac51_f4267061a0fe4bb1acee7156275d4206~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_f4267061a0fe4bb1acee7156275d4206~mv2_d_2000_1500_s_2.jpg',
    title: 'Solid Cap',
    price: 25.00
  },
  {
    id: 7,
    url: 'https://static.wixstatic.com/media/baac51_08eb214d899d45e6a204850dbe5d0e6b~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_08eb214d899d45e6a204850dbe5d0e6b~mv2_d_2000_1500_s_2.jpg',
    hoverURL: 'https://static.wixstatic.com/media/baac51_a6efca7b18ab4901866d336814d292fc~mv2_d_2000_1500_s_2.jpg/v1/fill/w_516,h_387,al_c,q_85,usm_0.66_1.00_0.01/baac51_a6efca7b18ab4901866d336814d292fc~mv2_d_2000_1500_s_2.jpg',
    title: 'Solid Cap',
    price: 25.00
  },
  {
    id: 8,
    url: 'https://static.wixstatic.com/media/baac51_8916d233b97e408db6bc3089911d00fc~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_8916d233b97e408db6bc3089911d00fc~mv2_d_2000_1500_s_2.jpg',
    hoverURL: 'https://static.wixstatic.com/media/baac51_23d749587fb743859f9bb6b69a24f71e~mv2_d_2000_1500_s_2.jpg/v1/fill/w_516,h_387,al_c,q_85,usm_0.66_1.00_0.01/baac51_23d749587fb743859f9bb6b69a24f71e~mv2_d_2000_1500_s_2.jpg',
    title: 'Solid Cap',
    price: 25.00
  },
];


const cartMenu = document.getElementById("cart_menu");
const cartMenuBottom = document.getElementById("cart_menu_bottom");
const cartMenuBottomEmptyTxt = document.getElementById("cart_menu_bottom_emptyTXT");
const cartTotalElement = document.getElementById("cart_total");

const cartItems = [];

function calculateTotalPrice(cartItems) {
  let total = 0;
  cartItems.forEach(cartItem => {
    total += cartItem.price * cartItem.quantity;
  });
  return total;
}

function updateTotalPrice() {
  const total = calculateTotalPrice(cartItems);
  cartTotalElement.innerHTML = `Total: $${total.toFixed(2)}`;
}

function updateCartCount() {
  const cartCountSpan = document.querySelector("#cart_count span");
  cartCountSpan.textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
}

function renderCartItems() {
  cartMenuBottom.innerHTML = "";
  if (cartItems.length === 0) {
    cartMenuBottomEmptyTxt.innerHTML = "Your cart is empty";
    updateTotalPrice();
    return;
  }
  cartMenuBottomEmptyTxt.innerHTML = "";


  cartItems.forEach(item => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart_item";

    const img = document.createElement("img");
    img.src = `${item.url}`;
    img.setAttribute("class", "cartIMG")
    img.alt = `${item.title}`;
    cartItem.appendChild(img);

    const cartItemInfo = document.createElement("div");
    cartItemInfo.className = "cart_item_info";

    const cartItemTitle = document.createElement("div");
    cartItemTitle.className = "cart_item_title";
    cartItemTitle.textContent = `${item.title}`;
    cartItemInfo.appendChild(cartItemTitle);

    const cartItemPrice = document.createElement("div");
    cartItemPrice.className = "cart_item_price";
    cartItemPrice.textContent = `$${item.price.toFixed(2)}`;
    cartItemInfo.appendChild(cartItemPrice);

    const removeButton = document.createElement("button");
    removeButton.className = "remove_button";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      const index = cartItems.indexOf(item);
      if (index !== -1) {
        cartItems.splice(index, 1);
        renderCartItems();
        updateCartCount();

      }
    });

    cartItemInfo.appendChild(removeButton);

    const CartItemCount = document.createElement("input")
    CartItemCount.type = "number"
    CartItemCount.className = "cart_item_count"
    CartItemCount.value = item.quantity;
    CartItemCount.min = 1;
    CartItemCount.max = 5;
    cartItemInfo.appendChild(CartItemCount)



    cartItem.appendChild(cartItemInfo);
    cartMenuBottom.appendChild(cartItem);



  });
  updateTotalPrice()
}



const addToCartButtons = document.querySelectorAll(".buy");
addToCartButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const product = products[index];
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Store in localStorage
    renderCartItems();
    updateCartCount();
  });
});
const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
cartItems.push(...savedCartItems);

renderCartItems();
updateCartCount();


const cartExitIcon = document.getElementById("cart_exit");
cartExitIcon.addEventListener("click", () => {
  cartMenu.classList.remove("active");
});


const cartTxt = document.querySelector(".cart_txt");
cartTxt.addEventListener("click", () => {
  cartMenu.classList.toggle("active");
});




