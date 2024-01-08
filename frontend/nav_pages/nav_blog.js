
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

const blog_top_inp = document.getElementById("blog_top_inp")
const opened_search = document.getElementById("opened_search")
const blog_search = document.getElementById("blog_search")
const blogclose = document.getElementById("close")

blog_top_inp.style.display = "none"
opened_search.style.display = "none"
blogclose.style.display = "none"

blog_search.onclick = () => {
    const blog_top_inp = document.getElementById("blog_top_inp")
    const opened_search = document.getElementById("opened_search")
    blog_top_inp.style.display = "block"
    opened_search.style.display = "block"
    blogclose.style.display = "block"
    blog_search.style.display = "none"
}

blogclose.onclick = () => {
    blog_top_inp.style.display = "none"
    opened_search.style.display = "none"
    blog_search.style.display = "block"
    blogclose.style.display = "none"
}

const arr4 = [
    {
        id: 1,
        url: 'https://static.wixstatic.com/media/baac51_a2d635c97af849bab9c3fcdd91e7ad6f~mv2_d_5400_3132_s_4_2.jpg/v1/fill/w_940,h_411,fp_0.50_0.50,q_90,enc_auto/baac51_a2d635c97af849bab9c3fcdd91e7ad6f~mv2_d_5400_3132_s_4_2.jpg',
        userURL: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        role: 'Admin',
        roleIcoUrl: 'https://cdn-icons-png.flaticon.com/512/6941/6941697.png',
        date_time: 'May 16 | 1 min',
        text1: 'Best street art locations in town',
        text2: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
        views: 0,
        comment: 0,
        likes: 0,
        likesIco: 'https://cdn-useast1.kapwing.com/video_image-iTrDvBZtG.jpeg?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1693417785&Signature=Ex4VC56VeGsbiJt5Sr25bRM4FOoGlRL6urw9lNiN%2FRLXmC1Cqx%2B%2FbC7OqzLJhs2IYZpkp9xXCpZM5I07aMCkdwOD37L6Rla1iOPRzp9fA5vUL5Q5kJAu2qK2OfRWjUSKyjAJf5sXTWMByAFVZS262XqcaaA2QHNWMYhxfc6%2FAVqx2KpQlBETKSLzp43RlbUpdjBVFtIBTt8eS9%2FKceFldLihT7kisegd%2F0LS5ZzHLbnM8fzjNZk2iP6sD6G%2FQnYp4nQjQ4Aj7tVY9Ssh3uStYrd%2B3BcnDxNDS75cwRlZY0iAYtVU1KGSeLguVeImQ1qwfh%2Fq352hUuC%2FnpnYaZaBkg%3D%3D',
        LikedIco: 'nav_pages/video_image-uL_0zU8Te (1).jpeg',
    },
    {
        id: 2,
        url: 'https://static.wixstatic.com/media/baac51_085dfb0b63ca4dfbb0b2e7436d5e84d7~mv2_d_3648_2162_s_2.jpg/v1/fill/w_940,h_411,fp_0.50_0.50,q_90,enc_auto/baac51_085dfb0b63ca4dfbb0b2e7436d5e84d7~mv2_d_3648_2162_s_2.jpg',
        userURL: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        role: 'User',
        roleIcoUrl: 'https://cdn-icons-png.flaticon.com/512/6941/6941697.png',
        date_time: 'May 16 | 1 min',
        text1: '5 hot trends in street fashion',
        text2: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
        views: 0,
        comment: 0,
        likes: 0,
        likesIco: 'https://cdn-useast1.kapwing.com/video_image-iTrDvBZtG.jpeg?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1693417785&Signature=Ex4VC56VeGsbiJt5Sr25bRM4FOoGlRL6urw9lNiN%2FRLXmC1Cqx%2B%2FbC7OqzLJhs2IYZpkp9xXCpZM5I07aMCkdwOD37L6Rla1iOPRzp9fA5vUL5Q5kJAu2qK2OfRWjUSKyjAJf5sXTWMByAFVZS262XqcaaA2QHNWMYhxfc6%2FAVqx2KpQlBETKSLzp43RlbUpdjBVFtIBTt8eS9%2FKceFldLihT7kisegd%2F0LS5ZzHLbnM8fzjNZk2iP6sD6G%2FQnYp4nQjQ4Aj7tVY9Ssh3uStYrd%2B3BcnDxNDS75cwRlZY0iAYtVU1KGSeLguVeImQ1qwfh%2Fq352hUuC%2FnpnYaZaBkg%3D%3D',
        LikedIco: 'nav_pages/video_image-uL_0zU8Te (1).jpeg',
    },
    {
        id: 3,
        url: 'https://static.wixstatic.com/media/baac51_e4fcdb89d24747eca32f38f0ffa6b040~mv2_d_3053_1852_s_2.jpg/v1/fill/w_940,h_411,fp_0.50_0.50,q_90,enc_auto/baac51_e4fcdb89d24747eca32f38f0ffa6b040~mv2_d_3053_1852_s_2.jpg',
        userURL: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        role: 'Moderator',
        roleIcoUrl: 'https://cdn-icons-png.flaticon.com/512/6941/6941697.png',
        date_time: 'May 16 | 1 min',
        text1: 'Our new downtown pop-up store',
        text2: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
        views: 0,
        comment: 0,
        likes: 0,
        likesIco: 'https://cdn-useast1.kapwing.com/video_image-iTrDvBZtG.jpeg?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1693417785&Signature=Ex4VC56VeGsbiJt5Sr25bRM4FOoGlRL6urw9lNiN%2FRLXmC1Cqx%2B%2FbC7OqzLJhs2IYZpkp9xXCpZM5I07aMCkdwOD37L6Rla1iOPRzp9fA5vUL5Q5kJAu2qK2OfRWjUSKyjAJf5sXTWMByAFVZS262XqcaaA2QHNWMYhxfc6%2FAVqx2KpQlBETKSLzp43RlbUpdjBVFtIBTt8eS9%2FKceFldLihT7kisegd%2F0LS5ZzHLbnM8fzjNZk2iP6sD6G%2FQnYp4nQjQ4Aj7tVY9Ssh3uStYrd%2B3BcnDxNDS75cwRlZY0iAYtVU1KGSeLguVeImQ1qwfh%2Fq352hUuC%2FnpnYaZaBkg%3D%3D',
        LikedIco: 'nav_pages/video_image-uL_0zU8Te (1).jpeg',
    },
    {
        id: 4,
        url: 'https://static.wixstatic.com/media/baac51_fd84b7347c054ff88274c90ff7dc3269~mv2_d_5472_3017_s_4_2.jpg/v1/fill/w_940,h_411,fp_0.50_0.50,q_90,enc_auto/baac51_fd84b7347c054ff88274c90ff7dc3269~mv2_d_5472_3017_s_4_2.jpg',
        userURL: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        role: 'User',
        roleIcoUrl: 'https://cdn-icons-png.flaticon.com/512/6941/6941697.png',
        date_time: 'May 16 | 1 min',
        text1: 'Surfs up. Winter time surfing',
        text2: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
        views: 0,
        comment: 0,
        likes: 0,
        likesIco: 'https://cdn-useast1.kapwing.com/video_image-iTrDvBZtG.jpeg?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1693417785&Signature=Ex4VC56VeGsbiJt5Sr25bRM4FOoGlRL6urw9lNiN%2FRLXmC1Cqx%2B%2FbC7OqzLJhs2IYZpkp9xXCpZM5I07aMCkdwOD37L6Rla1iOPRzp9fA5vUL5Q5kJAu2qK2OfRWjUSKyjAJf5sXTWMByAFVZS262XqcaaA2QHNWMYhxfc6%2FAVqx2KpQlBETKSLzp43RlbUpdjBVFtIBTt8eS9%2FKceFldLihT7kisegd%2F0LS5ZzHLbnM8fzjNZk2iP6sD6G%2FQnYp4nQjQ4Aj7tVY9Ssh3uStYrd%2B3BcnDxNDS75cwRlZY0iAYtVU1KGSeLguVeImQ1qwfh%2Fq352hUuC%2FnpnYaZaBkg%3D%3D',
        LikedIco: ' nav_pages/video_image-uL_0zU8Te (1).jpeg',
    },
]

