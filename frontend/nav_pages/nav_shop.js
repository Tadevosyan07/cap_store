
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
   window.open('https://www.instagram.com/wix/');
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


const arr3 = [
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
   {
      id: 9,
      url: 'https://static.wixstatic.com/media/baac51_1e0b1577bf074f1ca801a440c5dbb9e9~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_1e0b1577bf074f1ca801a440c5dbb9e9~mv2_d_2000_1500_s_2.jpg',
      hoverURL: 'https://static.wixstatic.com/media/baac51_60fe1e255b2846208324524920fa88f0~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_60fe1e255b2846208324524920fa88f0~mv2_d_2000_1500_s_2.jpg',
      title: "black cap",
      price: 20.00
   },
   {
      id: 10,
      url: 'https://static.wixstatic.com/media/baac51_7231ebfbc6eb4478a259d6eb77a3bf73~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_7231ebfbc6eb4478a259d6eb77a3bf73~mv2_d_2000_1500_s_2.jpg',
      hoverURL: 'https://static.wixstatic.com/media/baac51_d6984efc6dff447f84c3aeae650e3897~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_d6984efc6dff447f84c3aeae650e3897~mv2_d_2000_1500_s_2.jpg',
      title: "Solid Cap",
      price: 20.00
   },
   {
      id: 11,
      url: 'https://static.wixstatic.com/media/baac51_08e76b8a19994503a8e61f155da81e4a~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_08e76b8a19994503a8e61f155da81e4a~mv2_d_2000_1500_s_2.jpg',
      hoverURL: 'https://static.wixstatic.com/media/baac51_d6984efc6dff447f84c3aeae650e3897~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_d6984efc6dff447f84c3aeae650e3897~mv2_d_2000_1500_s_2.jpg',
      title: "Solid Cap",
      price: 20.00
   },
   {
      id: 12,
      url: 'https://static.wixstatic.com/media/baac51_b6dc6f5ed6a94bf4a09dc5caf66a8849~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_b6dc6f5ed6a94bf4a09dc5caf66a8849~mv2_d_2000_1500_s_2.jpg',
      hoverURL: 'https://static.wixstatic.com/media/baac51_2a51e0ebd2c948b6a82677662d54db79~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_2a51e0ebd2c948b6a82677662d54db79~mv2_d_2000_1500_s_2.jpg',
      title: "Solid Cap",
      price: 20.00
   },
   {
      id: 13,
      url: 'https://static.wixstatic.com/media/baac51_b6ab978a02aa4118b560e33d9a612834~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_b6ab978a02aa4118b560e33d9a612834~mv2_d_2000_1500_s_2.jpg',
      hoverURL: 'https://static.wixstatic.com/media/baac51_ad98f3833ce34ae692269598c5e89e62~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_ad98f3833ce34ae692269598c5e89e62~mv2_d_2000_1500_s_2.jpg',
      title: "Solid Cap",
      price: 20.00
   },
   {
      id: 14,
      url: 'https://static.wixstatic.com/media/baac51_cc15a32b3f864d90a28c2147ea6ce220~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_cc15a32b3f864d90a28c2147ea6ce220~mv2_d_2000_1500_s_2.jpg',
      hoverURL: 'https://static.wixstatic.com/media/baac51_61d694c9a6914fee885e62fdb85c2fa8~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_61d694c9a6914fee885e62fdb85c2fa8~mv2_d_2000_1500_s_2.jpg',
      title: "Solid Cap",
      price: 20.00
   },
   {
      id: 15,
      url: 'https://static.wixstatic.com/media/baac51_2464879cce9f4f5a93cbd2739c22ffd3~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_2464879cce9f4f5a93cbd2739c22ffd3~mv2_d_2000_1500_s_2.jpg',
      hoverURL: 'https://static.wixstatic.com/media/baac51_3a6dae0b4c0a452b971843aacaf9177e~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_3a6dae0b4c0a452b971843aacaf9177e~mv2_d_2000_1500_s_2.jpg',
      title: "Solid Cap",
      price: 20.00
   },
   {
      id: 16,
      url: 'https://static.wixstatic.com/media/baac51_1d2733d042b54d3f8d4c146e2ac38b03~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_1d2733d042b54d3f8d4c146e2ac38b03~mv2_d_2000_1500_s_2.jpg',
      hoverURL: 'https://static.wixstatic.com/media/baac51_3af3d29549604ce5a86ca2b9e6e7c561~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_3af3d29549604ce5a86ca2b9e6e7c561~mv2_d_2000_1500_s_2.jpg',
      title: "Solid Cap",
      price: 20.00
   },
]

arr3.map((item3) => {
   const div3 = document.createElement("div")
   div3.setAttribute("class", "cap_cont")

   const img3 = document.createElement("div")
   img3.setAttribute("id", `img${item3.id}`)
   img3.style.background = `url(${item3.url})`
   img3.style.backgroundSize = "cover"
   img3.style.marginTop = "15vh"
   img3.style.transition = "100ms"
   img3.onmouseover = () => {
      img3.style.background = `url(${item3.hoverURL})`
      img3.style.backgroundSize = "cover"
   }
   img3.onmouseout = () => {
      img3.style.backgroundImage = `url(${item3.url})`
      img3.style.backgroundSize = "cover"
   }

   const title3 = document.createElement("div")
   title3.setAttribute("class", "product_txt")
   title3.innerHTML = `${item3.title}`

   const price3 = document.createElement("div")
   price3.setAttribute("class", "price")
   price3.innerHTML = `${item3.price}`

   const buy3 = document.createElement("button")
   buy3.setAttribute("id", `buy${item3.id}`)
   buy3.setAttribute("class", "buy")
   buy3.innerHTML = "Add to Cart"

   div3.appendChild(img3)
   div3.appendChild(title3)
   div3.appendChild(price3)
   div3.appendChild(buy3)

   const container = document.getElementById("limited_caps_cont")
   container.appendChild(div3)
})

