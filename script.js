// ================================
// Counter Animation
// ================================

const counters = document.querySelectorAll("[data-target]");

const startCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const speed = target / 150;

    const update = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target.toLocaleString();

        }

    };

    update();
};

//===============================
// Intersection Observer
//===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            if (entry.target.dataset.target) {

                startCounter(entry.target);

            }

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .4

});

document.querySelectorAll(".card,.stat,h2").forEach(el => {

    observer.observe(el);

});

//===============================
// Scroll Navbar
//===============================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="#fff";

header.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

}else{

header.style.boxShadow="none";

}

});

//===============================
// Back To Top Button
//===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>300?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

//===============================
// Shipment Tracking Demo
//===============================

const input=document.querySelector(".track input");

const button=document.querySelector(".track button");

button.onclick=()=>{

if(input.value===""){

alert("من فضلك أدخل رقم الشحنة");

return;

}

alert("الشحنة رقم "+input.value+" فى الطريق وسيتم تسليمها اليوم.");

};