arr4.map((item4) => {
    const insideparent = document.createElement('div')
    insideparent.setAttribute("class", "insideparentCSS")

    const div4 = document.createElement("div")
    div4.setAttribute("id", `${item4.id}`)
    div4.setAttribute("class", "div4CSS")
    div4.style.background = `url(${item4.url})`
    div4.style.backgroundRepeat = "no-repeat"
    div4.style.backgroundSize = "cover"

    const userIco = document.createElement("div")
    userIco.setAttribute("class", "userIcoCSS")
    userIco.setAttribute("id", "userIco" + `${item4.id}`)
    userIco.style.background = `url(${item4.userURL})`
    userIco.style.backgroundSize = "cover"
    userIco.style.backgroundRepeat = "no-repeat"
    userIco.style.width = "35px"
    userIco.style.height = "35px"


    const role = document.createElement("div")
    role.setAttribute("class", "roleCSS")
    role.setAttribute("id", "role" + `${item4.id}`)
    role.innerHTML = `${item4.role}`

    const roleIco = document.createElement("div")
    roleIco.setAttribute("class", "roleIcoCSS")
    roleIco.setAttribute("id", "roleIco" + `${item4.id}`)
    roleIco.style.background = `url(${item4.roleIcoUrl})`
    roleIco.style.backgroundSize = "cover"
    role.style.backgroundRepeat = "no-repeat"

    const date_time = document.createElement("div")
    date_time.setAttribute("class", "date_timeCSS")
    date_time.setAttribute("id", "date" + `${item4.id}`)
    date_time.innerHTML = `${item4.date_time}`

    const text1 = document.createElement("div")
    text1.setAttribute("class", "text1CSS")
    text1.innerHTML = `${item4.text1}`

    const text2 = document.createElement("div")
    text2.setAttribute("class", "text2CSS")
    text2.innerHTML = `${item4.text2}`

    const views = document.createElement("div")
    views.setAttribute("class", "viewsCSS")
    views.setAttribute("id", "views" + `${item4.id}`)
    views.innerHTML = 'views' + " " + `${item4.views}`

    const coment = document.createElement("div")
    coment.setAttribute("class", "comentCSS")
    coment.setAttribute("id", "coment" + `${item4.id}`)
    coment.innerHTML = 'commnet' + ' ' + `${item4.comment}`

    const likes = document.createElement("div")
    likes.setAttribute("class", "likesCSS")
    likes.setAttribute("id", "likes" + `${item4.id}`)
    likes.innerHTML = `${item4.likes}`

    const likeIcon = document.createElement("i")
    likeIcon.setAttribute("class", "fa-regular fa-heart")
    likeIcon.setAttribute("id", "likeIcon" + `${item4.id}`)
    likeIcon.style.backgroundSize = "cover"

    const line = document.createElement("div")
    line.setAttribute("class", "lineCSS")

    insideparent.appendChild(div4)
    insideparent.appendChild(userIco)
    insideparent.appendChild(role)
    insideparent.appendChild(roleIco)
    insideparent.appendChild(date_time)
    insideparent.appendChild(text1)
    insideparent.appendChild(text2)
    insideparent.appendChild(line)
    insideparent.appendChild(views)
    insideparent.appendChild(coment)
    insideparent.appendChild(likes)
    insideparent.appendChild(likeIcon)

    const blogCont = document.getElementById("blogcont")
    blogCont.appendChild(insideparent)
})

