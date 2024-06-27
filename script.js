window.addEventListener("load", () => {
    mobileView();
});

function mobileView() {
    if (window.matchMedia('screen and (max-width: 450px)').matches) {
        // console.log(document.getElementById("dropdown").classList)
        // document.getElementById("dropdown").classList.toggle("no_show");
        // document.getElementsByClassName("nav_links")[0].classList.toggle("no_show");

        var body = document.body;
        body.style.padding = "0 0 0 0";

        var intro = document.getElementsByClassName("intro")[0];
        intro.style.paddingTop = "8vh";

        // maha text
        var maha = document.getElementById("maha");
        maha.innerHTML = "Maha <span style='color:#758EB7'>&</span>";
        maha.style.fontSize = "15vw";
        maha.style.padding = "0";

        // hide original inline date
        var date = document.getElementById("date");
        date.classList.toggle("no_show");

        // modify maha_date container
        var maha_date = document.getElementsByClassName("maha_date")[0];
        maha_date.style.margin = "0vw 15vw";
        maha_date.style.justifyContent = "center";

        // hide original inline '&' symbol
        var amp = document.getElementById("amp");
        amp.classList.toggle("no_show");

        // marwan text
        var marwan = document.getElementById("marwan");
        marwan.style.fontSize = "14vw";

        // modify marwan container and add new block date
        var marwan_container = document.getElementsByClassName("marwan")[0];
        marwan_container.style.justifyContent = "center";
        marwan_container.style.flexDirection = "column";

        // new date
        var date_new = document.createElement("p");
        date_new.innerText = "12.29.2024";
        date_new.style.margin = "1vh 0vw";
        date_new.style.marginBottom = "3vh";
        date_new.setAttribute('id', "date");
        marwan_container.appendChild(date_new);

        // hadeeth section
        var hadeeth = document.getElementsByClassName("hadeeth")[0];
        hadeeth.style.padding = "3vh 8vw";

        hadeeth = hadeeth.children[0];

        var narrator_arb = hadeeth.children[0];
        var text_arb = hadeeth.children[1];
        var narrator_eng = hadeeth.children[2];
        var text_eng = hadeeth.children[3];

        narrator_arb.style.fontSize = "4.35vw";
        text_arb.style.fontSize = "5.75vw"
        text_arb.children[0].style.fontSize = "3.9vw";
        narrator_eng.style.fontSize = "4.3vw";
        text_eng.style.fontSize = "5.75vw";
        text_eng.children[0].style.fontSize = "3.9vw";
        

        // about.style.padding = "3vh 8vw"
        // for (let i = 0; i < about.children.length; i++) {
        //     const container = about.children[i];
        //     container.style.flexDirection = "column";
        //     container.style.justifyContent = "flex-start";

        //     // modify h1
        //     container.children[0].style.fontSize = "7.5vw";
        //     container.children[0].style.width = "100%";
        //     container.children[0].style.marginBottom = "0%";

        //     // modify p
        //     container.children[1].style.fontSize = "3.5vw";
        //     container.children[1].style.width = "100%";
        //     container.children[1].style.marginBottom = "4vh";
        // }

        // venue section
        var venue = document.getElementsByClassName("venue")[0];
        venue.style.flexDirection = "column";
        venue.style.padding = "3vh 8vw";

        // venue address and date
        var venue_info = venue.children[0];
        venue_info.style.width = "100%";
        venue_info.style.marginBottom = "2vh";
        venue_info.children[0].style.fontSize = "6.5vw";
        venue_info.children[0].innerText = "Premier Event Halls";
        venue_info.children[1].style.fontSize = "4.5vw";
        venue_info.children[2].style.fontSize = "4.5vw";
        venue_info.children[2].innerHTML = "<span style='font-weight:600;'>Date:</span> 12.29.2024 | 5 pm - 10 pm";

        // reception details
        var reception_details = venue.children[1];
        reception_details.style.width = "100%";
        reception_details.children[0].style.fontSize = "6vw";

        reception_list = reception_details.children[1].children;
        for (let j = 0; j < reception_list.length; j++) {
            const li = reception_list[j];
            li.style.fontSize = "4vw";
        }

        // rsvp section
        var rsvp = document.getElementsByClassName("rsvp")[0];
        rsvp.style.padding = "3vh 8vw";

        rsvp.children[0].style.fontSize = "6.5vw";
        var rsvp_button = rsvp.children[1].children[0];
        rsvp_button.style.fontSize = "4.5vw";
        rsvp_button.style.padding = "2.5vh 15vw";
        
        // footer
        document.getElementsByClassName("footer")[0].style.fontSize = "2vw";

    } else {
        if (!document.getElementById("dropdown").classList.value.includes("no_show")) {
            document.getElementById("dropdown").classList.toggle("no_show");
        }
    }
}