const img1 = document.getElementById("img1")
img1.onclick = () => {
   window.location.href = '../shop_caps/shop_caps1.html'
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
   {
      id: 9,
      url: 'https://static.wixstatic.com/media/baac51_1e0b1577bf074f1ca801a440c5dbb9e9~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_1e0b1577bf074f1ca801a440c5dbb9e9~mv2_d_2000_1500_s_2.jpg',
      hoverURL: 'https://static.wixstatic.com/media/baac51_60fe1e255b2846208324524920fa88f0~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_60fe1e255b2846208324524920fa88f0~mv2_d_2000_1500_s_2.jpg',
      title: "black cap",
      price: 20.00
   },
   {
      id: 10,
      url: 'https://static.wixstatic.com/media/baac51_7231ebfbc6eb4478a259d6eb77a3bf73~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_7231ebfbc6eb4478a259d6eb77a3bf73~mv2_d_2000_1500_s_2.jpg',
      hoverURL: 'https://static.wixstatic.com/media/baac51_d6984efc6dff447f84c3aeae650e3897~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_d6984efc6dff447f84c3aeae650e3897~mv2_d_2000_1500_s_2.jpg',
      title: "Solid Cap",
      price: 20.00
   },
   {
      id: 11,
      url: 'https://static.wixstatic.com/media/baac51_08e76b8a19994503a8e61f155da81e4a~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_08e76b8a19994503a8e61f155da81e4a~mv2_d_2000_1500_s_2.jpg',
      hoverURL: 'https://static.wixstatic.com/media/baac51_d6984efc6dff447f84c3aeae650e3897~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_d6984efc6dff447f84c3aeae650e3897~mv2_d_2000_1500_s_2.jpg',
      title: "Solid Cap",
      price: 20.00
   },
   {
      id: 12,
      url: 'https://static.wixstatic.com/media/baac51_b6dc6f5ed6a94bf4a09dc5caf66a8849~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_b6dc6f5ed6a94bf4a09dc5caf66a8849~mv2_d_2000_1500_s_2.jpg',
      hoverURL: 'https://static.wixstatic.com/media/baac51_2a51e0ebd2c948b6a82677662d54db79~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_2a51e0ebd2c948b6a82677662d54db79~mv2_d_2000_1500_s_2.jpg',
      title: "Solid Cap",
      price: 20.00
   },
   {
      id: 13,
      url: 'https://static.wixstatic.com/media/baac51_b6ab978a02aa4118b560e33d9a612834~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_b6ab978a02aa4118b560e33d9a612834~mv2_d_2000_1500_s_2.jpg',
      hoverURL: 'https://static.wixstatic.com/media/baac51_ad98f3833ce34ae692269598c5e89e62~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_ad98f3833ce34ae692269598c5e89e62~mv2_d_2000_1500_s_2.jpg',
      title: "Solid Cap",
      price: 20.00
   },
   {
      id: 14,
      url: 'https://static.wixstatic.com/media/baac51_cc15a32b3f864d90a28c2147ea6ce220~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_cc15a32b3f864d90a28c2147ea6ce220~mv2_d_2000_1500_s_2.jpg',
      hoverURL: 'https://static.wixstatic.com/media/baac51_61d694c9a6914fee885e62fdb85c2fa8~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_61d694c9a6914fee885e62fdb85c2fa8~mv2_d_2000_1500_s_2.jpg',
      title: "Solid Cap",
      price: 20.00
   },
   {
      id: 15,
      url: 'https://static.wixstatic.com/media/baac51_2464879cce9f4f5a93cbd2739c22ffd3~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_2464879cce9f4f5a93cbd2739c22ffd3~mv2_d_2000_1500_s_2.jpg',
      hoverURL: 'https://static.wixstatic.com/media/baac51_3a6dae0b4c0a452b971843aacaf9177e~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_3a6dae0b4c0a452b971843aacaf9177e~mv2_d_2000_1500_s_2.jpg',
      title: "Solid Cap",
      price: 20.00
   },
   {
      id: 16,
      url: 'https://static.wixstatic.com/media/baac51_1d2733d042b54d3f8d4c146e2ac38b03~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_1d2733d042b54d3f8d4c146e2ac38b03~mv2_d_2000_1500_s_2.jpg',
      hoverURL: 'https://static.wixstatic.com/media/baac51_3af3d29549604ce5a86ca2b9e6e7c561~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_3af3d29549604ce5a86ca2b9e6e7c561~mv2_d_2000_1500_s_2.jpg',
      title: "Solid Cap",
      price: 20.00
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

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      renderCartItems();
      updateCartCount();
   });
});

// Load saved cart items from localStorage
const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
cartItems.push(...savedCartItems);

// Initial rendering of cart items and count
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
