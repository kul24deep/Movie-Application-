function slider() {
    let images = ['https://free4kwallpapers.com/uploads/originals/2015/11/19/cocktail-bollywood-movie-wallpaper.jpg',
        'https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/85479765.jpg',
        'https://wallpapercave.com/wp/Fi36DJR.jpg',
        'https://wallpapercave.com/wp/wp4926059.jpg',
        'https://wallpaperaccess.com/full/8212585.jpg',
    ]

    Slider.innerHTML = null;

    let i = 0;
    let img = document.createElement('img')
    img.src = images[0];

    Slider.append(img);

    id = setInterval(function () {

        if (i === 5) {
            i = 0;
        }
        img.src = images[i];

        Slider.append(img);
        i++
    }, 2800)
}

slider()


const movies = [
    {
        name: "Criminal Justice",
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3065/1323065-v-58c6d2de61e1",
        rating: 8.61,
    },
    {
        name: "Cuttputli",
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6531/1326531-v-e6302c49fcd9",
        rating: 5.9,
    },
    {
        name: "Thor : Love and Thunder(Hindi)",
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8317/1328317-v-56412010beba",
        rating: 6.6,
    },
    {
        name: "Sketch",
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9264/1319264-v-0bd71e83df13",
        rating: 5.6,
    },
    {
        name: "Games of Thrones",
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/100/1320100-v-2498e2b9dd35",
        rating: 9.2,
    },
    {
        name: "Bhaggi",
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v",
        rating: 2.1,
    },
    {
        name: "M.S Dhoni - The untold story",
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
        rating: 7.9,
    },
    {
        name: "Bhool Bhulaiya",
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8105/1118105-v-cf275eb3c3f2",
        rating: 7.4,
    },
    {
        name: "Gaddalakonda Ganesh",
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1301/581301-v",
        rating: 6.0,
    },
    {
        name: "Venom",
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2347/1282347-v-57b71e72275e",
        rating: 6.6,
    },
    {
        name: "Growing up",
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7731/1327731-v-dd8222080752",
        rating: 5.6,
    },
    {
        name: "Frozen II",
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5199/875199-v",
        rating: 6.8,
    },
    {
        name: "Criminal Justice",
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9639/1299639-v-6b6ec2d116a0",
        rating: 7.4,
    },

];


localStorage.setItem("movies", JSON.stringify(movies));


let data = JSON.parse(localStorage.getItem("movies"));


function appendMovies(data) {
    let data_div = document.getElementById("basic") || document.getElementById("movies");

    data_div.innerHTML = null;

    data_div.id = "movies";
    data_div.style.display = "grid";
    data_div.style.gridTemplateColumns = "repeat(3, 1fr)";
    data_div.style.gap = "20px";

    data.forEach(function (el) {

        let div = document.createElement("div");
        div.style.border = "white 1px solid ";
        div.style.padding = "20px";

        let name = document.createElement("h3");
        name.innerHTML = `Name : ${el.name}`;
        name.style.color = "white";

        let rating = document.createElement("p");
        rating.innerHTML = `Rating : ${el.rating}`;
        rating.style.color = "white";

        let img = document.createElement("img");
        img.id = "poster";
        img.src = el.img;

        div.append(img, name, rating);

        data_div.append(div);

    })
}


let mypromise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let data = movies;
        if (data != null) {
            resolve(data);
        }
        else {
            reject("Issue from server");
        }
    }, 2800)
})

//  mypromise.then( function () {          called chaining!

// }).catch(function (){            => catch error


// })




async function main() {
    try {
        let response = await mypromise;
        appendMovies(response)
    } catch (error) {
        console.log("error", error);
    }
}

main();


let btn_HL = document.getElementById("HL");
btn_HL.addEventListener("click", () => {
    let data = JSON.parse(localStorage.getItem("movies"));
    data = data.sort((a, b) => b.rating - a.rating);
    appendMovies(data);
});

let btn_LH = document.getElementById("LH");
btn_LH.addEventListener("click", () => {
    let data = JSON.parse(localStorage.getItem("movies"));
    data = data.sort((a, b) => a.rating - b.rating);
    appendMovies(data);
});




let API_KEY = `f11b76e6`;

//http://www.omdbapi.com/?apikey=f11b76e6&s=${movie_name}

async function searchMovies(){

    let movie_name = document.getElementById("movie_name").value;
    
    try {

        let res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie_name}&page=2`);
        
        let data = await res.json();

        let actual_data = data.Search;
        
        //console.log(data);

        append_Movies(actual_data);

    } catch (error) {
        console.log("error", error);
    }
}



function append_Movies(data) {
    let data_div = document.getElementById("basic") || document.getElementById("movies");

    data_div.innerHTML = null;

    data_div.id = "movies";
    data_div.style.display = "grid";
    data_div.style.gridTemplateColumns = "repeat(3, 1fr)";
    data_div.style.gap = "20px";

    data.forEach(function (el) {

        let div = document.createElement("div");
        div.style.border = "white 1px solid ";
        div.style.padding = "20px";

        let name = document.createElement("h3");
        name.innerHTML = `Name : ${el.Title}`;
        name.style.color = "white";

        let year = document.createElement("h4");
        year.innerHTML = `Year : ${el.Year}`;
        year.style.color = "white";

        let img = document.createElement("img");
        img.id = "poster";
        img.src = el.Poster;
        img.style.width = "100%";

        div.append(img, name, year);

        data_div.append(div);

    })
}



// oninput="debaounce(searchMovies, 1000)"


// let id;

// function debounce(func, delay){

//     if(id){
//         clearTimeout(id);
//     }

//     let id = setTimeout(function (){
//         func();
//     }, delay);
// }


let on_input = document.getElementById("movie_name");

on_input.addEventListener("input", (func, delay) => {
    if(id){
        clearTimeout(id);
    }
        
    let id = setTimeout(function (){
        func();
    }, delay);
})