arr4.map((item5) => {
    const likeIcon1 = document.getElementById("likeIcon1")
    likeIcon1.onclick = () => {
        if (likeIcon1.className === "fa-regular fa-heart") {
            likeIcon1.setAttribute("class", "fa-solid fa-heart")
            const likes1 = document.getElementById("likes1")
            likes1.innerHTML = `${item5.likes + 1}`
        } else {
            likeIcon1.setAttribute("class", "fa-regular fa-heart")
            likeIcon1.style.cursor = "pointer"
            const likes1 = document.getElementById("likes1")
            likes1.innerHTML = `${item5.likes}`
        }
    }
    const likeIcon2 = document.getElementById("likeIcon2")
    likeIcon2.onclick = () => {
        if (likeIcon2.className === "fa-regular fa-heart") {
            likeIcon2.setAttribute("class", "fa-solid fa-heart")
            const likes2 = document.getElementById("likes2")
            likes2.innerHTML = `${item5.likes + 1}`
        } else {
            likeIcon2.setAttribute("class", "fa-regular fa-heart")
            likeIcon2.style.cursor = "pointer"
            const likes2 = document.getElementById("likes2")
            likes2.innerHTML = `${item5.likes}`
        }
    }
    const likeIcon3 = document.getElementById("likeIcon3")
    likeIcon3.onclick = () => {
        if (likeIcon3.className === "fa-regular fa-heart") {
            likeIcon3.setAttribute("class", "fa-solid fa-heart")
            const likes3 = document.getElementById("likes3")
            likes3.innerHTML = `${item5.likes + 1}`
        } else {
            likeIcon3.setAttribute("class", "fa-regular fa-heart")
            likeIcon3.style.cursor = "pointer"
            const likes3 = document.getElementById("likes3")
            likes3.innerHTML = `${item5.likes}`
        }
    }
    const likeIcon4 = document.getElementById("likeIcon4")
    likeIcon4.onclick = () => {
        if (likeIcon4.className === "fa-regular fa-heart") {
            likeIcon4.setAttribute("class", "fa-solid fa-heart")
            const likes4 = document.getElementById("likes4")
            likes4.innerHTML = `${item5.likes + 1}`
        } else {
            likeIcon4.setAttribute("class", "fa-regular fa-heart")
            likeIcon4.style.cursor = "pointer"
            const likes4 = document.getElementById("likes4")
            likes4.innerHTML = `${item5.likes}`
        }
    }
})


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








