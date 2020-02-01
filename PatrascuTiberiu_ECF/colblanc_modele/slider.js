$(document).ready(function () {
    $.getJSON("listing.json", function (data) {

        //creation la div carousel slide
        var carouselDiv = $("<div/>", {
            id: "taillemaxi",
            class: "carousel slide"
        });
        //ajouter des atributes sur div
        carouselDiv.attr("data-ride", "carousel");

        $("#header").prepend(carouselDiv);

        //creation les div carousel-inner
        let carouselInner = $("<div/>", {
            class: "carousel-inner"
        });

        //creation les traits ol li 
        let ol = $("<ol/>", {
            class: "carousel-indicators"
        });
        carouselDiv.prepend(ol);

        for (const indice in data) {
            let obj = data[indice];

            //creation les div carousel-item
            let carouselItem;
            if (indice == 0) {
                carouselItem = $("<div/>", {
                    class: "carousel-item active"
                });
            } else {
                carouselItem = $("<div/>", {
                    class: "carousel-item"
                });
            }

            let images = $("<img/>", {
                src: "img/fond" + obj.id + ".jpg",
                class: "d-block img-fluid",
                alt: obj.alt
            });

            //creation les div carousel-caption
            let divCaption = $("<div/>", {
                class: "carousel-caption leCaption"
            });

            //creation des h5
            let h5 = $("<h5/>", {
                class: "monh5",
                text: obj.titre
            })
            divCaption.append(h5);

            //creation les paragraphes
            let paragraph = $("<p/>", {
                class:"monParaSlider",
                text: obj.accroche
            });
            //creation le buttons
            let button = $("<button/>", {
                class: "btn btn-danger",
                text: "En savoir plus"
            });

            let flashGauche = $("<a/>", {
                class: "carousel-control-prev"
            });
            $(".carousel-control-prev").attr({
                "role": "button",
                "data-slide": "prev",
                "href": "#taillemaxi"
            });


            let flashDroite = $("<a/>", {
                class: "carousel-control-next"
            });
            $(".carousel-control-next").attr({
                "role": "button",
                "data-slide": "next",
                "href": "#taillemaxi"
            });


            let spanGauche = $("<span/>", {
                class: "carousel-control-prev-icon"
            });
            $(".carousel-control-prev-icon").attr("aria-hidden", "true");

            let spanDroite = $("<span/>", {
                class: "carousel-control-next-icon"
            });
            $(".carousel-control-next-icon").attr("aria-hidden", "true");

            let li;
            if (indice == 0) {
                li = $("<li/>", {
                    class: "active"
                });
                li.attr("data-target", "#taillemaxi");
                li.attr("data-slide-to", indice);
            } else {
                li = $("<li/>", {
                    class: ""
                });
                li.attr("data-target", "#taillemaxi");
                li.attr("data-slide-to", indice);
            }

            ol.append(li);
            flashGauche.prepend(spanGauche);
            flashDroite.prepend(spanDroite);
            $(".carousel").prepend(flashGauche);
            $(".carousel").prepend(flashDroite);
            carouselItem.append(images);
            divCaption.append(paragraph);
            divCaption.append(button);
            carouselItem.append(divCaption);
            carouselInner.append(carouselItem);
        }
        $("#taillemaxi").prepend(carouselInner);

    });
});